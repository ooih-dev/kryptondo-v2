import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import TrustBar from "../../components/TrustBar";
import OpportunityCard from "../../components/OpportunityCard";
import FAQ from "../../components/FAQ";
import DividendFormula from "../../components/DividendFormula";
import { TRUST_STATS_B2C, LIVE_OPPORTUNITIES, B2C_FAQS } from "../../data/mock";

export const metadata: Metadata = {
  title: "Invest — Browse Live Opportunities",
  description:
    "Invest in local businesses you love from €100. Own real equity, earn automatic dividends, and get exclusive loyalty perks. EU-regulated, non-custodial, CertiK audited.",
};

const HOW_IT_WORKS = [
  { step: "01", title: "Create Account", desc: "Sign up with email. Takes under 2 minutes.", icon: "✉️" },
  { step: "02", title: "Verify Identity", desc: "KYC in under 5 minutes. Required by EU regulation.", icon: "🪪" },
  { step: "03", title: "Browse Businesses", desc: "Explore live opportunities filtered by sector, city, and size.", icon: "🔍" },
  { step: "04", title: "Invest from €100", desc: "Choose your amount. Pay by card or crypto. Instantly confirmed.", icon: "💳" },
  { step: "05", title: "Hold in Your Wallet", desc: "Tokens arrive in your non-custodial wallet. Start earning dividends.", icon: "🪙" },
];

const DIFFERENTIATORS = [
  {
    icon: "🫰",
    title: "Your tokens, your wallet",
    desc: "Non-custodial by design. Kryptondo never holds your assets. Your keys — your equity.",
    accent: "#00D4FF",
  },
  {
    icon: "💰",
    title: "Real dividends, not speculation",
    desc: "Dividends are tied to real business performance, not token price. Earn when businesses earn.",
    accent: "#C9A84C",
  },
  {
    icon: "🏛️",
    title: "EU-regulated structure",
    desc: "Malta SPV under MiCA framework. Legally compliant securities — not unregulated crypto.",
    accent: "#7C8CF8",
  },
  {
    icon: "🎁",
    title: "Loyalty bonuses",
    desc: "Token holders unlock discounts, early access, VIP experiences at the businesses they invest in.",
    accent: "#4CAF50",
  },
  {
    icon: "⚡",
    title: "Arbitrum/Base — low fees",
    desc: "Built on leading Ethereum L2s. Near-zero transaction fees, fast settlement, proven infrastructure.",
    accent: "#FF6B6B",
  },
];

const LOYALTY_EXAMPLES = [
  { business: "Café Nero Berlin", perk: "15% off every visit", tier: "All Holders" },
  { business: "Studio Volta", perk: "First access to new product drops", tier: "50+ tokens" },
  { business: "Markt & Co", perk: "Monthly artisan box — free delivery", tier: "100+ tokens" },
  { business: "Wellness Hub", perk: "Quarterly VIP wellness day", tier: "Top 10% Holders" },
];

const TESTIMONIALS = [
  {
    name: "Anna K.",
    city: "Berlin",
    text: "I invest €200 in Café Nero and get 15% off my daily coffee. It pays for itself while I earn dividends.",
    tokens: "€500 invested",
  },
  {
    name: "Marco T.",
    city: "Munich",
    text: "Finally a platform where I own real equity, not just some points. The Malta structure gives me confidence.",
    tokens: "€1,200 invested",
  },
  {
    name: "Sophie H.",
    city: "Hamburg",
    text: "The non-custodial model was the deal-maker for me. My tokens are in my wallet, not on some exchange.",
    tokens: "€800 invested",
  },
];

export default function InvestPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 px-4 overflow-hidden">
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[400px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #00D4FF 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-6 w-fit">For Investors · Min €100 · Non-Custodial</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6 leading-tight">
                Invest in the Businesses{" "}
                <span className="gradient-text">You Love</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl leading-relaxed">
                Own real equity. Earn dividends automatically. Get exclusive loyalty perks —
                starting from <strong className="text-[var(--foreground)]">€100</strong>.
                Your tokens, your wallet.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#opportunities" className="btn-primary text-base px-8 py-4">
                  Explore Investments →
                </a>
                <a href="#how-it-works" className="btn-secondary text-base px-8 py-4">
                  How It Works
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar stats={TRUST_STATS_B2C} />

      {/* The Deal */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">The Deal</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Three reasons investors choose Kryptondo
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Own Real Equity",
                desc: "Tokens backed by a Malta SPV holding real business equity. Legally compliant ownership — not points or vouchers.",
                color: "#00D4FF",
              },
              {
                icon: "💸",
                title: "Earn Dividends",
                desc: "Automatic distribution when the business distributes profits. No action needed — dividends arrive in your wallet.",
                color: "#C9A84C",
              },
              {
                icon: "🎫",
                title: "Get Exclusive Perks",
                desc: "Token holders unlock discounts, early access, VIP experiences at businesses they invest in. Ownership with lifestyle benefits.",
                color: "#7C8CF8",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div
                  className="card text-center h-full hover:-translate-y-1 transition-transform duration-300"
                  style={{ borderColor: `${item.color}33` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ background: `${item.color}15` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[var(--foreground)] mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Live Opportunities */}
      <section id="opportunities" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="section-label">Live Opportunities</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                  Businesses raising right now
                </h2>
              </div>
              {/* Filter mock */}
              <div className="flex gap-2 flex-wrap">
                {["All", "Hospitality", "Retail", "Creative", "Services"].map((f, i) => (
                  <button
                    key={f}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                      i === 0
                        ? "text-[var(--navy-900)] border-transparent"
                        : "text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--accent-blue)]"
                    }`}
                    style={i === 0 ? { background: "var(--accent-blue)" } : undefined}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIVE_OPPORTUNITIES.map((opp, i) => (
              <FadeIn key={opp.id} delay={i * 0.07}>
                <OpportunityCard opp={opp} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="section-label">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Invest in under 10 minutes
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              From account creation to owning equity — fully on mobile.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3"
                    style={{ background: "var(--surface)" }}
                  >
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--accent-blue)" }}>{s.step}</p>
                  <h3 className="font-bold text-[var(--foreground)] text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Kryptondo Different */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Why Kryptondo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              What makes us different
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {DIFFERENTIATORS.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.07}>
                <div className="card h-full">
                  <div className="text-2xl mb-2">{d.icon}</div>
                  <h3 className="font-bold text-[var(--foreground)] text-sm mb-1.5">{d.title}</h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tokens Explained Simply */}
      <section id="tokens" className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Tokens Explained Simply</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              No prior experience required
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-8 md:p-10 border"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.04), rgba(201,168,76,0.04))",
                borderColor: "rgba(0,212,255,0.15)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Think of it as a digital share certificate
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "📜",
                        text: "A token is an ownership record — like a digital share certificate stored securely on Arbitrum.",
                      },
                      {
                        icon: "🏛️",
                        text: "It represents your fractional stake in a Malta-registered company (SPV) that holds equity in the business.",
                      },
                      {
                        icon: "💰",
                        text: "When the business distributes profits, you automatically receive your share. This is called automatic profit sharing.",
                      },
                      {
                        icon: "🔑",
                        text: "Your tokens live in your own wallet — no intermediary holds them for you. Full ownership, no intermediary risk.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="card">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">Traditional equity</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Paper certificate → locked in registry → hard to transfer</span>
                      <span className="text-red-400">❌</span>
                    </div>
                  </div>
                  <div className="flex justify-center text-[var(--muted-foreground)] text-xs">vs.</div>
                  <div className="card" style={{ borderColor: "rgba(0,212,255,0.3)" }}>
                    <p className="text-xs mb-1" style={{ color: "var(--accent-blue)" }}>Kryptondo token</p>
                    <div className="space-y-1.5">
                      {[
                        "Digital ownership record in your wallet ✓",
                        "Instant settlement on Arbitrum ✓",
                        "Automatic profit sharing ✓",
                        "Tradeable peer-to-peer ✓",
                      ].map((line) => (
                        <p key={line} className="text-xs text-[var(--muted-foreground)]">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dividend Formula */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <DividendFormula audience="b2c" />
        </div>
      </section>

      {/* Secondary Market */}
      <section id="secondary" className="section">
        <div className="container-md mx-auto">
          <FadeIn>
            <div
              className="rounded-3xl p-8 md:p-12 border"
              style={{
                background: "linear-gradient(135deg, rgba(124,140,248,0.08), rgba(0,212,255,0.06))",
                borderColor: "rgba(124,140,248,0.3)",
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="section-label" style={{ color: "#7C8CF8" }}>Secondary Market</p>
                  <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                    Liquidity When You Need It
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    Traditional equity crowdfunding locks you in for years. Kryptondo tokens are
                    designed to be tradeable — a peer-to-peer marketplace is coming Q3 2026.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "vs. Seedrs", kryptondo: "24/7 trading", them: "Monthly window only" },
                      { label: "vs. Crowdcube", kryptondo: "Non-custodial", them: "Platform holds assets" },
                      { label: "vs. Traditional equity", kryptondo: "Peer-to-peer in minutes", them: "Years to exit" },
                    ].map((row) => (
                      <div key={row.label} className="grid grid-cols-3 gap-3 text-xs">
                        <span className="text-[var(--muted-foreground)] font-medium">{row.label}</span>
                        <span className="font-semibold" style={{ color: "#7C8CF8" }}>✓ {row.kryptondo}</span>
                        <span className="text-[var(--muted-foreground)] line-through">✗ {row.them}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-64 shrink-0">
                  <div
                    className="rounded-2xl p-6 text-center"
                    style={{
                      background: "rgba(124,140,248,0.1)",
                      border: "1px solid rgba(124,140,248,0.3)",
                    }}
                  >
                    <div className="text-4xl mb-3">🗓️</div>
                    <p className="font-bold text-[var(--foreground)] text-lg mb-1">Coming Q3 2026</p>
                    <p className="text-xs text-[var(--muted-foreground)] mb-4">
                      Peer-to-peer token marketplace. 24/7 availability. Lower fees. Non-custodial.
                    </p>
                    <div className="badge mx-auto w-fit" style={{ background: "rgba(124,140,248,0.15)", color: "#7C8CF8", borderColor: "rgba(124,140,248,0.3)" }}>
                      In Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loyalty & Perks */}
      <section id="loyalty" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Loyalty & Perks</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Ownership with lifestyle benefits
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              Token holders unlock exclusive rewards from the businesses they invest in.
              More tokens → better perks.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {LOYALTY_EXAMPLES.map((ex, i) => (
              <FadeIn key={ex.business} delay={i * 0.07}>
                <div className="card h-full">
                  <p className="font-bold text-[var(--foreground)] text-sm mb-1">{ex.business}</p>
                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--accent-gold)" }}>{ex.perk}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent-gold)" }}
                  >
                    {ex.tier}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: "🏷️", text: "Discounts at the businesses you invest in" },
                { icon: "🚀", text: "Early access to new products and locations" },
                { icon: "🎟️", text: "VIP events, tastings, and experiences" },
                { icon: "🗳️", text: "Voting rights on select business decisions" },
              ].map((item, i) => (
                <FadeIn key={item.text} delay={i * 0.08}>
                  <div className="card text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm text-[var(--muted-foreground)]">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Security & Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Built for security from day one
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "🏛️", title: "Malta SPV · MiCA Framework", desc: "Every offering is issued through a Malta-registered SPV under EU financial regulation." },
              { icon: "🔒", title: "CertiK Audited Smart Contracts", desc: "All smart contracts undergo rigorous security audits by CertiK — the industry standard." },
              { icon: "🪪", title: "KYC/AML Verification", desc: "All investors verified. Compliance baked into the token structure — not bolted on." },
              { icon: "🫰", title: "Non-Custodial", desc: "We never hold your tokens. Your assets are always in your own wallet — no counterparty risk." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card flex gap-4">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">What Investors Say</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Trusted by 1,800+ investors</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="card h-full">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--border)]">
                    <div>
                      <p className="font-semibold text-[var(--foreground)] text-sm">{t.name}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{t.city}</p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: "rgba(0,212,255,0.1)", color: "var(--accent-blue)" }}
                    >
                      {t.tokens}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          {/* Media logos */}
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-6">
              As Seen In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {["TechCrunch", "CoinDesk", "Handelsblatt", "Forbes", "Decrypt"].map((name) => (
                <span key={name} className="text-sm font-bold tracking-wide opacity-30 text-[var(--foreground)]">
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Questions from investors</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ items={B2C_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div
              className="rounded-3xl p-10 md:p-16 border"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(201,168,76,0.05))",
                borderColor: "rgba(0,212,255,0.2)",
              }}
            >
              <p className="section-label">Start Today</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-4">
                Be more than a customer.{" "}
                <span className="gradient-text">Be an owner.</span>
              </h2>
              <p className="text-[var(--muted-foreground)] mb-10 max-w-lg mx-auto text-lg">
                The restaurant where you have your morning coffee? You could own a piece of it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/invest#opportunities" className="btn-primary text-base px-8 py-4">
                  Browse Businesses →
                </Link>
                <Link href="/invest#opportunities" className="btn-secondary text-base px-8 py-4">
                  Start Investing from €100
                </Link>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] mt-6">
                EU-regulated · Non-custodial · CertiK audited · info@kryptondo.de
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
