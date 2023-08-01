import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { marked } from 'marked'

/*
 * This function gets a list of the posts/events from the markdown files.
 *
 * Args
 * ----
 *  contentType: Enum of either ContentType.Posts or ContentType.Events with string values.
 *
 * Returns
 * ----
 *  A sorted array of objects containing the markdown contents.
 */

export enum ContentType {
  Posts = 'posts',
  Events = 'events',
}

interface MarkdownData {
  id: string
  title: string
  date: string
  author?: string
  preview: string
}

export function getSortedMarkdownContent(contentType: ContentType) {
  const contentDirectory = path.join(process.cwd(), `/content/${contentType}`)

  // Get file names under /posts
  const fileNames = fs.readdirSync(contentDirectory)

  const allMarkdownData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    const markdownData: MarkdownData = {
      id,
      title: 'Example Title',
      date: '2009-01-03 00:00:00',
      preview: matterResult.content.replace(/<[^>]*>/g, '').slice(0, 200),
      ...matterResult.data,
    }

    return markdownData
  })
  // Sort posts by date
  const returnValue = allMarkdownData
    .filter((data) => data.id !== '.gitkeep')
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })

  return returnValue
}

interface PageData {
  id: string
  title: string
}
export function getPageContentFromMarkdown() {
  const contentDirectory = path.join(process.cwd(), '/content/pages')
  // Get the file names under /pages
  const fileNames = fs.readdirSync(contentDirectory)

  const allPagesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the page metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    const pageData: PageData = {
      id,
      title: 'Example Page Title',
      ...matterResult.data,
    }

    return pageData
  })
  const returnValue = allPagesData
    .filter((data) => data.id !== '.gitkeep')
    .sort((a, b) => {
      if (a.id < b.id) {
        return 1
      } else {
        return -1
      }
    })
  return returnValue
}
