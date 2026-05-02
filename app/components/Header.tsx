"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-lg mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-blue)" }}>
              <span className="text-[var(--navy-900)] font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-[var(--foreground)]">
              Kryptondo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--accent-blue)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM5.48 4.2a1 1 0 010 1.42l-.7.7A1 1 0 013.36 4.9l.7-.7a1 1 0 011.42 0zM10 15a5 5 0 110-10 5 5 0 010 10zm-7 0h1a1 1 0 110 2H3a1 1 0 110-2zm14 0h1a1 1 0 110 2h-1a1 1 0 110-2zM4.78 14.52a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7zm10.44 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 011.42-1.42zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                </svg>
              ) : (
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <Link href="/invest" className="btn-secondary text-sm py-2 px-4">
              Log In
            </Link>
            <Link href="/invest" className="btn-primary text-sm py-2 px-4">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-[var(--foreground)]"
          >
            {mobileOpen ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l8 8M6 14l8-8" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--background)]"
          >
            <div className="container-lg mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Link href="/invest" onClick={() => setMobileOpen(false)} className="btn-secondary flex-1 text-center py-2.5">
                  Log In
                </Link>
                <Link href="/invest" onClick={() => setMobileOpen(false)} className="btn-primary flex-1 text-center py-2.5">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
