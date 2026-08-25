import { allDocs } from 'contentlayer/generated'

import { getSiteUrl } from './site-metadata'

/*
 * Helpers that expose site content to AI agents and crawlers.
 *
 * These power the machine-readable surfaces (`/llms.txt`, the per-page
 * `.md` mirrors, and the sitemap). Everything reads from Contentlayer's
 * generated `allDocs`, which is bundled as plain JS — no filesystem access
 * at request time, so it works the same at build and on serverless runtimes.
 */

type Doc = (typeof allDocs)[number]

// URL path segment (as used by the Next.js routes) -> content/ folder name.
const SEGMENT_TO_FOLDER: Record<string, string> = {
  events: 'events',
  posts: 'posts',
  page: 'pages',
}

const FOLDER_TO_SEGMENT: Record<string, string> = {
  events: 'events',
  posts: 'posts',
  pages: 'page',
}

export interface AgentDoc {
  title: string
  date?: string
  webPath: string // e.g. /events/2026-05-20-bitcoin-socratic-seminar-50
  mdPath: string // e.g. /events/2026-05-20-bitcoin-socratic-seminar-50.md
  raw: string
}

function toAgentDoc(doc: Doc): AgentDoc {
  const [folder, ...rest] = doc._raw.flattenedPath.split('/')
  const segment = FOLDER_TO_SEGMENT[folder] ?? folder
  const webPath = `/${segment}/${rest.join('/')}`

  return {
    title: doc.title,
    date: doc.date,
    webPath,
    mdPath: `${webPath}.md`,
    raw: doc.body.raw,
  }
}

function byDateDesc(a: AgentDoc, b: AgentDoc) {
  if (a.date && b.date) {
    return a.date < b.date ? 1 : -1
  }
  return 0
}

/** Published docs for a single content folder, newest first. */
export function getAgentDocs(folder: 'events' | 'posts' | 'pages'): AgentDoc[] {
  return allDocs
    .filter((doc) => doc._raw.flattenedPath.startsWith(`${folder}/`))
    .filter((doc) => doc.published !== false)
    .map(toAgentDoc)
    .sort(byDateDesc)
}

/** Every published doc, used for sitemap and static param generation. */
export function getAllAgentDocs(): AgentDoc[] {
  return allDocs.filter((doc) => doc.published !== false).map(toAgentDoc)
}

/** Resolve a URL segment + slug (e.g. "events", "foo") to a doc, or null. */
export function findAgentDoc(segment: string, slug: string): AgentDoc | null {
  const folder = SEGMENT_TO_FOLDER[segment]
  if (!folder) {
    return null
  }

  const flattenedPath = `${folder}/${slug}`
  const doc = allDocs.find((d) => d._raw.flattenedPath === flattenedPath)

  return doc && doc.published !== false ? toAgentDoc(doc) : null
}

/** Render a single doc as standalone, agent-friendly markdown. */
export function renderDocMarkdown(doc: AgentDoc): string {
  const lines = [`# ${doc.title}`, '']

  if (doc.date) {
    lines.push(`*${doc.date}*`, '')
  }

  lines.push(doc.raw.trim(), '', '---', `Source: ${getSiteUrl()}${doc.webPath}`, '')

  return lines.join('\n')
}
