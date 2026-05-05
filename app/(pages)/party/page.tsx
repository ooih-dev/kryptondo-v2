import type { Metadata } from "next";
import Link from "next/link";
import {
  Music, TrendingUp, Shield, Wallet,
  Ticket, Star, Users, Zap, Globe, CalendarDays, CheckCircle,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import FAQ from "../../components/FAQ";
import { PARTY_CLUBS, PARTY_FAQS } from "../../data/mock";
import { getTranslations, getLocale } from "../../i18n/server";

export const metadata: Metadata = {
  title: "Party & Clubs — Invest in Nightlife | Kryptondo",
  description: "Fund clubs, rooftop bars, and event collectives. Earn from every ticket sold. Unlock free entry, VIP access, and backstage perks. From €50 per token.",
};

const PARTY_ACCENT = "#E879F9";
const PARTY_GOLD = "#B8954F";

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

const VENUE_TYPE_ICONS: Record<string, React.ReactNode> = {
  "Techno Club":       <Music size={20} />,
  "Rooftop Lounge":    <Globe size={20} />,
  "Event Collective":  <Zap size={20} />,
  "Beach Club":        <Star size={20} />,
};

const PERK_TIERS = [
  {
    name: "Bronze",
    range: "€100 – €499",
    color: "#C4663A",
    bg: "rgba(196,102,58,0.08)",
    border: "rgba(196,102,58,0.2)",
    perks: ["2 discounted tickets/month", "Priority queue access", "Monthly investor newsletter", "Token holder Discord access"],
  },
  {
    name: "Silver",
    range: "€500 – €1,999",
    color: "#8A8A9A",
    bg: "rgba(138,138,154,0.08)",
    border: "rgba(138,138,154,0.2)",
    perks: ["Free entry every event", "Guest +1 included", "VIP area access", "Artist pre-show meet at select events"],
  },
  {
    name: "Gold",
    range: "€2,000 – €4,999",
    color: PARTY_GOLD,
    bg: "rgba(184,149,79,0.08)",
    border: "rgba(184,149,79,0.2)",
    perks: ["Unlimited free entry + guest", "Backstage / artist area access", "Complimentary drinks per event", "Quarterly investor party"],
  },
  {
    name: "Platinum",
    range: "€5,000+",
    color: PARTY_ACCENT,
    bg: "rgba(232,121,249,0.08)",
    border: "rgba(232,121,249,0.2)",
    perks: ["All Gold perks", "Co-branding on one event/quarter", "Name on venue — Wall of Founders", "Voting rights on major decisions"],
  },
];

export default function PartyPage() {
  const t = getTranslations("party");
  const locale = getLocale();
  const prefix = locale === "de" ? "/de" : "";

  const HOW_IT_WORKS = [
    { step: "01", icon: <Music size={20} />, title: t.howStep1, desc: t.howStep1Desc },
    { step: "02", icon: <Wallet size={20} />, title: t.howStep2, desc: t.howStep2Desc },
    { step: "03", icon: <Ticket size={20} />, title: t.howStep3, desc: t.howStep3Desc },
    { step: "04", icon: <Star size={20} />, title: t.howStep4, desc: t.howStep4Desc },
  ];

  const WHY_PARTY = [
    { icon: <TrendingUp size={20} />, title: t.whyRecurring, desc: t.whyRecurringDesc, accent: PARTY_ACCENT },
    { icon: <Globe size={20} />, title: t.whyGrowth, desc: t.whyGrowthDesc, accent: PARTY_GOLD },
    { icon: <Users size={20} />, title: t.whyCommunity, desc: t.whyCommunityDesc, accent: PARTY_ACCENT },
    { icon: <Star size={20} />, title: t.whyPerks, desc: t.whyPerksDesc, accent: "#C4663A" },
    { icon: <Shield size={20} />, title: t.whyDiversification, desc: t.whyDiversificationDesc, accent: "#4A7C59" },
    { icon: <CalendarDays size={20} />, title: t.whyTransparent, desc: t.whyTransparentDesc, accent: PARTY_ACCENT },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div className="glow-orb w-[600px] h-[500px] -top-20 -left-40" style={{ background: `radial-gradient(ellipse, rgba(232,121,249,0.13) 0%, transparent 60%)` }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: `radial-gradient(ellipse, rgba(184,149,79,0.10) 0%, transparent 60%)`, opacity: 0.6 }} />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT, borderColor: "rgba(232,121,249,0.2)" }}>
                {t.badge}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-extrabold text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}>
                {t.headline}{" "}
                <span style={{ color: PARTY_ACCENT }}>{t.headlineAccent}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                {t.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#venues" className="btn-primary text-base !py-3.5 !px-8" style={{ background: PARTY_ACCENT, borderColor: PARTY_ACCENT }}>
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
            <span className="section-label">{t.howLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.howTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.09}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: PARTY_ACCENT }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: PARTY_ACCENT, letterSpacing: "0.12em" }}>{s.step}</p>
                  <h3 className="font-semibold text-sm mb-1 tracking-tight-sub" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investor Perk Tiers ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.perksLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.perksTitle}</h2>
            <p className="text-base leading-body mt-3" style={{ color: "var(--muted-foreground)" }}>
              {t.perksSub}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERK_TIERS.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.08}>
                <div className="card h-full flex flex-col" style={{ background: tier.bg, border: `1px solid ${tier.border}` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${tier.color}20`, color: tier.color }}>
                      <Star size={15} />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: tier.color }}>{tier.name}</p>
                      <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{tier.range}</p>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    {tier.perks.map((p) => (
                      <div key={p} className="flex items-start gap-2">
                        <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: tier.color }} />
                        <span className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Available Venues ── */}
      <section id="venues" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <span className="section-label">{t.venuesLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.venuesTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTY_CLUBS.map((club, i) => {
              const pct = Math.round((club.soldTokens / club.totalTokens) * 100);
              const rLevel = getRiskLevel(club.riskScore);
              const icon = VENUE_TYPE_ICONS[club.type] ?? <Music size={20} />;
              return (
                <FadeIn key={club.id} delay={i * 0.07}>
                  <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
                    <div className="rounded-t-xl p-5 relative" style={{ background: `linear-gradient(135deg, rgba(232,121,249,0.09) 0%, var(--surface-2) 100%)`, borderBottom: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `rgba(232,121,249,0.12)`, color: PARTY_ACCENT }}>
                        {icon}
                      </div>
                      <h3 className="font-bold mb-0.5" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{club.name}</h3>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{club.type} · {club.location}</p>
                      <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                        {club.daysLeft}d
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 p-5">
                      <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{club.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: `€${club.tokenPrice}`, lbl: t.tokenPrice },
                          { val: `${club.estimatedYield}%`, lbl: t.estYield },
                          { val: `${club.eventsPerMonth}`, lbl: t.eventsPerMonth },
                          { val: `${club.capacityPax}`, lbl: t.capacity },
                        ].map((s) => (
                          <div key={s.lbl} className="rounded-lg py-2.5 text-center" style={{ background: "var(--surface-2)" }}>
                            <p className="font-semibold text-xs" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                            <p className="text-[9px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ background: rLevel.bg, color: rLevel.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: rLevel.color }} />
                        Risk {club.riskScore}/5 · {rLevel.label}
                      </span>
                      <div>
                        <div className="flex justify-between mb-1.5" style={{ fontSize: "0.625rem" }}>
                          <span style={{ color: "var(--muted-foreground)" }}>{club.soldTokens}/{club.totalTokens} tokens</span>
                          <span className="font-semibold" style={{ color: PARTY_ACCENT }}>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%`, background: PARTY_ACCENT }} />
                        </div>
                      </div>
                      <Link href={`${prefix}/party/${club.id}`} className="btn-primary w-full text-center mt-auto" style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem", background: PARTY_ACCENT, borderColor: PARTY_ACCENT }}>
                        <span>{t.viewVenue}</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Party & Clubs? ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.whyLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.whyTitle}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_PARTY.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="card card-hover h-full" style={{ borderColor: `${item.accent}1A` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.accent}14`, color: item.accent }}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{item.title}</h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-10 max-w-lg mx-auto">
            <span className="section-label">{t.faqLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.faqTitle}</h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={PARTY_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT }}>
              <Music size={32} />
            </div>
            <h2 className="text-display-md font-bold mb-4" style={{ color: "var(--foreground)" }}>{t.ctaTitle}</h2>
            <p className="text-lg leading-body mb-8 max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#venues" className="btn-primary text-base !py-3.5 !px-8" style={{ background: PARTY_ACCENT, borderColor: PARTY_ACCENT }}>
                <span>{t.ctaBtn}</span>
              </a>
              <Link href={`${prefix}/register`} className="btn-secondary text-base !py-3.5 !px-8">
                {locale === "de" ? "Konto erstellen" : "Create Account"}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
