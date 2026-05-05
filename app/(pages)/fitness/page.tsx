import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "../../i18n/server";
import {
  Dumbbell, Heart, Zap, Trophy, TrendingUp, Shield, Wallet,
  CalendarDays, CheckCircle, Star, Users,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import FAQ from "../../components/FAQ";
import { FITNESS_STUDIOS, FITNESS_FAQS } from "../../data/mock";

export const metadata: Metadata = {
  title: "Fitness Studios — Invest in Your Gym | Kryptondo",
  description: "Own a share of premium fitness studios. Earn dividends from memberships. Unlock free gym access, personal training, and VIP classes as a token holder.",
};

const FITNESS_ACCENT = "#8B5CF6";
const FITNESS_GOLD = "#B8954F";

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

const STUDIO_TYPE_ICONS: Record<string, React.ReactNode> = {
  "CrossFit": <Zap size={20} />,
  "Yoga & Pilates": <Heart size={20} />,
  "Premium Gym": <Dumbbell size={20} />,
  "Boutique Cycling": <Trophy size={20} />,
};

const HOW_IT_WORKS = [
  { step: "01", icon: <Dumbbell size={20} />, title: "Browse Fitness Studios", desc: "Explore studios raising capital — CrossFit boxes, yoga studios, premium gyms, boutique cycling, and more." },
  { step: "02", icon: <Wallet size={20} />, title: "Invest from €40", desc: "Each token funds studio expansion, new equipment, or a second location. Start small and grow your stake." },
  { step: "03", icon: <TrendingUp size={20} />, title: "Earn Membership Dividends", desc: "As memberships grow and studio revenue increases, your share of monthly net profit arrives automatically." },
  { step: "04", icon: <Star size={20} />, title: "Unlock Your Perks", desc: "Free gym access, discounted PT, VIP classes, and voting rights — proportional to how much you invest." },
];

const PERK_TIERS = [
  {
    name: "Bronze",
    range: "€100 – €499",
    color: "#C4663A",
    bg: "rgba(196,102,58,0.08)",
    border: "rgba(196,102,58,0.2)",
    perks: ["20% off monthly membership", "Priority class booking (48h window)", "Monthly investor newsletter", "Access to token holder Discord"],
  },
  {
    name: "Silver",
    range: "€500 – €1,999",
    color: "#8A8A9A",
    bg: "rgba(138,138,154,0.08)",
    border: "rgba(138,138,154,0.2)",
    perks: ["Free monthly membership (value up to €109/mo)", "2 personal training sessions per month", "Priority booking (72h window)", "Invite to quarterly investor meet & train"],
  },
  {
    name: "Gold",
    range: "€2,000 – €4,999",
    color: FITNESS_GOLD,
    bg: "rgba(184,149,79,0.08)",
    border: "rgba(184,149,79,0.2)",
    perks: ["Free monthly membership", "Unlimited personal training", "VIP lounge & recovery zone access", "Annual studio tour + management Q&A"],
  },
  {
    name: "Platinum",
    range: "€5,000+",
    color: FITNESS_ACCENT,
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    perks: ["All Gold perks", "Voting rights on major studio decisions", "Exclusive quarterly investor events", "Name in studio — Wall of Founders"],
  },
];

const WHY_FITNESS = [
  { icon: <TrendingUp size={20} />, title: "Recurring Membership Revenue", desc: "Monthly memberships create predictable, subscription-like cash flow. High-quality studios have 85–95% monthly retention.", accent: FITNESS_ACCENT },
  { icon: <Heart size={20} />, title: "€96B Global Market", desc: "Global fitness market growing at 8%/year. Boutique fitness — the fastest-growing segment — outpacing traditional gyms 3x.", accent: FITNESS_GOLD },
  { icon: <Users size={20} />, title: "Community Loyalty", desc: "Fitness communities are sticky. CrossFit and yoga members average 3–4 year tenures. Low churn = durable dividends.", accent: FITNESS_ACCENT },
  { icon: <Shield size={20} />, title: "Real Physical Assets", desc: "Equipment, leases, and brand value are tangible. In distressed scenarios, gym assets retain 40–60% recovery value.", accent: "#4A7C59" },
  { icon: <Star size={20} />, title: "Perks You Actually Use", desc: "Unlike most investments, your returns include something you can walk into. Free gym access is a dividend you feel.", accent: FITNESS_ACCENT },
  { icon: <CalendarDays size={20} />, title: "Post-COVID Boom", desc: "Boutique fitness grew 62% since 2021. Demand for premium, community-driven fitness is structural — not cyclical.", accent: FITNESS_GOLD },
];

export default async function FitnessPage() {
  const t = await getTranslations("fitness");
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div className="glow-orb w-[600px] h-[500px] -top-20 -left-40" style={{ background: `radial-gradient(ellipse, rgba(139,92,246,0.13) 0%, transparent 60%)` }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: `radial-gradient(ellipse, rgba(184,149,79,0.10) 0%, transparent 60%)`, opacity: 0.6 }} />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit" style={{ background: "rgba(139,92,246,0.10)", color: FITNESS_ACCENT, borderColor: "rgba(139,92,246,0.2)" }}>
                {t.badge}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-extrabold text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}>
                {t.headline}{" "}
                <span style={{ color: FITNESS_ACCENT }}>{t.headlineAccent}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                {t.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#studios" className="btn-primary text-base !py-3.5 !px-8" style={{ background: FITNESS_ACCENT, borderColor: FITNESS_ACCENT }}>
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: FITNESS_ACCENT }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: FITNESS_ACCENT, letterSpacing: "0.12em" }}>{s.step}</p>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perk Tiers ── */}
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

      {/* ── Available Studios ── */}
      <section id="studios" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <span className="section-label">{t.studiosLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.studiosTitle}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FITNESS_STUDIOS.map((studio, i) => {
              const pct = Math.round((studio.soldTokens / studio.totalTokens) * 100);
              const rLevel = getRiskLevel(studio.riskScore);
              const icon = STUDIO_TYPE_ICONS[studio.type] ?? <Dumbbell size={20} />;
              return (
                <FadeIn key={studio.id} delay={i * 0.07}>
                  <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
                    {/* Header */}
                    <div className="rounded-t-xl p-5 relative" style={{ background: `linear-gradient(135deg, rgba(139,92,246,0.09) 0%, var(--surface-2) 100%)`, borderBottom: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `rgba(139,92,246,0.12)`, color: FITNESS_ACCENT }}>
                        {icon}
                      </div>
                      <h3 className="font-bold mb-0.5" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{studio.name}</h3>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{studio.type} · {studio.location}</p>
                      <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                        {studio.daysLeft}d left
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 p-5">
                      <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{studio.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: `€${studio.tokenPrice}`, lbl: t.tokenPrice },
                          { val: `${studio.estimatedYield}%`, lbl: t.estYield },
                          { val: `${studio.members}`, lbl: t.members },
                          { val: `${studio.occupancy}%`, lbl: "Occupancy" },
                        ].map((s) => (
                          <div key={s.lbl} className="rounded-lg py-2.5 text-center" style={{ background: "var(--surface-2)" }}>
                            <p className="font-semibold text-xs" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                            <p className="text-[9px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ background: rLevel.bg, color: rLevel.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: rLevel.color }} />
                        Risk {studio.riskScore}/5 · {rLevel.label}
                      </span>
                      <div>
                        <div className="flex justify-between mb-1.5" style={{ fontSize: "0.625rem" }}>
                          <span style={{ color: "var(--muted-foreground)" }}>{studio.soldTokens}/{studio.totalTokens} tokens</span>
                          <span className="font-semibold" style={{ color: FITNESS_ACCENT }}>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%`, background: FITNESS_ACCENT }} />
                        </div>
                      </div>
                      <Link href={`/fitness/${studio.id}`} className="btn-primary w-full text-center mt-auto" style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem", background: FITNESS_ACCENT, borderColor: FITNESS_ACCENT }}>
                        <span>{t.viewStudio}</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Fitness Studios? ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">{t.whyLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.whyTitle}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_FITNESS.map((item, i) => (
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
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-10 max-w-lg mx-auto">
            <span className="section-label">{t.faqLabel}</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>{t.faqTitle}</h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={FITNESS_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(139,92,246,0.10)", color: FITNESS_ACCENT }}>
              <Dumbbell size={32} />
            </div>
            <h2 className="text-display-md font-bold mb-4" style={{ color: "var(--foreground)" }}>{t.ctaTitle}</h2>
            <p className="text-lg leading-body mb-8 max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#studios" className="btn-primary text-base !py-3.5 !px-8" style={{ background: FITNESS_ACCENT, borderColor: FITNESS_ACCENT }}>
                <span>{t.ctaPrimary}</span>
              </a>
              <Link href="/register" className="btn-secondary text-base !py-3.5 !px-8">Create Account</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
