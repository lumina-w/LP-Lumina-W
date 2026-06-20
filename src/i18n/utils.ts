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

// Prefix a root-relative path with the locale segment when not default.
// localizePath('/#contact', 'es') => '/#contact'
// localizePath('/#contact', 'en') => '/en/#contact'
// localizePath('/terms', 'en')    => '/en/terms'
export function localizePath(path: string, locale: string | undefined): string {
  const lang = getLang(locale);
  if (lang === defaultLang) return path;
  if (!path.startsWith('/')) return path; // external / absolute — leave as-is
  if (path === '/') return `/${lang}`;
  if (path.startsWith('/#')) return `/${lang}${path}`; // anchor on home
  return `/${lang}${path}`;
}
