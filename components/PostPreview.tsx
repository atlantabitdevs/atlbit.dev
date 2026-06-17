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
  // Seed with the real preview text so there is no placeholder flash before
  // hydration; the effect refines it by stripping markdown syntax.
  const [stripped, setStripped] = useState(props.previewText)

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

  const href = '/' + props.type + '/' + props.id

  return (
    <article className="group">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-7">
        {props.heroImage ? (
          <a
            href={href}
            className="overflow-hidden rounded-xl border border-line bg-surface-2 no-underline md:w-60 md:shrink-0"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={props.heroImage}
                alt={props.title}
                fill
                sizes="(min-width: 768px) 240px, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </a>
        ) : null}

        <div className="flex-1">
          <header className="flex flex-col gap-1.5">
            <time className="order-first font-mono text-xs uppercase tracking-[0.14em] text-faint">
              {props.date}
            </time>
            <h3>
              <a
                href={href}
                className="font-sans no-underline transition-colors hover:text-brand-strong"
              >
                {props.title}
              </a>
            </h3>
            {props.author ? (
              <p className="order-last font-sans text-base text-muted">
                {props.author}
              </p>
            ) : null}
          </header>

          <p className="mt-3 max-w-[68ch] text-balance leading-7 text-muted">
            {stripped}&hellip;
          </p>
        </div>
      </div>
    </article>
  )
}
