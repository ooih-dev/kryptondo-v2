import type { Metadata } from "next";
import Link from "next/link";
import {
  Sun, TrendingUp, Shield, Wallet, Leaf,
  CalendarDays, CheckCircle, Home, Zap, Users, Building2,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import FAQ from "../../components/FAQ";
import { SOLAR_PROJECTS, SOLAR_FAQS } from "../../data/mock";
import { getTranslations, getLocale } from "../../i18n/server";

export const metadata: Metadata = {
  title: "Solar Energy — Invest in Sunshine | Kryptondo",
  description: "Fund solar installations on commercial rooftops. Earn from clean energy sales. Or contribute your rooftop — and earn even more.",
};

const SOLAR_ACCENT = "#F59E0B";
const SOLAR_GREEN = "#4A7C59";

const RISK_LEVELS_DATA = [
  { score: 1, label: "Conservative", color: "#4A7C59", bg: "rgba(74, 124, 89, 0.12)" },
  { score: 2, label: "Moderate",     color: "#7A9A5A", bg: "rgba(122, 154, 90, 0.12)" },
  { score: 3, label: "Balanced",     color: "#B8954F", bg: "rgba(184, 149, 79, 0.12)" },
  { score: 4, label: "Growth",       color: "#C4663A", bg: "rgba(196, 102, 58, 0.12)" },
  { score: 5, label: "Aggressive",   color: "#9E3A2B", bg: "rgba(158, 58, 43, 0.12)" },
];
function getRiskLevel(score: number) {
  return RISK_LEVELS_DATA[Math.min(Math.max(Math.round(score), 1), 5) - 1];
}

export default function SolarPage() {
  const t = getTranslations("solar");
  const locale = getLocale();
  const prefix = locale === "de" ? "/de" : "";

  const HOW_IT_WORKS_INVESTOR = [
    { step: "01", icon: <Sun size={20} />, desc: t.howInvestorStep1 },
    { step: "02", icon: <Wallet size={20} />, desc: t.howInvestorStep2 },
    { step: "03", icon: <Zap size={20} />, desc: t.howInvestorStep3 },
    { step: "04", icon: <TrendingUp size={20} />, desc: t.howInvestorStep4 },
  ];

  const HOW_IT_WORKS_CONTRIBUTOR = [
    { step: "01", icon: <Home size={20} />, desc: t.howContributorStep1 },
    { step: "02", icon: <Shield size={20} />, desc: t.howContributorStep2 },
    { step: "03", icon: <Users size={20} />, desc: t.howContributorStep3 },
    { step: "04", icon: <TrendingUp size={20} />, desc: t.howContributorStep4 },
  ];

  const TWO_MODELS = [
    {
      title: t.modelInvestorTitle,
      icon: <Wallet size={24} />,
      color: SOLAR_ACCENT,
      bg: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.2)",
      highlights: [t.modelInvestorHighlight1, t.modelInvestorHighlight2, t.modelInvestorHighlight3, t.modelInvestorHighlight4],
      cta: t.modelInvestorCTA,
      href: "#projects",
    },
    {
      title: t.modelContributorTitle,
      icon: <Home size={24} />,
      color: SOLAR_GREEN,
      bg: "rgba(74,124,89,0.08)",
      border: "rgba(74,124,89,0.2)",
      highlights: [t.modelContributorHighlight1, t.modelContributorHighlight2, t.modelContributorHighlight3, t.modelContributorHighlight4],
      cta: t.modelContributorCTA,
      href: `${prefix}/solar/assess`,
    },
  ];

  const WHY_SOLAR = [
    { icon: <Sun size={20} />, title: t.whyGuaranteed, desc: t.whyGuaranteedDesc, accent: SOLAR_ACCENT },
    { icon: <Shield size={20} />, title: t.whyGreen, desc: t.whyGreenDesc, accent: SOLAR_GREEN },
    { icon: <Building2 size={20} />, title: t.whyDual, desc: t.whyDualDesc, accent: SOLAR_ACCENT },
    { icon: <Leaf size={20} />, title: t.whyLowRisk, desc: t.whyLowRiskDesc, accent: SOLAR_GREEN },
    { icon: <TrendingUp size={20} />, title: t.whyTaxBenefits, desc: t.whyTaxBenefitsDesc, accent: "#B8954F" },
    { icon: <CalendarDays size={20} />, title: t.whyScalable, desc: t.whyScalableDesc, accent: SOLAR_ACCENT },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div className="glow-orb w-[600px] h-[500px] -top-20 -left-40" style={{ background: `radial-gradient(ellipse, rgba(245,158,11,0.13) 0%, transparent 60%)` }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: `radial-gradient(ellipse, rgba(74,124,89,0.10) 0%, transparent 60%)`, opacity: 0.6 }} />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit" style={{ background: "rgba(245,158,11,0.10)", color: SOLAR_ACCENT, borderColor: "rgba(245,158,11,0.2)" }}>
                {t.badge}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-extrabold text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}>
                {t.headline}{" "}
                <span style={{ color: SOLAR_ACCENT }}>{t.headlineAccent}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                {t.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#projects" className="btn-primary text-base !py-3.5 !px-8" style={{ background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT }}>
                  <span>{t.ctaPrimary}</span>
                </a>
                <Link href={`${prefix}/solar/assess`} className="btn-secondary text-base !py-3.5 !px-8">{t.ctaSecondary}</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Two Participation Models ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.twoModelsLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.twoModelsTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TWO_MODELS.map((model, i) => (
              <FadeIn key={model.title} delay={i * 0.1}>
                <div className="card h-full flex flex-col" style={{ background: model.bg, border: `1px solid ${model.border}` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${model.color}20`, color: model.color }}>
                      {model.icon}
                    </div>
                    <h3 className="font-bold text-lg" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{model.title}</h3>
                  </div>
                  <div className="space-y-2.5 flex-1 mb-5">
                    {model.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: model.color }} />
                        <span className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  {model.href.startsWith("/") || model.href.startsWith(`${prefix}/`) ? (
                    <Link href={model.href} className="btn-primary w-full text-center" style={{ background: model.color, borderColor: model.color }}>
                      <span>{model.cta}</span>
                    </Link>
                  ) : (
                    <a href={model.href} className="btn-primary w-full text-center" style={{ background: model.color, borderColor: model.color }}>
                      <span>{model.cta}</span>
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — Investors ── */}
      <section id="how-it-works" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">{t.howInvestorTitle}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.howInvestorTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS_INVESTOR.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.09}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: SOLAR_ACCENT }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: SOLAR_ACCENT, letterSpacing: "0.12em" }}>{s.step}</p>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — Contributors ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">{t.howContributorTitle}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.howContributorTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS_CONTRIBUTOR.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.09}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: SOLAR_GREEN }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: SOLAR_GREEN, letterSpacing: "0.12em" }}>{s.step}</p>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Available Projects ── */}
      <section id="projects" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <span className="section-label">{t.sectionProjects}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.projectsTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SOLAR_PROJECTS.map((project, i) => {
              const pct = Math.round((project.soldTokens / project.totalTokens) * 100);
              const rLevel = getRiskLevel(project.riskScore);
              return (
                <FadeIn key={project.id} delay={i * 0.07}>
                  <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
                    <div className="rounded-t-xl p-5 relative" style={{ background: `linear-gradient(135deg, rgba(245,158,11,0.09) 0%, var(--surface-2) 100%)`, borderBottom: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `rgba(245,158,11,0.12)`, color: SOLAR_ACCENT }}>
                        <Sun size={20} />
                      </div>
                      <h3 className="font-bold mb-0.5" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{project.name}</h3>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{project.capacityKWp}kWp · {project.location}</p>
                      <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                        {project.daysLeft}d
                      </span>
                      {project.isContributed && (
                        <span className="absolute top-4 left-4 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(74,124,89,0.15)", color: SOLAR_GREEN }}>
                          {t.rooftopContributed}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col gap-3 p-5">
                      <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{project.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: `€${project.tokenPrice}`, lbl: "Token" },
                          { val: `${project.investorYield}%`, lbl: t.whyGuaranteed.split(" ")[0] },
                          { val: `${project.capacityKWp}kWp`, lbl: t.capacity },
                          { val: `${(project.annualProductionKWh / 1000).toFixed(0)}MWh`, lbl: t.production },
                        ].map((s) => (
                          <div key={s.lbl} className="rounded-lg py-2.5 text-center" style={{ background: "var(--surface-2)" }}>
                            <p className="font-semibold text-xs" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                            <p className="text-[9px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ background: rLevel.bg, color: rLevel.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: rLevel.color }} />
                        Risk {project.riskScore}/5 · {rLevel.label}
                      </span>
                      <div>
                        <div className="flex justify-between mb-1.5" style={{ fontSize: "0.625rem" }}>
                          <span style={{ color: "var(--muted-foreground)" }}>{project.soldTokens}/{project.totalTokens} {locale === "de" ? "Token" : "tokens"}</span>
                          <span className="font-semibold" style={{ color: SOLAR_ACCENT }}>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%`, background: SOLAR_ACCENT }} />
                        </div>
                      </div>
                      <Link href={`${prefix}/solar/${project.id}`} className="btn-primary w-full text-center mt-auto" style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem", background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT }}>
                        <span>{t.viewProject}</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Solar ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.whyTitle}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.whyTitle}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_SOLAR.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="card card-hover h-full" style={{ borderColor: `${item.accent}1A` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.accent}14`, color: item.accent }}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{item.title}</h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-10 max-w-lg mx-auto">
            <span className="section-label">FAQ</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.faqTitle}</h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={SOLAR_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(245,158,11,0.10)", color: SOLAR_ACCENT }}>
              <Sun size={32} />
            </div>
            <h2 className="text-display-md font-bold mb-4" style={{ color: "var(--foreground)" }}>{t.ctaTitle}</h2>
            <p className="text-lg leading-body mb-8 max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#projects" className="btn-primary text-base !py-3.5 !px-8" style={{ background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT }}>
                <span>{t.ctaBrowse}</span>
              </a>
              <Link href={`${prefix}/solar/assess`} className="btn-secondary text-base !py-3.5 !px-8">{t.ctaRooftop}</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
