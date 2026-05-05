"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, Sun,
  TrendingUp, Coins, ChevronRight, FileText, Leaf, Home,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import SolarCalculator from "../../../components/SolarCalculator";
import type { SolarProject } from "../../../data/mock";

const SOLAR_ACCENT = "#F59E0B";
const SOLAR_GREEN = "#4A7C59";

const TABS = ["Overview", "Energy Projections", "Rooftop Details", "Environmental Impact", "Financials", "Team", "Risk", "Documents"];

export default function SolarDetailClient({ project }: { project: SolarProject }) {
  const [activeTab, setActiveTab] = useState(0);

  const pct = Math.round((project.soldTokens / project.totalTokens) * 100);
  const co2Saved = Math.round(project.capacityKWp * 0.5);
  const homesPowered = Math.round(project.annualProductionKWh / 3500);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <Link href="/solar" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
            <ArrowLeft size={16} /> Back to Solar Projects
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(245,158,11,0.10)", color: SOLAR_ACCENT }}>
                  {project.capacityKWp}kWp Solar
                </span>
                {project.isContributed && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(74,124,89,0.10)", color: SOLAR_GREEN }}>
                    Rooftop Contributed
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {project.location}
                </span>
                <RiskScale score={project.riskScore} compact />
              </div>
              <h1 className="font-extrabold text-balance mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: "1.1", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {project.name}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {project.description}
              </p>

              <div className="w-full rounded-2xl h-40 md:h-52 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, var(--surface-2) 100%)", border: "1px solid var(--border)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.12)", color: SOLAR_ACCENT }}>
                  <Sun size={36} />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{project.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{project.capacityKWp}kWp · {project.roofSizeM2}m² · {project.orientation}</p>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              <div className="mb-5">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{project.soldTokens}/{project.totalTokens} tokens sold</span>
                  <span className="font-semibold" style={{ color: SOLAR_ACCENT }}>{pct}%</span>
                </div>
                <div className="progress-bar mb-1">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: SOLAR_ACCENT }} />
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>of €{(project.totalTokens * project.tokenPrice).toLocaleString()} goal</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <Coins size={14} />, label: "Token price", val: `€${project.tokenPrice}` },
                  { icon: <Users size={14} />, label: "Investors", val: project.investors.toString() },
                  { icon: <Clock size={14} />, label: "Days left", val: project.daysLeft.toString() },
                  { icon: <TrendingUp size={14} />, label: "Investor yield", val: `${project.investorYield}%` },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "var(--surface-2)" }}>
                    <div className="flex justify-center mb-1" style={{ color: SOLAR_ACCENT }}>{s.icon}</div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
                    <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {project.isContributed && (
                <div className="rounded-xl p-3 mb-4" style={{ background: "rgba(74,124,89,0.07)", border: "1px solid rgba(74,124,89,0.15)" }}>
                  <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: SOLAR_GREEN, letterSpacing: "0.08em" }}>Rooftop contributed by</p>
                  <div className="flex items-center gap-1.5">
                    <Home size={12} style={{ color: SOLAR_GREEN }} />
                    <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{project.contributorName} · {project.contributorYield}% contributor yield</span>
                  </div>
                </div>
              )}

              <Link href="#invest" className="btn-primary w-full text-center block mb-2"
                style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem", background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT }}>
                <span>Invest in This Project →</span>
              </Link>
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>EU-regulated · KYC required · Non-custodial</p>
            </div>
          </div>
        </div>
      </section>

      <SolarCalculator project={project} />

      {/* ── Tabs ── */}
      <div className="sticky top-0 z-20 overflow-x-auto" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto px-4">
          <div className="flex gap-0 min-w-max">
            {TABS.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                className="px-4 py-3.5 text-sm font-medium transition-all duration-200 relative whitespace-nowrap"
                style={{ color: activeTab === i ? SOLAR_ACCENT : "var(--muted-foreground)", borderBottom: activeTab === i ? `2px solid ${SOLAR_ACCENT}` : "2px solid transparent", background: "transparent" }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-lg mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}>

            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Project Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Capacity", val: `${project.capacityKWp}kWp` },
                      { label: "Location", val: project.location },
                      { label: "Roof size", val: `${project.roofSizeM2}m²` },
                      { label: "Annual production", val: `${(project.annualProductionKWh / 1000).toFixed(0)}MWh` },
                      { label: "Feed-in tariff", val: `${project.feedInTariffCentsKWh}ct/kWh` },
                      { label: "Investor yield", val: `${project.investorYield}%` },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{project.description}</p>
                </div>
                <div className="space-y-5">
                  <div className="card"><RiskScale score={project.riskScore} breakdown={project.riskBreakdown} showBreakdown /></div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Energy Projections</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: `${(project.annualProductionKWh / 1000).toFixed(0)}MWh/yr`, label: "Annual production", note: "Expected first year" },
                    { val: `${project.feedInTariffCentsKWh}ct/kWh`, label: "Feed-in tariff", note: "Government guaranteed" },
                    { val: `€${Math.round(project.annualProductionKWh * project.feedInTariffCentsKWh / 100).toLocaleString()}/yr`, label: "Annual revenue", note: "From energy sales" },
                    { val: `${project.investorYield}%`, label: "Investor yield", note: "Annual estimated" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Rooftop Details</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Roof size", val: `${project.roofSizeM2}m²` },
                    { label: "Roof type", val: project.roofType },
                    { label: "Orientation", val: project.orientation },
                    { label: "Contributed by", val: project.isContributed ? project.contributorName : "Not contributed" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                      <p className="font-bold text-sm mb-0.5" style={{ color: "var(--foreground)" }}>{s.val}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>System Features</h3>
                <div className="space-y-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <ChevronRight size={14} style={{ color: SOLAR_ACCENT }} />
                      <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Environmental Impact</h2>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: <Leaf size={24} />, val: `${co2Saved}t`, label: "CO₂ saved per year" },
                    { icon: <Home size={24} />, val: homesPowered.toString(), label: "Homes powered equivalent" },
                    { icon: <Sun size={24} />, val: `${(project.annualProductionKWh / 1000).toFixed(0)}MWh`, label: "Clean energy per year" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <div className="flex justify-center mb-3" style={{ color: SOLAR_GREEN }}>{s.icon}</div>
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.5rem", color: SOLAR_GREEN, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-5" style={{ background: "rgba(74,124,89,0.06)", border: "1px solid rgba(74,124,89,0.15)" }}>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                    Over a 25-year panel lifespan, this installation will avoid approximately <strong style={{ color: SOLAR_GREEN }}>{(co2Saved * 25).toLocaleString()} tonnes of CO₂</strong> — equivalent to taking {Math.round(co2Saved * 25 / 4.6)} cars off the road permanently.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Financials</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: `€${(project.totalTokens * project.tokenPrice).toLocaleString()}`, label: "Total raise", note: "Campaign target" },
                    { val: `€${project.tokenPrice}`, label: "Token price", note: "Minimum investment" },
                    { val: `${project.investorYield}%`, label: "Investor yield", note: "Estimated annual" },
                    { val: project.contributorYield > 0 ? `${project.contributorYield}%` : "N/A", label: "Contributor yield", note: project.contributorYield > 0 ? "Higher for roof contributors" : "No contributor" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 5 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>The Team</h2>
                <div className="space-y-4">
                  {project.team.map((member) => (
                    <div key={member.name} className="card flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: `${member.color}18`, color: member.color }}>
                        {member.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{member.name}</p>
                        <p className="text-xs font-medium mb-1.5" style={{ color: SOLAR_ACCENT }}>{member.role}</p>
                        <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 6 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Risk Assessment</h2>
                <div className="card"><RiskScale score={project.riskScore} breakdown={project.riskBreakdown} showBreakdown /></div>
              </div>
            )}

            {activeTab === 7 && (
              <div className="max-w-xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Documents</h2>
                <div className="space-y-3">
                  {[
                    { name: "Investor Information Document", type: "PDF", size: "1.2 MB" },
                    { name: "Malta SPV Registration Certificate", type: "PDF", size: "310 KB" },
                    { name: "Roof Structural Assessment Report", type: "PDF", size: "3.8 MB" },
                    { name: "Solar Yield Simulation (PVsyst)", type: "PDF", size: "2.1 MB" },
                    { name: "Smart Contract Audit (CertiK)", type: "PDF", size: "720 KB" },
                    { name: "EEG Feed-In Tariff Confirmation", type: "PDF", size: "180 KB" },
                    { name: "Risk Disclosure Statement", type: "PDF", size: "390 KB" },
                  ].map((doc) => (
                    <div key={doc.name} className="card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(245,158,11,0.10)", color: SOLAR_ACCENT }}>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "rgba(245,158,11,0.10)", color: SOLAR_ACCENT }}>Download</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      <section className="px-4 py-10" style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="max-w-2xl"><FAQ items={project.faqs} /></div>
        </div>
      </section>
    </div>
  );
}
