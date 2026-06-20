# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Lúmina W S.A.S** (`luminaw.co`) — software-agency landing built on **Astro 6 + Tailwind v4 + TypeScript**, with React installed but currently unused in the rendered output. Single language: Spanish (Colombia, `es-CO`). Deploys to **Netlify** (`netlify.toml` + `public/_headers` + `public/_redirects`).

## Commands

```bash
npm run dev          # astro dev — http://localhost:4321
npm run build        # static build → dist/  (also generates sitemap-index.xml)
npm run preview      # serve built output locally
npm run astro -- ... # astro CLI passthrough (e.g. `npm run astro -- add <integration>`)
npm run format       # prettier --write .
npm run format:check # prettier --check . (CI gate)
```

Node `>= 22.12.0` (enforced by `package.json`, mirrored in `netlify.toml`). No test runner is configured.

## Architecture

### Page composition is anchor-driven

`src/pages/index.astro` mounts sections in a fixed order. Each section's `id` must match an anchor in `src/components/ui/NavBar.astro` and `Footer.astro`. The ghost ornament (`.ghost-num`, top-right of every section's `s-head`) is a **faded context word** mirroring the navbar label (not a decorative numeral) — it tells the user where they are in the conversation. When you add, remove, or reorder a section, set its `.ghost-num` text to the section's navbar label, not a number.

Current navbar order: `Hero (—) · Fork=Empieza · Problem=Problema · Solution=Servicios · Process=Proceso · WhyUs=Nosotros · TerraCore=Producto · FAQ · Contact=Contacto`. Hero carries no ghost word. Marquee, Manifesto, and Agitation/Stakes sit between sections without anchors or ghost words (decorative interleave). The `.ghost-num` class name is retained for CSS continuity even though it now renders a word.

The navbar is trimmed to four top-level items — `Servicios · Proceso · Producto▾ · Nosotros` plus the `Agenda llamada` CTA. Only `Producto▾` is a dropdown menu; it hover-opens on `(hover: hover) and (pointer: fine)` plus click-toggle for keyboard/touch. Its contents come from the `nav.productMenu` block in `es.ts`/`en.ts` (the single source — don't hardcode items in markup): a bold `Ver todos los productos` header (`.nav__dropdown-link--all`) linking to the `/productos` page, then one entry per product. Each product entry carries a `status` (`live`/`soon`) that drives a status dot (`.nav__dot--live/--soon`) and a badge (`.nav__badge--live/--soon`), and links to its own landing in a new tab (TerraCore → `terracoreapp.co`, Root → `wavival.dev/root`). Demoted sections (Inicio, Empieza, Problema, FAQ, Blog) stay reachable via scroll and the Footer, which still lists every section. Logic lives in `src/scripts/nav.ts`. When adding nav items, update both desktop (`.nav__links`) and mobile (`.nav__mobile`) markup in `NavBar.astro` — they are duplicated, not shared.

### Single CSS source of truth

`src/styles/global.css` holds the entire design system: Fontshare import, `@theme` tokens (Tailwind v4 inline theme), `:root` design tokens, base typography, `.btn-*` primitives, every section's layout (`.hero`, `.features`, `.service`, `.terracore`, `.tc-dash__*`, `.why`, `.faq`, `.contact`, `.footer`, `.legal__*`, `.process-track`, `.portal`, `.marquee`, `.manifesto`, `.stakes-band`), nav (`.nav`, dropdowns, mobile menu), loader, cursor glow, scroll animations. Most components use semantic BEM classes from this file rather than utility classes; the `tailwind.config.mjs` exists primarily so Tailwind v4 can also tree-shake utilities used in the few inline-styled spots and legal pages.

When applying typography, prefer `var(--font-display)` (Cabinet Grotesk 700/800) for headings and `var(--font-body)` (Switzer 400/500/600) for prose. Brand palette: blue is **principal** (`--brand-blue #407bff` — links, tags, TerraCore, focus), amber is the **strategic accent** (`--brand-accent #f5a623` — primary-button bg, eyebrow dash, highlighted borders, marquee/hero shapes), plus `--brand-dark #1b1f28`, `--brand-light #dee9ff`, `--bg-page #fafafa`. Green is reserved for **one** purpose: the **live/active product status** signal (TerraCore preventa) on dark surfaces — `#22c55e` dot + `#6ee7a0` text — shared by the `Producto▾` dropdown (`.nav__dot--live`, `.nav__badge--live`) and the products page (`.prod-card__status--live`). The `soon`/próximamente status uses amber instead (`var(--brand-accent)` dot, `#f5c97a` text). Outside that status signal there are **no greens** (the old green _accent_ was replaced by amber); never use green for accents, links, or buttons. Amber `#f5a623` is fill-only: as text or a small icon on light surfaces use `--brand-accent-ink #8a5a06`, and primary-button text is dark (`--brand-dark`), never white. The system is editorial/square — radii are `0/2/4px` and there is no `box-shadow`; elevation is expressed with 1px borders.

### Dark surfaces flip tokens via `.surface-dark`

Sections like Contact and the Footer use `class="surface-dark"`, which redefines `--bg-card`, `--text-primary`, `--text-muted`, and `--border-base` so child components render correctly on dark without bespoke classes. When adding a new dark section, attach `surface-dark` rather than overriding colors per element. The `--border-strong` token is **not** flipped — it remains `#0f0f12` (invisible on dark), so on dark surfaces use `rgba(255,255,255,0.14)` explicitly (see `.contact__form`).

### Animated-underline contract

`.nav__link`, `.footer__col a`, `.service__cta`, and legal-page in-body anchors use a `scaleX` + `transform-origin` shift pattern (origin `right` → `left` on hover; back to `right` on hover-out) so the line enters left-to-right and exits right-to-left. The `.btn-primary` / `.btn-secondary` / `.btn-ghost` buttons are filled CTAs and **do not** get this underline. Default `a:hover` adds `text-decoration: underline` globally, so when adding a new anchor with button-like styling, add it to the `a.btn-…, a.<class>` reset block in `global.css` (around lines 130–161) to prevent double-underline.

### CTAs are text-only — no arrows or icons (buttons _and_ links)

Design rule: every CTA carries **label text only** — both `<button>`/`.btn-*` and CTA-style anchors/links (`.service__cta`, `.fork__cta`, `.prod-card__cta`, `.nav__cta`, the `Button.astro` wrapper, and any new "Saber más / Solicitar / Conocer …" link). Never add arrow glyphs (`→ › » ↗ ⟶`), `Icon`/SVG children, or chevron pseudo-elements to a CTA. The `.service__cta::after` is the animated underline (`content: ''`) — that's allowed; an arrow is not. Icons stay fine in genuinely non-CTA contexts: nav burger/chevrons, Footer social links, WhatsApp FAB, decorative card/feature badges (Problem/Process/Solution/WhyUs/TerraCore/Fork category icons), FAQ accordion `+`. The prohibition is specifically the interactive call-to-action element, button or link.

### `translateX` is reserved for the marquee

`@keyframes marquee` is the only intentional `translateX` animation. Other interactions use `translateY` (button active, form field entrance, scroll-fade-up) or opacity/scaleX (underlines, dropdowns). Don't reintroduce `translateX` hover indents — past iterations had them and they were explicitly removed.

### Scripts are vanilla TS, imported inline

`src/scripts/*.ts` files run in the browser. They're imported via `<script>import '@/scripts/foo.ts';</script>` in `Layout.astro` (global) or the relevant component (e.g. FAQ.astro imports `faq.ts`). All scripts query the DOM by ID/class and bind listeners; nothing is reactive or framework-bound. Watch for:

- **`nav.ts`** — scroll-listener (no `.scrolled` state currently, nav bg is always dark), mobile burger, dropdown groups (`[data-nav-group]`).
- **`cookies.ts`** — gates Google Analytics 4 (`G-RBNC0VP6D3`, hardcoded). GA loads only after the user clicks Accept on the banner; `localStorage` key is `lw_cookies` with values `accepted` / `rejected`. The Cookies policy text already documents this flow — update both if you change it.
- **`cursor.ts`** — radial gradient div `#cursor-glow` lerps toward pointer at 0.18; auto-hidden on `(pointer: coarse)` or `prefers-reduced-motion`.
- **`scrollAnimations.ts`** — single IntersectionObserver, threshold 0.12, **unobserves after first hit**. The fallback in `<noscript>` (in `Layout.astro`) forces `.animate-on-scroll` visible if JS fails.
- **`contact.ts`** — POSTs JSON to the own backend `/api/contact` (Netlify Function v2 at `netlify/functions/contact.mts`), which validates, stores the lead in **Supabase** (`contact_submissions`, schema in `supabase/schema.sql`) and notifies via **Resend**. Form field `name` attrs are `name/company/email/phone/need/stage/message` (input IDs prefixed `c-…`); all are required (HTML `required` + server-side). A hidden `website` honeypot field traps bots. The script also sends `locale`/`source` metadata. Env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` (see `.env.example`). Local dev needs `netlify dev` (functions don't run under `astro dev`).

### Legal pages share a layout convention

`/terms`, `/privacy`, `/cookies` all wrap content in:

```html
<article class="legal">
  <header class="legal__head">…</header>
  <p class="legal__intro">…</p>
  <div class="legal__body">
    <nav class="legal__toc">…</nav>
    <div class="legal__content">
      <section id="sec-01" class="legal__section">…</section>
      …
    </div>
  </div>
</article>
```

The TOC is **sticky on the left at ≥1024px** (`position: sticky; top: 88px`) and inline above content on mobile. Anchors use `#sec-01..#sec-10` zero-padded. When editing legal copy, keep the TOC `sections` array (in each page's frontmatter) in sync with the actual `<section>` order — the TOC is generated from it.

### SEO + production surface

- **`Layout.astro`** owns canonical/OG/Twitter/JSON-LD (`@graph` with `Organization` + `WebSite` + `WebPage`). Verification meta tags for Google/Bing/Yandex/Facebook are placeholder comments — paste IDs there before deploy.
- **`public/robots.txt`** explicitly allows ~20 named AI crawlers (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, etc.). This is intentional: the site is commercial and content is meant to be cited by LLMs.
- **`public/llms.txt`** follows `llmstxt.org` convention — keep it updated when product pricing, retainer terms, or services change. It mirrors the source-of-truth info from the landing copy and Terms page.
- **`netlify.toml`** + **`public/_headers`** carry security headers (HSTS preload, X-Frame, X-Content-Type, Referrer-Policy, Permissions-Policy) and immutable cache for `/brand`, `/icons`, `/images`, `/_astro`. Redirects route old `/legal/*` paths to current `/terms`, `/privacy`, `/cookies`.
- **`astro.config.mjs`** configures `@astrojs/sitemap` to filter out `/404`, set `changefreq=monthly`, `priority=0.7`, fresh `lastmod` per build. Output: `dist/sitemap-index.xml` → `dist/sitemap-0.xml`.

### Path alias

`@/` resolves to `/src` (configured in both `tsconfig.json` paths and `astro.config.mjs` Vite resolver). Always import via `@/components/...`, `@/scripts/...`, `@/layouts/...`, `@/styles/...` rather than relative paths.

## Editing conventions

- **ALWAYS keep docs in sync with the repo.** After any change, before finishing, check whether it affects documentation: dependencies (added/removed), folder structure, architecture, scripts, env vars, endpoints, backend/services, conventions, routes, or brand/legal data. If it does, update **every** affected Markdown file in the same change (`AGENTS.md`, `CLAUDE.md`, `DESIGN.md`, and any other `.md`). You decide what is important enough to document; when unsure, document it. The invariant: docs always describe the repo exactly as it is now. A change is not done until its docs match. (`AGENTS.md` is the canonical agent contract; this file defers to it.)
- **ALWAYS apply SEO + performance + a11y best practices on every UI change.** Whenever you create, edit, or delete a section, page, or component, all three checklists must pass (target Lighthouse ≥ 95 each). **SEO:** one `<h1>`/page, ordered headings, unique `<title>` ≤ 60 + meta description ≤ 160 via `Layout.astro` props, correct canonical (`trailingSlash: never`), semantic landmarks, valid JSON-LD `@graph` (`WebPage`/`Organization`/`FAQPage`/`ProfessionalService`), OG/Twitter tags, `alt` on every `<img>`, real `<a href>`, `hreflang` es⇄en. On any content/route/product change, update `public/llms.txt`, `public/robots.txt`, the sitemap filter in `astro.config.mjs`, JSON-LD, and meta in the same commit, with brand/legal data consistent. **Performance:** static-first, minimal inline vanilla TS, `.webp` with explicit width/height (zero CLS), lazy + `decoding="async"` below the fold but eager/preloaded LCP hero, no layout shift, `font-display: swap`, single `global.css` (no bloat, no `box-shadow`), async/deferred + consent-gated third-party, honor `prefers-reduced-motion`, immutable cache headers for new asset types. **A11y (WCAG 2.2 AA):** semantic HTML first, full keyboard operability + visible `:focus-visible`, `<label>` per control + announced errors/status (`role="alert"`/`status`), contrast ≥ 4.5:1 text / 3:1 large+UI (check `.surface-dark` too), decorative imgs `alt=""`/`aria-hidden`, correct `lang`, touch targets ≥ 24×24, and any `.animate-on-scroll` element must be reached by the IntersectionObserver or it stays invisible. Full detail in `AGENTS.md` → "UI changes: SEO + performance + a11y".
- **ALWAYS mirror every UI change in both languages.** The site is bilingual (es default + en). Whenever you create, edit, or delete a UI section, component, or page, replicate the same change in its English counterpart in the same commit: copy lives in `src/i18n/es.ts` + `src/i18n/en.ts` (every key must exist in both — `en.ts` is typed `: Dictionary` and breaks the build if a key is missing), and any standalone page added under `src/pages/` needs its en twin under `src/pages/en/` (register locale-specific slugs in `localizedPages` in `src/i18n/utils.ts`). Shared markup (`.astro`) and `global.css` already serve both locales, so structure/style-only changes need no copy mirroring — but any new or changed string, label, alt text, or route must land in both dictionaries. A UI change is not done until es and en match.
- **NEVER use a dash (`-`, `–`, `—`) in user-facing UI copy.** No hyphen-as-connector, en dash, or em dash in any rendered text (headings, leads, button labels, card copy, eyebrows, etc.). Rewrite with a period, comma, colon, or split sentence instead. Applies to all `.astro` UI strings and legal-page prose. Exceptions: real compound words (`e-commerce`, `full-stack`), code, URLs/emails, and non-prose attributes.
- **Don't change existing copy strings** unless the task explicitly says so — past iterations have called this out repeatedly. Replace markup/structure freely, but preserve `<h1>/<h2>/<p>` text content verbatim.
- **No `.animate-on-scroll` without IntersectionObserver visibility**: every element with that class starts at `opacity: 0`. If you forget to apply the class to a section the script targets, content stays invisible until you also remove the class or the noscript fallback fires.
- **GA4 ID lives in `src/scripts/cookies.ts`**, not in env. If switching to env-injected (`PUBLIC_GA_ID`), update both the script and the `<link rel="dns-prefetch">` to remain consistent.
- **`react()` integration is installed** (`@astrojs/react`) but nothing currently renders React. Leaving it in keeps the dev server quiet and lets us drop `.tsx` islands later without re-adding the integration.

## Branding / legal anchors

The legal entity is **Lúmina W S.A.S**, domiciled in Medellín, Antioquia, Colombia. Public contact is `contact@luminaw.co` and WhatsApp `+57 310 828 3088`. These appear in the Footer brand block, Schema.org `Organization`, `llms.txt`, and the three legal pages — keep them in sync when one changes.
