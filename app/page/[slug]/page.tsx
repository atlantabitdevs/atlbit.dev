import { Mdx } from '@/components/MDX-components'
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
    return <div>Watermelon 404 sorry you poor bitdev</div>
  }

  if (!post.body || !post.body.html) {
    return <div>Error: Content not available for this post</div>
  }

  return (
    <main className="w-full">
      <article className="flex flex-row w-full">
          <div className="container mx-auto max-w-5xl p-4 flex flex-col gap-4">
            <h1 className="text-4xl font-black">{post.title}</h1>
            <Mdx html={post.body.html} slug={resolvedParams.slug} page={true} />
          </div>
      </article>
    </main>
  )
}

export default page
