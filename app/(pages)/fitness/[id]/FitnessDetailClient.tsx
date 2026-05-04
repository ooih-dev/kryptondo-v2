"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, Dumbbell, Heart, Zap, Trophy,
  TrendingUp, CheckCircle, Coins, Star, ChevronRight, FileText,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import FitnessCalculator from "../../../components/FitnessCalculator";
import type { FitnessStudio } from "../../../data/mock";

const FITNESS_ACCENT = "#8B5CF6";
const FITNESS_GOLD = "#B8954F";

const TABS = ["Overview", "Financials", "Perks & Benefits", "Team", "Equipment", "Expansion Plans", "Risk", "Documents"];

const PERK_TIERS = [
  { name: "Bronze", range: "€100 – €499", color: "#C4663A", perks: ["20% off monthly membership", "Priority class booking (48h window)", "Monthly investor newsletter", "Token holder Discord access"] },
  { name: "Silver", range: "€500 – €1,999", color: "#8A8A9A", perks: ["Free monthly membership", "2 personal training sessions/month", "Priority booking (72h window)", "Quarterly investor meet & train"] },
  { name: "Gold", range: "€2,000 – €4,999", color: FITNESS_GOLD, perks: ["Free monthly membership", "Unlimited personal training", "VIP lounge & recovery access", "Annual studio tour + management Q&A"] },
  { name: "Platinum", range: "€5,000+", color: FITNESS_ACCENT, perks: ["All Gold perks", "Voting rights on major decisions", "Exclusive quarterly investor events", "Wall of Founders recognition"] },
];

const STUDIO_TYPE_ICONS: Record<string, React.ReactNode> = {
  "CrossFit": <Zap size={36} />,
  "Yoga & Pilates": <Heart size={36} />,
  "Premium Gym": <Dumbbell size={36} />,
  "Boutique Cycling": <Trophy size={36} />,
};

export default function FitnessDetailClient({ studio }: { studio: FitnessStudio }) {
  const [activeTab, setActiveTab] = useState(0);

  const pct = Math.round((studio.soldTokens / studio.totalTokens) * 100);
  const icon = STUDIO_TYPE_ICONS[studio.type] ?? <Dumbbell size={36} />;

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <Link href="/fitness" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
            <ArrowLeft size={16} /> Back to Fitness Studios
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(139,92,246,0.10)", color: FITNESS_ACCENT }}>
                  {studio.type}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {studio.location}
                </span>
                <RiskScale score={studio.riskScore} compact />
              </div>
              <h1 className="font-extrabold text-balance mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: "1.1", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {studio.name}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {studio.description}
              </p>

              {/* Studio icon hero */}
              <div className="w-full rounded-2xl h-40 md:h-52 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, var(--surface-2) 100%)", border: "1px solid var(--border)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.12)", color: FITNESS_ACCENT }}>
                  {icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{studio.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{studio.type} · {studio.location}</p>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              <div className="mb-5">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{studio.soldTokens}/{studio.totalTokens} tokens sold</span>
                  <span className="font-semibold" style={{ color: FITNESS_ACCENT }}>{pct}%</span>
                </div>
                <div className="progress-bar mb-1">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: FITNESS_ACCENT }} />
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>of €{(studio.totalTokens * studio.tokenPrice).toLocaleString()} goal</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <Coins size={14} />, label: "Token price", val: `€${studio.tokenPrice}` },
                  { icon: <Users size={14} />, label: "Investors", val: studio.investors.toString() },
                  { icon: <Clock size={14} />, label: "Days left", val: studio.daysLeft.toString() },
                  { icon: <TrendingUp size={14} />, label: "Est. yield", val: `${studio.estimatedYield}%` },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "var(--surface-2)" }}>
                    <div className="flex justify-center mb-1" style={{ color: FITNESS_ACCENT }}>{s.icon}</div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
                    <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Perk tier preview */}
              <div className="rounded-xl p-3 mb-4" style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.15)" }}>
                <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: FITNESS_ACCENT, letterSpacing: "0.08em" }}>From €100 you unlock</p>
                <div className="flex items-center gap-1.5">
                  <Star size={12} style={{ color: "#C4663A" }} />
                  <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>Bronze: 20% off membership + priority booking</span>
                </div>
              </div>

              <Link
                href="#invest"
                className="btn-primary w-full text-center block mb-2"
                style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem", background: FITNESS_ACCENT, borderColor: FITNESS_ACCENT }}
              >
                <span>Invest &amp; Get Your Perks →</span>
              </Link>
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                EU-regulated · KYC required · Non-custodial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <FitnessCalculator studio={studio} />

      {/* ── Tabs ── */}
      <div className="sticky top-0 z-20 overflow-x-auto" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto px-4">
          <div className="flex gap-0 min-w-max">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-4 py-3.5 text-sm font-medium transition-all duration-200 relative whitespace-nowrap"
                style={{
                  color: activeTab === i ? FITNESS_ACCENT : "var(--muted-foreground)",
                  borderBottom: activeTab === i ? `2px solid ${FITNESS_ACCENT}` : "2px solid transparent",
                  background: "transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="container-lg mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* ── Tab 0: Overview ── */}
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Studio Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Type", val: studio.type },
                      { label: "Location", val: studio.location },
                      { label: "Token price", val: `€${studio.tokenPrice}` },
                      { label: "Members", val: studio.members.toString() },
                      { label: "Occupancy", val: `${studio.occupancy}%` },
                      { label: "Est. yield", val: `${studio.estimatedYield}%` },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1rem", color: FITNESS_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-body mb-6" style={{ color: "var(--muted-foreground)" }}>{studio.description}</p>
                </div>
                <div className="space-y-5">
                  <div className="card">
                    <RiskScale score={studio.riskScore} breakdown={studio.riskBreakdown} showBreakdown />
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab 1: Financials ── */}
            {activeTab === 1 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Financials</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: `€${studio.monthlyRevenue.toLocaleString()}/mo`, label: "Monthly revenue", note: "Current run rate" },
                    { val: `${studio.members}`, label: "Active members", note: "Paying monthly" },
                    { val: `€${studio.avgMemberFee}/mo`, label: "Avg membership fee", note: "Per member, per month" },
                    { val: `${studio.estimatedYield}%`, label: "Estimated annual yield", note: "For token investors" },
                    { val: `${studio.occupancy}%`, label: "Class occupancy", note: "Average across all slots" },
                    { val: `€${(studio.monthlyRevenue * 12 / 1000).toFixed(0)}k/yr`, label: "Annual revenue run rate", note: "At current performance" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: FITNESS_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h4 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>Revenue Projections (conservative)</h4>
                  <div className="space-y-2.5">
                    {[
                      { year: "2026", rev: `€${(studio.monthlyRevenue * 12 * 1.08 / 1000).toFixed(0)}k`, members: `${Math.round(studio.members * 1.08)}`, occ: `${Math.min(95, studio.occupancy + 3)}%` },
                      { year: "2027", rev: `€${(studio.monthlyRevenue * 12 * 1.18 / 1000).toFixed(0)}k`, members: `${Math.round(studio.members * 1.18)}`, occ: `${Math.min(95, studio.occupancy + 6)}%` },
                      { year: "2028", rev: `€${(studio.monthlyRevenue * 12 * 1.30 / 1000).toFixed(0)}k`, members: `${Math.round(studio.members * 1.30)}`, occ: `${Math.min(95, studio.occupancy + 9)}%` },
                    ].map((r) => (
                      <div key={r.year} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{r.year}</span>
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>Revenue: {r.rev}</span>
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{r.members} members</span>
                        <span className="text-sm font-medium" style={{ color: FITNESS_ACCENT }}>{r.occ} occ.</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab 2: Perks & Benefits ── */}
            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Perks &amp; Benefits</h2>
                <p className="text-sm leading-body mb-8" style={{ color: "var(--muted-foreground)" }}>
                  Your investment in {studio.name} unlocks real perks. The more you invest, the higher your tier — and the better the benefits.
                  Perks activate automatically when your tokens are in your wallet.
                </p>
                <div className="space-y-4">
                  {PERK_TIERS.map((tier) => (
                    <div key={tier.name} className="card" style={{ borderColor: `${tier.color}25` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${tier.color}15`, color: tier.color }}>
                          <Star size={15} />
                        </div>
                        <div>
                          <p className="font-bold text-sm" style={{ color: tier.color }}>{tier.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{tier.range}</p>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {tier.perks.map((p) => (
                          <div key={p} className="flex items-start gap-2">
                            <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: tier.color }} />
                            <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tab 3: Team ── */}
            {activeTab === 3 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>The Team</h2>
                <div className="space-y-4">
                  {studio.team.map((member) => (
                    <div key={member.name} className="card flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: `${member.color}18`, color: member.color }}>
                        {member.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{member.name}</p>
                        <p className="text-xs font-medium mb-1.5" style={{ color: FITNESS_ACCENT }}>{member.role}</p>
                        <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tab 4: Equipment & Facilities ── */}
            {activeTab === 4 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Equipment &amp; Facilities</h2>
                <div className="space-y-2">
                  {studio.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <ChevronRight size={14} style={{ color: FITNESS_ACCENT }} />
                      <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tab 5: Expansion Plans ── */}
            {activeTab === 5 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Expansion Plans</h2>
                <div className="card mb-6">
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{studio.expansionPlan}</p>
                </div>
                <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h4 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>Use of funds</h4>
                  <div className="space-y-3">
                    {[
                      { item: "Equipment purchase & upgrade", pct: "45%" },
                      { item: "Renovation & space improvements", pct: "25%" },
                      { item: "Working capital reserve", pct: "15%" },
                      { item: "Marketing & member acquisition", pct: "10%" },
                      { item: "Legal & SPV setup costs", pct: "5%" },
                    ].map((r) => (
                      <div key={r.item} className="flex justify-between items-center">
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{r.item}</span>
                        <span className="text-sm font-semibold" style={{ color: FITNESS_ACCENT }}>{r.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab 6: Risk ── */}
            {activeTab === 6 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Risk Assessment</h2>
                <div className="card">
                  <RiskScale score={studio.riskScore} breakdown={studio.riskBreakdown} showBreakdown />
                </div>
              </div>
            )}

            {/* ── Tab 7: Documents ── */}
            {activeTab === 7 && (
              <div className="max-w-xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Documents</h2>
                <div className="space-y-3">
                  {[
                    { name: "Investor Information Document", type: "PDF", size: "1.1 MB" },
                    { name: "Malta SPV Registration Certificate", type: "PDF", size: "285 KB" },
                    { name: "Studio Financials (2024–2025)", type: "PDF", size: "2.3 MB" },
                    { name: "Smart Contract Audit (CertiK)", type: "PDF", size: "710 KB" },
                    { name: "Studio Lease Agreement (redacted)", type: "PDF", size: "950 KB" },
                    { name: "Risk Disclosure Statement", type: "PDF", size: "380 KB" },
                  ].map((doc) => (
                    <div key={doc.name} className="card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(139,92,246,0.10)", color: FITNESS_ACCENT }}>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "rgba(139,92,246,0.10)", color: FITNESS_ACCENT }}>
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── FAQ ── */}
      <section className="px-4 py-10" style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="max-w-2xl">
            <FAQ items={studio.faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
