---
name: Atlanta BitDevs
description: Free and open Bitcoin education in Atlanta. A community site that doubles as a live, projected meetup agenda.
colors:
  brand: "oklch(0.74 0.165 58)"
  brand-strong: "oklch(0.55 0.142 50)"
  accent: "oklch(0.40 0.09 255)"
  link: "oklch(0.45 0.10 250)"
  link-hover: "oklch(0.36 0.11 255)"
  canvas: "oklch(0.992 0.004 75)"
  surface: "oklch(0.974 0.005 75)"
  surface-2: "oklch(0.954 0.006 75)"
  line: "oklch(0.90 0.006 75)"
  ink: "oklch(0.235 0.013 260)"
  muted: "oklch(0.475 0.018 260)"
  faint: "oklch(0.585 0.016 260)"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 11vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3vw + 1rem, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2vw + 0.7rem, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.25rem"
  section: "3rem"
  section-lg: "4rem"
components:
  link-action:
    textColor: "{colors.link}"
    typography: "{typography.body}"
  link-action-hover:
    textColor: "{colors.link-hover}"
  nav-item:
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  nav-item-active:
    textColor: "{colors.ink}"
  eyebrow-label:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  callout:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "1rem"
  media-frame:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
---

# Design System: Atlanta BitDevs

## 1. Overview

**Creative North Star: "The Field Manual"**

This system reads like a well-set technical reference book that happens to live on the web and, one night a month, on a projector. It earns credibility through precision and legibility rather than polish or spectacle. The voice is open, grounded, and credible: it respects a reader of any skill level without gatekeeping, and it never reaches for crypto-marketing energy to manufacture excitement. Bitcoin orange is the one signal of brand warmth; everything else is sturdy ink, warm paper, and generous space.

The system is committed to two colors. Orange anchors identity and marks the live agenda; a deep slate ink carries structure, links, and reading furniture. Neutrals are tinted (warm in light, slate in dark) and never pure black or white. Type does the heavy lifting: a humanist grotesque for headings and UI, a screen-reading serif for long-form, and a mono reserved strictly for genuinely technical tokens. Layout favors a left-aligned reading column, varied vertical rhythm, and hairline structure over boxes and shadows.

It explicitly rejects four things, drawn from the product's anti-references: crypto/altcoin hype (no neon-on-black, no moon/rocket gimmickry), corporate SaaS templates (no gradient hero, no big-number hero-metric blocks, no identical icon-card grids), overdesigned flashiness (no decorative glassmorphism or heavy motion), and sterile minimalism (it keeps warmth and a local, human fingerprint).

**Key Characteristics:**
- Committed two-color palette: Signal Orange anchor, Slate Ink structure.
- Serif-for-reading, grotesque-for-headings, mono-for-technical-tokens.
- Hairline-and-tint depth; almost no shadow.
- Confident fluid type scale, varied spacing, left-aligned reading column.
- High contrast in both themes, tuned for projection at a distance.

## 2. Colors

A warm-anchored, committed two-color palette: one orange signal against slate-tinted ink and warm-paper neutrals. Values below are the light-theme canonical tokens; the dark theme remaps the same roles (see Named Rules).

### Primary
- **Signal Orange** (`oklch(0.74 0.165 58)`, brand): The single note of brand warmth. Reserved for the live agenda's category tick markers, key interactive emphasis (title hover), selection highlight, and small identity moments. It is a signal, not a wash.
- **Signal Orange, Strong** (`oklch(0.55 0.142 50)`, brand-strong): A darkened orange used when orange must carry text on a light surface (it meets contrast where the bright orange would not), such as a post title on hover.

### Secondary
- **Slate Ink** (`oklch(0.40 0.09 255)`, accent): The structural second color. Used for eyebrow labels, agenda subcategory labels, and small technical metadata. Cool counterweight to the warm orange.
- **Slate Link** (`oklch(0.45 0.10 250)`, link) and **Slate Link, Deep** (`oklch(0.36 0.11 255)`, link-hover): The link color and its hover. In dark mode, link hover shifts toward orange for warmth.

### Neutral
- **Warm Paper** (`oklch(0.992 0.004 75)`, canvas): The page background. Warm near-white, never `#fff`.
- **Paper Raised** (`oklch(0.974 0.005 75)`, surface) and **Paper Sunk** (`oklch(0.954 0.006 75)`, surface-2): Tonal layers for headers, code blocks, callouts, media frames.
- **Hairline** (`oklch(0.90 0.006 75)`, line): All borders and dividers. Structure is drawn with this, not with shadow.
- **Ink** (`oklch(0.235 0.013 260)`, ink): Primary text. A deep slate-tinted near-black.
- **Muted Ink** (`oklch(0.475 0.018 260)`, muted): Secondary text, ledes, previews.
- **Faint Ink** (`oklch(0.585 0.016 260)`, faint): Tertiary metadata (dates, list markers). Use only for large or non-essential text.

### Named Rules
**The Signal Rule.** Orange is a signal, never a surface. It marks and emphasizes (agenda ticks, hover, selection); it never fills a hero or a button background. If orange covers more than a small fraction of a screen, it has stopped being a signal.

**The Two-Theme Parity Rule.** Light and dark are co-equal, not a default plus an afterthought. Every role token (`canvas`, `ink`, `link`, `brand`...) is redefined under `.dark` in `app/globals.css`. Both themes are tuned high-contrast for projection: light is warm-paper and non-glaring, dark is deep slate ink (`oklch(0.205 0.018 260)`), never pure black.

**The Tinted-Neutral Rule.** No `#000`, no `#fff`. Light neutrals tint warm (hue ~75); dark neutrals tint slate (hue ~260). Chroma stays low (0.004 to 0.02).

## 3. Typography

**Display / Heading Font:** Hanken Grotesk (with system-ui, sans-serif)
**Body / Reading Font:** Literata (with Georgia, serif)
**Label / Mono Font:** Spline Sans Mono (with ui-monospace, monospace)

**Character:** A humanist grotesque that stays warm and legible at projection distance, paired with a screen-reading serif built for sustained long-form. The mono is a precision instrument, used only where the content is genuinely technical. The serif-body / sans-heading split is deliberate and load-bearing: it is what keeps the refreshed site recognizable to regulars.

### Hierarchy
- **Display** (Hanken Grotesk 800, `clamp(2.75rem, 11vw, 7rem)`, line-height 0.94, tracking -0.03em): The home hero wordmark only. One oversize moment per page, maximum.
- **Headline** (Hanken Grotesk 800, `clamp(2rem, 3vw + 1rem, 3.25rem)`, line-height 1.04, tracking -0.02em): Page titles (`h1`): event names, post titles, listing headers.
- **Title** (Hanken Grotesk 700, `clamp(1.6rem, 2vw + 0.7rem, 2.5rem)`, line-height 1.1): Section and category headings (`h2`, `h3`). On the agenda, `h3` categories get a leading orange tick.
- **Body** (Literata 400, 1.0625rem, line-height 1.7): All reading text. Capped at a 68 to 72ch measure on posts and pages; the event agenda opts out of the measure to use the full projection width.
- **Label** (Spline Sans Mono 500, 0.75rem, tracking 0.18em, uppercase): Eyebrows, dates, agenda subcategory labels, technical metadata.

### Named Rules
**The Mono-Is-Technical Rule.** Monospace appears only on genuinely technical or systematic tokens: dates, BIP/CVE numbers, addresses, inline code, and structural eyebrow labels. It is never a decorative shorthand for "developer." This community is authentically technical, so the mono reads as substance; used decoratively it would read as costume.

**The One-Display-Moment Rule.** Display type is a single oversize gesture (the hero wordmark). Do not stack multiple display-scale elements on one screen.

## 4. Elevation

The system is flat by default and builds depth from hairline borders and tonal surface layering, not shadow. Sticky chrome (the header) is separated by a single hairline border, not a drop shadow. The `canvas` / `surface` / `surface-2` trio provides quiet figure-ground separation for headers, code blocks, callouts, and media frames. The one ambient shadow in the system is the mobile nav menu popover, where a real overlay needs to read as lifted above content.

### Shadow Vocabulary
- **Menu overlay** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`, Tailwind `shadow-lg`): The mobile navigation popover only. The single legitimate ambient shadow.

### Named Rules
**The Hairline-First Rule.** Separation is drawn with the `line` token and tonal surface tints before any shadow is considered. If a surface needs definition, give it a border or a tonal step, not a glow. Reserve shadow for genuine overlays (menus, dialogs).

## 5. Components

The component voice is refined and restrained: chrome stays quiet, and type and spacing carry the work. Interactive elements are calm targets, not chunky buttons.

### Buttons / Actions
- **Shape:** This system has no filled buttons. Primary actions are confident text links, often with a trailing arrow icon (`See upcoming events →`).
- **Primary action** (`link-action`): Slate Link color (`{colors.link}`), semibold, sans, no underline by default, arrow icon at 1.25rem.
- **Hover / Focus:** Color shifts to Slate Link Deep (`{colors.link-hover}`) on hover; a 2px Signal Orange `:focus-visible` outline at 2px offset on all interactive elements.

### Links (in prose)
- **Style:** Slate Link color, underlined with a 3px offset and a faded underline (35% of the text color), which solidifies on hover. This is the reading-text link treatment, distinct from the chrome-level `link-action`.

### Chips / Labels (eyebrows)
- **Style** (`eyebrow-label`): Spline Sans Mono, uppercase, 0.18em to 0.22em tracking, in Slate Ink (`{colors.accent}`) or Faint Ink. Used above section headings and as agenda subcategory markers. No background, no border: it is a typographic label, not a pill.

### Cards / Containers
- **Corner Style:** Gently rounded. Media frames use `lg` (0.75rem); callouts use `md` (0.5rem).
- **Background:** Paper Sunk (`surface-2`) for callouts and media frames.
- **Shadow Strategy:** None. See Elevation. Definition comes from the `line` border and the tonal step.
- **Border:** Hairline (`line`) full borders only. Never a colored side-stripe.
- **Internal Padding:** Callouts 1rem; content sections use the section rhythm (3rem to 4rem vertical).
- **Note:** Content is not card-ified. The home and listing feeds are rhythm-separated rows (`PostPreview`), not a card grid.

### Inputs / Fields
- None in the current system. When introduced, follow the Hairline-First Rule: 1px `line` stroke, `canvas` background, `md` radius, and a 2px Signal Orange focus outline.

### Navigation
- **Style:** Sticky top header on `canvas` with a single hairline bottom border. Wordmark left (Hanken Grotesk 900, "Atlanta" in a lighter weight), nav links right.
- **States:** Links are Muted Ink by default, Ink on hover with a Paper Sunk hover fill; the active route is Ink (`aria-current="page"`). Theme toggle sits at the end of the nav.
- **Mobile:** Below `md`, nav collapses to a hamburger that opens a bordered, shadow-lg popover. The toggle reserves its slot before hydration to avoid layout shift.

### The Agenda (signature surface)
The event/topic-list page is the system's signature component: a live program projected at the meetup. It renders the reading styles at full width (`.mdx--wide`, opting out of the body measure). Section headings (`h2`) are hairline-divided; category headings (`h3`, e.g. Bitcoin, Lightning) carry a leading Signal Orange tick marker; subcategories (`h4`) render as mono uppercase labels in Slate Ink; topic links are large, calm, generously spaced rows a presenter can hit mid-discussion. Custom bullet markers (a small Faint Ink dot) replace default list discs.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Orange a signal: agenda ticks, hover emphasis, selection, small identity moments. Per the Signal Rule, never fill a hero or button with it.
- **Do** draw structure with the `line` hairline and `surface`/`surface-2` tints before reaching for shadow (Hairline-First Rule).
- **Do** use the serif (Literata) for all reading, the grotesque (Hanken Grotesk) for headings and UI, and reserve mono (Spline Sans Mono) for technical tokens only (Mono-Is-Technical Rule).
- **Do** cap reading measure at 68 to 72ch, and let the event agenda run full width for projection.
- **Do** keep both light and dark themes co-equal and high-contrast; redefine every role token under `.dark`.
- **Do** tint every neutral (warm in light, slate in dark); use OKLCH for all color.
- **Do** give every interactive element a visible 2px Signal Orange `:focus-visible` outline.

### Don't:
- **Don't** use crypto/altcoin hype visuals: no neon-on-black, no moon/rocket gimmickry, no speculative-trading energy.
- **Don't** fall into the corporate SaaS template: no gradient hero, no big-number hero-metric blocks, no identical icon-card grids.
- **Don't** overdesign: no decorative glassmorphism, no heavy or bouncy motion. Ease out only (quart/quint/expo); respect `prefers-reduced-motion`.
- **Don't** go sterile-minimal either: keep warmth and a local, human fingerprint (real meetup photos over abstract illustration).
- **Don't** use a colored side-stripe (`border-left`/`border-right` > 1px) on cards, callouts, list items, or alerts. Use full hairline borders or a tonal background instead.
- **Don't** use `#000` or `#fff`, gradient text, or mono as decoration.
- **Don't** card-ify content feeds; use rhythm-separated rows.
