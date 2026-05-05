"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Stethoscope, Dumbbell, Zap, Sun, ChevronDown } from "lucide-react";
import { useLocale, useLocalePath, useSwitchLocalePath } from "../i18n/useLocale";
import { useTranslations } from "../i18n/useTranslations";

const INDUSTRIES = [
  { key: "cars", href: "/cars", icon: Car, color: "#C4663A" },
  { key: "medical", href: "/medical", icon: Stethoscope, color: "#4A7C59" },
  { key: "fitness", href: "/fitness", icon: Dumbbell, color: "#8B5CF6" },
  { key: "evCharging", href: "/ev-charging", icon: Zap, color: "#0EA5E9" },
  { key: "solar", href: "/solar", icon: Sun, color: "#F59E0B" },
] as const;

const INDUSTRY_LABELS: Record<string, { en: string; de: string; descEn: string; descDe: string }> = {
  cars: { en: "Cars", de: "Autos", descEn: "Co-own premium vehicles. Drive or earn.", descDe: "Premium-Fahrzeuge mitbesitzen. Fahren oder verdienen." },
  medical: { en: "Medical Recruiting", de: "Medizin-Vermittlung", descEn: "Fund healthcare staffing SPVs.", descDe: "Gesundheitspersonal-SPVs finanzieren." },
  fitness: { en: "Fitness Studios", de: "Fitnessstudios", descEn: "Own your gym. Earn dividends.", descDe: "Besitze dein Gym. Erhalte Dividenden." },
  evCharging: { en: "EV Charging", de: "E-Ladestationen", descEn: "Earn from every kWh charged.", descDe: "Verdiene an jeder geladenen kWh." },
  solar: { en: "Solar Energy", de: "Solarenergie", descEn: "Fund solar. Earn from feed-in tariffs.", descDe: "Solar finanzieren. Einspeisevergütung verdienen." },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();
  const locale = useLocale();
  const lp = useLocalePath();
  const switchLocale = useSwitchLocalePath();
  const t = useTranslations("header");
  const tc = useTranslations("common");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kryptondo_registration");
      if (saved) setHasProfile(!!JSON.parse(saved)?.name);
    } catch {}
  }, []);

  const cleanPathname = locale === "de" ? pathname.replace(/^\/de/, "") || "/" : pathname;
  const isActive = (href: string) => cleanPathname === href;
  const isIndustryActive = INDUSTRIES.some((ind) => cleanPathname.startsWith(ind.href));

  function handleMouseEnter() {
    clearTimeout(timeoutRef.current);
    setIndustriesOpen(true);
  }
  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setIndustriesOpen(false), 150);
  }

  const topLinks = [
    { href: "/invest", label: t.invest },
    ...(hasProfile ? [{ href: "/dashboard", label: t.dashboard }] : []),
  ];

  const rightLinks = [
    { href: "/for-business", label: t.forBusiness },
    { href: "/about", label: t.about },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--background) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-lg px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={lp("/")} className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-105"
              style={{ background: "var(--accent)", color: "#fff", fontSize: "0.9375rem", fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", boxShadow: "0 2px 8px var(--accent-glow)" }}
            >
              K
            </div>
            <span className="font-semibold text-base" style={{ color: "var(--foreground)", letterSpacing: "-0.01em", fontFamily: "var(--font-serif), Georgia, serif" }}>
              Kryptondo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={lp(link.href)}
                className="relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 group"
                style={{ color: isActive(link.href) ? "var(--accent)" : "var(--muted-foreground)" }}
              >
                <span className="relative z-10 group-hover:text-[var(--foreground)] transition-colors duration-200">{link.label}</span>
                {isActive(link.href) && (
                  <motion.div layoutId="nav-indicator" className="absolute inset-0 rounded-lg" style={{ background: "var(--accent-glow)" }} transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                )}
              </Link>
            ))}

            {/* Industries dropdown */}
            <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors duration-200 group"
                style={{ color: isIndustryActive ? "var(--accent)" : "var(--muted-foreground)" }}
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                <span className="group-hover:text-[var(--foreground)] transition-colors duration-200">
                  {locale === "de" ? "Branchen" : "Industries"}
                </span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-xl overflow-hidden"
                    style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
                  >
                    <div className="p-2">
                      {INDUSTRIES.map((ind) => {
                        const Icon = ind.icon;
                        const labels = INDUSTRY_LABELS[ind.key];
                        const name = locale === "de" ? labels.de : labels.en;
                        const desc = locale === "de" ? labels.descDe : labels.descEn;
                        return (
                          <Link
                            key={ind.key}
                            href={lp(ind.href)}
                            onClick={() => setIndustriesOpen(false)}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 group/item"
                            style={{ color: "var(--foreground)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${ind.color}14`, color: ind.color }}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold" style={{ color: isActive(ind.href) ? "var(--accent)" : "var(--foreground)" }}>{name}</p>
                              <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={lp(link.href)}
                className="relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 group"
                style={{ color: isActive(link.href) ? "var(--accent)" : "var(--muted-foreground)" }}
              >
                <span className="relative z-10 group-hover:text-[var(--foreground)] transition-colors duration-200">{link.label}</span>
                {isActive(link.href) && (
                  <motion.div layoutId="nav-indicator-r" className="absolute inset-0 rounded-lg" style={{ background: "var(--accent-glow)" }} transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href={switchLocale(locale === "de" ? "en" : "de")}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-105 uppercase"
              style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted-foreground)", letterSpacing: "0.05em" }}
            >
              {locale === "de" ? "EN" : "DE"}
            </Link>
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted-foreground)" }}
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
            <Link href={lp("/register")} className="btn-secondary text-sm !py-2 !px-4">{tc.logIn}</Link>
            <Link href={lp("/register")} className="btn-primary text-sm !py-2 !px-4"><span>{tc.getStarted}</span></Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.75}>
              {mobileOpen ? <path d="M5 5l14 14M5 19L19 5" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)", background: "var(--background)" }}
          >
            <div className="container-lg mx-auto px-4 py-3 flex flex-col gap-0.5">
              <Link href={lp("/invest")} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {t.invest}
              </Link>

              {/* Industries accordion */}
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium w-full text-left"
                style={{ color: "var(--foreground)" }}
              >
                {locale === "de" ? "Branchen" : "Industries"}
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} style={{ color: "var(--muted-foreground)" }} />
              </button>
              <AnimatePresence>
                {mobileIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-2 space-y-0.5">
                      {INDUSTRIES.map((ind) => {
                        const Icon = ind.icon;
                        const labels = INDUSTRY_LABELS[ind.key];
                        const name = locale === "de" ? labels.de : labels.en;
                        return (
                          <Link
                            key={ind.key}
                            href={lp(ind.href)}
                            onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm"
                            style={{ color: "var(--foreground)" }}
                          >
                            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: `${ind.color}14`, color: ind.color }}>
                              <Icon size={14} />
                            </div>
                            {name}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href={lp("/for-business")} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {t.forBusiness}
              </Link>
              <Link href={lp("/about")} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {t.about}
              </Link>
              {hasProfile && (
                <Link href={lp("/dashboard")} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium" style={{ color: "var(--foreground)" }}>
                  {t.dashboard}
                </Link>
              )}

              <div className="flex gap-2 pt-2 pb-1">
                <Link href={switchLocale(locale === "de" ? "en" : "de")} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-bold" style={{ color: "var(--accent)" }}>
                  {locale === "de" ? "English" : "Deutsch"}
                </Link>
              </div>
              <div className="flex gap-2 pt-1 pb-1">
                <Link href={lp("/register")} onClick={() => setMobileOpen(false)} className="btn-secondary flex-1 text-center !py-2.5 text-sm">{tc.logIn}</Link>
                <Link href={lp("/register")} onClick={() => setMobileOpen(false)} className="btn-primary flex-1 text-center !py-2.5 text-sm"><span>{tc.getStarted}</span></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
