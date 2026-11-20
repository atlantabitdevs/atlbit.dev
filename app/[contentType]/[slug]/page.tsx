import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Mdx } from '@/components/MDX-components'
import StatusMessage from '@/components/StatusMessage'
import { allDocs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import {
  buildPageMetadata,
  getContentSnippetFromFile,
  getMetadataImageFromFile,
  getSiteName,
} from '@/lib/site-metadata'

interface PageProps {
  params: Promise<{
    slug: string
    contentType: string
  }>
}

type Args = {
  slug: string
  contentType: string
}

async function getDocFromParams(params: Args) {
  const post = allDocs.find((post) => post.slugAsParams === params.slug)
  return { post }
}

function getEditOnGitHubUrl(sourceFilePath?: string) {
  if (!sourceFilePath) {
    return null
  }

  return `https://github.com/atlantabitdevs/atlbit.dev/edit/master/content/${sourceFilePath}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { post } = await getDocFromParams(resolvedParams)

  if (!post) {
    return buildPageMetadata({
      title: `Not Found | ${getSiteName()}`,
      pathname: `/${resolvedParams.contentType}/${resolvedParams.slug}`,
    })
  }

  const pathname = `/${resolvedParams.contentType}/${resolvedParams.slug}`
  const description = getContentSnippetFromFile(
    post._raw.sourceFilePath,
    `${post.title} at ${getSiteName()}.`,
  )
  const image = getMetadataImageFromFile(post._raw.sourceFilePath)
  const sectionTitle =
    resolvedParams.contentType === 'events' ? 'Events' : 'Posts'

  return buildPageMetadata({
    title: `${post.title} | ${sectionTitle} | ${getSiteName()}`,
    description,
    pathname,
    image,
    type: 'article',
    markdownPath: `${pathname}.md`,
  })
}

export async function generateStaticParams() {
  return allDocs.map((doc) => {
    const pathParts = doc._raw.flattenedPath.split('/')
    return {
      contentType: pathParts[0] || 'events',
      slug: pathParts.slice(1).join('/'),
    }
  })
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const { post } = await getDocFromParams(resolvedParams)
  const isEventPage = resolvedParams.contentType === 'events'

  if (!post) {
    return (
      <StatusMessage
        code="404"
        title="That page slipped off the chain."
        body="We couldn't find this event or post. It may have moved, or the link might be off by a character."
      />
    )
  }

  if (!post.body || !post.body.html) {
    return (
      <StatusMessage
        code="No content"
        title="This one isn't ready yet."
        body="The content for this page hasn't been published. Check back soon, or head back home for the latest."
      />
    )
  }

  const editOnGitHubUrl =
    resolvedParams.contentType === 'events'
      ? getEditOnGitHubUrl(post._raw.sourceFilePath)
      : null

  return (
    <main className="w-full">
      <article className="flex w-full flex-col lg:flex-row">
        {!isEventPage ? (
          <div className="left-0 top-[73px] z-[49] flex h-full min-w-[300px] max-w-full flex-col gap-4 border-b border-line bg-canvas p-8 lg:sticky lg:block lg:h-screen lg:w-1/3 lg:max-w-[420px] lg:border-b-0 lg:border-r">
            <header className="flex flex-col gap-3 font-sans">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {resolvedParams.contentType === 'posts' ? 'Blog post' : 'Page'}
              </span>
              <h1>{post.title}</h1>
              {post.date ? (
                <time className="font-mono text-sm text-muted">
                  {post.date}
                </time>
              ) : null}
              {resolvedParams.contentType === 'posts' && post.author ? (
                <p className="text-base text-muted">{post.author}</p>
              ) : null}
            </header>
          </div>
        ) : null}

        <div className={`${isEventPage ? '' : 'lg:ml-10 '}relative z-[1] w-full`}>
          <div className="container mx-auto max-w-5xl px-4 pb-8">
            {post.image ? (
              <Image
                src={'/' + post.image}
                width="960"
                height="540"
                className="mb-10 mt-8 h-auto w-full rounded-xl border border-line"
                alt={post.title}
              />
            ) : (
              <div className="h-10 w-full"></div>
            )}

            {isEventPage ? (
              <header className="mb-10 flex flex-col gap-4 border-b border-line pb-8 font-sans">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Atlanta BitDevs event
                </span>
                <h1>{post.title}</h1>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {post.date ? (
                    <time className="font-mono text-sm text-muted">
                      {post.date}
                    </time>
                  ) : null}
                  {post.meetupLink ? (
                    <a
                      href={post.meetupLink}
                      className="inline-flex items-center gap-1.5 font-semibold no-underline"
                    >
                      RSVP on Meetup
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </header>
            ) : null}

            <Mdx
              html={post.body.html}
              slug={resolvedParams.slug}
              page={false}
              wide={isEventPage}
            />
            {editOnGitHubUrl ? (
              <div className="mt-12 border-t border-line pt-5 text-sm text-faint">
                <a
                  href={editOnGitHubUrl}
                  className="inline-flex items-center gap-1.5 font-sans text-muted no-underline transition-colors hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  Suggest an edit on GitHub
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  )
}

export default page
