import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, ShieldCheck, Wallet, Shield, TrendingUp, Eye, Scale } from "lucide-react";
import FadeIn from "./components/FadeIn";
import TrustBar from "./components/TrustBar";
import AllOpportunitiesSection from "./components/AllOpportunitiesSection";
import { TRUST_STATS_B2C } from "./data/mock";
import { getTranslations } from "./i18n/server";

export const metadata: Metadata = {
  title: "Kryptondo — Invest in Businesses You Love",
};

export default async function HomePage() {
  const t = await getTranslations("home");

  const HOW_IT_WORKS = [
    {
      step: "01",
      title: t.howStep1Title,
      desc: t.howStep1Desc,
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
    },
    {
      step: "02",
      title: t.howStep2Title,
      desc: t.howStep2Desc,
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      step: "03",
      title: t.howStep3Title,
      desc: t.howStep3Desc,
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      step: "04",
      title: t.howStep4Title,
      desc: t.howStep4Desc,
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
    },
  ];

  const PILLARS = [
    {
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      label: t.pillarRisk,
      title: t.pillarRiskTitle,
      desc: t.pillarRiskDesc,
      accent: "var(--accent)",
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      label: t.pillarInterest,
      title: t.pillarInterestTitle,
      desc: t.pillarInterestDesc,
      accent: "var(--gold)",
    },
    {
      icon: <Eye className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      label: t.pillarTransparency,
      title: t.pillarTransparencyTitle,
      desc: t.pillarTransparencyDesc,
      accent: "#7c8cf8",
    },
    {
      icon: <Scale className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      label: t.pillarLaw,
      title: t.pillarLawTitle,
      desc: t.pillarLawDesc,
      accent: "#4A7C59",
    },
  ];

  const TRUST_ITEMS = [
    {
      icon: <Landmark className="w-6 h-6 md:w-8 md:h-8" />,
      title: t.trustMaltaSPV,
      desc: t.trustMaltaSPVDesc,
      accent: "var(--accent)",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      title: t.trustCertikAudit,
      desc: t.trustCertikDesc,
      accent: "var(--gold)",
    },
    {
      icon: <Wallet className="w-6 h-6 md:w-8 md:h-8" />,
      title: t.trustNonCustodialTitle,
      desc: t.trustNonCustodialDesc,
      accent: "var(--accent)",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
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
                {t.badge}
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-balance mb-6" style={{ color: "var(--foreground)" }}>
                {t.headline}{" "}
                <span className="accent-text">{t.headlineAccent}</span>{" "}
                {t.headlineSuffix}
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p
                className="text-lg md:text-xl mb-10 max-w-xl leading-body"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/invest" className="btn-primary text-base !py-3.5 !px-8">
                  <span>{t.ctaPrimary}</span>
                </Link>
                <Link href="/for-business" className="btn-secondary text-base !py-3.5 !px-8">
                  <span>{t.ctaSecondary}</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-6 mt-10 flex-wrap">
                {[t.trustMalta, t.trustCertik, t.trustNonCustodial, t.trustEU].map((text, i) => (
                  <div key={text} className="flex items-center gap-2">
                    {i > 0 && <span style={{ color: "var(--border)", fontSize: "0.75rem" }}>·</span>}
                    <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-16 max-w-3xl">
            {[
              {
                tag: t.forInvestors,
                headline: t.forInvestorsHeadline,
                body: t.forInvestorsBody,
                cta: t.forInvestorsCTA,
                href: "/invest",
                accent: "var(--accent)",
                glow: "var(--accent-glow)",
              },
              {
                tag: t.forBusiness,
                headline: t.forBusinessHeadline,
                body: t.forBusinessBody,
                cta: t.forBusinessCTA,
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

      <TrustBar stats={TRUST_STATS_B2C} />

      {/* 360° Philosophy */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.sectionPlatform}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              {t.platformTitle}
            </h2>
            <p className="text-base leading-body mt-3" style={{ color: "var(--muted-foreground)" }}>
              {t.platformSub}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.label} delay={i * 0.09}>
                <div className="card card-hover h-full" style={{ borderColor: `${pillar.accent}25` }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: `${pillar.accent}14`, color: pillar.accent }}>
                    {pillar.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: pillar.accent, letterSpacing: "0.1em" }}>{pillar.label}</p>
                  <h3 className="font-semibold mb-2" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "var(--foreground)" }}>{pillar.title}</h3>
                  <p className="text-sm leading-body md:text-base" style={{ color: "var(--muted-foreground)" }}>{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AllOpportunitiesSection />

      {/* How It Works */}
      <section id="how-it-works" className="section relative overflow-hidden bg-dot" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto relative z-10">
          <FadeIn className="text-center mb-16 max-w-xl mx-auto">
            <span className="section-label">{t.sectionHow}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              {t.howTitle}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 shrink-0"
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
              <span>{t.startInvesting}</span>
            </Link>
            <Link href="/for-business" className="btn-secondary !py-3 !px-8">
              {t.listYourBusiness}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section trust-section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">{t.sectionTrust}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>
              {t.trustTitle}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {TRUST_ITEMS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card card-hover h-full" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="mb-4 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center" style={{ color: item.accent, background: `${item.accent}10` }}>{item.icon}</div>
                  <h3
                    className="font-semibold mb-2 tracking-tight-sub"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "var(--foreground)" }}
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

      {/* Press logos */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <FadeIn>
            <p
              className="text-center mb-8"
              style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}
            >
              {t.asSeenIn}
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

      {/* Final CTA */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <h2 className="text-display-lg font-extrabold text-balance mb-6" style={{ color: "var(--foreground)" }}>
              {t.ctaTitle}{" "}
              <span className="accent-text">{t.ctaAccent}</span>
            </h2>
            <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/invest" className="btn-primary text-base !py-3.5 !px-8">
                <span>{t.ctaPrimaryBtn}</span>
              </Link>
              <Link href="/for-business" className="btn-secondary text-base !py-3.5 !px-8">
                {t.ctaSecondaryBtn}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
