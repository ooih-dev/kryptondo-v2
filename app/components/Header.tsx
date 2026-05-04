"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const navLinks = [
    { href: "/invest", label: "Invest" },
    { href: "/for-business", label: "For Business" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--background) 85%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-lg px-4 mx-auto">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-105"
              style={{
                background: "var(--accent)",
                color: "#fff",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-serif), Georgia, serif",
                fontStyle: "italic",
                boxShadow: "0 2px 8px var(--accent-glow)",
              }}
            >
              K
            </div>
            <span
              className="font-semibold text-base"
              style={{
                color: "var(--foreground)",
                letterSpacing: "-0.01em",
                fontFamily: "var(--font-serif), Georgia, serif",
              }}
            >
              Kryptondo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: pathname === link.href ? "var(--accent)" : "var(--muted-foreground)",
                }}
              >
                <span className="relative z-10 group-hover:text-[var(--foreground)] transition-colors duration-200">
                  {link.label}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "var(--accent-glow)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--muted-foreground)",
              }}
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Link href="/invest" className="btn-secondary text-sm !py-2 !px-4">
              Log In
            </Link>
            <Link href="/invest" className="btn-primary text-sm !py-2 !px-4">
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.75}>
              {mobileOpen ? (
                <path d="M5 5l14 14M5 19L19 5" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
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
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)", background: "var(--background)" }}
          >
            <div className="container-lg mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-3 pb-1">
                <Link href="/invest" onClick={() => setMobileOpen(false)} className="btn-secondary flex-1 text-center !py-2.5 text-sm">
                  Log In
                </Link>
                <Link href="/invest" onClick={() => setMobileOpen(false)} className="btn-primary flex-1 text-center !py-2.5 text-sm">
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
