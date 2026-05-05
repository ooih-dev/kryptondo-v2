import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap, TrendingUp, Shield, Wallet,
  CalendarDays, Globe, Battery, Plug,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import FAQ from "../../components/FAQ";
import { EV_CHARGING_STATIONS, EV_CHARGING_FAQS } from "../../data/mock";
import { getTranslations, getLocale } from "../../i18n/server";

export const metadata: Metadata = {
  title: "EV Charging Stations — Invest in Electric Infrastructure | Kryptondo",
  description: "Invest in EV charging infrastructure across Europe. Earn passive income from every charge session. From €75 per token.",
};

const EV_ACCENT = "#0EA5E9";

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

export default function EVChargingPage() {
  const t = getTranslations("evCharging");
  const locale = getLocale();
  const prefix = locale === "de" ? "/de" : "";

  const HOW_IT_WORKS = [
    { step: "01", icon: <Plug size={20} />, title: t.howStep1, desc: t.howStep1Desc },
    { step: "02", icon: <Wallet size={20} />, title: t.howStep2, desc: t.howStep2Desc },
    { step: "03", icon: <Zap size={20} />, title: t.howStep3, desc: t.howStep3Desc },
    { step: "04", icon: <TrendingUp size={20} />, title: t.howStep4, desc: t.howStep4Desc },
  ];

  const WHY_EV = [
    { icon: <Globe size={20} />, title: t.whyGrowth, desc: t.whyGrowthDesc, accent: EV_ACCENT },
    { icon: <TrendingUp size={20} />, title: t.whyRecurring, desc: t.whyRecurringDesc, accent: "#B8954F" },
    { icon: <Battery size={20} />, title: t.whyLongAsset, desc: t.whyLongAssetDesc, accent: EV_ACCENT },
    { icon: <Shield size={20} />, title: t.whyGovSupport, desc: t.whyGovSupportDesc, accent: "#4A7C59" },
    { icon: <Zap size={20} />, title: t.whyHighUtil, desc: t.whyHighUtilDesc, accent: EV_ACCENT },
    { icon: <CalendarDays size={20} />, title: t.whyLowMaint, desc: t.whyLowMaintDesc, accent: "#B8954F" },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div className="glow-orb w-[600px] h-[500px] -top-20 -left-40" style={{ background: `radial-gradient(ellipse, rgba(14,165,233,0.13) 0%, transparent 60%)` }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: `radial-gradient(ellipse, rgba(184,149,79,0.10) 0%, transparent 60%)`, opacity: 0.6 }} />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit" style={{ background: "rgba(14,165,233,0.10)", color: EV_ACCENT, borderColor: "rgba(14,165,233,0.2)" }}>
                {t.badge}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-extrabold text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}>
                {t.headline}{" "}
                <span style={{ color: EV_ACCENT }}>{t.headlineAccent}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                {t.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#stations" className="btn-primary text-base !py-3.5 !px-8" style={{ background: EV_ACCENT, borderColor: EV_ACCENT }}>
                  <span>{t.ctaPrimary}</span>
                </a>
                <a href="#how-it-works" className="btn-secondary text-base !py-3.5 !px-8">{t.ctaSecondary}</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">{t.howTitle}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.howTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.09}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: EV_ACCENT }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: EV_ACCENT, letterSpacing: "0.12em" }}>{s.step}</p>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why EV Charging? ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.whyTitle}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.whyTitle}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_EV.map((item, i) => (
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

      {/* ── Available Stations ── */}
      <section id="stations" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <span className="section-label">{t.sectionStations}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.stationsTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {EV_CHARGING_STATIONS.map((station, i) => {
              const pct = Math.round((station.soldTokens / station.totalTokens) * 100);
              const rLevel = getRiskLevel(station.riskScore);
              return (
                <FadeIn key={station.id} delay={i * 0.07}>
                  <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
                    <div className="rounded-t-xl p-5 relative" style={{ background: `linear-gradient(135deg, rgba(14,165,233,0.09) 0%, var(--surface-2) 100%)`, borderBottom: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `rgba(14,165,233,0.12)`, color: EV_ACCENT }}>
                        <Zap size={20} />
                      </div>
                      <h3 className="font-bold mb-0.5" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{station.name}</h3>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{station.locationType} · {station.location}</p>
                      <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                        {station.daysLeft}d
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 p-5">
                      <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{station.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: `€${station.tokenPrice}`, lbl: "Token" },
                          { val: `${station.estimatedYield}%`, lbl: locale === "de" ? "Rendite" : "Yield" },
                          { val: `${station.chargerCount}`, lbl: t.chargers },
                          { val: `${station.utilization}%`, lbl: t.utilization },
                        ].map((s) => (
                          <div key={s.lbl} className="rounded-lg py-2.5 text-center" style={{ background: "var(--surface-2)" }}>
                            <p className="font-semibold text-xs" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                            <p className="text-[9px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ background: rLevel.bg, color: rLevel.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: rLevel.color }} />
                        Risk {station.riskScore}/5 · {rLevel.label}
                      </span>
                      <div>
                        <div className="flex justify-between mb-1.5" style={{ fontSize: "0.625rem" }}>
                          <span style={{ color: "var(--muted-foreground)" }}>{station.soldTokens}/{station.totalTokens} {locale === "de" ? "Token" : "tokens"}</span>
                          <span className="font-semibold" style={{ color: EV_ACCENT }}>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%`, background: EV_ACCENT }} />
                        </div>
                      </div>
                      <Link href={`${prefix}/ev-charging/${station.id}`} className="btn-primary w-full text-center mt-auto" style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem", background: EV_ACCENT, borderColor: EV_ACCENT }}>
                        <span>{t.viewStation}</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-10 max-w-lg mx-auto">
            <span className="section-label">FAQ</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.faqTitle}</h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={EV_CHARGING_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(14,165,233,0.10)", color: EV_ACCENT }}>
              <Zap size={32} />
            </div>
            <h2 className="text-display-md font-bold mb-4" style={{ color: "var(--foreground)" }}>{t.ctaTitle}</h2>
            <p className="text-lg leading-body mb-8 max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#stations" className="btn-primary text-base !py-3.5 !px-8" style={{ background: EV_ACCENT, borderColor: EV_ACCENT }}>
                <span>{t.ctaBtn}</span>
              </a>
              <Link href={`${prefix}/register`} className="btn-secondary text-base !py-3.5 !px-8">{locale === "de" ? "Konto erstellen" : "Create Account"}</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
