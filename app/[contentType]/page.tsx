import {
  ContentType,
  getSortedMarkdownContent,
} from '../../lib/parse-markdown-files'

import PostPreview from '@/components/PostPreview'
import { getListingMetadata } from '@/lib/site-metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const VALID_CONTENT_TYPES = new Set<string>([
  ContentType.Events,
  ContentType.Posts,
])

type PageProps = {
  params: Promise<{
    contentType: ContentType
  }>
}

const LISTING_COPY: Record<string, { eyebrow: string; title: string; lede: string }> = {
  events: {
    eyebrow: 'Gatherings',
    title: 'Events',
    lede: 'Socratic seminars and workshops, in person in Atlanta. Topics are posted ahead of each meetup so you can read up before the discussion.',
  },
  posts: {
    eyebrow: 'Writing',
    title: 'Blog',
    lede: 'Notes, recaps, and announcements from the Atlanta BitDevs community.',
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { contentType } = await params

  return getListingMetadata(contentType)
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const { contentType } = resolvedParams

  if (!VALID_CONTENT_TYPES.has(String(contentType))) {
    notFound()
  }

  const allContentData = getSortedMarkdownContent(contentType)
  const copy =
    LISTING_COPY[contentType] ?? {
      eyebrow: '',
      title: String(contentType).charAt(0).toUpperCase() + String(contentType).slice(1),
      lede: '',
    }

  return (
    <main className="container mx-auto max-w-5xl px-4">
      <header className="flex flex-col gap-3 border-b border-line py-12 md:py-16">
        {copy.eyebrow ? (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {copy.eyebrow}
          </span>
        ) : null}
        <h1>{copy.title}</h1>
        {copy.lede ? (
          <p className="max-w-[60ch] text-lg text-muted">{copy.lede}</p>
        ) : null}
      </header>

      <div className="flex flex-col gap-10 py-12 md:py-16">
        {allContentData.length > 0 ? (
          allContentData.map(({ id, date, title, preview, heroImage, author }, i) => (
            <PostPreview
              id={id}
              title={title}
              date={date}
              type={String(contentType)}
              previewText={preview}
              heroImage={heroImage}
              author={author}
              key={i}
            />
          ))
        ) : (
          <p className="text-muted">Nothing here yet. Check back soon.</p>
        )}
      </div>
    </main>
  )
}
