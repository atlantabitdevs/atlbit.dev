import { ParsedData } from '@/lib/get-json'
import Accordion from './Accordion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

type Props = {
  href: string | undefined
  title: any
  slug: string
  data: ParsedData | undefined
}

export default function SummaryLink(props: Props) {
  // TODO: Figure out how to prevent this from being housed in a <p> tag when rendered, I want to use more semantic HTML inside this component

  const entry = props.data?.summary.find((item) => item.title == props.title)

  return (
    <span className="pt-4 mb-10 block">
      {!!props.data ? (
        <span key={props.title} className="flex flex-col gap-2">
          <a
            href={props.href}
            target="_blank"
            className="text-xl font-sans font-semibold no-underline"
          >
            {props.title}
            <ArrowTopRightOnSquareIcon className="w-6 h-6 inline-block ml-4 relative -top-1" />
          </a>
          {entry ? (
            <>
              <Accordion content={entry?.summary} type="cliff" />
              <Accordion content={entry?.summaryeli15} type="eli5" />
            </>
          ) : (
            <>
              <em>Summary unavailable</em>
            </>
          )}
        </span>
      ) : null}
    </span>
  )
}
