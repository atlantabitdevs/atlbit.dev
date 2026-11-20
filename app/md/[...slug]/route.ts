import {
  findAgentDoc,
  getAllAgentDocs,
  renderDocMarkdown,
} from '@/lib/agent-content'

/*
 * Plain-markdown mirror of content pages.
 *
 * Reached via middleware, which rewrites a public `.md` URL — or a request
 * with `Accept: text/markdown` — onto this route. For example:
 *   /events/<slug>.md            -> /md/events/<slug>
 *   /page/about (Accept: md)     -> /md/page/about
 */

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllAgentDocs().map((doc) => ({
    // doc.webPath is like "/events/<slug>"; drop the leading slash and split.
    slug: doc.webPath.slice(1).split('/'),
  }))
}

interface RouteContext {
  params: Promise<{ slug: string[] }>
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params
  const [segment, ...rest] = slug

  const doc = findAgentDoc(segment, rest.join('/'))

  if (!doc) {
    return new Response('Not found\n', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }

  return new Response(renderDocMarkdown(doc), {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  })
}
