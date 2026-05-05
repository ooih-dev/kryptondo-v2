import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "de"];
const DEFAULT_LOCALE = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip admin, api, static files, _next
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if path starts with a locale prefix
  const pathnameLocale = LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale && pathnameLocale !== DEFAULT_LOCALE) {
    // Strip the locale prefix and rewrite
    const newPathname = pathname.replace(`/${pathnameLocale}`, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = newPathname;

    const response = NextResponse.rewrite(url);
    response.headers.set("x-locale", pathnameLocale);
    response.cookies.set("NEXT_LOCALE", pathnameLocale, { path: "/" });
    return response;
  }

  // Default locale — no prefix needed
  const response = NextResponse.next();
  response.headers.set("x-locale", DEFAULT_LOCALE);
  if (!request.cookies.get("NEXT_LOCALE")?.value) {
    response.cookies.set("NEXT_LOCALE", DEFAULT_LOCALE, { path: "/" });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
