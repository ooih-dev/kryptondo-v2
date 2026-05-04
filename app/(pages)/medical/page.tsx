import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope, Users, TrendingUp, Shield, Wallet, CalendarDays,
  CheckCircle, Heart, Building2, Clock,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import FAQ from "../../components/FAQ";
import { MEDICAL_SPVS, MEDICAL_FAQS } from "../../data/mock";

export const metadata: Metadata = {
  title: "Medical Recruiting — Invest in Healthcare Staffing | Kryptondo",
  description: "Fund SPV-structured medical recruiting platforms placing nurses and doctors with hospitals across Europe. Earn from placement fees and staffing contracts.",
};

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

const MEDICAL_ACCENT = "#4A7C59";
const MEDICAL_GOLD = "#B8954F";

const HOW_IT_WORKS = [
  { step: "01", icon: <Stethoscope size={20} />, title: "Browse Healthcare SPVs", desc: "Explore SPVs focused on ICU, general hospital, elderly care, or specialist physician recruitment." },
  { step: "02", icon: <Wallet size={20} />, title: "Invest from €40", desc: "Each token funds recruitment infrastructure, licensing, and training pipelines for medical staff placement." },
  { step: "03", icon: <Users size={20} />, title: "SPV Places Medical Staff", desc: "The SPV places nurses and doctors with hospitals, ICUs, and care facilities. Fees are collected on completion." },
  { step: "04", icon: <TrendingUp size={20} />, title: "Earn from Placements & Contracts", desc: "Receive dividends from one-time placement fees or ongoing staffing contract revenue — monthly." },
];

const MODELS = [
  {
    title: "Placement Fund",
    accent: MEDICAL_ACCENT,
    icon: <CheckCircle size={22} />,
    yield: "12–24%",
    frequency: "Per placement",
    desc: "Fund one-time placement of nurses and doctors into hospitals. Earn higher returns per deal — paid when the hospital confirms the placement.",
    pros: ["Higher per-deal returns", "Each placement is a verifiable on-chain event", "Average fee €18k–€45k per placement"],
    cons: ["Lumpy cash flow — tied to placement timing", "Longer cycles for specialist physicians"],
    best: "Investors seeking higher returns who can handle variable timing.",
  },
  {
    title: "Staffing Contract Fund",
    accent: MEDICAL_GOLD,
    icon: <CalendarDays size={22} />,
    yield: "9–17%",
    frequency: "Monthly",
    desc: "Fund ongoing staffing contracts with hospitals and care homes. Earn steady monthly dividends from hourly billing rates and multi-year contracts.",
    pros: ["Predictable monthly income", "Contracts run 12–36 months", "87% historical renewal rate"],
    cons: ["Lower per-contract yield vs placements", "Revenue depends on contract hour utilisation"],
    best: "Investors wanting steady, bond-like monthly income from healthcare.",
  },
];

const CUSTOMERS = [
  { icon: <Building2 size={20} />, label: "Hospitals", desc: "Public & private hospital networks seeking permanent and interim nursing staff" },
  { icon: <Heart size={20} />, label: "Intensive Care Units", desc: "ICUs with critical shortages of qualified intensive care nurses" },
  { icon: <Users size={20} />, label: "Elderly Care Facilities", desc: "Care homes and home care agencies needing certified geriatric staff" },
  { icon: <Stethoscope size={20} />, label: "Rehabilitation Clinics", desc: "Specialist rehab centres seeking physiotherapists and specialist nurses" },
  { icon: <Shield size={20} />, label: "Home Care Agencies", desc: "At-home care providers placing nurses directly with patients" },
];

const MARKET_STATS = [
  { value: "€43B", label: "EU Healthcare Staffing Market", note: "2025 market size" },
  { value: "8.4%", label: "Annual Growth Rate", note: "CAGR 2024–2030" },
  { value: "1.8M", label: "Worker Shortage", note: "Projected EU deficit by 2030" },
  { value: "€28k", label: "Avg Placement Fee", note: "Nurse, DACH region" },
];

const BENEFITS = [
  { icon: <Shield size={20} />, title: "Recession-Resistant Sector", desc: "Healthcare demand is non-cyclical. Hospitals hire through recessions, pandemics, and market downturns.", accent: MEDICAL_ACCENT },
  { icon: <TrendingUp size={20} />, title: "Recurring Revenue", desc: "Staffing contracts generate predictable monthly revenue for 12–36 month terms with high renewal rates.", accent: MEDICAL_GOLD },
  { icon: <CheckCircle size={20} />, title: "EU-Regulated SPV", desc: "Malta-based SPVs under MiCA framework. All placements comply with EU healthcare licensing directives.", accent: "#7c8cf8" },
  { icon: <Clock size={20} />, title: "Transparent Tracking", desc: "Every placement is an on-chain event. View your SPV&apos;s active placements, revenue, and pipeline in real-time.", accent: MEDICAL_ACCENT },
  { icon: <Heart size={20} />, title: "Social Impact", desc: "Your investment directly addresses Europe&apos;s healthcare worker shortage — helping hospitals serve patients.", accent: "#C4663A" },
  { icon: <Wallet size={20} />, title: "Non-Custodial Tokens", desc: "Tokens on Arbitrum/Base. Your investment is in your wallet — not on our platform.", accent: MEDICAL_GOLD },
];

export default function MedicalPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div className="glow-orb w-[600px] h-[500px] -top-20 -left-40" style={{ background: `radial-gradient(ellipse, rgba(74,124,89,0.14) 0%, transparent 60%)` }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: `radial-gradient(ellipse, rgba(184,149,79,0.10) 0%, transparent 60%)`, opacity: 0.6 }} />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit" style={{ background: "rgba(74,124,89,0.12)", color: MEDICAL_ACCENT, borderColor: "rgba(74,124,89,0.2)" }}>
                Healthcare Staffing · From €40 · EU-Regulated SPVs
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-extrabold text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}>
                Invest in Healthcare Staffing.{" "}
                <span style={{ color: MEDICAL_ACCENT }}>Fund the Future of Care.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                Back SPV-structured recruiting platforms connecting nurses and doctors with hospitals and care facilities.
                Earn returns from one of the most in-demand sectors in the world.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#opportunities" className="btn-primary text-base !py-3.5 !px-8" style={{ background: MEDICAL_ACCENT, borderColor: MEDICAL_ACCENT }}>
                  <span>Browse Opportunities →</span>
                </a>
                <a href="#how-it-works" className="btn-secondary text-base !py-3.5 !px-8">How It Works</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">The Problem</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Why Healthcare Staffing Matters</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { val: "1.8M", label: "Healthcare worker shortage projected in Europe by 2030", icon: <Users size={22} /> },
              { val: "€15k–50k", label: "Placement fee earned per successfully placed nurse or doctor", icon: <Wallet size={22} /> },
              { val: "87%", label: "Staffing contract renewal rate — recurring, predictable revenue", icon: <TrendingUp size={22} /> },
              { val: "ICUs", label: "Hospitals and intensive care units urgently need critical care nurses", icon: <Heart size={22} /> },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.09}>
                <div className="card h-full text-center">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(74,124,89,0.10)", color: MEDICAL_ACCENT }}>
                    {item.icon}
                  </div>
                  <p className="font-extrabold mb-2" style={{ fontSize: "1.5rem", color: MEDICAL_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{item.val}</p>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.label}</p>
                </div>
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
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>From €40 to healthcare investor in minutes</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.09}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: MEDICAL_ACCENT }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: MEDICAL_ACCENT, letterSpacing: "0.12em" }}>{s.step}</p>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two Investment Models ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Two Models</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Choose your investment strategy</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {MODELS.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.1}>
                <div className="card h-full" style={{ borderColor: `${m.accent}28` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${m.accent}14`, color: m.accent }}>
                      {m.icon}
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ fontSize: "1.0625rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{m.title}</h3>
                      <span className="text-xs font-semibold" style={{ color: m.accent }}>{m.yield} yield · {m.frequency}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-body mb-4" style={{ color: "var(--muted-foreground)" }}>{m.desc}</p>
                  <div className="space-y-1.5 mb-4">
                    {m.pros.map((p) => (
                      <div key={p} className="flex items-start gap-2">
                        <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: m.accent }} />
                        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs italic" style={{ color: "var(--muted-foreground)", opacity: 0.7 }}>Best for: {m.best}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-6 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--surface-2)" }}>
                    <th className="text-left px-5 py-3" style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Feature</th>
                    <th className="px-5 py-3 text-center" style={{ color: MEDICAL_ACCENT, fontWeight: 600, fontSize: "0.75rem" }}>Placement Fund</th>
                    <th className="px-5 py-3 text-center" style={{ color: MEDICAL_GOLD, fontWeight: 600, fontSize: "0.75rem" }}>Staffing Contract</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Typical yield", "12–24%", "9–17%"],
                    ["Payment timing", "Per placement event", "Monthly"],
                    ["Cash flow", "Lumpy — placement dependent", "Steady monthly income"],
                    ["Contract duration", "One-time fee per placement", "12–36 month contracts"],
                    ["Risk profile", "Higher reward, variable", "Lower, predictable"],
                    ["Best for", "Growth investors", "Income investors"],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--surface-2)" }}>
                      <td className="px-5 py-3 font-medium text-sm" style={{ color: "var(--foreground)" }}>{row[0]}</td>
                      <td className="px-5 py-3 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>{row[1]}</td>
                      <td className="px-5 py-3 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Market Opportunity ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Market Opportunity</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>A sector that cannot stop growing</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {MARKET_STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="card text-center">
                  <p className="font-extrabold mb-1" style={{ fontSize: "2rem", color: MEDICAL_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.value}</p>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>{s.label}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Aging Population", desc: "Europe's 65+ population grows by 2M/year. Each additional 1,000 elderly residents requires 40+ care staff. Demand is demographically locked in." },
                { title: "Nurse Shortage Structural", desc: "EU member states are training fewer nurses than required. The shortfall is projected to reach 1.8M by 2030 — creating permanent pricing power for staffing agencies." },
                { title: "Immigration Policy Tailwind", desc: "EU free movement enables cross-border nurse deployment from lower-cost countries at scale. This is the core arbitrage that makes EU medical recruiting uniquely profitable." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h4 className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{item.title}</h4>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Available Opportunities ── */}
      <section id="opportunities" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <span className="section-label">Available Opportunities</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Healthcare SPVs raising now</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MEDICAL_SPVS.map((spv, i) => {
              const pct = Math.round((spv.soldTokens / spv.totalTokens) * 100);
              const rLevel = getRiskLevel(spv.riskScore);
              return (
                <FadeIn key={spv.id} delay={i * 0.07}>
                  <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
                    {/* Header */}
                    <div className="rounded-t-xl p-5 relative" style={{ background: `linear-gradient(135deg, rgba(74,124,89,0.10) 0%, var(--surface-2) 100%)`, borderBottom: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `rgba(74,124,89,0.14)`, color: MEDICAL_ACCENT }}>
                        <Stethoscope size={20} />
                      </div>
                      <h3 className="font-bold mb-0.5" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{spv.name}</h3>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{spv.focus}</p>
                      <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                        {spv.daysLeft}d left
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 p-5">
                      <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{spv.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: `€${spv.tokenPrice}`, lbl: "Token price" },
                          { val: spv.placementYield, lbl: "Placement yield" },
                          { val: `€${(spv.avgPlacementFee / 1000).toFixed(0)}k`, lbl: "Avg fee" },
                          { val: `${spv.placementsPerYear}/yr`, lbl: "Placements" },
                        ].map((s) => (
                          <div key={s.lbl} className="rounded-lg py-2.5 text-center" style={{ background: "var(--surface-2)" }}>
                            <p className="font-semibold text-xs" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                            <p className="text-[9px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ background: rLevel.bg, color: rLevel.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: rLevel.color }} />
                        Risk {spv.riskScore}/5 · {rLevel.label}
                      </span>
                      <div>
                        <div className="flex justify-between mb-1.5" style={{ fontSize: "0.625rem" }}>
                          <span style={{ color: "var(--muted-foreground)" }}>{spv.soldTokens}/{spv.totalTokens} tokens</span>
                          <span className="font-semibold" style={{ color: MEDICAL_ACCENT }}>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%`, background: MEDICAL_ACCENT }} />
                        </div>
                      </div>
                      <Link href={`/medical/${spv.id}`} className="btn-primary w-full text-center mt-auto" style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem", background: MEDICAL_ACCENT, borderColor: MEDICAL_ACCENT }}>
                        <span>View SPV Details</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who Are the Customers ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Customer Base</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Who hires from these SPVs</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CUSTOMERS.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.07}>
                <div className="card text-center h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(74,124,89,0.10)", color: MEDICAL_ACCENT }}>
                    {c.icon}
                  </div>
                  <h4 className="font-semibold mb-1.5" style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>{c.label}</h4>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Why Invest</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Built for long-term returns</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.07}>
                <div className="card card-hover h-full" style={{ borderColor: `${b.accent}1A` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${b.accent}14`, color: b.accent }}>
                    {b.icon}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{b.title}</h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }} dangerouslySetInnerHTML={{ __html: b.desc }} />
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
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Common questions</h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={MEDICAL_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(74,124,89,0.12)", color: MEDICAL_ACCENT }}>
              <Stethoscope size={32} />
            </div>
            <h2 className="text-display-md font-bold mb-4" style={{ color: "var(--foreground)" }}>Start Investing in Healthcare</h2>
            <p className="text-lg leading-body mb-8 max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Fund the platforms placing nurses and doctors across Europe. From €40 per token — backed by EU-regulated Malta SPVs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#opportunities" className="btn-primary text-base !py-3.5 !px-8" style={{ background: MEDICAL_ACCENT, borderColor: MEDICAL_ACCENT }}>
                <span>Browse Healthcare SPVs →</span>
              </a>
              <Link href="/register" className="btn-secondary text-base !py-3.5 !px-8">Create Account</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
