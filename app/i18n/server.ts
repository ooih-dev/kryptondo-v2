import { cookies } from "next/headers";
import en from "./dictionaries/en";
import de from "./dictionaries/de";
import type { Dictionary } from "./dictionaries/en";
import type { Locale } from "./config";

const dictionaries: Record<string, Dictionary> = { en, de };

export function getLocale(): Locale {
  const cookieStore = cookies();
  return (cookieStore.get("NEXT_LOCALE")?.value as Locale) || "en";
}

export function getDictionary(): Dictionary {
  return dictionaries[getLocale()] ?? en;
}

export function getTranslations<K extends keyof Dictionary>(namespace: K): Dictionary[K] {
  return getDictionary()[namespace];
}
