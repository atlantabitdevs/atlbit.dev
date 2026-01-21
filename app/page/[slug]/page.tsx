import { Mdx } from '@/components/MDX-components'
import { allDocs } from 'contentlayer/generated'

const contentType = 'page'

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

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const { post } = await getDocFromParams(resolvedParams)

  if (!post) {
    return <div>Watermelon 404 sorry you poor bitdev</div>
  }

  if (!post.body || !post.body.code) {
    return <div>Error: Content not available for this post</div>
  }

  return (
    <main className="w-full">
      <article className="flex flex-row w-full">
          <div className="container mx-auto max-w-5xl p-4 flex flex-col gap-4">
            <h1 className="text-4xl font-black">{post.title}</h1>
            <Mdx code={post.body.code} slug={resolvedParams.slug} page={true} />
          </div>
      </article>
    </main>
  )
}

export default page
