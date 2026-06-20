// English (en) dictionary.
// PHASE 2 — TODO: replace this re-export with real English translations.
// Until then it falls back to Spanish copy so /en/* builds and renders.
// Keep every key in sync with es.ts (typed as Dictionary enforces the shape).
import { es } from './es';
import type { Dictionary } from './es';

export const en: Dictionary = es;
