'use client'

import Link from 'next/link'
import { useState } from 'react'

/**
 * Experimental Event Page — ATL-123 Visual Experiment
 * 
 * This is a static mockup using Socratic #48 data to demonstrate
 * what a more visual, card-based topic layout could look like.
 * In production, this would parse the MDX content dynamically.
 */

type Topic = {
  title: string
  url: string
  description: string
  sublinks?: { title: string; url: string }[]
}

type SubCategory = {
  name: string
  topics: Topic[]
}

type Category = {
  name: string
  color: string
  bgColor: string
  borderColor: string
  darkBg: string
  icon: string
  subcategories: SubCategory[]
}

const categories: Category[] = [
  {
    name: 'Bitcoin',
    color: 'text-amber-700 dark:text-amber-400',
    bgColor: 'bg-amber-50',
    darkBg: 'dark:bg-amber-950/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
    icon: '₿',
    subcategories: [
      {
        name: 'Cryptography',
        topics: [
          {
            title: 'DahLIAS paper accepted to Eurocrypt',
            url: 'https://x.com/blksresearch/status/2031667618298605930',
            description: 'Cross-input signature aggregation paper accepted into a mainstream cryptography conference',
            sublinks: [{ title: 'CISA paper', url: 'https://eprint.iacr.org/' }],
          },
          {
            title: 'Partial fraction techniques for cryptography',
            url: 'https://x.com/kostascrypto/status/2017507147043504261',
            description: 'Achieves constant-time, constant-size key-value commitments using bilinear pairing',
          },
        ],
      },
      {
        name: 'Bitcoin Core',
        topics: [
          {
            title: '24bit nonce space implementation',
            url: 'https://github.com/bitcoin/bitcoin/pull/34779',
            description: 'PR implementing the draft BIP to expand nVersion nonce space to 24 bits',
          },
          {
            title: 'BDK Version 3.0.0-rc1',
            url: 'https://github.com/bitcoindevkit/bdk_wallet/releases/tag/v3.0.0-rc.1',
            description: 'First release candidate for BDK v3.0.0',
          },
          {
            title: 'OP_RETURN Output Statistics',
            url: 'https://delvingbitcoin.org/t/recent-op-return-output-statistics/2248',
            description: 'Only 0.44% of OP_RETURN data used the new larger sizes after Core v30.0 relaxed limits',
          },
          {
            title: 'Hornet Node v0.1',
            url: 'https://delvingbitcoin.org/t/hornet-node-v0-1-update/2300',
            description: 'Standalone specification of Bitcoin consensus rules, separate from the reference client',
          },
          {
            title: 'Default dbcache → 1 GiB',
            url: 'https://github.com/bitcoin/bitcoin/issues/34692',
            description: 'Default dbcache doubled on 64-bit systems with ≥4 GiB RAM',
          },
          {
            title: 'Libsecp256k1: Runtime SHA256 API',
            url: 'https://github.com/bitcoin-core/secp256k1/issues/1777',
            description: 'Custom SHA256 compression function at runtime, enabling hardware-accelerated hashing',
          },
        ],
      },
      {
        name: 'Security & Testing',
        topics: [
          {
            title: 'The Core Issue: Keeping Bitcoin Core Secure',
            url: 'https://bitcoinmagazine.com/print/the-core-issue-keeping-bitcoin-core-secure',
            description: 'Security disclosure policy, fuzzing infrastructure, and testing toolkit',
          },
          {
            title: 'Writing Fuzz Targets for Wallets',
            url: 'https://delvingbitcoin.org/t/writing-fuzz-targets-for-wallets-avoiding-known-issues/2316',
            description: 'Performance and determinism pitfalls when fuzzing Bitcoin wallets',
          },
          {
            title: 'Bitcoin++ Exploits Hackathon',
            url: 'https://loot.fund/hackathons/bitcoin-exploits-edition/applications',
            description: 'Exploits-themed hackathon with notable results',
            sublinks: [
              { title: '1st: Minesploit', url: 'https://loot.fund/hackathons/bitcoin-exploits-edition/applications/3' },
              { title: '2nd: Local Probe', url: 'https://loot.fund/hackathons/bitcoin-exploits-edition/applications/13' },
              { title: '3rd: C12d AI assistant', url: 'https://c12d.vercel.app/' },
            ],
          },
        ],
      },
      {
        name: 'Post-Quantum',
        topics: [
          {
            title: 'PQ Provers for P2PKH Outputs',
            url: 'https://delvingbitcoin.org/t/pq-provers-for-p2pkh-outputs/2287',
            description: 'Post-quantum proof schemes to protect legacy P2PKH outputs',
          },
          {
            title: 'Hourglass V2',
            url: 'https://groups.google.com/g/bitcoindev/c/0E1UyyQIUA0',
            description: 'Rate-limiting P2PK UTXO spending (1 BTC/block) as quantum attack mitigation',
          },
          {
            title: 'Limitations of Cryptographic Agility',
            url: 'https://groups.google.com/g/bitcoindev/c/O6l3GUvyO7A',
            description: 'Pieter Wuille examines trade-offs of adding cryptographic agility to consensus rules',
          },
        ],
      },
      {
        name: 'BIPs & Proposals',
        topics: [
          {
            title: '24 nVersion Bits for General Use',
            url: 'https://groups.google.com/g/bitcoindev/c/fCfbi8hy-AE',
            description: 'Matt Corallo proposes expanding nonce space from 16 to 24 bits',
          },
          {
            title: 'Output Script Descriptor Annotations',
            url: 'https://bitcoinops.org/en/newsletters/2026/02/27/#draft-bip-for-output-script-descriptor-annotations',
            description: 'Metadata like wallet birthday and gap limit appended to descriptors',
          },
          {
            title: 'BIP392: Silent Payment Descriptors',
            url: 'https://github.com/bitcoin/bips/issues/2047',
            description: 'New sp() descriptor for silent payment wallets',
          },
          {
            title: 'Great Script Restoration BIPs',
            url: 'https://groups.google.com/g/bitcoindev/c/GisTcPb8Jco/m/8znWcWwKAQAJ',
            description: 'Rusty Russell\'s varops budget + tapscript leaf 0xc2 BIPs',
          },
        ],
      },
      {
        name: 'Covenants & Script',
        topics: [
          {
            title: 'Binohash: Introspection Without Softforks',
            url: 'https://x.com/robin_linus/status/2026700104774856827',
            description: 'First mined transaction demonstrating limited covenants using only existing script',
          },
          {
            title: 'Duty-Free Bits: Projectivizing Garbling',
            url: 'https://x.com/AlpenLabs/status/2031043052735971623',
            description: '20-45x size reduction in offchain garbling for BitVM',
          },
        ],
      },
    ],
  },
  {
    name: 'Lightning',
    color: 'text-purple-700 dark:text-purple-400',
    bgColor: 'bg-purple-50',
    darkBg: 'dark:bg-purple-950/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    icon: '⚡',
    subcategories: [
      {
        name: 'Protocol & Infrastructure',
        topics: [
          {
            title: 'Lightning Gossip via Minisketch',
            url: 'https://github.com/jharveyb/gossip_observer',
            description: 'Fixing Lightning gossip using minisketch for efficient set reconciliation',
          },
          {
            title: 'LND Adds Onion Message Forwarding',
            url: 'https://github.com/lightningnetwork/lnd/pull/10089',
            description: 'Perhaps the last Lightning implementation to support onion messages',
          },
          {
            title: 'LDK: Collaborative Multipath Payments',
            url: 'https://github.com/lightningdevkit/rust-lightning/issues/4373',
            description: 'Multiple wallets can collaboratively pay a single invoice',
          },
          {
            title: 'Eclair: Auto Channel Type Selection',
            url: 'https://github.com/ACINQ/eclair/issues/3250',
            description: 'Defaults to anchor channels, simple taproot channels expected next',
          },
          {
            title: 'LDK: Trampoline Routing Groundwork',
            url: 'https://github.com/lightningdevkit/rust-lightning/issues/4304',
            description: 'Enabling trampoline nodes to act as MPP endpoints on both sides',
          },
          {
            title: 'LDK: Dual Funding on Splices',
            url: 'https://github.com/lightningdevkit/rust-lightning/issues/4416',
            description: 'Acceptor can contribute funds when both peers splice simultaneously',
          },
        ],
      },
    ],
  },
  {
    name: 'Layer 2s',
    color: 'text-rose-700 dark:text-rose-400',
    bgColor: 'bg-rose-50',
    darkBg: 'dark:bg-rose-950/20',
    borderColor: 'border-rose-200 dark:border-rose-800',
    icon: '🧱',
    subcategories: [
      {
        name: 'Ark & Beyond',
        topics: [
          {
            title: 'V-PACK: Stateless VTXO Verification',
            url: 'https://www.vtxopack.org/',
            description: 'Standard for independently verifying VTXO exit paths in the Ark ecosystem',
          },
          {
            title: 'Second Releases hArk-based Ark Software',
            url: 'https://docs.second.tech/changelog/changelog/#010-beta6',
            description: 'Uses hash-lock Ark to eliminate synchronous interactivity during rounds',
          },
          {
            title: 'Ark Labs Raises $5.2M with Tether',
            url: 'https://bitcoinmagazine.com/news/ark-labs-raises-5-2m-with-tether',
            description: 'Seed round to build production Ark infrastructure',
          },
          {
            title: 'Crest — Privacy Tool on Citrea',
            url: 'https://x.com/crest_btc',
            description: 'Privacy-focused protocol building on the Citrea Bitcoin rollup',
          },
          {
            title: 'Park — Privacy in Ark',
            url: 'https://uncensoredtech.substack.com/p/park',
            description: 'Proposal for adding privacy features to the Ark protocol',
          },
        ],
      },
      {
        name: 'Ecash',
        topics: [
          {
            title: 'Fedimint SDK → React Native',
            url: 'https://x.com/ALewin/status/2029333061058363643',
            description: 'Mobile devs can now integrate Fedimint directly into cross-platform apps',
          },
        ],
      },
    ],
  },
  {
    name: 'Business',
    color: 'text-emerald-700 dark:text-emerald-400',
    bgColor: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    icon: '💼',
    subcategories: [
      {
        name: 'Industry Moves',
        topics: [
          {
            title: 'Strike: Bitcoin Line of Credit',
            url: 'https://x.com/Strike/status/2028974333708644588',
            description: 'Borrow against your Bitcoin without selling',
          },
          {
            title: 'Strike Gets BitLicense',
            url: 'https://x.com/mattcrv/status/2029994842386813422',
            description: 'Approved by NYDFS to serve New York customers',
          },
          {
            title: 'Square: Auto Bitcoin Payments',
            url: 'https://x.com/BitcoinNewsCom/status/2033967355483615732',
            description: 'Lightning payments accepted by all Square merchants by default starting March 30',
          },
          {
            title: 'COLDCARD Proof-of-Reserves',
            url: 'https://x.com/COLDCARDwallet/status/2029684130938531965',
            description: 'Perfect for audits, transparency reports, or flexing your reserves',
          },
          {
            title: 'SEC & CFTC Clarify Crypto Law',
            url: 'https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets',
            description: 'Commodities, collectibles, mining, and wrapping explicitly excluded from securities law',
          },
        ],
      },
    ],
  },
  {
    name: 'AI',
    color: 'text-cyan-700 dark:text-cyan-400',
    bgColor: 'bg-cyan-50',
    darkBg: 'dark:bg-cyan-950/20',
    borderColor: 'border-cyan-200 dark:border-cyan-800',
    icon: '🤖',
    subcategories: [
      {
        name: 'AI × Bitcoin',
        topics: [
          {
            title: 'AI Tooling for Code Review',
            url: 'https://delvingbitcoin.org/t/using-ai-tooling-for-code-review/2277',
            description: 'Discussion on integrating AI tools into Bitcoin Core code review',
          },
          {
            title: 'Open Source Agents Need Payments',
            url: 'https://x.com/TheBlueMatt/status/2026667191475777727',
            description: 'Matt Corallo argues AI agents need native payment rails like Lightning',
          },
          {
            title: 'Unhuman Store',
            url: 'https://unhuman.store/',
            description: 'Suite of AI agent services accepting Lightning payments via L402',
          },
          {
            title: 'Mail Mike',
            url: 'https://mailmike.lol/',
            description: 'AI email agent accepting Lightning payments',
          },
          {
            title: 'MDK + MPP: Lightning Paywalls',
            url: 'https://x.com/JohnCantrell97/status/2034377639079600242',
            description: 'One line of code for self-custodial Lightning paywalls on Cloudflare Workers',
            sublinks: [
              { title: 'mdk-cloudflare', url: 'https://github.com/johncantrell97/mdk-cloudflare' },
              { title: 'MPP Protocol', url: 'https://mpp.dev/' },
            ],
          },
        ],
      },
    ],
  },
]

function TopicCard({ topic, color }: { topic: Topic; color: string }) {
  return (
    <div className="group relative">
      <a
        href={topic.url}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline block p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md transition-all duration-200"
      >
        <h4 className={`font-bold text-sm leading-snug mb-1.5 group-hover:${color.replace('text-', 'text-')} transition-colors`}>
          {topic.title}
          <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
        </h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {topic.description}
        </p>
        {topic.sublinks && topic.sublinks.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {topic.sublinks.map((sub, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
              >
                {sub.title}
              </span>
            ))}
          </div>
        )}
      </a>
    </div>
  )
}

function CategorySection({ category }: { category: Category }) {
  const [expanded, setExpanded] = useState(true)
  const topicCount = category.subcategories.reduce((acc, sub) => acc + sub.topics.length, 0)

  return (
    <section className={`rounded-2xl border ${category.borderColor} overflow-hidden`}>
      {/* Category header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full ${category.bgColor} ${category.darkBg} px-6 py-4 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{category.icon}</span>
          <h3 className={`font-black text-xl ${category.color}`}>{category.name}</h3>
          <span className="text-xs font-mono text-neutral-400 bg-white/60 dark:bg-black/20 px-2 py-0.5 rounded-full">
            {topicCount} topics
          </span>
        </div>
        <span className={`text-lg transition-transform duration-200 ${expanded ? 'rotate-0' : '-rotate-90'}`}>
          ▼
        </span>
      </button>

      {/* Topics */}
      {expanded && (
        <div className="p-6 bg-white/50 dark:bg-neutral-900/50">
          {category.subcategories.map((sub, i) => (
            <div key={i} className={i > 0 ? 'mt-6' : ''}>
              <h4 className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-neutral-300 dark:bg-neutral-600" />
                {sub.name}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sub.topics.map((topic, j) => (
                  <TopicCard key={j} topic={topic} color={category.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default function ExperimentEvent() {
  const [filter, setFilter] = useState<string | null>(null)

  const displayed = filter
    ? categories.filter(c => c.name.toLowerCase() === filter)
    : categories

  const totalTopics = categories.reduce(
    (acc, cat) => acc + cat.subcategories.reduce((a, s) => a + s.topics.length, 0),
    0
  )

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Event header */}
      <div className="bg-neutral-950 text-white">
        <div className="container mx-auto max-w-7xl px-6 py-12 md:py-20">
          <Link href="/experiment" className="no-underline text-neutral-500 hover:text-amber-400 text-sm font-mono transition-colors">
            ← Back to home
          </Link>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <time className="font-mono text-amber-500 text-sm">2026-03-18</time>
              <h1 className="font-black text-4xl md:text-6xl tracking-tight mt-2">
                Socratic Seminar <span className="text-amber-500">#48</span>
              </h1>
              <p className="text-neutral-400 mt-3 text-lg max-w-xl">
                Deep dives into Bitcoin protocol, Lightning, Layer 2s, business developments, and AI.
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-5xl font-black text-amber-500">{totalTopics}</div>
              <div className="text-sm text-neutral-500 font-mono">topics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-[73px] z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-mono text-neutral-400 mr-2 flex-shrink-0">Filter:</span>
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex-shrink-0 ${
              !filter
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-black'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            All ({totalTopics})
          </button>
          {categories.map((cat) => {
            const count = cat.subcategories.reduce((a, s) => a + s.topics.length, 0)
            return (
              <button
                key={cat.name}
                onClick={() => setFilter(filter === cat.name.toLowerCase() ? null : cat.name.toLowerCase())}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex-shrink-0 ${
                  filter === cat.name.toLowerCase()
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black'
                    : `${cat.bgColor} ${cat.darkBg} ${cat.color} hover:opacity-80`
                }`}
              >
                {cat.icon} {cat.name} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-6">
        {displayed.map((cat) => (
          <CategorySection key={cat.name} category={cat} />
        ))}
      </div>

      {/* Event logistics */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-sm mb-2">What is a Socratic?</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Topics are provided ahead of the event. A moderator leads discussion.
                Raise your hand to grab the mic. We go to dinner afterwards.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">📍 Location</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                ATL BitLab<br />
                684 John Wesley Dobbs Ave NE, Suite A1<br />
                Atlanta, GA 30312
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">🅿️ Parking</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Gravel lot with &ldquo;tenants only&rdquo; sign or right in front of the fence.
                Avoid valet areas. Look for the orange door.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">💬 Connect</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                <a href="https://atlantabitdevs.org/telegram/" className="text-amber-600 dark:text-amber-400">Telegram</a> · {' '}
                <a href="https://www.meetup.com/atlbitlab/" className="text-amber-600 dark:text-amber-400">Meetup</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
