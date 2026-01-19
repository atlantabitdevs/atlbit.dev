#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http from 'node:http';
import { URL } from 'node:url';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Regex to match image references in markdown
// Matches: ![](url), ![alt](url), <img src="url" />
const IMAGE_REGEX = /(!\[([^\]]*)\]\(([^)]+)\)|<img[^>]+src=["']([^"']+)["'][^>]*>)/gi;

interface ImageMatch {
  fullMatch: string;
  altText?: string;
  url: string;
  isMarkdown: boolean;
}

/**
 * Extract all image URLs from a file
 */
function extractImageUrls(content: string): ImageMatch[] {
  const matches: ImageMatch[] = [];
  let match;

  while ((match = IMAGE_REGEX.exec(content)) !== null) {
    const fullMatch = match[0];
    const url = match[3] || match[4]; // match[3] for markdown, match[4] for HTML
    
    if (url && url.includes('atlantabitdevs.org')) {
      matches.push({
        fullMatch,
        altText: match[2],
        url: url.trim(),
        isMarkdown: !!match[3],
      });
    }
  }

  return matches;
}

/**
 * Download an image from a URL
 */
function downloadImage(url: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    const file = fs.createWriteStream(outputPath);
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadImage(response.headers.location!, outputPath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(outputPath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
      reject(err);
    });
  });
}

/**
 * Generate a safe filename from a URL
 */
function generateFilename(url: string): string {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  const basename = path.basename(pathname);
  
  // If the basename is reasonable, use it
  if (basename && basename.length < 200 && /^[a-zA-Z0-9._-]+$/.test(basename)) {
    return basename;
  }
  
  // Otherwise, generate a hash-based filename
  const ext = path.extname(pathname) || '.jpg';
  const hash = Buffer.from(url).toString('base64')
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 20);
  
  return `migrated-${hash}${ext}`;
}

/**
 * Process a single file
 */
async function processFile(filePath: string): Promise<{ updated: boolean; imagesDownloaded: number }> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const imageMatches = extractImageUrls(content);
  
  if (imageMatches.length === 0) {
    return { updated: false, imagesDownloaded: 0 };
  }

  let updatedContent = content;
  let imagesDownloaded = 0;
  const processedUrls = new Map<string, string>(); // Cache URL -> filename mappings
  const replacements: Array<{ old: string; new: string }> = [];

  // First pass: download all images and prepare replacements
  for (const match of imageMatches) {
    try {
      // Check if we've already processed this URL
      let filename = processedUrls.get(match.url);
      
      if (!filename) {
        filename = generateFilename(match.url);
        processedUrls.set(match.url, filename);
        
        const outputPath = path.join(PUBLIC_DIR, filename);
        
        // Skip if file already exists
        if (fs.existsSync(outputPath)) {
          console.log(`  ✓ Already exists: ${filename}`);
        } else {
          console.log(`  ↓ Downloading: ${match.url} -> ${filename}`);
          await downloadImage(match.url, outputPath);
          imagesDownloaded++;
        }
      }
      
      // Prepare the replacement
      const newReference = match.isMarkdown
        ? `![${match.altText || ''}](/${filename})`
        : match.fullMatch.replace(match.url, `/${filename}`);
      
      replacements.push({ old: match.fullMatch, new: newReference });
      
    } catch (error) {
      console.error(`  ✗ Error downloading ${match.url}:`, error instanceof Error ? error.message : error);
    }
  }

  // Second pass: apply replacements in reverse order to preserve positions
  for (let i = replacements.length - 1; i >= 0; i--) {
    const { old, new: newRef } = replacements[i];
    updatedContent = updatedContent.replace(old, newRef);
  }

  // Write the updated content back to the file
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    return { updated: true, imagesDownloaded };
  }

  return { updated: false, imagesDownloaded };
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Image Migration Script\n');
  console.log(`Scanning: ${CONTENT_DIR}`);
  console.log(`Public dir: ${PUBLIC_DIR}\n`);

  // Ensure public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  // Find all markdown files
  const markdownFiles = findMarkdownFiles(CONTENT_DIR);
  console.log(`Found ${markdownFiles.length} markdown files\n`);

  let totalUpdated = 0;
  let totalDownloaded = 0;

  // Process each file
  for (const filePath of markdownFiles) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`Processing: ${relativePath}`);
    
    const result = await processFile(filePath);
    
    if (result.updated) {
      totalUpdated++;
      console.log(`  ✓ Updated with ${result.imagesDownloaded} new image(s)\n`);
    } else if (result.imagesDownloaded > 0) {
      console.log(`  ✓ Downloaded ${result.imagesDownloaded} image(s) (no updates needed)\n`);
    } else {
      console.log(`  - No images found\n`);
    }
    
    totalDownloaded += result.imagesDownloaded;
  }

  console.log('\n✨ Migration complete!');
  console.log(`   Files updated: ${totalUpdated}`);
  console.log(`   Images downloaded: ${totalDownloaded}`);
}

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
