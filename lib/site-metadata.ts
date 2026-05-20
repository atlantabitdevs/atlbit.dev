import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import type { Metadata } from 'next'

import { meetup } from '@/meetup'

const siteUrl = 'https://atlbit.dev'
const siteName =
  meetup.city.position === 'right'
    ? `BitDevs ${meetup.city.name}`
    : `${meetup.city.name} BitDevs`

export const defaultMetadataImage = '/new-bitdevs-default.jpg'

const fallbackDescriptions = {
  events:
    'Explore upcoming and past Atlanta BitDevs events, Socratic Seminars, and workshops for the local Bitcoin community.',
  posts:
    'Read Atlanta BitDevs posts covering Bitcoin, Lightning, and related protocol research.',
  page: meetup.description,
}

function normalizeImagePath(image?: string | null) {
  if (!image) {
    return defaultMetadataImage
  }

  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image
  }

  return image.startsWith('/') ? image : `/${image}`
}

function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString()
}

function stripMarkdown(content: string) {
  return content
    .replace(/^---[\s\S]*?---\s*/m, '')
    .replace(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(text: string, maxLength = 160) {
  if (text.length <= maxLength) {
    return text
  }

  return `${text.slice(0, maxLength).trimEnd()}…`
}

export function getContentSnippet(content: string, fallback: string) {
  const text = stripMarkdown(content)
  return text ? truncate(text) : fallback
}

export function getMetadataImageFromFile(sourceFilePath?: string) {
  if (!sourceFilePath) {
    return defaultMetadataImage
  }

  const fullPath = path.join(process.cwd(), 'content', sourceFilePath)

  if (!fs.existsSync(fullPath)) {
    return defaultMetadataImage
  }

  const { content, data } = matter(fs.readFileSync(fullPath, 'utf8'))
  const candidate = data.heroImage || data.thumbnail || data.image

  if (typeof candidate === 'string' && candidate.length > 0) {
    return normalizeImagePath(candidate)
  }

  const markdownImageMatch = content.match(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/)
  return normalizeImagePath(markdownImageMatch?.[1])
}

export function getContentSnippetFromFile(sourceFilePath?: string, fallback?: string) {
  if (!sourceFilePath) {
    return fallback || meetup.description
  }

  const fullPath = path.join(process.cwd(), 'content', sourceFilePath)

  if (!fs.existsSync(fullPath)) {
    return fallback || meetup.description
  }

  const { content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return getContentSnippet(content, fallback || meetup.description)
}

type BuildPageMetadataArgs = {
  title: string
  description?: string
  pathname: string
  image?: string | null
  type?: 'website' | 'article'
}

export function buildPageMetadata({
  title,
  description = meetup.description,
  pathname,
  image,
  type = 'website',
}: BuildPageMetadataArgs): Metadata {
  const resolvedImage = normalizeImagePath(image)

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type,
      url: absoluteUrl(pathname),
      siteName,
      title,
      description,
      images: [
        {
          url: resolvedImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [resolvedImage],
    },
  }
}

export function getSiteName() {
  return siteName
}

export function getSiteUrl() {
  return siteUrl
}

export function getListingMetadata(contentType: string) {
  const isEvents = contentType === 'events'
  const title = isEvents ? `Events | ${siteName}` : `Posts | ${siteName}`
  const description = isEvents
    ? fallbackDescriptions.events
    : fallbackDescriptions.posts

  return buildPageMetadata({
    title,
    description,
    pathname: `/${contentType}`,
    image: defaultMetadataImage,
  })
}

export function getStaticPageFallbackDescription() {
  return fallbackDescriptions.page
}
