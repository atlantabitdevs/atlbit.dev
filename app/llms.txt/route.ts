import { getAgentDocs } from '@/lib/agent-content'
import { getSiteName, getSiteUrl } from '@/lib/site-metadata'
import { meetup } from '@/meetup'

/*
 * /llms.txt — a machine-readable index of the site for AI agents.
 * https://llmstxt.org/
 *
 * Each linked event/post/page also has a plain-markdown mirror at the same
 * URL with a `.md` suffix (e.g. /events/<slug>.md).
 */

export const dynamic = 'force-static'

function section(title: string, docs: ReturnType<typeof getAgentDocs>) {
  if (docs.length === 0) {
    return ''
  }

  const siteUrl = getSiteUrl()
  const lines = docs.map((doc) => {
    const suffix = doc.date ? `: ${doc.date}` : ''
    return `- [${doc.title}](${siteUrl}${doc.mdPath})${suffix}`
  })

  return [`## ${title}`, '', ...lines, ''].join('\n')
}

export function GET() {
  const siteUrl = getSiteUrl()
  const events = getAgentDocs('events')
  const posts = getAgentDocs('posts')
  const pages = getAgentDocs('pages')

  const body = [
    `# ${getSiteName()}`,
    '',
    `> ${meetup.description}`,
    '',
    'This site lists Atlanta BitDevs meetups, Socratic Seminars, and posts on',
    'Bitcoin and related protocol research. Every event, post, and page below',
    'is also available as plain markdown by appending `.md` to its URL.',
    '',
    '## Key pages',
    '',
    `- [Home](${siteUrl}/): Community overview and recent activity`,
    `- [All events](${siteUrl}/events): Upcoming and past meetups`,
    `- [All posts](${siteUrl}/posts): Blog posts and write-ups`,
    `- [Meetup group](https://www.meetup.com/atlantabitdevs/): RSVP and event logistics`,
    '',
    section('Pages', pages),
    section('Events', events),
    section('Posts', posts),
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd()

  return new Response(`${body}\n`, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  })
}
