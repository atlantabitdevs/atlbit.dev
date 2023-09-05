import * as React from 'react'

import { Callout } from '@/components/callout'
import Image from 'next/image'
import { MdxCard } from '@/components/mdx-card'
import { ParsedData } from '@/lib/get-json'
import SummaryLink from './SummaryLink'
import { cn } from '@/lib/utils'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface MdxProps {
  code: string
  slug: string
  jsonData?: ParsedData | undefined
  page: boolean
}

export function Mdx({ code, slug, jsonData, page = false }: MdxProps) {
  const Component = useMDXComponent(code)

  // TODO: Fix the liberal className?: explicit any usage

  const components = {
    a: ({
      className,
      href,
      children,
      'data-no-summary': noSummary,
      ...props
    }: {
      className?: any
      href?: string
      children?: any
      'data-no-summary'?: string
    }) => {
      if (noSummary || jsonData === undefined || page) {
        return (
          <a
            className={cn(
              'font-medium underline underline-offset-4',
              className
            )}
            href={href}
            {...props}
          >
            {children}
          </a>
        )
      }
      return (
        <SummaryLink href={href} title={children} slug={slug} data={jsonData} />
      )
    },
    h1: ({ className, ...props }: { className?: any }) => (
      <h1 className={cn('', className)} {...props} />
    ),
    h2: ({ className, ...props }: { className?: any }) => (
      <h2 className={cn('my-10', className)} {...props} />
    ),
    h3: ({ className, ...props }: { className?: any }) => (
      <h3 className={cn('my-10', className)} {...props} />
    ),
    h4: ({ className, ...props }: { className?: any }) => (
      <h4 className={cn('my-10', className)} {...props} />
    ),
    h5: ({ className, ...props }: { className?: any }) => (
      <h5 className={cn('my-10', className)} {...props} />
    ),
    h6: ({ className, ...props }: { className?: any }) => (
      <h6 className={cn('my-10', className)} {...props} />
    ),
    p: ({ className, ...props }: { className?: any }) => (
      <p
        className={cn('leading-7 [&:not(:first-child)]:my-6', className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }: { className?: any }) => (
      <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    ol: ({ className, ...props }: { className?: any }) => (
      <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
    ),
    li: ({ className, ...props }: { className?: any }) => (
      <li className={cn('mt-2', className)} {...props} />
    ),
    blockquote: ({ className, ...props }: { className?: any }) => (
      <blockquote
        className={cn(
          'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
          className
        )}
        {...props}
      />
    ),
    img: ({
      className,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cn('rounded-md border', className)}
        alt={alt}
        {...props}
      />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn('w-full', className)} {...props} />
      </div>
    ),
    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn('m-0 border-t p-0 even:bg-muted', className)}
        {...props}
      />
    ),
    th: ({ className, ...props }: { className?: any }) => (
      <th
        className={cn(
          'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: { className?: any }) => (
      <td
        className={cn(
          'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: { className?: any }) => (
      <pre
        className={cn(
          'mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4',
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: { className?: any }) => (
      <code
        className={cn(
          'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm',
          className
        )}
        {...props}
      />
    ),
    // Image, // TODO: Figure out why this messes with the build script
    Callout,
    Card: MdxCard,
  }

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
