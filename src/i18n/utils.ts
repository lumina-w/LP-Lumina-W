// i18n runtime helpers.
// Astro infers the active locale from the URL (root => 'es', /en/* => 'en').
// Components resolve copy via `useTranslations(Astro.currentLocale)`.
import { es } from './es';
import { en } from './en';
import type { Dictionary } from './es';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

const dictionaries: Record<Lang, Dictionary> = { es, en };

export function getLang(locale: string | undefined): Lang {
  return locale && locale in dictionaries ? (locale as Lang) : defaultLang;
}

export function useTranslations(locale: string | undefined): Dictionary {
  return dictionaries[getLang(locale)];
}

// Section anchor slugs per locale. Authored markup uses the English canonical
// key (fork, services, process, us, contact…); the slug actually rendered in
// the URL and the section `id` is localized so es reads '/#proceso' and en
// reads '/en#process'. Section ids resolve via anchorId(); in-page hrefs flow
// through localizePath(), which re-slugs any '/#key' it receives.
export const anchorSlugs: Record<Lang, Record<string, string>> = {
  es: {
    hero: 'inicio',
    fork: 'empieza',
    problem: 'problema',
    services: 'servicios',
    process: 'proceso',
    us: 'nosotros',
    terracore: 'terracore',
    faq: 'faq',
    contact: 'contacto',
  },
  en: {
    hero: 'home',
    fork: 'start',
    problem: 'problem',
    services: 'services',
    process: 'process',
    us: 'about',
    terracore: 'terracore',
    faq: 'faq',
    contact: 'contact',
  },
};

// Canonical anchor key -> locale slug, for a section's `id` attribute.
// anchorId('process', 'es') => 'proceso'; anchorId('process', 'en') => 'process'.
export function anchorId(key: string, locale: string | undefined): string {
  return anchorSlugs[getLang(locale)][key] ?? key;
}

// Standalone pages whose slug differs by locale. Authored markup always uses
// the es canonical path ('/productos'); localizePath()/alternatePath() resolve
// it to '/en/products' on en. Keyed by es path, the matching en page lives at
// src/pages/en/products.astro.
export const localizedPages: { es: string; en: string }[] = [
  { es: '/productos', en: '/products' },
];

// Prefix a root-relative path with the locale segment when not default, and
// translate home-anchor slugs to the active locale.
// localizePath('/#process', 'es') => '/#proceso'
// localizePath('/#process', 'en') => '/en#process'
// localizePath('/terms', 'en')    => '/en/terms'
export function localizePath(path: string, locale: string | undefined): string {
  const lang = getLang(locale);
  if (!path.startsWith('/')) return path; // external / absolute — leave as-is

  // Home anchors: re-slug to the active locale. '/#contact' becomes
  // '/#contacto' on es and '/en#contact' on en (no slash before '#'; the
  // pathname '/en/' 404s under trailingSlash: 'never').
  if (path.startsWith('/#')) {
    const slug = anchorSlugs[lang][path.slice(2)] ?? path.slice(2);
    return lang === defaultLang ? `/#${slug}` : `/${lang}#${slug}`;
  }

  // Pages with a locale-specific slug ('/productos' <-> '/en/products').
  const lpage = localizedPages.find((p) => p.es === path || p.en === path);
  if (lpage) return lang === 'en' ? `/en${lpage.en}` : lpage.es;

  if (lang === defaultLang) return path;
  if (path === '/') return `/${lang}`;
  return `/${lang}${path}`; // '/terms' -> '/en/terms'
}

// Same page in the other locale, for the language switcher.
// On 'en' strip the /en prefix; on 'es' add it.
export function alternatePath(
  path: string,
  locale: string | undefined
): string {
  const lang = getLang(locale);
  // Locale-specific page slugs: switch between the es/en variants directly.
  const lpage = localizedPages.find(
    (p) => p.es === path || `/en${p.en}` === path
  );
  if (lpage) return lang === 'en' ? lpage.es : `/en${lpage.en}`;
  if (lang === 'en') return path.replace(/^\/en/, '') || '/';
  return path === '/' ? '/en' : `/en${path}`;
}
