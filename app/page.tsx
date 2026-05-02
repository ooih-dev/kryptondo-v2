import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "./components/FadeIn";
import TrustBar from "./components/TrustBar";
import OpportunityCard from "./components/OpportunityCard";
import { TRUST_STATS_B2C, LIVE_OPPORTUNITIES } from "./data/mock";

export const metadata: Metadata = {
  title: "Kryptondo — Invest in Businesses You Love",
};

const HOW_IT_WORKS = [
  { step: "01", title: "Browse & Invest", desc: "Discover local businesses raising capital. Start from €100.", icon: "🔍" },
  { step: "02", title: "Receive Tokens", desc: "Your ownership is recorded as tokens on Arbitrum — non-custodial.", icon: "🪙" },
  { step: "03", title: "Earn Dividends", desc: "Automatic profit distribution to your wallet when businesses perform.", icon: "💰" },
  { step: "04", title: "Get Perks", desc: "Token holders unlock exclusive discounts, early access, and VIP experiences.", icon: "🎁" },
];

const AUDIENCE_CARDS = [
  {
    tag: "For Investors",
    headline: "Invest in the Businesses You Love",
    body: "Own real equity. Earn dividends. Get exclusive loyalty perks — starting from €100.",
    cta: "Explore Investments",
    href: "/invest",
    accent: "#00D4FF",
  },
  {
    tag: "For Business Owners",
    headline: "Raise Capital. Build Community. Keep Control.",
    body: "Tokenize 10–20% of your business. Your customers invest, get dividends, and become your biggest advocates.",
    cta: "Apply to List Your Business",
    href: "/for-business",
    accent: "#C9A84C",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #00D4FF 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="container-lg mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="badge mb-6 mx-auto w-fit">
                EU-Regulated · Malta SPV · CertiK Audited
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] mb-6 max-w-4xl mx-auto leading-tight">
                Invest in businesses.{" "}
                <span className="gradient-text">Own a piece. Earn dividends.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10">
                Kryptondo connects investors and local businesses through tokenized equity.
                Real ownership. Real returns. Non-custodial.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/invest" className="btn-primary text-base px-8 py-4">
                  I Want to Invest →
                </Link>
                <Link href="/for-business" className="btn-gold text-base px-8 py-4">
                  I Want to Raise Capital →
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Dual audience cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {AUDIENCE_CARDS.map((card, i) => (
              <FadeIn key={card.tag} delay={0.1 + i * 0.1}>
                <div
                  className="card h-full hover:-translate-y-1 transition-all duration-300 group"
                  style={{ borderColor: `${card.accent}33` }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                    style={{ color: card.accent }}
                  >
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{card.headline}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">{card.body}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: card.accent }}
                  >
                    {card.cta} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar stats={TRUST_STATS_B2C} />

      {/* Featured Opportunities */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Live Opportunities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Businesses raising right now
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              All opportunities are EU-regulated through Malta-licensed SPVs. Invest from €100.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIVE_OPPORTUNITIES.map((opp, i) => (
              <FadeIn key={opp.id} delay={i * 0.07}>
                <OpportunityCard opp={opp} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <Link href="/invest" className="btn-secondary px-8 py-3">
              View All Opportunities →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="section-label">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              From browsing to earning dividends
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ background: "var(--surface-2)" }}
                  >
                    {step.icon}
                  </div>
                  <p className="text-xs font-bold text-[var(--accent-blue)] mb-1">{step.step}</p>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary px-8 py-3">Start Investing</Link>
            <Link href="/for-business" className="btn-secondary px-8 py-3">List Your Business</Link>
          </FadeIn>
        </div>
      </section>

      {/* Trust signals */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Built for Trust</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Enterprise-grade security. EU regulation.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "🏛️",
                title: "Malta SPV Structure",
                desc: "Every offering uses a Malta-registered Special Purpose Vehicle. EU-regulated, fully compliant with MiCA framework.",
              },
              {
                icon: "🔒",
                title: "CertiK Audited",
                desc: "All smart contracts audited by CertiK — the industry standard for blockchain security verification.",
              },
              {
                icon: "🫰",
                title: "Non-Custodial",
                desc: "Your tokens are held in your own wallet. Kryptondo never takes custody of your assets. Your keys, your equity.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press logos placeholder */}
      <section className="py-12 px-4 border-y border-[var(--border)]">
        <div className="container-lg mx-auto">
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-8">
              As Seen In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["TechCrunch", "CoinDesk", "Handelsblatt", "Forbes", "Decrypt"].map((name) => (
                <span
                  key={name}
                  className="text-sm font-bold tracking-wide opacity-30"
                  style={{ color: "var(--foreground)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6">
              Ready to invest in the{" "}
              <span className="gradient-text">businesses you believe in?</span>
            </h2>
            <p className="text-[var(--muted-foreground)] mb-10 max-w-lg mx-auto">
              Join 1,800+ investors backing real businesses across Europe. Start from €100.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/invest" className="btn-primary text-base px-8 py-4">Start Investing from €100</Link>
              <Link href="/for-business" className="btn-secondary text-base px-8 py-4">List Your Business</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
