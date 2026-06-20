# AGENTS.md

Operational guide for any AI coding agent (Claude Code, Cursor, Aider, GPT-based assistants, etc.) working on **luminaw.co**. Treat this file as the canonical contract. `CLAUDE.md` is a Claude-specific companion that defers to this document.

If something is not described here but matters, ask before changing it.

## Project shape

- **Type**: Static marketing site (Astro 6 → `dist/` static output, no server runtime).
- **Owner**: Lúmina W S.A.S, Medellín, Colombia.
- **Public URL**: `https://luminaw.co`.
- **Hosting**: Netlify (config in `netlify.toml`, `public/_headers`, `public/_redirects`).
- **Language**: Spanish (`es-CO`). All visible copy is in Spanish — keep it that way unless explicitly asked.

## Commands

```bash
npm run dev            # http://localhost:4321
npm run build          # static build → dist/ + sitemap-index.xml
npm run preview        # serve built dist/
npm run format         # prettier --write .
npm run format:check   # prettier --check . (CI gate)
npm run astro -- ...   # passthrough to the Astro CLI
```

Node `>= 22.12.0`. No test runner is configured — adding one is an explicit decision, not a side-effect.

## Doing work in this repo

### What you can do without asking

- Add or rewrite section copy **only when the task explicitly grants permission**.
- Refactor markup or class names within a section, as long as anchors (`id`), navbar order, and copy strings stay intact.
- Add new design tokens or BEM blocks to `src/styles/global.css`.
- Add new icons to `src/components/ui/Icon.astro` (single switch component, no new files).
- Update SEO meta, JSON-LD graph, `llms.txt`, `robots.txt` when product info changes.
- Tighten accessibility (ARIA, focus order, reduced-motion gates).

### What you must confirm first

- Changing **existing copy strings** in `Hero`, `Problem`, `Solution`, `TerraCore`, `WhyUs`, `FAQ`, `Contact`, `Footer`. The brand has been explicit about preserving wording.
- Renaming routes (`/terms`, `/privacy`, `/cookies`, anchor `id`s).
- Adding new third-party scripts, fonts, or external dependencies.
- Removing Marquee, Manifesto, or Stakes — they are decorative but intentional.
- Replacing the hero SVG, the TerraCore dashboard mock, or the TerraCore video.

### What you must never do

- Use a dash (`-`, `–`, `—`) in user-facing UI copy. No hyphen-as-connector, en dash, or em dash in rendered text (headings, leads, button labels, card copy, eyebrows, legal prose). Rewrite with a period, comma, colon, or split sentence. Exceptions: real compound words (`e-commerce`, `full-stack`), code, URLs/emails.
- Re-introduce `translateX` hover-translate effects. They were removed deliberately. The only allowed `translateX` lives in `@keyframes marquee`.
- Use icons on `.btn-primary` / `.btn-secondary`. Filled CTAs are text-only.
- Add `text-decoration: underline` to anchors that render as buttons. The reset block in `global.css` already handles this — extend it if you add a new button-like anchor class.
- Hard-code colors outside the token system. Use `var(--brand-blue)`, `var(--text-primary)`, etc.
- Commit `.env`, secrets, GA debug payloads, or the local `dist/` build.

## Architecture cheatsheet

```
src/pages/index.astro          ← nav-anchored section order
src/layouts/Layout.astro       ← <head> SEO + JSON-LD + global shell + script imports
src/components/sections/*.astro  ← Hero, Problem, Agitation, Marquee, Solution,
                                   Process, Manifesto, TerraCore, WhyUs, FAQ, Contact
src/components/ui/*.astro      ← NavBar, Footer, Loader, CookiesBanner, Icon, Button, Link
src/scripts/*.ts               ← vanilla TS, imported via <script>
src/styles/global.css          ← tokens + @theme + every BEM component (single file)
public/                        ← brand assets, icons, videos, robots.txt, llms.txt,
                                 _headers, _redirects
```

### Conventions that cut across files

1. **Ghost numbers follow navbar order**, not section order. When a navbar anchor changes, renumber every numbered section.
2. **`.surface-dark` flips tokens** for dark sections (Contact, Footer). On dark surfaces, `--border-strong` is _not_ flipped — use `rgba(255,255,255,0.14)` explicitly.
3. **Animated underline** lives on `.nav__link`, `.footer__col a`, `.service__cta`, and in-body legal anchors (via `background-image` gradient hack on legal pages). Pattern: `scaleX(0) origin:right` → `scaleX(1) origin:left` on hover. Buttons do **not** get this.
4. **Navbar markup is duplicated** between desktop (`.nav__links`) and mobile (`.nav__mobile`) — update both.
5. **Legal pages** all share the `<article class="legal"><div class="legal__body"><nav class="legal__toc">…<div class="legal__content">…` shape. TOC is sticky at ≥1024 px. Anchors are zero-padded (`#sec-01` … `#sec-10`).
6. **GA4 is consent-gated**. ID `G-RBNC0VP6D3` lives in `src/scripts/cookies.ts`. Loads only after `Accept`.
7. **Contact form posts to Formspree** (`xpqovooa`). Field IDs are `c-name / c-company / c-email / c-message`.
8. **`@/` resolves to `/src`** in both `tsconfig` and Vite. Always use it instead of `../../`.

### Brand voice + identity

- **Legal name**: Lúmina W S.A.S.
- **Email**: `contact@luminaw.co`.
- **WhatsApp**: `+57 310 828 3088`.
- **Tagline**: _"Creamos software. Los negocios lo rentan."_
- **Thesis line** (used in Manifesto + llms.txt): _"No vendemos tecnología. Vendemos operaciones que funcionan sin que tengas que pensar en ellas."_
- **Tone**: directo, breve, español colombiano. Sin jerga gringa ("leads", "stakeholders" se evitan en el copy público). Editorial, no marketing-fluff.

## Working with the design system

See [`DESIGN.md`](./DESIGN.md) for the full token + component reference. Quick rules:

- Typography pair: **Cabinet Grotesk** (display) + **Switzer** (body), loaded via Fontshare CDN preconnected from `Layout.astro`.
- Brand colors: `#407bff` (blue, principal), `#f5a623` (amber, strategic accent — fill-only; use `#8a5a06` `--brand-accent-ink` for amber text/small icons), `#1b1f28` (dark), `#dee9ff` (light), `#fafafa` (page bg). No greens.
- Radii are near-square: `0 / 2 / 4 px`. No box-shadow — elevation is expressed with 1 px borders.
- Spacing: section padding via `--space-section` (96 px default).
- Reduced motion is honored across cursor glow, scroll fade-up, loader, and the floating hero animation.

## Deployment guardrails

- The build must pass locally (`npm run build`) before opening a PR.
- `format:check` must be clean.
- Any new third-party origin needs a matching update to:
  - `<link rel="preconnect" / dns-prefetch>` in `Layout.astro`.
  - A future Content-Security-Policy if/when one lands in `netlify.toml`.
- Verification meta tags for Google Search Console, Bing Webmaster, Yandex, Facebook are placeholder comments in `Layout.astro` — replace, don't duplicate.

## When in doubt

Ask. The brand has corrected agents repeatedly on:

- preserving exact copy strings,
- nav alignment,
- which elements get underlines,
- ghost-num order,
- icon-vs-text on CTAs.

A short clarifying question costs less than a revert.
