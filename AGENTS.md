# AGENTS.md

Practical notes for maintaining atlbit.dev.

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
