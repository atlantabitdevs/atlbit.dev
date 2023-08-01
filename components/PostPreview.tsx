'use client'
import React, { useState, useEffect } from 'react'
import { remark } from 'remark'
import strip from 'strip-markdown'

interface PostPreviewProps {
  title: string
  date?: string
  author?: string
  previewText: string
  type: string
  id: string
}

export default function PostPreview(props: PostPreviewProps) {
  const [stripped, setStripped] = useState(
    'Bitcoin ipsum dolor sit amet. Block height address wallet block reward mining nonce transaction.'
  )

  useEffect(() => {
    async function stripMarkdown() {
      try {
        const file = await remark().use(strip).process(props.previewText)
        setStripped(String(file))
      } catch (error) {
        console.error(error)
      }
    }
    stripMarkdown()
  }, [props.previewText]) // Run the effect whenever `props.previewText` changes

  return (
    <article>
      <header className="flex flex-col gap-1 ">
        <h3>
          <a href={'/' + props.type + '/' + props.id} className="no-underline">
            {props.title}
          </a>
        </h3>
        <time className="font-sans text-gray-500 text-lg order-first ">
          {props.date}
        </time>
        {props.author ? (
          <p className="order-last text-xl font-sans ">{props.author}</p>
        ) : (
          ``
        )}
      </header>

      <p>{stripped}&hellip;</p>
    </article>
  )
}
