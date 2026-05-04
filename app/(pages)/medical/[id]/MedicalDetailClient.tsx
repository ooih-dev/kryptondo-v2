"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, Stethoscope, Shield, TrendingUp,
  CheckCircle, Coins, Heart, ChevronRight, FileText,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import MedicalCalculator from "../../../components/MedicalCalculator";
import type { MedicalSPV } from "../../../data/mock";

type Model = "placement" | "staffing";

const PLACEMENT_TABS = ["SPV Overview", "Financials", "Team", "Impact", "Documents"];
const STAFFING_TABS = ["SPV Overview", "Revenue Model", "Team", "Why Staffing?", "Documents"];

const MEDICAL_ACCENT = "#4A7C59";
const MEDICAL_GOLD = "#B8954F";

export default function MedicalDetailClient({ spv }: { spv: MedicalSPV }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const model: Model = (searchParams.get("model") as Model) === "staffing" ? "staffing" : "placement";
  const [activeTab, setActiveTab] = useState(0);

  const pct = Math.round((spv.soldTokens / spv.totalTokens) * 100);
  const tabs = model === "placement" ? PLACEMENT_TABS : STAFFING_TABS;
  const isPlacement = model === "placement";
  const accent = isPlacement ? MEDICAL_ACCENT : MEDICAL_GOLD;

  function switchModel(m: Model) {
    router.push(`/medical/${spv.id}?model=${m}`);
    setActiveTab(0);
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <Link href="/medical" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
            <ArrowLeft size={16} /> Back to Medical Recruiting
          </Link>

          {/* Model switcher */}
          <div className="flex items-center gap-1 mb-8 p-1 rounded-xl w-fit" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <button
              onClick={() => switchModel("placement")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: isPlacement ? MEDICAL_ACCENT : "transparent", color: isPlacement ? "#fff" : "var(--muted-foreground)" }}
            >
              <Stethoscope size={14} /> Placement Fund
            </button>
            <button
              onClick={() => switchModel("staffing")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: !isPlacement ? MEDICAL_GOLD : "transparent", color: !isPlacement ? "#fff" : "var(--muted-foreground)" }}
            >
              <TrendingUp size={14} /> Staffing Contract
            </button>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: isPlacement ? "rgba(74,124,89,0.1)" : "rgba(184,149,79,0.1)", color: accent }}>
                  {spv.focus}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {spv.geographicFocus}
                </span>
                <RiskScale score={spv.riskScore} compact />
              </div>
              <h1 className="font-extrabold text-balance mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: "1.1", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {spv.name}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {spv.description}
              </p>

              {/* SPV icon hero */}
              <div className="w-full rounded-2xl h-40 md:h-52 flex flex-col items-center justify-center gap-3" style={{ background: `linear-gradient(135deg, ${isPlacement ? "rgba(74,124,89,0.08)" : "rgba(184,149,79,0.08)"} 0%, var(--surface-2) 100%)`, border: "1px solid var(--border)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${accent}18`, color: accent }}>
                  <Stethoscope size={36} />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{spv.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                    {isPlacement ? "Placement Fund" : "Staffing Contract Fund"} · {spv.chain}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              {/* Funding progress */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{spv.soldTokens}/{spv.totalTokens} tokens sold</span>
                  <span className="font-semibold" style={{ color: accent }}>{pct}%</span>
                </div>
                <div className="progress-bar mb-1">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: accent }} />
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>of €{(spv.totalTokens * spv.tokenPrice).toLocaleString()} goal</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <Coins size={14} />, label: "Token price", val: `€${spv.tokenPrice}` },
                  { icon: <Users size={14} />, label: "Investors", val: spv.investors.toString() },
                  { icon: <Clock size={14} />, label: "Days left", val: spv.daysLeft.toString() },
                  { icon: <TrendingUp size={14} />, label: isPlacement ? "Placement yield" : "Staffing yield", val: isPlacement ? spv.placementYield : spv.staffingYield },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "var(--surface-2)" }}>
                    <div className="flex justify-center mb-1" style={{ color: accent }}>{s.icon}</div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
                    <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="#invest"
                className="btn-primary w-full text-center block mb-2"
                style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem", background: accent, borderColor: accent }}
              >
                <span>{isPlacement ? "Invest in Placement Fund →" : "Invest in Staffing Contracts →"}</span>
              </Link>
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                EU-regulated · KYC required · Non-custodial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <MedicalCalculator spv={spv} model={model} />

      {/* ── Tabs ── */}
      <div className="sticky top-0 z-20 overflow-x-auto" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto px-4">
          <div className="flex gap-0 min-w-max">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-4 py-3.5 text-sm font-medium transition-all duration-200 relative whitespace-nowrap"
                style={{
                  color: activeTab === i ? accent : "var(--muted-foreground)",
                  borderBottom: activeTab === i ? `2px solid ${accent}` : "2px solid transparent",
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
            key={`${model}-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* ── Tab 0: SPV Overview ── */}
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    SPV Overview
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Focus", val: spv.focus },
                      { label: "Token price", val: `€${spv.tokenPrice}` },
                      { label: "Avg placement fee", val: `€${(spv.avgPlacementFee / 1000).toFixed(0)}k` },
                      { label: "Placements/year", val: spv.placementsPerYear.toString() },
                      { label: "Monthly contract rev.", val: `€${(spv.contractRevenueMonthly / 1000).toFixed(0)}k` },
                      { label: "Chain", val: spv.chain },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1rem", color: accent, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-3" style={{ fontSize: "1rem", color: "var(--foreground)" }}>Target Hospital Partners</h3>
                  <div className="space-y-2 mb-8">
                    {spv.targetHospitals.map((h) => (
                      <div key={h} className="flex items-center gap-2.5">
                        <ChevronRight size={14} style={{ color: accent }} />
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="card">
                    <RiskScale score={spv.riskScore} breakdown={spv.riskBreakdown} showBreakdown />
                  </div>
                  <div className="card">
                    <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>SPV Structure</p>
                    <div className="space-y-2.5">
                      {[
                        { icon: <Shield size={14} />, text: "Malta SPV — EU-regulated under MiCA" },
                        { icon: <CheckCircle size={14} />, text: spv.spvName },
                        { icon: <Stethoscope size={14} />, text: `${spv.chain} · Non-custodial token` },
                        { icon: <MapPin size={14} />, text: spv.geographicFocus },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2.5">
                          <span style={{ color: accent }}>{item.icon}</span>
                          <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab 1: Financials / Revenue Model ── */}
            {activeTab === 1 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  {isPlacement ? "Placement Fee Structure" : "Revenue Model"}
                </h2>
                {isPlacement ? (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { val: `€${(spv.avgPlacementFee / 1000).toFixed(0)}k`, label: "Average placement fee", note: "Per successfully placed medical professional" },
                        { val: `${spv.placementsPerYear}/yr`, label: "Target placements", note: "Annual placement volume target" },
                        { val: `€${((spv.avgPlacementFee * spv.placementsPerYear) / 1000000).toFixed(1)}M`, label: "Annual fee revenue", note: "At target placement volume" },
                        { val: spv.placementYield, label: "Placement yield", note: "Estimated annual return for investors" },
                      ].map((s) => (
                        <div key={s.label} className="card text-center">
                          <p className="font-extrabold mb-1" style={{ fontSize: "1.5rem", color: accent, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                          <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>{s.label}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-5 mb-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <h4 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>Fee Breakdown by Specialty</h4>
                      <div className="space-y-3">
                        {[
                          { role: "ICU / Critical Care Nurse", fee: "€25,000–€32,000" },
                          { role: "General Ward Nurse", fee: "€18,000–€24,000" },
                          { role: "Specialist Physician", fee: "€35,000–€55,000" },
                          { role: "Geriatric Care Worker", fee: "€14,000–€20,000" },
                        ].map((r) => (
                          <div key={r.role} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                            <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{r.role}</span>
                            <span className="text-sm font-semibold" style={{ color: accent }}>{r.fee}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { val: `€${(spv.contractRevenueMonthly / 1000).toFixed(0)}k/mo`, label: "Monthly contract revenue", note: "From active staffing contracts" },
                        { val: "87%", label: "Contract renewal rate", note: "Historical contract renewals" },
                        { val: "12–36 mo", label: "Contract duration", note: "Typical hospital staffing agreements" },
                        { val: spv.staffingYield, label: "Staffing yield", note: "Estimated annual return" },
                      ].map((s) => (
                        <div key={s.label} className="card text-center">
                          <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: accent, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                          <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>{s.label}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <h4 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>How Staffing Revenue Flows</h4>
                      <div className="space-y-3">
                        {[
                          { step: "1", desc: "Hospital pays hourly billing rate per staff member assigned" },
                          { step: "2", desc: "SPV deducts management margin (15–20%) and nurse salary cost" },
                          { step: "3", desc: "Net revenue distributed monthly to token holders proportionally" },
                          { step: "4", desc: "Contracts renew at 87% rate — providing durable recurring income" },
                        ].map((r) => (
                          <div key={r.step} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold" style={{ background: `${MEDICAL_GOLD}18`, color: MEDICAL_GOLD }}>{r.step}</div>
                            <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{r.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── Tab 2: Team ── */}
            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  The Team
                </h2>
                <div className="space-y-4">
                  {spv.team.map((member) => (
                    <div key={member.name} className="card flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: `${member.color}18`, color: member.color }}>
                        {member.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{member.name}</p>
                        <p className="text-xs font-medium mb-1.5" style={{ color: accent }}>{member.role}</p>
                        <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tab 3: Impact / Why Staffing? ── */}
            {activeTab === 3 && (
              <div className="max-w-2xl">
                {isPlacement ? (
                  <>
                    <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                      Social Impact
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { val: `${spv.placementsPerYear}`, label: "Nurses/doctors placed per year", icon: <Users size={20} /> },
                        { val: spv.targetHospitals.length.toString(), label: "Hospital partners", icon: <Heart size={20} /> },
                        { val: "EU-wide", label: "Geographic impact", icon: <MapPin size={20} /> },
                        { val: "Structural", label: "Solving healthcare shortage", icon: <Shield size={20} /> },
                      ].map((s) => (
                        <div key={s.label} className="card text-center">
                          <div className="flex justify-center mb-2" style={{ color: MEDICAL_ACCENT }}>{s.icon}</div>
                          <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: MEDICAL_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                        Every token in this SPV directly funds a platform that places qualified nurses and doctors into understaffed hospitals.
                        Europe faces a structural shortage of 1.8M healthcare workers by 2030. Your investment actively addresses this gap — and earns returns while doing so.
                        This SPV places medical professionals into {spv.geographicFocus}, serving some of the most critical healthcare facilities in the region.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                      Why Staffing Contracts?
                    </h2>
                    <div className="space-y-4">
                      {[
                        { title: "Predictable monthly income", desc: "Unlike placement fees that depend on one-time events, staffing contracts generate revenue every month proportional to hours billed. Your income is tied to ongoing hospital operations, not sporadic placements." },
                        { title: "87% contract renewal rate", desc: "Hospitals that find quality nursing staff don&apos;t switch agencies lightly. Our historical renewal rate of 87% means once a contract is won, it typically renews for another 12–24 month term." },
                        { title: "Lower volatility", desc: "Staffing contract revenue varies only with hours utilisation — hospitals need consistent coverage and rarely reduce staffing hours significantly. This creates a more bond-like return profile than placement fee income." },
                        { title: "Portfolio complement", desc: "Pairing a Staffing Contract investment with a Placement Fund creates a balanced healthcare portfolio — steady monthly income plus higher-upside placement events." },
                      ].map((item) => (
                        <div key={item.title} className="card">
                          <h4 className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{item.title}</h4>
                          <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── Tab 4: Documents ── */}
            {activeTab === 4 && (
              <div className="max-w-xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Documents
                </h2>
                <div className="space-y-3">
                  {[
                    { name: "Investor Information Document", type: "PDF", size: "1.2 MB" },
                    { name: "Malta SPV Registration Certificate", type: "PDF", size: "340 KB" },
                    { name: "EU Agency License Copies", type: "PDF", size: "890 KB" },
                    { name: "Placement Pipeline Report (Q1 2026)", type: "PDF", size: "1.8 MB" },
                    { name: "Smart Contract Audit (CertiK)", type: "PDF", size: "760 KB" },
                    { name: "EU Directive 2005/36/EC Compliance", type: "PDF", size: "420 KB" },
                  ].map((doc) => (
                    <div key={doc.name} className="card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${accent}14`, color: accent }}>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors" style={{ background: `${accent}14`, color: accent }}>
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
          <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl">
            <FAQ items={spv.faqs} />
          </div>
        </div>
      </section>

    </div>
  );
}
