import {
  ContentType,
  getSortedMarkdownContent,
} from '@/lib/parse-markdown-files'

import Image from 'next/image'
import Link from 'next/link'
import { meetup } from '@/meetup'

const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  bitcoin: { bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-300 dark:border-amber-700', text: 'text-amber-700 dark:text-amber-400', icon: '₿' },
  lightning: { bg: 'bg-purple-50 dark:bg-purple-950/30', border: 'border-purple-300 dark:border-purple-700', text: 'text-purple-700 dark:text-purple-400', icon: '⚡' },
  business: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-300 dark:border-emerald-700', text: 'text-emerald-700 dark:text-emerald-400', icon: '💼' },
  ai: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-300 dark:border-cyan-700', text: 'text-cyan-700 dark:text-cyan-400', icon: '🤖' },
  layer2: { bg: 'bg-rose-50 dark:bg-rose-950/30', border: 'border-rose-300 dark:border-rose-700', text: 'text-rose-700 dark:text-rose-400', icon: '🧱' },
  default: { bg: 'bg-neutral-50 dark:bg-neutral-800', border: 'border-neutral-300 dark:border-neutral-700', text: 'text-neutral-700 dark:text-neutral-400', icon: '📝' },
}

export default function ExperimentHome() {
  const eventsContentData = getSortedMarkdownContent(ContentType.Events)
  const latestEvent = eventsContentData[0]

  return (
    <main className="min-h-screen">
      {/* Hero - Full bleed, dramatic */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,153,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="relative container mx-auto max-w-7xl px-6 py-16 md:py-28">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            {/* Left: Identity */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-lg shadow-amber-500/20">
                <Image
                  src={meetup.image}
                  alt="Atlanta BitDevs"
                  width="400"
                  height="400"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-2">Atlanta</p>
                <h1 className="font-black text-5xl md:text-8xl tracking-tight leading-[0.9]">
                  Bit<span className="text-amber-500">Devs</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
                A community for those interested in discussing and participating in
                the research and development of{' '}
                <span className="text-white font-medium">Bitcoin</span> and related protocols.
              </p>

              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="/events" className="no-underline px-5 py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors text-sm">
                  All Events →
                </Link>
                <Link href="https://www.meetup.com/atlantabitdevs/" className="no-underline px-5 py-2.5 border border-neutral-600 text-neutral-300 font-medium rounded-lg hover:border-neutral-400 hover:text-white transition-colors text-sm">
                  Join Meetup
                </Link>
                <Link href="/page/about" className="no-underline px-5 py-2.5 border border-neutral-600 text-neutral-300 font-medium rounded-lg hover:border-neutral-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event - Large card */}
      {latestEvent && (
        <section className="bg-white dark:bg-neutral-900">
          <div className="container mx-auto max-w-7xl px-6 py-12 md:py-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Latest Event</span>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
            </div>

            <Link href={`/events/${latestEvent.id}`} className="no-underline group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex flex-col gap-3">
                    <time className="font-mono text-sm text-neutral-500">{latestEvent.date}</time>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {latestEvent.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-lg text-lg">
                      Deep dives into the latest Bitcoin protocol developments, security research, and Lightning innovations.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl md:text-5xl group-hover:scale-110 transition-transform">
                    →
                  </div>
                </div>

                {/* Topic pills */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {Object.entries(categoryColors).filter(([k]) => k !== 'default').map(([key, colors]) => (
                    <span key={key} className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {colors.icon} {key === 'layer2' ? 'Layer 2s' : key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Previous Events - Compact grid */}
      <section className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto max-w-7xl px-6 py-12 md:py-20">
          <h2 className="text-2xl font-black mb-8">Previous Seminars</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsContentData.slice(1, 7).map(({ id, date, title }, i) => (
              <Link
                key={i}
                href={`/events/${id}`}
                className="no-underline group block p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
              >
                <time className="font-mono text-xs text-neutral-500">{date}</time>
                <h3 className="text-lg font-bold mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <span className="inline-block mt-3 text-sm text-amber-600 dark:text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View topics →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/events" className="no-underline text-sm font-medium text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              View all events →
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-neutral-950 text-white border-t border-neutral-800">
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-black text-lg mb-2">📍 Location</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                ATL BitLab<br />
                684 John Wesley Dobbs Ave NE<br />
                Suite A1, Atlanta, GA 30312
              </p>
            </div>
            <div>
              <h3 className="font-black text-lg mb-2">📅 Schedule</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Third Tuesday of every month<br />
                Doors open at 6:30 PM<br />
                We go to dinner afterwards
              </p>
            </div>
            <div>
              <h3 className="font-black text-lg mb-2">🤝 Join Us</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                All skill levels welcome<br />
                Free and open to everyone<br />
                #LearnBitcoinTogether
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
