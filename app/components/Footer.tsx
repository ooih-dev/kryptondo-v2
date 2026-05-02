import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-20">
      <div className="container-lg mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-blue)" }}>
                <span className="text-[var(--navy-900)] font-bold text-xs">K</span>
              </div>
              <span className="font-bold text-base text-[var(--foreground)]">Kryptondo</span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
              Tokenizing business equity. Connecting investors with businesses they love.
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Telegram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-[var(--muted-foreground)] hover:text-[var(--accent-blue)] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Invest */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)] mb-3">Invest</p>
            <ul className="space-y-2">
              {[
                ["Browse Opportunities", "/invest"],
                ["How It Works", "/invest#how-it-works"],
                ["Tokens Explained", "/invest#tokens"],
                ["Secondary Market", "/invest#secondary"],
                ["Loyalty & Perks", "/invest#loyalty"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)] mb-3">For Business</p>
            <ul className="space-y-2">
              {[
                ["How to List", "/for-business"],
                ["SPV Structure", "/for-business#regulatory"],
                ["Fees & Economics", "/for-business#fees"],
                ["Case Studies", "/for-business#cases"],
                ["Apply Now", "/for-business#apply"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)] mb-3">Legal</p>
            <ul className="space-y-2">
              {[
                ["Privacy Policy", "/legal/privacy"],
                ["Terms of Service", "/legal/terms"],
                ["Risk Disclosure", "/legal/risk"],
                ["Cookie Policy", "/legal/cookies"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-[var(--muted-foreground)] space-y-1">
            <p>© 2026 Kryptondo GmbH. All rights reserved.</p>
            <p>
              Regulated under Malta Financial Services Authority · SPV Reg. No. MT-SPV-2025-0042 ·{" "}
              <a href="mailto:info@kryptondo.de" className="hover:text-[var(--accent-blue)] transition-colors">
                info@kryptondo.de
              </a>
            </p>
          </div>
          <p className="text-xs text-[var(--muted-foreground)] max-w-md text-right leading-relaxed">
            Investing involves risk. Token values may fluctuate. Past performance does not guarantee future results.
            All investments are subject to EU securities regulation.
          </p>
        </div>
      </div>
    </footer>
  );
}
