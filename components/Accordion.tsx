'use client'
import {
  CaretDownIcon,
  CaretUpIcon,
} from '@bitcoin-design/bitcoin-icons-react/filled'
import { useState } from 'react'

interface AccordionProps {
  content: string
  type: 'cliff' | 'eli5'
  expanded?: boolean
}

function NewlineText({ text }: { text: string }) {
  const newText = text.split('\n').map((str, index, array) =>
    index === array.length - 1 ? (
      str
    ) : (
      <>
        {str}
        <br />
      </>
    )
  )

  return <>{newText}</>
}

export default function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState<boolean>(props.expanded || false)

  return (
    <>
      <span className="accordion">
        <span
          className="flex flex-row gap-2 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <span>{props.type === 'cliff' ? <>📄</> : <>🧒</>}</span>
          <span className="text-xl font-sans font-semibold">
            {props.type === 'cliff' ? (
              <>Summarized</>
            ) : (
              <>Explain Like I&rsquo;m 5</>
            )}
          </span>
          <span>
            {expanded ? (
              <CaretUpIcon className="w-6 h-6" />
            ) : (
              <CaretDownIcon className="w-6 h-6" />
            )}
          </span>
        </span>
        {expanded ? (
          <span className="block pb-4">
            <NewlineText text={props.content} />
          </span>
        ) : null}
      </span>
    </>
  )
}
