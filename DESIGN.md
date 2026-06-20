# DESIGN.md

Reference for the Lúmina W landing design system. Single source of truth is `src/styles/global.css`; this document explains _why_ the tokens and components are shaped the way they are.

The system is deliberately **editorial, square, sober**. Not playful, not maximalist, not glassmorphism. Closer in spirit to a print publication than a SaaS dashboard.

## Tokens

### Brand

| Token                 | Value     | Used for                                                                                           |
| --------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| `--brand-blue`        | `#407bff` | Links, tags, focus rings, TerraCore product, micro-accents                                         |
| `--brand-dark`        | `#1b1f28` | Nav, footer, dark surfaces, body on dark, primary-button text                                      |
| `--brand-light`       | `#dee9ff` | Tints inside dark sections, hero polygons                                                          |
| `--brand-accent`      | `#f5a623` | Amber. Strategic fills: primary-button bg, eyebrow dash, highlighted borders, marquee/hero shapes  |
| `--brand-accent-deep` | `#d9881a` | Amber button hover                                                                                 |
| `--brand-accent-ink`  | `#8a5a06` | Amber **as text/icon on light surfaces** (readable; the bright `#f5a623` fails WCAG as small text) |

Blue is the **principal** color (links + product + accents). Amber is the **strategic accent** for conversion/attention spots — used scarcely. Primary buttons are amber with dark text (white on `#f5a623` is illegible). There are no greens; the prior green accent was fully replaced by amber.

### Surfaces

| Token       | Value                   | Notes                                                                      |
| ----------- | ----------------------- | -------------------------------------------------------------------------- |
| `--bg-page` | `#fafafa`               | Neutral, almost white. Replaces a blue-tinted page from the legacy design. |
| `--bg-card` | `#ffffff`               | Inside dark surfaces, redefined to `#1b1f28`.                              |
| `--bg-soft` | `#f4f4f5`               | Subtle hover/inset fill. On dark: `#14171e`.                               |
| `--bg-blur` | `rgba(64,123,255,0.04)` | Almost imperceptible blue overlay.                                         |

`.surface-dark` is the toggle for dark sections. It rebinds the tokens above so children render correctly without bespoke classes. The Footer and Contact section use it.

### Typography

| Token            | Value                     | Used for                          |
| ---------------- | ------------------------- | --------------------------------- |
| `--font-display` | `Cabinet Grotesk 700/800` | All headings, hero text, marquees |
| `--font-body`    | `Switzer 400/500/600`     | Paragraphs, labels, form fields   |

Both are loaded from Fontshare. `Layout.astro` adds `preconnect` + `dns-prefetch` to `https://api.fontshare.com`.

Type scale (clamp-based, mobile → desktop):

| Heading | Range                            | Letter-spacing |
| ------- | -------------------------------- | -------------- |
| `h1`    | `clamp(2.25rem, 3.6vw, 3.25rem)` | `-0.035em`     |
| `h2`    | `clamp(1.75rem, 2.6vw, 2.25rem)` | `-0.025em`     |
| `h3`    | `clamp(1.25rem, 1.8vw, 1.5rem)`  | `-0.025em`     |
| body    | `1rem` / `0.9375rem`             | normal         |
| small   | `0.875rem`                       | normal         |

Headings are `text-wrap: balance`. Paragraphs are `text-wrap: pretty`.

### Text colors

| Token                  | Value     | Used for                           |
| ---------------------- | --------- | ---------------------------------- |
| `--text-primary`       | `#0f0f12` | Near-black, the editorial default. |
| `--text-muted`         | `#5b5f66` | Subdued body, descriptions, leads. |
| `--text-faint`         | `#8a8e95` | Numerals, monospace labels.        |
| `--text-button`        | `#ffffff` | Filled CTAs.                       |
| `--text-on-dark`       | `#f5f5f5` | Body text on dark sections.        |
| `--text-on-dark-muted` | `#a1a5ad` | Muted text on dark.                |

### Radii + elevation

| Token           | Value   | Used for                             |
| --------------- | ------- | ------------------------------------ |
| `--radius-sm`   | `0`     | Square corners.                      |
| `--radius-md`   | `2px`   | Buttons, inputs (almost square).     |
| `--radius-lg`   | `4px`   | Subtle rounding for cards if needed. |
| `--radius-pill` | `999px` | Only for avatars and the focus dot.  |

`--shadow-base` is `none`. Elevation is communicated with 1 px borders, not shadows.

### Spacing

| Token             | Value  | Override class                                                                                                                    |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `--space-section` | `96px` | `.density-compact { 64px }` / `.density-spacious { 128px }` are legacy hooks from the design kit; current build uses the default. |

## Components

### Buttons

`.btn-primary` (filled blue), `.btn-secondary` (white with strong border that inverts on hover), `.btn-ghost` (transparent).

- **No animated underline on buttons.** Past iterations added one — it was removed because filled CTAs look like normal buttons.
- **No icons on buttons.** Arrow-rights were stripped from every primary/secondary CTA. The accordion `+` icon inside FAQ is the only icon on a button-like control (it's an affordance, not a CTA decoration).
- `:active` shifts `translateY(1px)`. `:hover` only changes color, never position.

### Animated underline (anchors only)

Applied to `.nav__link`, `.footer__col a`, `.service__cta`, and in-body anchors on legal pages.

```css
::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 320ms ease;
}
:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
}
```

Origin swap is what creates the **enter left-to-right, exit right-to-left** illusion. Legal pages use a `background-image` gradient variant on inline anchors so the underline lives flush with text instead of below it.

Default `a:hover { text-decoration: underline }` is reset for all button-like anchors via the explicit allowlist near the top of `global.css`. Add new button-like classes to that list before applying them.

### Eyebrow

Section kickers use `.eyebrow` — a 12 px uppercase Switzer line with a 20 px leading dash. It's the small "EL PROBLEMA", "LA SOLUCIÓN", "POR QUÉ LÚMINA W" label above each `<h2>`.

### Section heading + ghost numeral

The `.s-head` block holds the eyebrow + h2 + lead + ghost word. The `.ghost-num` element is absolutely positioned, `text-wrap: balance`-free, and uses a near-transparent color (`rgba(15,15,18,0.04)` on light; `rgba(255,255,255,0.05)` on dark surfaces).

**`.ghost-num` renders a faded context word, not a numeral** — the section's navbar label, so the reader knows where they are. (The class name `.ghost-num` is retained for CSS continuity from the old numbered design.) The word comes from each locale's dictionary (`t.ghost`), so it's translated automatically. Current mapping (es anchors shown; en anchors differ via `anchorSlugs` in `i18n/utils.ts`):

| Section   | es anchor     | Ghost word   |
| --------- | ------------- | ------------ |
| Fork      | `#empieza`    | `Empieza`    |
| Problem   | `#problema`   | `Problema`   |
| Solution  | `#servicios`  | `Servicios`  |
| Process   | `#proceso`    | `Proceso`    |
| WhyUs     | `#nosotros`   | `Nosotros`   |
| TerraCore | `#terracore`  | `Producto`   |
| FAQ       | `#faq`        | `FAQ`        |
| Contact   | `#contacto`   | `Contacto`   |

Hero carries no ghost word. Marquee, Manifesto, and Stakes/Agitation have none (decorative interleave). Note the rendered order places WhyUs before TerraCore.

### Grids with hairline borders

`.features`, `.services`, `.why`, `.terracore__modules`, and `.tc-dash__feats-grid` all share the same pattern: a CSS grid with `border-top + border-left` on the container and `border-right + border-bottom` on each cell. The result is a clean 1 px lattice with no double lines.

Card hover: background nudges from `var(--bg-card)` to `var(--bg-soft)` (or, on dark, `rgba(255,255,255,0.05)`). Nothing translates.

### TerraCore dashboard mock

`.tc-dash` is a fake browser frame: header bar with traffic-light dots and a contextual label, KPI strip (`.tc-dash__kpis`), and a 2×3 features grid (`.tc-dash__feats-grid`). Everything is HTML/CSS — no SVG generation. The accompanying production video (`/videos/terracore.mp4`) sits below the section grid as a wide aspect-ratio block.

### Forms (Contact)

`.contact__form` lives on a `.surface-dark` section so the border is explicitly `rgba(255,255,255,0.14)` (not `--border-strong`, which would be invisible against the dark bg). Inputs animate `border-color`, `box-shadow`, and `background` on focus; labels shift letter-spacing slightly to read as "active". Fields stagger-fade-in via `@keyframes fieldIn` (`translateY` only — no X).

Success state (`.contact__success.show`) replaces the form with a centered heading + line.

### Marquee

`.marquee` scrolls left infinitely (`@keyframes marquee { translateX(0) → translateX(-50%) }`). Items are duplicated in the markup to allow seamless looping. **This is the only allowed `translateX` animation in the codebase.**

### Manifesto

A single typographic moment — large Cabinet Grotesk quote, small monospace "Tesis fundacional" label, brand attribution line with a 36 × 1 px rule before it.

### Legal pages

Two-column layout at ≥1024 px: 260 px sticky TOC on the left (`position: sticky; top: 88px`), prose column on the right. TOC items are numbered via a CSS counter (`counter(toc, decimal-leading-zero)`). Numbered sections use `.legal__section` + `.legal__section-head` (number + h2). In-body anchors use the `background-image` underline variant so the line sits at the baseline.

### Navbar

Always-dark (`var(--brand-dark)`), 64 px high. Desktop ≥1024 px shows a trimmed link strip — `Servicios · Proceso · Producto▾ · Nosotros` plus the `Agenda llamada` CTA. Only `Producto▾` is a dropdown; below 1024 px everything collapses to a burger that opens `.nav__mobile`. The dropdown opens on hover (`@media (hover:hover) and (pointer:fine)`) **and** on click; the `::before` bridge keeps the hover area continuous across the gap between button and panel. The dropdown's items come from `nav.productMenu` in `es.ts`/`en.ts` (not hardcoded): a bold `Ver todos los productos` header linking to the products page, then one entry per product with a `status` dot/badge (`--live` green / `--soon` amber). Demoted sections (Inicio, Empieza, Problema, FAQ) stay reachable via scroll + Footer.

### Footer

Four-column grid at ≥780 px: brand block (logo + legal name + dev attribution + social icons) + three link columns (Empresa, Servicios, Legal). Same animated-underline pattern as the navbar.

### Loader

`#loader` is full-screen `var(--brand-dark)` with a pulsing logo and a 128 × 2 px progress bar that fills to 100% on `window.load`. Fades out 480 ms and removes itself from the DOM. Respects `prefers-reduced-motion`.

### Cursor glow

`#cursor-glow` is a 256 × 256 px radial-gradient div that lerps toward the pointer (0.18 ease) on `pointer: fine` devices. Hidden on coarse pointer or `prefers-reduced-motion`. Subtle blue tint that gives the page a faint highlight.

## Motion principles

- **Reduce motion** is honored in five places: scroll fade-up, cursor glow, hero floating SVG, loader animation, and form-field stagger.
- **Easings** default to `cubic-bezier(0.4, 0, 0.2, 1)` for entry/exit; spring-like overshoots are not used.
- **No `translateX`** outside the marquee. Hover-translate indents have been removed twice and should not come back.
- **Underlines** enter left-to-right (origin: left), exit right-to-left (origin: right).

## Accessibility

- Skip link at the top of `<body>`, target `#main-content`.
- All decorative SVGs are `aria-hidden="true"`.
- All form inputs have associated `<label for="…">`.
- Ghost-nums and the floating WhatsApp FAB are `aria-hidden`.
- Mobile menu toggles `aria-expanded` on the burger and `aria-hidden` on the panel.
- `focus-visible` outlines are blue (`--accent-link`) with `outline-offset: 3px`.
- Color contrast: brand-blue on white passes WCAG AA for normal text; `--text-muted #5b5f66` on `--bg-page #fafafa` is ~6:1. Amber `#f5a623` is a **fill-only** color (passes as a shape/border, fails as small text on light) — use `--brand-accent-ink #8a5a06` whenever amber must be text or a small icon; primary-button text is dark `--brand-dark`, never white.

## Files of interest

| File                                       | Why it matters                                         |
| ------------------------------------------ | ------------------------------------------------------ |
| `src/styles/global.css`                    | Every token + every BEM block. Single source of truth. |
| `src/layouts/Layout.astro`                 | SEO/OG/Schema + global shell + script imports.         |
| `tailwind.config.mjs`                      | Tailwind v4 theme extension (mirrors `@theme` block).  |
| `astro.config.mjs`                         | Sitemap config, prefetch policy, Vite tweaks.          |
| `src/components/sections/*.astro`          | Section markup that uses the BEM blocks.               |
| `src/i18n/{es,en}.ts`                      | Bilingual copy dictionaries (every key in both).       |
