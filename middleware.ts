import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/*
 * Serves plain-markdown versions of content pages to agents in two ways:
 *
 *   1. Explicit URL:   /events/<slug>.md
 *   2. Negotiation:    /events/<slug> with `Accept: text/markdown`
 *
 * Both are rewritten onto the /md/[...slug] route handler. HTML stays the
 * default for browsers (which send `Accept: text/html`).
 */

// Matches a single content page, e.g. /events/foo, /posts/bar, /page/about.
const CONTENT_PATH = /^\/(events|posts|page)\/[^/]+$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isExplicitMarkdown = pathname.endsWith('.md')
  const basePath = isExplicitMarkdown ? pathname.slice(0, -3) : pathname

  if (!CONTENT_PATH.test(basePath)) {
    return NextResponse.next()
  }

  const accept = request.headers.get('accept') ?? ''
  const wantsMarkdown = accept.includes('text/markdown')

  if (!isExplicitMarkdown && !wantsMarkdown) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/md${basePath}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/events/:slug*', '/posts/:slug*', '/page/:slug*'],
}
