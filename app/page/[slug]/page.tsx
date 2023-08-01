import getJsonFile, { ParsedData } from '@/lib/get-json'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import Image from 'next/image'
import { Mdx } from '@/components/MDX-components'
import { allDocs } from 'contentlayer/generated'
import socraticDiscussion from 'public/socratic-discussion-default.jpg'
import { getPageContentFromMarkdown } from '@/lib/parse-markdown-files'

const contentType = 'page'

interface PageProps {
  params: {
    slug: string
    contentType: string
  }
}

type Args = {
  slug: string
  contentType: string
}

async function getDocFromParams(params: Args) {
  let data: ParsedData | undefined
  // console.log('allDocs: ', allDocs)
  const post = allDocs.find((post) => post.slugAsParams === params.slug)

  if (params.contentType === contentType) {
    data = await getJsonFile({ fileName: params.slug })
  }

  return { post, data }
}

const page = async ({ params }: PageProps) => {
  console.log('params [id]/page.tsx: ', params)
  const currentPageData = getPageContentFromMarkdown().filter(
    (page: any) => page.id === params.slug,
  )[0]
  // console.log('currentPageData: ', currentPageData)
  const { post, data } = await getDocFromParams(params)

  if (!post) {
    return <div>Watermelon 404 sorry you poor bitdev</div>
  }

  return (
    <main className="w-full">
      <article className="flex flex-row w-full">
          <div className="container mx-auto max-w-5xl p-4 flex flex-col gap-4">
            <h1 className="text-4xl font-black">{post.title}</h1>
            <Mdx code={post.body.code} slug={params.slug} page={true} />
          </div>
      </article>
    </main>
  )
}

export default page
