'use client'
import {
  CaretDownIcon,
  CaretUpIcon,
} from '@bitcoin-design/bitcoin-icons-react/filled'
import exp from 'constants'
import { useState } from 'react'

interface AccordionProps {
  content: string
  type: 'cliff' | 'eli5'
  expanded?: boolean
}

export default function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <>
      <span className="accordion">
        <span
          className="flex flex-row gap-2 cursor-pointer"
          onClick={() => {
            console.log('test')
            setExpanded(!expanded)
          }}
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
        {expanded ? <span className="block pb-4">{props.content}</span> : ``}
      </span>
    </>
  )
}
