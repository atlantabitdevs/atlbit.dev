import { ArrowRightIcon } from '@bitcoin-design/bitcoin-icons-react/outline'
import {
  ContentType,
  getSortedMarkdownContent,
} from '@/lib/parse-markdown-files'

import Image from 'next/image'
import Link from 'next/link'
import MeetupName from '@/components/MeetupName'
import PostPreview from '@/components/PostPreview'
import { meetup } from '@/meetup'
import { buildPageMetadata, defaultMetadataImage, getSiteName } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: `${getSiteName()} | ${meetup.description}`,
  description: meetup.description,
  pathname: '/',
  image: defaultMetadataImage,
})

export default function Home({}) {
  const eventsContentData = getSortedMarkdownContent(ContentType.Events)
  const postsContentData = getSortedMarkdownContent(ContentType.Posts)

  return (
    <main className="container mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="flex flex-col gap-6 border-b border-line py-12 md:gap-9 md:py-24">
        <div className="h-32 w-32 overflow-hidden rounded-full ring-1 ring-line md:h-44 md:w-44">
          <Image
            src={meetup.image}
            alt="Atlanta BitDevs meeting in person"
            width="400"
            height="400"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent md:text-sm">
          Free &amp; open Bitcoin education in Atlanta
        </p>

        <h1 className="font-sans font-extrabold leading-[0.94] tracking-[-0.03em] text-[clamp(2.75rem,11vw,7rem)]">
          <MeetupName />
        </h1>

        <p className="max-w-[36ch] text-balance text-xl text-muted md:text-[2rem] md:leading-[1.3]">
          A community for people who want to discuss and build the future of
          Bitcoin and related protocols.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 font-sans text-base">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-semibold text-link no-underline transition-colors hover:text-link-hover"
          >
            See upcoming events
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <a
            href="https://www.meetup.com/atlantabitdevs/"
            className="text-muted no-underline transition-colors hover:text-ink"
          >
            Join on Meetup
          </a>
          <a
            href="https://atlantabitdevs.org/telegram/"
            className="text-muted no-underline transition-colors hover:text-ink"
          >
            Telegram
          </a>
        </div>
      </section>

      {/* Events */}
      <section className="flex flex-col gap-8 border-b border-line py-12 md:py-16">
        <header className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            What&rsquo;s next
          </span>
          <h2>Upcoming &amp; recent events</h2>
        </header>

        {eventsContentData.length > 0 ? (
          <div className="flex flex-col gap-9">
            {eventsContentData.map(
              ({ id, date, title, preview, heroImage }, i) => (
                <PostPreview
                  id={id}
                  title={title}
                  date={date}
                  type="events"
                  previewText={preview}
                  heroImage={heroImage}
                  key={i}
                />
              ),
            )}
          </div>
        ) : (
          <p className="text-muted">
            No events on the calendar right now. Check{' '}
            <a href="https://www.meetup.com/atlantabitdevs/">Meetup</a> for the
            next one.
          </p>
        )}

        <Link
          href="/events"
          className="inline-flex items-center gap-2 font-sans font-semibold text-link no-underline transition-colors hover:text-link-hover"
        >
          See all events
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </section>

      {/* Posts */}
      <section className="flex flex-col gap-8 py-12 md:py-16">
        <header className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            Writing
          </span>
          <h2>Recent blog posts</h2>
        </header>

        {postsContentData.length > 0 ? (
          <div className="flex flex-col gap-9">
            {postsContentData.map(({ id, date, title, preview, author }, i) => (
              <PostPreview
                id={id}
                title={title}
                date={date}
                type="posts"
                previewText={preview}
                key={i}
                author={author}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted">No posts yet. Watch this space.</p>
        )}

        <Link
          href="/posts"
          className="inline-flex items-center gap-2 font-sans font-semibold text-link no-underline transition-colors hover:text-link-hover"
        >
          See all blog posts
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </section>
    </main>
  )
}
