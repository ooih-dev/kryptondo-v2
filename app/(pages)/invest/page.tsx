import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail, Shield, Search, CreditCard, Wallet,
  TrendingUp, Landmark, Gift, Zap,
  Building2, Banknote, Star,
  FileText, Key, CalendarDays,
  Tag, Vote, ShieldCheck, Car,
} from "lucide-react";
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
  { step: "01", title: "Create Account", desc: "Sign up with email. Takes under 2 minutes.", icon: <Mail size={20} /> },
  { step: "02", title: "Verify Identity", desc: "KYC in under 5 minutes. Required by EU regulation.", icon: <Shield size={20} /> },
  { step: "03", title: "Browse Businesses", desc: "Explore live opportunities by sector and city.", icon: <Search size={20} /> },
  { step: "04", title: "Invest from €100", desc: "Choose your amount. Pay by card or crypto.", icon: <CreditCard size={20} /> },
  { step: "05", title: "Hold in Your Wallet", desc: "Tokens arrive in your non-custodial wallet. Earn dividends.", icon: <Wallet size={20} /> },
];

const DIFFERENTIATORS = [
  { icon: <Wallet size={20} />, title: "Your tokens, your wallet", desc: "Non-custodial by design. Kryptondo never holds your assets. Your keys — your equity.", accent: "var(--accent-blue)" },
  { icon: <TrendingUp size={20} />, title: "Real dividends, not speculation", desc: "Dividends are tied to real business performance, not token price.", accent: "var(--accent-gold)" },
  { icon: <Landmark size={20} />, title: "EU-regulated structure", desc: "Malta SPV under MiCA framework. Legally compliant securities.", accent: "#7c8cf8" },
  { icon: <Gift size={20} />, title: "Loyalty bonuses", desc: "Token holders unlock discounts, early access, VIP experiences.", accent: "#34c759" },
  { icon: <Zap size={20} />, title: "Arbitrum/Base — low fees", desc: "Near-zero transaction fees, fast settlement, proven infrastructure.", accent: "#ff6b6b" },
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
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div
          className="glow-orb w-[600px] h-[500px] -top-20 -left-40"
          style={{ background: "radial-gradient(ellipse, var(--accent-blue-glow) 0%, transparent 60%)" }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bottom-0 right-0"
          style={{ background: "radial-gradient(ellipse, var(--accent-gold-glow) 0%, transparent 60%)", opacity: 0.5 }}
        />

        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit">
                For Investors · Min €100 · Non-Custodial
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1
                className="font-extrabold text-balance mb-6"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}
              >
                Invest in the Businesses{" "}
                <span className="accent-text">You Love</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                Own real equity. Earn dividends automatically. Get exclusive loyalty perks —
                starting from <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>€100</strong>.
                Your tokens, your wallet.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#opportunities" className="btn-primary text-base !py-3.5 !px-8">
                  <span>Explore Investments →</span>
                </a>
                <a href="#how-it-works" className="btn-secondary text-base !py-3.5 !px-8">
                  How It Works
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <TrustBar stats={TRUST_STATS_B2C} />

      {/* ── The Deal ── */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">The Deal</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Three reasons to invest on Kryptondo
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Building2 size={24} />, title: "Own Real Equity", desc: "Tokens backed by a Malta SPV holding real business equity. Legally compliant ownership — not points or vouchers.", color: "var(--accent)" },
              { icon: <Banknote size={24} />, title: "Earn Dividends", desc: "Automatic distribution when the business distributes profits. Dividends arrive in your wallet — no action needed.", color: "var(--gold)" },
              { icon: <Star size={24} />, title: "Get Exclusive Perks", desc: "Token holders unlock discounts, early access, VIP experiences. Ownership with lifestyle benefits.", color: "var(--green)" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div
                  className="card card-hover text-center h-full"
                  style={{ borderColor: `${item.color}20` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}12`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 tracking-tight-sub" style={{ fontSize: "1rem", color: "var(--foreground)" }}>
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

      {/* ── Car Subscription Feature ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn>
            <div
              className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center"
              style={{ background: "linear-gradient(135deg, rgba(196,102,58,0.07) 0%, rgba(184,149,79,0.05) 100%)", border: "1px solid rgba(196,102,58,0.2)" }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "rgba(196,102,58,0.12)", color: "var(--accent)" }}>
                <Car size={28} />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>New Vertical</span>
                <h3 className="font-bold mt-1 mb-1" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Car Subscription — Drive or Earn
                </h3>
                <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                  Fund premium cars with tokens. Co-own and book driving time, or invest purely for passive rental income. From €50 per token.
                </p>
              </div>
              <Link href="/cars" className="btn-primary shrink-0 whitespace-nowrap" style={{ padding: "0.75rem 1.5rem" }}>
                <span>Browse Cars →</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Live Opportunities ── */}
      <section id="opportunities" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="section-label">Live Opportunities</span>
                <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
                  Businesses raising right now
                </h2>
              </div>
              {/* Filter mock */}
              <div className="flex gap-2 flex-wrap">
                {["All", "Hospitality", "Retail", "Creative", "Services"].map((f, i) => (
                  <button
                    key={f}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                    style={i === 0
                      ? { background: "var(--accent)", color: "#fff", border: "1px solid transparent" }
                      : { background: "var(--surface-2)", color: "var(--muted-foreground)", border: "1px solid var(--border)" }
                    }
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LIVE_OPPORTUNITIES.map((opp, i) => (
              <FadeIn key={opp.id} delay={i * 0.07}>
                <OpportunityCard opp={opp} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">How It Works</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Invest in under 10 minutes
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-5">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--accent)" }}
                  >
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--accent-blue)", letterSpacing: "0.12em" }}>{s.step}</p>
                  <h3 className="font-semibold text-sm mb-1 tracking-tight-sub" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Why Kryptondo</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              What makes us different
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-4">
            {DIFFERENTIATORS.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.07}>
                <div className="card h-full" style={{ borderColor: "var(--border-subtle)", padding: "1.25rem" }}>
                  <div className="mb-2" style={{ color: d.accent }}>{d.icon}</div>
                  <h3 className="font-semibold text-xs mb-1.5 tracking-tight-sub" style={{ color: "var(--foreground)", fontSize: "0.8125rem" }}>
                    {d.title}
                  </h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)", lineHeight: "1.6" }}>
                    {d.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tokens Explained ── */}
      <section id="tokens" className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Tokens Explained</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              No prior experience required
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3
                    className="font-bold mb-6 tracking-tight-sub"
                    style={{ fontSize: "1.25rem", color: "var(--foreground)" }}
                  >
                    Think of it as a digital share certificate
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: <FileText size={20} />, text: "A token is an ownership record — like a digital share certificate stored securely on Arbitrum." },
                      { icon: <Landmark size={20} />, text: "It represents your fractional stake in a Malta-registered company (SPV) that holds equity in the business." },
                      { icon: <TrendingUp size={20} />, text: "When the business distributes profits, you automatically receive your share — automatic profit sharing." },
                      { icon: <Key size={20} />, text: "Your tokens live in your own wallet — no intermediary holds them. Full ownership, no counterparty risk." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>{item.icon}</span>
                        <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-xs mb-2" style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                      Traditional equity
                    </p>
                    <p className="text-sm" style={{ color: "var(--foreground)" }}>
                      Paper certificate → locked in registry → hard to transfer ✗
                    </p>
                  </div>
                  <div className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>vs.</div>
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "var(--accent-subtle)", border: "1px solid var(--accent-glow)" }}
                  >
                    <p
                      className="text-xs mb-2"
                      style={{ color: "var(--accent-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Kryptondo token
                    </p>
                    <div className="space-y-1.5">
                      {[
                        "Digital ownership record in your wallet ✓",
                        "Instant settlement on Arbitrum ✓",
                        "Automatic profit sharing ✓",
                        "Tradeable peer-to-peer ✓",
                      ].map((line) => (
                        <p key={line} className="text-xs" style={{ color: "var(--muted-foreground)" }}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Dividend Formula ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <DividendFormula audience="b2c" />
        </div>
      </section>

      {/* ── Secondary Market ── */}
      <section id="secondary" className="section">
        <div className="container-md mx-auto">
          <FadeIn>
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                    style={{ color: "#7c8cf8", letterSpacing: "0.15em" }}
                  >
                    Secondary Market
                  </span>
                  <h2
                    className="font-bold text-balance mb-4"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", color: "var(--foreground)" }}
                  >
                    Liquidity When You Need It
                  </h2>
                  <p className="text-sm leading-body mb-7" style={{ color: "var(--muted-foreground)" }}>
                    Traditional equity crowdfunding locks you in for years. Kryptondo tokens are
                    designed to be tradeable — a peer-to-peer marketplace is coming Q3 2026.
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "vs. Seedrs", kryptondo: "24/7 trading", them: "Monthly window only" },
                      { label: "vs. Crowdcube", kryptondo: "Non-custodial", them: "Platform holds assets" },
                      { label: "vs. Traditional equity", kryptondo: "P2P in minutes", them: "Years to exit" },
                    ].map((row) => (
                      <div key={row.label} className="grid grid-cols-3 gap-3 text-xs items-center">
                        <span style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>{row.label}</span>
                        <span className="font-semibold" style={{ color: "#7c8cf8" }}>✓ {row.kryptondo}</span>
                        <span style={{ color: "var(--muted-foreground)", textDecoration: "line-through" }}>✗ {row.them}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-56">
                  <div
                    className="rounded-2xl p-6 text-center"
                    style={{ background: "rgba(124,140,248,0.1)", border: "1px solid rgba(124,140,248,0.25)" }}
                  >
                    <div className="mb-3 flex justify-center" style={{ color: "#7c8cf8" }}>
                      <CalendarDays size={36} />
                    </div>
                    <p className="font-bold mb-1" style={{ fontSize: "1.0625rem", color: "var(--foreground)" }}>
                      Coming Q3 2026
                    </p>
                    <p className="text-xs leading-body mb-4" style={{ color: "var(--muted-foreground)" }}>
                      P2P token marketplace. 24/7. Lower fees. Non-custodial.
                    </p>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(124,140,248,0.15)", color: "#7c8cf8" }}
                    >
                      In Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Loyalty & Perks ── */}
      <section id="loyalty" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-xl mx-auto">
            <span className="section-label">Loyalty & Perks</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Ownership with lifestyle benefits
            </h2>
            <p className="text-sm mt-3 leading-body" style={{ color: "var(--muted-foreground)" }}>
              Token holders unlock exclusive rewards from the businesses they invest in. More tokens → better perks.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {LOYALTY_EXAMPLES.map((ex, i) => (
              <FadeIn key={ex.business} delay={i * 0.07}>
                <div className="card h-full" style={{ padding: "1.25rem" }}>
                  <p className="font-semibold mb-1 tracking-tight-sub" style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>
                    {ex.business}
                  </p>
                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--accent-gold)" }}>{ex.perk}</p>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: "var(--accent-gold-glow)", color: "var(--accent-gold)" }}
                  >
                    {ex.tier}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: <Tag size={24} />, text: "Discounts at invested businesses" },
              { icon: <Zap size={24} />, text: "Early access to new products" },
              { icon: <Star size={24} />, text: "VIP events and experiences" },
              { icon: <Vote size={24} />, text: "Voting rights on decisions" },
            ].map((item, i) => (
              <FadeIn key={item.text} delay={i * 0.08}>
                <div className="card text-center" style={{ padding: "1.25rem" }}>
                  <div className="mb-2 flex justify-center" style={{ color: "var(--accent-gold)" }}>{item.icon}</div>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & Compliance ── */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-md mx-auto">
            <span className="section-label">Security & Compliance</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Built for security from day one
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <Landmark size={24} />, title: "Malta SPV · MiCA Framework", desc: "Every offering issued through a Malta-registered SPV under EU financial regulation." },
              { icon: <ShieldCheck size={24} />, title: "CertiK Audited Smart Contracts", desc: "All smart contracts undergo rigorous security audits by CertiK — the industry standard." },
              { icon: <Shield size={24} />, title: "KYC/AML Verification", desc: "All investors verified. Compliance baked into the token structure." },
              { icon: <Wallet size={24} />, title: "Non-Custodial", desc: "We never hold your tokens. Your assets are always in your own wallet." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card flex gap-4 h-full" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="shrink-0" style={{ color: "var(--accent)" }}>{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-md mx-auto">
            <span className="section-label">Social Proof</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Trusted by 1,800+ investors
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="card flex flex-col h-full" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm leading-body mb-5 italic flex-1" style={{ color: "var(--muted-foreground)" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div>
                      <p className="font-semibold tracking-tight-sub" style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{t.city}</p>
                    </div>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: "var(--accent-blue-glow)", color: "var(--accent-blue)" }}
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
            <p
              className="text-center mb-6"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}
            >
              As Seen In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {["TechCrunch", "CoinDesk", "Handelsblatt", "Forbes", "Decrypt"].map((name) => (
                <span
                  key={name}
                  style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.02em", color: "var(--foreground)", opacity: 0.2 }}
                >
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-10 max-w-md mx-auto">
            <span className="section-label">FAQ</span>
            <h2 className="text-display-sm font-bold" style={{ color: "var(--foreground)" }}>
              Questions from investors
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ items={B2C_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div
              className="rounded-3xl p-10 md:p-16"
              style={{
                background: "var(--background-2, var(--surface-2))",
                border: "1px solid var(--border)",
              }}
            >
              <span className="section-label">Start Today</span>
              <h2
                className="font-extrabold text-balance mb-4 mx-auto max-w-lg"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", letterSpacing: "-0.01em", lineHeight: "1.15", color: "var(--foreground)" }}
              >
                Be more than a customer.{" "}
                <span className="accent-text">Be an owner.</span>
              </h2>
              <p className="text-base mb-10 max-w-md mx-auto leading-body" style={{ color: "var(--muted-foreground)" }}>
                The restaurant where you have your morning coffee? You could own a piece of it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/invest#opportunities" className="btn-primary text-base !py-3.5 !px-8">
                  <span>Browse Businesses →</span>
                </Link>
                <Link href="/invest#opportunities" className="btn-secondary text-base !py-3.5 !px-8">
                  Start Investing from €100
                </Link>
              </div>
              <p className="text-xs mt-6" style={{ color: "var(--muted-foreground)" }}>
                EU-regulated · Non-custodial · CertiK audited · info@kryptondo.de
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
