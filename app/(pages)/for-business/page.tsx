import type { Metadata } from "next";
import {
  ClipboardList, Landmark, Coins, TrendingUp,
  Briefcase, Users, Zap, Gift, BarChart3, ShieldCheck,
  Utensils, ShoppingBag, Film, Scissors,
} from "lucide-react";
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
    icon: <ClipboardList size={24} />,
  },
  {
    step: "02",
    title: "SPV Setup",
    desc: "We establish a Malta-registered SPV that holds your equity stake. All legal compliance handled for you.",
    icon: <Landmark size={24} />,
  },
  {
    step: "03",
    title: "Tokenize",
    desc: "10–20% equity converted to digital tokens on Arbitrum/Base. Smart contracts audited by CertiK.",
    icon: <Coins size={24} />,
  },
  {
    step: "04",
    title: "Raise & Engage",
    desc: "Launch your campaign. Investors get tokens, dividends, and perks. You get capital and advocates.",
    icon: <TrendingUp size={24} />,
  },
];

const WHAT_YOU_GET = [
  { icon: <Briefcase size={24} />, title: "Capital without losing control", desc: "You offer 10–20% maximum. Retain full operational control. Your business, your decisions." },
  { icon: <Users size={24} />, title: "Investors who are customers", desc: "Token holders are naturally motivated to promote your business. Every investor becomes your advocate." },
  { icon: <Zap size={24} />, title: "Automated dividend distribution", desc: "Smart contracts handle profit distribution automatically. No manual wire transfers, no delays." },
  { icon: <Gift size={24} />, title: "Loyalty layer included", desc: "Reward token holders with exclusive perks, discounts, early access. Build your most engaged customer segment." },
  { icon: <BarChart3 size={24} />, title: "On-chain cap table", desc: "100% of your equity tracking handled on Arbitrum. No spreadsheets, no legal confusion." },
  { icon: <ShieldCheck size={24} />, title: "KYC/AML handled for you", desc: "Every investor goes through verified identity checks. Compliance is our problem, not yours." },
];

const BUSINESS_TYPES = [
  { name: "Hospitality", desc: "Restaurants, bars, cafés, hotels — customers who regularly return", icon: <Utensils size={36} /> },
  { name: "Retail", desc: "Boutiques, brands, local stores with loyal buyer communities", icon: <ShoppingBag size={36} /> },
  { name: "Creative / Media", desc: "Studios, agencies, creators with engaged fan audiences", icon: <Film size={36} /> },
  { name: "Local Services", desc: "Fitness, wellness, beauty — strong community-based businesses", icon: <Scissors size={36} /> },
];

export default function ForBusinessPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div
          className="glow-orb w-[700px] h-[500px] -top-32 right-0"
          style={{ background: "radial-gradient(ellipse, var(--accent-gold-glow) 0%, transparent 60%)", opacity: 0.8 }}
        />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit" style={{ background: "var(--gold-subtle)", color: "var(--gold)", borderColor: "var(--gold-glow)" }}>
                For Business Owners
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1
                className="font-extrabold text-balance mb-6"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}
              >
                Raise Capital.{" "}
                <span className="accent-text">Build Community.</span>{" "}
                Keep Control.
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p
                className="text-lg md:text-xl mb-10 max-w-2xl leading-body"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tokenize 10–20% of your business on Arbitrum. Your customers invest, receive dividends,
                and become your most loyal advocates. We handle the legal. You handle the business.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#apply" className="btn-gold text-base !py-3.5 !px-8">
                  <span>Apply to List Your Business →</span>
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
      <TrustBar stats={TRUST_STATS_B2B} />

      {/* ── How It Works ── */}
      <section id="how-it-works" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="mb-16 max-w-lg">
            <span className="section-label-gold">The Process</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              From application to funded in 4 steps
            </h2>
            <p className="text-sm mt-3 leading-body" style={{ color: "var(--muted-foreground)" }}>
              Timeline: 6–8 weeks from application to live campaign.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="mb-4" style={{ color: "var(--gold)" }}>{s.icon}</div>
                  <p
                    className="text-xs font-bold mb-1.5"
                    style={{ color: "var(--accent-gold)", letterSpacing: "0.12em" }}
                  >
                    {s.step}
                  </p>
                  <h3 className="font-semibold mb-2 tracking-tight-sub" style={{ fontSize: "1rem", color: "var(--foreground)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14 max-w-xl mx-auto">
            <span className="section-label">What You Get</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              More than capital
            </h2>
            <p className="text-sm mt-3 leading-body" style={{ color: "var(--muted-foreground)" }}>
              &ldquo;Your customers are already investing in your success. Now let them invest in your equity.&rdquo;
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {WHAT_YOU_GET.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="card h-full" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="mb-3" style={{ color: "var(--accent)" }}>{item.icon}</div>
                  <h3 className="font-semibold mb-2 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulatory & Legal ── */}
      <section id="regulatory" className="section trust-section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Regulatory & Legal</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              We handle the legal.<br />You handle the business.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Malta-Licensed SPV", desc: "Every offering is structured through a Malta-registered Special Purpose Vehicle — compliant with EU securities law.", badge: "MFSA Licensed", color: "var(--accent)" },
              { title: "MiCA Framework", desc: "Our tokenization infrastructure fully complies with the EU&apos;s Markets in Crypto-Assets regulation.", badge: "EU Regulated", color: "var(--gold)" },
              { title: "Compliant Securities", desc: "Tokens are structured as compliant securities, not speculative crypto. Legal ownership, real rights.", badge: "Securities Law", color: "var(--gold)" },
              { title: "On-Chain KYC/AML", desc: "Every investor is verified. KYC/AML checks are enforced on-chain via whitelisted wallet addresses.", badge: "CertiK Audited", color: "var(--green)" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card flex gap-4 h-full" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="shrink-0 pt-0.5">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${item.color}18`, color: item.color }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>
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

      {/* ── Business Types ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-xl mx-auto">
            <span className="section-label">Who Is This For?</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Businesses with communities
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-4">
            {BUSINESS_TYPES.map((bt, i) => (
              <FadeIn key={bt.name} delay={i * 0.1}>
                <div className="card card-hover text-center h-full">
                  <div className="mb-3 flex justify-center" style={{ color: "var(--accent)" }}>{bt.icon}</div>
                  <h3 className="font-semibold mb-2 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>
                    {bt.name}
                  </h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{bt.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fees & Economics ── */}
      <section id="fees" className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-md mx-auto">
            <span className="section-label">Fees & Economics</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Simple, aligned pricing
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {[
              { value: "€0", label: "Upfront Cost", desc: "No fees to apply or set up your campaign." },
              { value: "5%", label: "Success Fee", desc: "We take 5% only when your raise completes." },
              { value: "Included", label: "SPV Setup", desc: "Malta SPV registration included in success fee." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="card text-center">
                  <p
                    className="font-extrabold mb-1"
                    style={{ fontSize: "2.25rem", color: "var(--accent)", letterSpacing: "-0.02em", fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {item.value}
                  </p>
                  <p className="font-semibold mb-1.5 tracking-tight-sub" style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>
                    {item.label}
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div
              className="rounded-xl p-4 text-center text-sm"
              style={{ background: "var(--gold-subtle)", border: "1px solid var(--gold-glow)" }}
            >
              <strong style={{ color: "var(--foreground)" }}>All-or-nothing model:</strong>{" "}
              <span style={{ color: "var(--muted-foreground)" }}>
                If you don&apos;t reach your minimum target, all investor funds are returned. No fees charged.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Dividend Formula ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <DividendFormula audience="b2b" />
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-md mx-auto">
            <span className="section-label">Our Team</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              Finance. Technology. Law.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="card text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-4"
                    style={{
                      background: `${member.color}18`,
                      color: member.color,
                      border: `1px solid ${member.color}30`,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-semibold mb-0.5 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>
                    {member.name}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: member.color, letterSpacing: "0.04em" }}
                  >
                    {member.role}
                  </p>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)", lineHeight: "1.65" }}>
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press logos ── */}
      <section
        className="section-sm"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-lg mx-auto px-4">
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
              Questions from business owners
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ items={B2B_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Block ── */}
      <section id="apply" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn>
            <div
              className="rounded-3xl p-10 md:p-16 text-center"
              style={{
                background: "var(--background-2, var(--surface-2))",
                border: "1px solid var(--border)",
              }}
            >
              <span className="section-label-gold text-center block">Ready to start?</span>
              <h2
                className="font-extrabold text-balance mb-4 mx-auto max-w-lg"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", letterSpacing: "-0.01em", lineHeight: "1.15", color: "var(--foreground)" }}
              >
                Turn your customers into{" "}
                <span className="accent-text">shareholders</span>
              </h2>
              <p className="text-base mb-10 max-w-md mx-auto leading-body" style={{ color: "var(--muted-foreground)" }}>
                Join 12 businesses that have raised €2.4M+ from their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:info@kryptondo.de?subject=Business+Listing+Application" className="btn-gold text-base !py-3.5 !px-8">
                  <span>Apply to List Your Business →</span>
                </a>
                <a href="mailto:info@kryptondo.de?subject=Schedule+a+Call" className="btn-secondary text-base !py-3.5 !px-8">
                  Schedule a Call
                </a>
              </div>
              <p className="text-xs mt-6" style={{ color: "var(--muted-foreground)" }}>
                No upfront fees · Response within 5 business days ·{" "}
                <a href="mailto:info@kryptondo.de" style={{ color: "var(--accent)" }}>info@kryptondo.de</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
