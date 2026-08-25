# AGENTS.md

Practical notes for maintaining atlbit.dev.

## Design context
Before any visual or UI work, read `DESIGN.md` and `PRODUCT.md` at the repo root.
- `PRODUCT.md`: who the site is for, brand voice, anti-references, and strategic design principles.
- `DESIGN.md`: the visual system. Color tokens (OKLCH), typography (Hanken Grotesk / Literata / Spline Sans Mono), elevation, components, and named rules. `DESIGN.json` is its machine-readable sidecar.

Keep new UI on-brand by following those files. The color tokens live in `app/globals.css` (`:root` and `.dark`) and map to Tailwind names in `tailwind.config.js`.

## Stack at a glance
- Next.js 15 App Router site.
- Markdown content lives under `content/` and is loaded with Contentlayer.
- Styling is Tailwind CSS.
- Deploys run on Netlify.

## Common commands
```bash
yarn install
yarn dev
yarn build
yarn lint
```

Use `yarn` here, not `pnpm`: the repo is pinned to Yarn 1 and includes `yarn.lock`.

## Content model
- `content/events/`: meetup and seminar pages.
- `content/posts/`: blog-style posts.
- `content/pages/`: standalone pages like About and Contact.
- All content files need frontmatter with at least `title`.
- Optional frontmatter fields supported by Contentlayer: `date`, `author`, `image`, `meetupLink`, `published`.

## Adding or editing meetup content
- Follow the existing event filename pattern: `YYYY-MM-DD-event-name.md`.
- Keep dates in frontmatter consistent with the filename because lists are date-driven.
- The home page and `/events` listing read from `content/events/` automatically; no manual registry update is needed.
- If an event should not appear publicly yet, set `published: false` only if the consuming UI supports that behavior before relying on it.

## Code layout
- `app/page.tsx`: homepage that renders recent events and posts.
- `app/[contentType]/page.tsx`: list pages for content collections.
- `components/MDX-page.tsx`: markdown/MDX component mapping.
- `lib/parse-markdown-files*`: content sorting and parsing helpers used by listings.
- `meetup.ts`: shared meetup/site metadata used on the homepage.
- `public/`: static assets.

## Agent & crawler discovery
The site exposes machine-readable surfaces for AI agents and crawlers. These are generated from content, so they stay current automatically — no manual updates when adding events/posts.
- `public/robots.txt`: crawl rules, explicit AI crawler (GPTBot, ClaudeBot, Google-Extended, …) groups, a `Content-Signal` line (contentsignals.org), and a `Sitemap:` reference.
- `app/sitemap.ts`: generates `/sitemap.xml` from `allDocs`.
- `app/llms.txt/route.ts`: serves `/llms.txt` (llmstxt.org) — a plain-text index linking every event/post/page to its `.md` mirror.
- `app/md/[...slug]/route.ts`: serves the plain-markdown mirror of any content page. Reached via `middleware.ts`, which rewrites `/<section>/<slug>.md` URLs and `Accept: text/markdown` requests onto it. HTML stays the default for browsers.
- `lib/agent-content.ts`: shared helpers (read from Contentlayer `allDocs`, not the filesystem) backing all of the above.
- `next.config.js` `headers()`: adds RFC 8288 `Link` headers (homepage → llms.txt/sitemap; content pages → their `.md` alternate).
- `buildPageMetadata` adds a `<link rel="alternate" type="text/markdown">` to content pages via the `markdownPath` option.
- Footer (`components/Footer.tsx`) carries a subtle `/llms.txt` link.

## Maintenance guidelines
- Prefer small content and styling changes over broad refactors.
- Do not rename or move large content folders unless you also update the content loading logic.
- Avoid changing package managers or lockfiles unless dependency work is the actual task.
- When changing markdown rendering, verify both `yarn build` and at least one representative content page.
- Keep copy edits consistent with the Atlanta BitDevs voice: clear, technical, and welcoming.

## Verification
For docs-only changes, `git diff --stat` is enough.
For site changes, the smallest meaningful checks are usually:
1. `yarn build`
2. `yarn lint` if code changed materially

## CLAUDE.md
`CLAUDE.md` is intentionally brief in this repo. Keep the durable maintenance guidance here in `AGENTS.md`, and let `CLAUDE.md` point back to this file.
