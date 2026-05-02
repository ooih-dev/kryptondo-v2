import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";
import TrustBar from "../../components/TrustBar";
import FAQ from "../../components/FAQ";
import DividendFormula from "../../components/DividendFormula";
import { TRUST_STATS_B2B, TEAM_MEMBERS, B2B_FAQS } from "../../data/mock";

export const metadata: Metadata = {
  title: "For Business Owners — Raise Capital from Your Community",
  description:
    "Tokenize 10–20% of your business on Arbitrum. Raise capital from your customers, automate dividends, and build the most loyal community you've ever had. Malta-licensed SPV.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Apply",
    desc: "Submit your business profile. Our team reviews within 5 business days. No upfront cost.",
    icon: "📋",
  },
  {
    step: "02",
    title: "SPV Setup (Malta)",
    desc: "We set up a Malta-registered SPV that holds your equity stake. All legal compliance handled by our team.",
    icon: "🏛️",
  },
  {
    step: "03",
    title: "Tokenize (Arbitrum/Base)",
    desc: "10–20% equity converted to digital tokens. Smart contracts audited by CertiK. KYC/AML built-in.",
    icon: "⛓️",
  },
  {
    step: "04",
    title: "Raise & Engage",
    desc: "Launch your campaign. Investors buy tokens — they get equity, dividends, and loyalty perks. You get capital.",
    icon: "🚀",
  },
];

const WHAT_YOU_GET = [
  {
    icon: "💼",
    title: "Capital without losing control",
    desc: "You offer 10–20% maximum. Retain full operational control. Your business, your decisions.",
  },
  {
    icon: "👥",
    title: "Investors who are also customers",
    desc: "Token holders are naturally motivated to promote your business. Every investor becomes your advocate.",
  },
  {
    icon: "⚡",
    title: "Automated dividend distribution",
    desc: "Smart contracts handle profit distribution automatically. No manual wire transfers, no delays.",
  },
  {
    icon: "🎁",
    title: "Loyalty layer included",
    desc: "Reward token holders with exclusive perks, discounts, early access. Build your most engaged customer segment.",
  },
  {
    icon: "📊",
    title: "On-chain cap table",
    desc: "100% of your equity tracking handled on Arbitrum. No spreadsheets, no legal confusion.",
  },
  {
    icon: "🔐",
    title: "KYC/AML handled for you",
    desc: "Every investor goes through verified identity checks. Compliance is our problem, not yours.",
  },
];

const BUSINESS_TYPES = [
  { name: "Hospitality", desc: "Restaurants, bars, cafés, hotels — customers who regularly return", icon: "🍽️" },
  { name: "Retail", desc: "Boutiques, brands, local stores with loyal buyer communities", icon: "🛍️" },
  { name: "Creative / Media", desc: "Studios, agencies, creators with engaged fan audiences", icon: "🎬" },
  { name: "Local Services", desc: "Fitness, wellness, beauty — strong community-based businesses", icon: "💆" },
];

export default function ForBusinessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 px-4 overflow-hidden">
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[400px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #C9A84C 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-6 w-fit" style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent-gold)", borderColor: "rgba(201,168,76,0.3)" }}>
                For Business Owners
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6 leading-tight">
                Raise Capital.{" "}
                <span style={{ color: "var(--accent-gold)" }}>Build Community.</span>{" "}
                Keep Control.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl leading-relaxed">
                Tokenize 10–20% of your business on Arbitrum. Your customers invest, receive dividends,
                and become your most loyal advocates. We handle the legal. You handle the business.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#apply" className="btn-gold text-base px-8 py-4">
                  Apply to List Your Business →
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
      <TrustBar stats={TRUST_STATS_B2B} />

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="section-label">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              From application to funded in 4 steps
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              We handle SPV setup, tokenization, and compliance. Timeline: 6–8 weeks from application to live campaign.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="card text-center h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ background: "var(--surface-2)" }}
                  >
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--accent-gold)" }}>{s.step}</p>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="section-label">What You Get</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              More than capital
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              &ldquo;Your customers are already investing in your success. Now let them invest in your equity.&rdquo;
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {WHAT_YOU_GET.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="card h-full">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Legal */}
      <section id="regulatory" className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Regulatory & Legal</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              We handle the legal. You handle the business.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "Malta-Licensed SPV",
                desc: "Every offering is structured through a Malta-registered Special Purpose Vehicle — compliant with EU securities law.",
                badge: "MFSA Licensed",
                color: "#00D4FF",
              },
              {
                title: "MiCA Framework",
                desc: "Our tokenization infrastructure fully complies with the EU's Markets in Crypto-Assets regulation.",
                badge: "EU Regulated",
                color: "#C9A84C",
              },
              {
                title: "Compliant Securities",
                desc: "Tokens are structured as compliant securities, not speculative crypto. Legal ownership, real rights.",
                badge: "Securities Law",
                color: "#7C8CF8",
              },
              {
                title: "On-Chain KYC/AML",
                desc: "Every investor is verified. KYC/AML checks are enforced on-chain via whitelisted wallet addresses.",
                badge: "CertiK Audited",
                color: "#4CAF50",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card flex gap-4">
                  <div className="shrink-0">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${item.color}22`, color: item.color }}
                    >
                      {item.badge}
                    </span>
                  </div>
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

      {/* For Which Businesses */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Who Is This For?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Businesses with communities
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              The best candidates already have loyal customers who would love to own a piece of their favorite place.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-5">
            {BUSINESS_TYPES.map((bt, i) => (
              <FadeIn key={bt.name} delay={i * 0.1}>
                <div className="card text-center h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">{bt.icon}</div>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{bt.name}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{bt.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fees & Economics */}
      <section id="fees" className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Fees & Economics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Simple, aligned pricing
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { value: "€0", label: "Upfront Cost", desc: "No fees to apply or set up your campaign." },
              { value: "5%", label: "Success Fee", desc: "We take 5% only when your raise completes. All or nothing." },
              { value: "Included", label: "SPV Setup", desc: "Malta SPV registration and smart contract deployment included." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="card text-center">
                  <p className="text-4xl font-extrabold mb-2" style={{ color: "var(--accent-blue)" }}>{item.value}</p>
                  <p className="font-bold text-[var(--foreground)] mb-2">{item.label}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="card text-center" style={{ borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)" }}>
              <p className="text-sm text-[var(--muted-foreground)]">
                <strong className="text-[var(--foreground)]">All-or-nothing model:</strong>{" "}
                If you don&apos;t reach your minimum target, all investor funds are returned and no fees are charged.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dividend Formula */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <DividendFormula audience="b2b" />
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Finance. Technology. Law.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="card text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4"
                    style={{ background: `${member.color}22`, color: member.color, border: `1px solid ${member.color}33` }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press logos */}
      <section className="py-12 px-4 border-y border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-8">
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
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Questions from business owners</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ items={B2B_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* CTA Block */}
      <section id="apply" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div
              className="rounded-3xl p-10 md:p-16 border"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(0,212,255,0.06))",
                borderColor: "rgba(201,168,76,0.25)",
              }}
            >
              <p className="section-label" style={{ color: "var(--accent-gold)" }}>Ready to start?</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-4">
                Turn your customers into{" "}
                <span style={{ color: "var(--accent-gold)" }}>shareholders</span>
              </h2>
              <p className="text-[var(--muted-foreground)] mb-10 max-w-lg mx-auto text-lg">
                Join 12 businesses that have already raised €2.4M+ from their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@kryptondo.de?subject=Business+Listing+Application" className="btn-gold text-base px-8 py-4">
                  Apply to List Your Business →
                </a>
                <a href="mailto:info@kryptondo.de?subject=Schedule+a+Call" className="btn-secondary text-base px-8 py-4">
                  Schedule a Call
                </a>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] mt-6">
                No upfront fees. Response within 5 business days. Contact:{" "}
                <a href="mailto:info@kryptondo.de" style={{ color: "var(--accent-blue)" }}>info@kryptondo.de</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
