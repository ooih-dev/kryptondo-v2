"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, Zap,
  TrendingUp, Coins, ChevronRight, FileText, Plug, Battery,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import EVChargingCalculator from "../../../components/EVChargingCalculator";
import type { EVChargingStation } from "../../../data/mock";

const EV_ACCENT = "#0EA5E9";

const TABS = ["Overview", "Financials", "Infrastructure", "Team", "Risk", "Documents"];

export default function EVChargingDetailClient({ station }: { station: EVChargingStation }) {
  const [activeTab, setActiveTab] = useState(0);

  const pct = Math.round((station.soldTokens / station.totalTokens) * 100);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <Link href="/ev-charging" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
            <ArrowLeft size={16} /> Back to EV Charging Stations
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(14,165,233,0.10)", color: EV_ACCENT }}>
                  {station.locationType}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {station.location}
                </span>
                <RiskScale score={station.riskScore} compact />
              </div>
              <h1 className="font-extrabold text-balance mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: "1.1", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {station.name}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {station.description}
              </p>

              <div className="w-full rounded-2xl h-40 md:h-52 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, var(--surface-2) 100%)", border: "1px solid var(--border)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(14,165,233,0.12)", color: EV_ACCENT }}>
                  <Zap size={36} />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{station.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{station.chargerCount}× {station.chargerType} · {station.powerOutputKW}kW</p>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              <div className="mb-5">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{station.soldTokens}/{station.totalTokens} tokens sold</span>
                  <span className="font-semibold" style={{ color: EV_ACCENT }}>{pct}%</span>
                </div>
                <div className="progress-bar mb-1">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: EV_ACCENT }} />
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>of €{(station.totalTokens * station.tokenPrice).toLocaleString()} goal</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <Coins size={14} />, label: "Token price", val: `€${station.tokenPrice}` },
                  { icon: <Users size={14} />, label: "Investors", val: station.investors.toString() },
                  { icon: <Clock size={14} />, label: "Days left", val: station.daysLeft.toString() },
                  { icon: <TrendingUp size={14} />, label: "Est. yield", val: `${station.estimatedYield}%` },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "var(--surface-2)" }}>
                    <div className="flex justify-center mb-1" style={{ color: EV_ACCENT }}>{s.icon}</div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
                    <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-3 mb-4" style={{ background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.15)" }}>
                <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: EV_ACCENT, letterSpacing: "0.08em" }}>Station highlights</p>
                <div className="flex items-center gap-1.5">
                  <Zap size={12} style={{ color: EV_ACCENT }} />
                  <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{station.chargerCount}× {station.powerOutputKW}kW chargers · {station.utilization}% utilization</span>
                </div>
              </div>

              <Link href="#invest" className="btn-primary w-full text-center block mb-2"
                style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem", background: EV_ACCENT, borderColor: EV_ACCENT }}>
                <span>Invest in This Station →</span>
              </Link>
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>EU-regulated · KYC required · Non-custodial</p>
            </div>
          </div>
        </div>
      </section>

      <EVChargingCalculator station={station} />

      {/* ── Tabs ── */}
      <div className="sticky top-0 z-20 overflow-x-auto" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto px-4">
          <div className="flex gap-0 min-w-max">
            {TABS.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                className="px-4 py-3.5 text-sm font-medium transition-all duration-200 relative whitespace-nowrap"
                style={{ color: activeTab === i ? EV_ACCENT : "var(--muted-foreground)", borderBottom: activeTab === i ? `2px solid ${EV_ACCENT}` : "2px solid transparent", background: "transparent" }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="container-lg mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}>

            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Station Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Location type", val: station.locationType },
                      { label: "Location", val: station.location },
                      { label: "Chargers", val: station.chargerCount.toString() },
                      { label: "Charger type", val: station.chargerType },
                      { label: "Power output", val: `${station.powerOutputKW}kW` },
                      { label: "Utilization", val: `${station.utilization}%` },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1rem", color: EV_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-body mb-6" style={{ color: "var(--muted-foreground)" }}>{station.description}</p>
                </div>
                <div className="space-y-5">
                  <div className="card"><RiskScale score={station.riskScore} breakdown={station.riskBreakdown} showBreakdown /></div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Financials</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: `€${station.monthlyRevenuePerCharger}/mo`, label: "Revenue per charger", note: "Monthly average" },
                    { val: `€${(station.monthlyRevenuePerCharger * station.chargerCount).toLocaleString()}/mo`, label: "Total station revenue", note: "All chargers combined" },
                    { val: `${station.utilization}%`, label: "Average utilization", note: "Across all chargers" },
                    { val: `${station.estimatedYield}%`, label: "Estimated annual yield", note: "Net of operating costs" },
                    { val: `${station.chargerCount}`, label: "Chargers", note: `${station.powerOutputKW}kW each` },
                    { val: `€${(station.totalTokens * station.tokenPrice).toLocaleString()}`, label: "Total raise", note: "Campaign target" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: EV_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Infrastructure</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="card text-center">
                    <Plug size={20} className="mx-auto mb-2" style={{ color: EV_ACCENT }} />
                    <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{station.chargerType}</p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{station.powerOutputKW}kW per charger</p>
                  </div>
                  <div className="card text-center">
                    <Battery size={20} className="mx-auto mb-2" style={{ color: EV_ACCENT }} />
                    <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{station.chargerCount} Chargers</p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{(station.chargerCount * station.powerOutputKW)}kW total capacity</p>
                  </div>
                </div>
                <h3 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>Features & Specifications</h3>
                <div className="space-y-2">
                  {station.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <ChevronRight size={14} style={{ color: EV_ACCENT }} />
                      <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>The Team</h2>
                <div className="space-y-4">
                  {station.team.map((member) => (
                    <div key={member.name} className="card flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: `${member.color}18`, color: member.color }}>
                        {member.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{member.name}</p>
                        <p className="text-xs font-medium mb-1.5" style={{ color: EV_ACCENT }}>{member.role}</p>
                        <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Risk Assessment</h2>
                <div className="card"><RiskScale score={station.riskScore} breakdown={station.riskBreakdown} showBreakdown /></div>
              </div>
            )}

            {activeTab === 5 && (
              <div className="max-w-xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Documents</h2>
                <div className="space-y-3">
                  {[
                    { name: "Investor Information Document", type: "PDF", size: "1.3 MB" },
                    { name: "Malta SPV Registration Certificate", type: "PDF", size: "295 KB" },
                    { name: "Charging Station Technical Assessment", type: "PDF", size: "4.1 MB" },
                    { name: "Smart Contract Audit (CertiK)", type: "PDF", size: "780 KB" },
                    { name: "Site Lease Agreement (redacted)", type: "PDF", size: "1.1 MB" },
                    { name: "Risk Disclosure Statement", type: "PDF", size: "410 KB" },
                  ].map((doc) => (
                    <div key={doc.name} className="card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(14,165,233,0.10)", color: EV_ACCENT }}>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "rgba(14,165,233,0.10)", color: EV_ACCENT }}>Download</button>
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
          <div className="max-w-2xl"><FAQ items={station.faqs} /></div>
        </div>
      </section>
    </div>
  );
}
