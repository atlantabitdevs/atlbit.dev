import { Mdx } from '@/components/MDX-components'
import StatusMessage from '@/components/StatusMessage'
import { allDocs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import {
  buildPageMetadata,
  defaultMetadataImage,
  getContentSnippetFromFile,
  getSiteName,
  getStaticPageFallbackDescription,
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { post } = await getDocFromParams(resolvedParams)

  if (!post) {
    return buildPageMetadata({
      title: `Not Found | ${getSiteName()}`,
      pathname: `/page/${resolvedParams.slug}`,
    })
  }

  return buildPageMetadata({
    title: `${post.title} | ${getSiteName()}`,
    description: getContentSnippetFromFile(
      post._raw.sourceFilePath,
      getStaticPageFallbackDescription(),
    ),
    pathname: `/page/${resolvedParams.slug}`,
    image: defaultMetadataImage,
    markdownPath: `/page/${resolvedParams.slug}.md`,
  })
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const { post } = await getDocFromParams(resolvedParams)

  if (!post) {
    return (
      <StatusMessage
        code="404"
        title="That page slipped off the chain."
        body="We couldn't find this page. It may have moved, or the link might be off by a character."
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

  return (
    <main className="container mx-auto w-full max-w-3xl px-4">
      <article className="flex flex-col gap-6 py-12 md:py-16">
        <h1>{post.title}</h1>
        <Mdx html={post.body.html} slug={resolvedParams.slug} page={true} />
      </article>
    </main>
  )
}

export default page
