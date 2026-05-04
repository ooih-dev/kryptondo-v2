import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, ShieldCheck, Wallet, Shield, TrendingUp, Eye, Scale } from "lucide-react";
import FadeIn from "./components/FadeIn";
import TrustBar from "./components/TrustBar";
import OpportunityCard from "./components/OpportunityCard";
import { TRUST_STATS_B2C, LIVE_OPPORTUNITIES } from "./data/mock";

export const metadata: Metadata = {
  title: "Kryptondo — Invest in Businesses You Love",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Browse & Invest",
    desc: "Discover local businesses raising capital. Pick the ones you love. Start from €100.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Receive Tokens",
    desc: "Ownership is recorded as tokens on Arbitrum — held in your wallet, not ours.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Earn Dividends",
    desc: "Automatic profit distribution to your wallet when businesses perform. No action needed.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Get Perks",
    desc: "Token holders unlock exclusive discounts, early access, and VIP experiences.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        {/* Glow orbs */}
        <div
          className="glow-orb w-[600px] h-[500px] -top-20 -right-32"
          style={{ background: "radial-gradient(ellipse, var(--accent-blue-glow) 0%, transparent 65%)" }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bottom-0 left-0"
          style={{ background: "radial-gradient(ellipse, var(--accent-gold-glow) 0%, transparent 65%)", opacity: 0.4 }}
        />

        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">

            <FadeIn delay={0}>
              <div className="badge mb-8 w-fit">
                EU-Regulated · Malta SPV · CertiK Audited
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-balance mb-6" style={{ color: "var(--foreground)" }}>
                Invest in businesses.{" "}
                <span className="accent-text">Own a piece.</span>{" "}
                Earn dividends.
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p
                className="text-lg md:text-xl mb-10 max-w-xl leading-body"
                style={{ color: "var(--muted-foreground)" }}
              >
                The 360° investment platform. Risk-driven, interest-aligned, radically transparent, and legally secured.
                Real ownership. Real returns. Non-custodial — starting from <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>€100</strong>.
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/invest" className="btn-primary text-base !py-3.5 !px-8">
                  <span>I Want to Invest →</span>
                </Link>
                <Link href="/for-business" className="btn-secondary text-base !py-3.5 !px-8">
                  <span>I Want to Raise Capital →</span>
                </Link>
              </div>
            </FadeIn>

            {/* Trust line */}
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-6 mt-10 flex-wrap">
                {[
                  { text: "Malta SPV" },
                  { text: "CertiK Audited" },
                  { text: "Non-custodial" },
                  { text: "EU Regulated" },
                ].map((item, i) => (
                  <div key={item.text} className="flex items-center gap-2">
                    {i > 0 && <span style={{ color: "var(--border)", fontSize: "0.75rem" }}>·</span>}
                    <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Dual audience cards */}
          <div className="grid md:grid-cols-2 gap-5 mt-16 max-w-3xl">
            {[
              {
                tag: "For Investors",
                headline: "Invest in the Businesses You Love",
                body: "Own real equity. Earn dividends automatically. Get exclusive loyalty perks — starting from €100.",
                cta: "Explore Investments",
                href: "/invest",
                accent: "var(--accent)",
                glow: "var(--accent-glow)",
              },
              {
                tag: "For Business Owners",
                headline: "Raise Capital. Build Community. Keep Control.",
                body: "Tokenize 10–20% of your business. Your customers invest, get dividends, and become your biggest advocates.",
                cta: "Apply to List Your Business",
                href: "/for-business",
                accent: "var(--gold)",
                glow: "var(--gold-glow)",
              },
            ].map((card, i) => (
              <FadeIn key={card.tag} delay={0.1 + i * 0.08}>
                <Link
                  href={card.href}
                  className="card card-hover group block h-full"
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                    style={{ color: card.accent, letterSpacing: "0.1em" }}
                  >
                    {card.tag}
                  </span>
                  <h3
                    className="font-bold mb-3 leading-heading"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--foreground)" }}
                  >
                    {card.headline}
                  </h3>
                  <p className="text-sm leading-body mb-5" style={{ color: "var(--muted-foreground)" }}>
                    {card.body}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                    style={{ color: card.accent }}
                  >
                    {card.cta} <span>→</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <TrustBar stats={TRUST_STATS_B2C} />

      {/* ── 360° Philosophy ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">360° Investment Platform</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Risk · Interest · Transparency · Law
            </h2>
            <p className="text-base leading-body mt-3" style={{ color: "var(--muted-foreground)" }}>
              Four pillars. One platform. Every investment on Kryptondo is structured around all four.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Shield size={22} />,
                label: "Risk",
                title: "AI-Powered Risk",
                desc: "Every investment comes with a personalised risk score. Match opportunities to your risk appetite — not the other way around.",
                accent: "var(--accent)",
              },
              {
                icon: <TrendingUp size={22} />,
                label: "Interest",
                title: "Real Returns",
                desc: "Dividends from real revenue — memberships, placements, rental income. Your money works in sectors you understand.",
                accent: "var(--gold)",
              },
              {
                icon: <Eye size={22} />,
                label: "Transparency",
                title: "On-Chain Clarity",
                desc: "Ownership records on Arbitrum/Base. Public SPV structures. Real-time performance tracking. Nothing is hidden.",
                accent: "#7c8cf8",
              },
              {
                icon: <Scale size={22} />,
                label: "Law",
                title: "EU-Regulated",
                desc: "Malta-licensed SPVs. MiCA compliant. CertiK audited. Regulated like traditional finance — flexible like crypto.",
                accent: "#4A7C59",
              },
            ].map((pillar, i) => (
              <FadeIn key={pillar.label} delay={i * 0.09}>
                <div className="card h-full" style={{ borderColor: `${pillar.accent}25` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${pillar.accent}14`, color: pillar.accent }}>
                    {pillar.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: pillar.accent, letterSpacing: "0.1em" }}>{pillar.label}</p>
                  <h3 className="font-semibold mb-2" style={{ fontSize: "1rem", color: "var(--foreground)" }}>{pillar.title}</h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Opportunities ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-lg">
                <span className="section-label">Live Opportunities</span>
                <h2 className="text-display-md font-bold text-balance" style={{ color: "var(--foreground)" }}>
                  Businesses raising right now
                </h2>
              </div>
              <p className="text-sm max-w-xs" style={{ color: "var(--muted-foreground)" }}>
                All offerings EU-regulated through Malta-licensed SPVs. Invest from €100.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LIVE_OPPORTUNITIES.map((opp, i) => (
              <FadeIn key={opp.id} delay={i * 0.07}>
                <OpportunityCard opp={opp} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 flex justify-center">
            <Link href="/invest" className="btn-secondary !py-3 !px-8">
              View All Opportunities →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="section relative overflow-hidden bg-dot" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto relative z-10">
          <FadeIn className="text-center mb-16 max-w-xl mx-auto">
            <span className="section-label">How It Works</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              From browsing to earning dividends
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0"
                    style={{
                      background: "var(--accent-subtle)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-glow)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <p
                    className="text-xs font-bold mb-1.5 tracking-widest"
                    style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
                  >
                    {step.step}
                  </p>
                  <h3
                    className="font-semibold mb-2 tracking-tight-sub"
                    style={{ fontSize: "1rem", color: "var(--foreground)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/invest" className="btn-primary !py-3 !px-8">
              <span>Start Investing</span>
            </Link>
            <Link href="/for-business" className="btn-secondary !py-3 !px-8">
              List Your Business
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section className="section trust-section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">Built for Trust</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Enterprise-grade security. EU regulation.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Landmark size={24} />,
                title: "Malta SPV Structure",
                desc: "Every offering uses a Malta-registered Special Purpose Vehicle. EU-regulated, fully compliant with MiCA framework.",
                accent: "var(--accent)",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "CertiK Audited",
                desc: "All smart contracts audited by CertiK — the industry standard for blockchain security verification.",
                accent: "var(--gold)",
              },
              {
                icon: <Wallet size={24} />,
                title: "Non-Custodial",
                desc: "Your tokens are held in your own wallet. Kryptondo never takes custody of your assets.",
                accent: "var(--accent)",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card h-full" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="mb-4" style={{ color: item.accent }}>{item.icon}</div>
                  <h3
                    className="font-semibold mb-2 tracking-tight-sub"
                    style={{ fontSize: "1.0625rem", color: "var(--foreground)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press logos ── */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <FadeIn>
            <p
              className="text-center mb-8"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}
            >
              As Seen In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {["TechCrunch", "CoinDesk", "Handelsblatt", "Forbes", "Decrypt"].map((name) => (
                <span
                  key={name}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    color: "var(--foreground)",
                    opacity: 0.2,
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <h2 className="text-display-lg font-extrabold text-balance mb-6" style={{ color: "var(--foreground)" }}>
              Ready to invest in the businesses{" "}
              <span className="accent-text">you believe in?</span>
            </h2>
            <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Join 1,800+ investors backing real businesses across Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/invest" className="btn-primary text-base !py-3.5 !px-8">
                <span>Start Investing from €100</span>
              </Link>
              <Link href="/for-business" className="btn-secondary text-base !py-3.5 !px-8">
                List Your Business
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
