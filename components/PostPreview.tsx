'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { remark } from 'remark'
import strip from 'strip-markdown'

interface PostPreviewProps {
  title: string
  date?: string
  author?: string
  previewText: string
  type: string
  id: string
  heroImage?: string
}

export default function PostPreview(props: PostPreviewProps) {
  const [stripped, setStripped] = useState(
    'Bitcoin ipsum dolor sit amet. Block height address wallet block reward mining nonce transaction.'
  )

  useEffect(() => {
    async function stripMarkdown() {
      try {
        const file = await remark().use(strip).process(props.previewText)
        setStripped(String(file).trim())
      } catch (error) {
        console.error(error)
      }
    }
    stripMarkdown()
  }, [props.previewText])

  return (
    <article className="group">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
        {props.heroImage ? (
          <a
            href={'/' + props.type + '/' + props.id}
            className="no-underline overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 md:w-60 md:shrink-0"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={props.heroImage}
                alt={props.title}
                fill
                sizes="(min-width: 768px) 240px, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        ) : null}

        <div className="flex-1">
          <header className="flex flex-col gap-1">
            <time className="order-first font-sans text-lg text-gray-500">
              {props.date}
            </time>
            <h3>
              <a
                href={'/' + props.type + '/' + props.id}
                className="no-underline transition-colors hover:text-orange-600 dark:hover:text-orange-400"
              >
                {props.title}
              </a>
            </h3>
            {props.author ? (
              <p className="order-last font-sans text-xl">{props.author}</p>
            ) : null}
          </header>

          <p className="mt-3 text-balance text-base leading-7 text-neutral-700 dark:text-neutral-300">
            {stripped}&hellip;
          </p>
        </div>
      </div>
    </article>
  )
}
