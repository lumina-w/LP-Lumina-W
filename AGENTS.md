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

### Keep docs in sync (ALWAYS)

After **any** change, before you finish the task, ask: "Did this change anything the docs describe?" Dependencies (added/removed), folder structure, architecture, scripts, env vars, endpoints, backend/services, conventions, routes, brand/legal data — anything an agent reading the docs would now find wrong.

If yes, update **every** affected Markdown file in the same change: `AGENTS.md`, `CLAUDE.md`, `DESIGN.md`, and any other `.md` (README, etc.). You decide what counts as "important enough to document" — when unsure, document it.

**The invariant: the docs always describe the repo exactly as it is right now. Never leave a doc stale.** A change is not done until its docs match.

### UI changes: SEO + performance + a11y (ALWAYS)

Whenever you **create, edit, or delete** a section, page, or UI component, every one of the three checklists below must pass before the change is done. Non-negotiable, every time. Target: Lighthouse **≥ 95** in SEO, Performance, and Accessibility on the changed page.

**SEO (every page/section):**

- Exactly one `<h1>` per page; headings nest in order (`h1 → h2 → h3`, never skip a level).
- Unique, descriptive `<title>` (≤ 60 chars) and meta `description` (≤ 160 chars) per page, set via `Layout.astro` props — never duplicated across pages.
- Canonical URL present and correct (`trailingSlash: 'never'`); no accidental duplicate-content URLs.
- Semantic landmarks: `<header> <nav> <main> <section> <footer>`. Each `<section>` keeps its anchor `id` and a label (heading or `aria-label`).
- JSON-LD `@graph` in `Layout.astro` stays valid; update the relevant node (`WebPage`, `Organization`, `FAQPage`, `ProfessionalService`, `BreadcrumbList`) when the matching content changes. Validate against schema.org.
- OG + Twitter tags resolve (title, description, image, `og:image:alt`).
- Every `<img>` has descriptive `alt` (empty `alt=""` only for purely decorative); real `<a href>` for internal links (no JS-only navigation).
- `hreflang` alternates for `es` ⇄ `en` stay in sync when a route is added/removed.
- **On any content/route/product change, update the discovery + machine files in the same commit:** `public/llms.txt`, `public/robots.txt`, the sitemap filter in `astro.config.mjs` (output is regenerated on build), and the JSON-LD/meta above. Keep brand/legal data (`contact@luminaw.co`, WhatsApp, `Lúmina W S.A.S`) consistent across all of them.

**Performance (every page/section):**

- Static-first. No client JS unless required; if needed, vanilla TS imported inline (`src/scripts/*.ts`), kept minimal. No new framework runtime without confirmation.
- Images: modern format (`.webp`), explicit `width`/`height` (zero CLS), `loading="lazy"` + `decoding="async"` for below-the-fold; the LCP image (hero) loads eager / preloaded, never lazy. Use `srcset`/`sizes` for responsive art.
- No layout shift: reserve space for any async/animated element. CLS target ≈ 0.
- Fonts via Fontshare with `preconnect`/`dns-prefetch` in `Layout.astro` and `font-display: swap`. No new font without confirmation.
- CSS stays in the single `global.css`; reuse tokens/BEM, no unused bloat, no `box-shadow` (design uses 1px borders).
- Third-party scripts `async`/`defer` and consent-gated where applicable (GA loads only after `Accept`).
- Honor `prefers-reduced-motion` for any new motion (mirror the existing cursor/scroll/loader gates).
- Keep the immutable cache headers in `netlify.toml` / `public/_headers` covering any new asset type.

**Accessibility (WCAG 2.2 AA, every page/section):**

- Semantic HTML first; ARIA only to fill gaps, never to replace native elements.
- Fully keyboard operable; visible focus on every interactive element (`:focus-visible`); logical tab/DOM order; no keyboard traps.
- Every form control has an associated `<label>`; required fields marked (visually + `required`); errors/status announced via `role="alert"` / `role="status"` / `aria-live`.
- Color contrast ≥ **4.5:1** for text, ≥ **3:1** for large text, icons, and UI borders — verify on `.surface-dark` too.
- Images: meaningful `alt`; decorative content `alt=""` or `aria-hidden="true"`.
- One set of landmarks per page; correct heading outline (shared with SEO above).
- `lang` attribute matches the locale (`es` / `en`); `hreflang` alternates correct.
- Touch/click targets ≥ 24×24 px (WCAG 2.2 `2.5.8`); aim for 44×44.
- Any element with `.animate-on-scroll` MUST be reached by the IntersectionObserver or it stays `opacity: 0` — verify it animates in, or do not add the class.
- Honor `prefers-reduced-motion` (shared with Performance above).

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
- Leave documentation out of sync with the repo after a change. See [Keep docs in sync](#keep-docs-in-sync-always).

## Architecture cheatsheet

```
src/pages/index.astro          ← nav-anchored section order
src/layouts/Layout.astro       ← <head> SEO + JSON-LD + global shell + script imports
src/components/sections/*.astro  ← Hero, Problem, Agitation, Marquee, Solution,
                                   Process, Manifesto, TerraCore, WhyUs, FAQ, Contact
src/components/ui/*.astro      ← NavBar, Footer, Loader, CookiesBanner, Icon, Button, Link
src/scripts/*.ts               ← vanilla TS, imported via <script>
src/styles/global.css          ← tokens + @theme + every BEM component (single file)
netlify/functions/contact.mts  ← contact-form backend (v2 fn → /api/contact)
supabase/schema.sql            ← contact_submissions table DDL (run once in Supabase)
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
7. **Contact form posts to the own backend** `/api/contact` (Netlify Function v2 at `netlify/functions/contact.mts`): validates → stores in Supabase (`contact_submissions`) → notifies via Resend. Field `name` attrs are `name/company/email/phone/need/stage/message` (IDs `c-…`), all required (HTML + server). Hidden `website` honeypot. Env: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` (`.env.example`). Local dev needs `npm run dev:netlify` (`astro dev` does not run functions).
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
