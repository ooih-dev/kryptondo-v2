import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)", marginTop: "0" }}>
      <div className="container-lg mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, var(--accent-blue), #60b8ff)",
                  color: "#fff",
                }}
              >
                K
              </div>
              <span className="font-semibold tracking-tight" style={{ fontSize: "0.9375rem", color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                Kryptondo
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--muted-foreground)", lineHeight: "1.7" }}>
              Tokenizing business equity. Connecting investors with businesses they love.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Telegram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-medium transition-colors duration-200 hover:text-[var(--accent-blue)]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Invest */}
          <div>
            <p
              className="mb-4"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)" }}
            >
              Invest
            </p>
            <ul className="space-y-2.5">
              {[
                ["Browse Opportunities", "/invest"],
                ["How It Works", "/invest#how-it-works"],
                ["Tokens Explained", "/invest#tokens"],
                ["Secondary Market", "/invest#secondary"],
                ["Loyalty & Perks", "/invest#loyalty"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business */}
          <div>
            <p
              className="mb-4"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)" }}
            >
              For Business
            </p>
            <ul className="space-y-2.5">
              {[
                ["How to List", "/for-business"],
                ["SPV Structure", "/for-business#regulatory"],
                ["Fees & Economics", "/for-business#fees"],
                ["Case Studies", "/for-business#cases"],
                ["Apply Now", "/for-business#apply"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--muted-foreground)" }}
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
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)" }}
            >
              Legal
            </p>
            <ul className="space-y-2.5">
              {[
                ["Privacy Policy", "/legal/privacy"],
                ["Terms of Service", "/legal/terms"],
                ["Risk Disclosure", "/legal/risk"],
                ["Cookie Policy", "/legal/cookies"],
                ["About Us", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--muted-foreground)" }}
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
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="space-y-1">
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              © 2026 Kryptondo GmbH. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Regulated under Malta Financial Services Authority · SPV Reg. No. MT-SPV-2025-0042 ·{" "}
              <a
                href="mailto:info@kryptondo.de"
                className="transition-colors duration-150"
                style={{ color: "var(--accent-blue)" }}
              >
                info@kryptondo.de
              </a>
            </p>
          </div>
          <p className="text-xs text-right max-w-sm leading-relaxed" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
            Investing involves risk. Token values may fluctuate. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
