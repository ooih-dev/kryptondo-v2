"use client";

import Link from "next/link";
import { useLocalePath } from "../i18n/useLocale";
import { useTranslations } from "../i18n/useTranslations";

export default function Footer() {
  const lp = useLocalePath();
  const t = useTranslations("footer");

  return (
    <footer style={{ background: "#2D2A26", marginTop: "0" }}>
      <div className="container-lg mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center font-bold"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                K
              </div>
              <span
                className="font-semibold"
                style={{
                  fontSize: "0.9375rem",
                  color: "#EDE8E0",
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font-serif), Georgia, serif",
                }}
              >
                Kryptondo
              </span>
            </div>
            <p className="text-xs font-semibold mb-1.5" style={{ color: "#C4663A", letterSpacing: "0.04em" }}>
              360° Investment Platform
            </p>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A7D70", lineHeight: "1.7" }}>
              {t.tagline}
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Telegram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-medium transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{ color: "#8A7D70" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p
              className="mb-4"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDE8E0" }}
            >
              {t.product}
            </p>
            <ul className="space-y-2.5">
              {[
                [t.browseInvestments, "/invest"],
                [t.howItWorks, "/invest#how-it-works"],
                ["EV Charging", "/ev-charging"],
                ["Solar", "/solar"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={lp(href)}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#8A7D70" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="mb-4"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDE8E0" }}
            >
              {t.company}
            </p>
            <ul className="space-y-2.5">
              {[
                [t.aboutUs, "/about"],
                [t.forBusiness, "/for-business"],
                [t.careers, "#"],
                [t.blog, "#"],
                [t.press, "#"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={lp(href)}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#8A7D70" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="mb-4"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDE8E0" }}
            >
              {t.legal}
            </p>
            <ul className="space-y-2.5">
              {[
                [t.privacy, "/legal/privacy"],
                [t.terms, "/legal/terms"],
                [t.imprint, "/legal/imprint"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={lp(href)}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#8A7D70" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(237, 232, 224, 0.1)" }}
        >
          <div className="space-y-1">
            <p className="text-xs" style={{ color: "#8A7D70" }}>
              © 2026 Kryptondo GmbH. {t.rights}
            </p>
            <p className="text-xs" style={{ color: "#8A7D70" }}>
              Malta Financial Services Authority · SPV Reg. No. MT-SPV-2025-0042 ·{" "}
              <a
                href="mailto:info@kryptondo.de"
                className="transition-colors duration-150"
                style={{ color: "var(--accent)" }}
              >
                info@kryptondo.de
              </a>
            </p>
          </div>
          <p className="text-xs text-right max-w-sm leading-relaxed" style={{ color: "#8A7D70", opacity: 0.7 }}>
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
