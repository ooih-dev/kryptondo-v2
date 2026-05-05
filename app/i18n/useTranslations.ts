"use client";

import { useMemo } from "react";
import { useLocale } from "./useLocale";
import en from "./dictionaries/en";
import de from "./dictionaries/de";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<string, Dictionary> = { en, de };

export function useTranslations<K extends keyof Dictionary>(namespace: K): Dictionary[K] {
  const locale = useLocale();
  return useMemo(() => dictionaries[locale]?.[namespace] ?? en[namespace], [locale, namespace]);
}

export function useDictionary(): Dictionary {
  const locale = useLocale();
  return useMemo(() => dictionaries[locale] ?? en, [locale]);
}
