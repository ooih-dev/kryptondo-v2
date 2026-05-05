"use client";

import { usePathname } from "next/navigation";
import { type Locale, defaultLocale } from "./config";

export function useLocale(): Locale {
  const pathname = usePathname();
  if (pathname.startsWith("/de/") || pathname === "/de") return "de";
  return defaultLocale;
}

export function useLocalePath() {
  const locale = useLocale();
  return (path: string) => (locale === "de" ? `/de${path}` : path);
}

export function useSwitchLocalePath() {
  const pathname = usePathname();
  const locale = useLocale();
  return (targetLocale: Locale) => {
    const cleanPath = locale === "de" ? pathname.replace(/^\/de/, "") || "/" : pathname;
    return targetLocale === "de" ? `/de${cleanPath}` : cleanPath;
  };
}
