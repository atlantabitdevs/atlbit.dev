import {
  ContentType,
  getSortedMarkdownContent,
} from '../../lib/parse-markdown-files'

import PostPreview from '@/components/PostPreview'

type PageProps = {
  params: {
    contentType: ContentType
  }
}
export default function Page({ params }: PageProps) {
  const { contentType } = params
  const allContentData = getSortedMarkdownContent(contentType)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-10 border-b border-b-400 py-10">
        <h2 className="text-center">{params.contentType.toUpperCase()}</h2>

        {allContentData.map(({ id, date, title }, i) => (
          <PostPreview
            id={id}
            title={title}
            date={date}
            type="events"
            previewText={
              'Our monthly Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.'
            }
            key={i}
          />
        ))}
      </div>
    </main>
  )
}
