"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, Car, Shield, TrendingUp,
  CheckCircle, Coins, Calendar, ChevronRight, Zap,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import CarCalculator from "../../../components/CarCalculator";
import type { CarListing } from "../../../data/mock";

type Model = "ownership" | "rental";

const OWNERSHIP_TABS = ["Car Details", "Co-Usage", "Financials", "Ownership Rights"];
const RENTAL_TABS = ["Car Details", "Revenue Model", "Financials", "Why Rental?"];

export default function CarDetailClient({ car }: { car: CarListing }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const model: Model = (searchParams.get("model") as Model) === "rental" ? "rental" : "ownership";
  const [activeTab, setActiveTab] = useState(0);

  const pct = Math.round((car.soldTokens / car.totalTokens) * 100);
  const tabs = model === "ownership" ? OWNERSHIP_TABS : RENTAL_TABS;
  const isOwnership = model === "ownership";

  function switchModel(m: Model) {
    router.push(`/cars/${car.id}?model=${m}`);
    setActiveTab(0);
  }

  const ownershipAccent = "var(--accent)";
  const rentalAccent = "#B8954F";
  const accent = isOwnership ? ownershipAccent : rentalAccent;

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
            <ArrowLeft size={16} /> Back to Cars
          </Link>

          {/* Model switcher */}
          <div className="flex items-center gap-1 mb-8 p-1 rounded-xl w-fit" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <button
              onClick={() => switchModel("ownership")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: isOwnership ? "var(--accent)" : "transparent", color: isOwnership ? "#fff" : "var(--muted-foreground)" }}
            >
              <Car size={14} /> Co-Ownership
            </button>
            <button
              onClick={() => switchModel("rental")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: !isOwnership ? rentalAccent : "transparent", color: !isOwnership ? "#fff" : "var(--muted-foreground)" }}
            >
              <TrendingUp size={14} /> Rental Investment
            </button>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: isOwnership ? "rgba(196,102,58,0.1)" : "rgba(184,149,79,0.1)", color: accent }}>
                  {isOwnership ? "Co-Ownership" : "Rental Investment"}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {car.location}
                </span>
                <RiskScale score={car.riskScore} compact />
              </div>
              <h1 className="font-extrabold text-balance mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: "1.1", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {car.year} {car.make} {car.model}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {car.description}
              </p>
              {/* Car image */}
              <div className="w-full rounded-2xl h-52 md:h-72 relative overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <Image src={car.image} alt={`${car.year} ${car.make} ${car.model}`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              {/* Funding progress */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{car.soldTokens}/{car.totalTokens} tokens sold</span>
                  <span className="font-semibold" style={{ color: accent }}>{pct}%</span>
                </div>
                <div className="progress-bar mb-1">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: accent }} />
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>of €{car.price.toLocaleString()} goal</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <Coins size={14} />, label: "Token price", val: `€${car.tokenPrice}` },
                  { icon: <Users size={14} />, label: "Investors", val: car.investors.toString() },
                  { icon: <Clock size={14} />, label: "Days left", val: car.daysLeft.toString() },
                  { icon: <TrendingUp size={14} />, label: isOwnership ? "Ownership yield" : "Rental yield", val: isOwnership ? car.ownershipYield : car.rentalYield },
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
                <span>{isOwnership ? "Co-Own This Car →" : "Invest in This Car →"}</span>
              </Link>
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                EU-regulated · KYC required · Non-custodial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <CarCalculator car={car} model={model} />

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

            {/* ── Tab 0: Car Details (same for both) ── */}
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    Vehicle Specifications
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Make", val: car.make },
                      { label: "Model", val: car.model },
                      { label: "Year", val: car.year.toString() },
                      { label: "Color", val: car.color },
                      { label: "Rental rate", val: `€${car.rentalRatePerDay}/day` },
                      { label: "Occupancy", val: `${car.occupancyPct}%` },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1rem", color: accent, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-3" style={{ fontSize: "1rem", color: "var(--foreground)" }}>Features</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {car.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}>{f}</span>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-3" style={{ fontSize: "1rem", color: "var(--foreground)" }}>Pickup Points</h3>
                  <div className="space-y-2">
                    {car.pickupPoints.map((p) => (
                      <div key={p} className="flex items-center gap-2.5">
                        <MapPin size={14} style={{ color: accent }} />
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="card">
                    <RiskScale score={car.riskScore} breakdown={car.riskBreakdown} showBreakdown />
                  </div>
                  <div className="card">
                    <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>Fleet Management</p>
                    <div className="space-y-2.5">
                      {[
                        { icon: <Shield size={14} />, text: "Comprehensive commercial insurance included" },
                        { icon: <CheckCircle size={14} />, text: "All maintenance covered by Kryptondo Fleet" },
                        { icon: <Car size={14} />, text: `${car.chain} · Non-custodial token` },
                        { icon: <Users size={14} />, text: car.spvName },
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

            {/* ── Co-Ownership Tab 1: Co-Usage ── */}
            {activeTab === 1 && isOwnership && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  How Co-Usage Works
                </h2>
                <div className="space-y-6">
                  <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={20} style={{ color: accent }} />
                      <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>Calendar-Based Booking</h3>
                    </div>
                    <p className="text-sm leading-body mb-4" style={{ color: "var(--muted-foreground)" }}>
                      As a co-owner, you receive an annual allocation of driving days proportional to your token holding.
                      Book via the Kryptondo app — minimum 1 day, maximum your full annual allocation.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Booking method", val: "Kryptondo app" },
                        { label: "Min. booking", val: "1 day" },
                        { label: "Advance notice", val: "48 hours" },
                        { label: "Cancellation", val: "Free up to 24h" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-lg p-3" style={{ background: "var(--surface-2)" }}>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                          <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--foreground)" }}>{s.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>Usage Allocation</h3>
                    <p className="text-sm leading-body mb-4" style={{ color: "var(--muted-foreground)" }}>
                      Your driving days = (your tokens / total tokens) × non-occupied days per year.
                      At {car.occupancyPct}% occupancy, {100 - car.occupancyPct}% of days are available for co-owners.
                    </p>
                    <div className="rounded-xl p-4" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                      <p className="text-xs font-semibold mb-2" style={{ color: accent }}>Example: 100 tokens ({((100 / car.totalTokens) * 100).toFixed(1)}% ownership)</p>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        ≈ {Math.max(1, Math.round((100 / car.totalTokens) * 365 * (1 - car.occupancyPct / 100)))} driving days per year · when not used, 100% of rental income flows to you
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>Pickup & Rules</h3>
                    <div className="space-y-2.5 mb-4">
                      {car.pickupPoints.map((p) => (
                        <div key={p} className="flex items-center gap-2.5">
                          <MapPin size={14} style={{ color: accent }} />
                          <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{p}</span>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {["Valid driving licence required", "18+ age requirement", "Refundable deposit during co-use period", "Same-condition return policy"].map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                          <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: accent }} /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ── Rental Tab 1: Revenue Model ── */}
            {activeTab === 1 && !isOwnership && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Revenue Model
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2">
                    {[
                      { label: "Daily rate", val: `€${car.rentalRatePerDay}` },
                      { label: "Occupancy", val: `${car.occupancyPct}%` },
                      { label: "Monthly revenue", val: `€${car.monthlyRevenue.toLocaleString()}` },
                      { label: "Annual yield", val: car.rentalYield },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1.125rem", color: rentalAccent, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="card">
                    <h3 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>Revenue Distribution</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Gross rental revenue", pct: "100%", note: `€${car.monthlyRevenue.toLocaleString()}/month` },
                        { label: "Fleet management fee", pct: "−18%", note: "Insurance, maintenance, ops" },
                        { label: "Platform fee", pct: "−2%", note: "Kryptondo protocol fee" },
                        { label: "Net to investors", pct: "80%", note: `~€${Math.round(car.monthlyRevenue * 0.8).toLocaleString()}/month distributed` },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                          <span className="text-sm" style={{ color: "var(--foreground)" }}>{row.label}</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold" style={{ color: rentalAccent }}>{row.pct}</span>
                            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{row.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>Rental vs Co-Ownership</h3>
                    <div className="rounded-xl p-4" style={{ background: `${rentalAccent}08`, border: `1px solid ${rentalAccent}20` }}>
                      <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                        Rental investors earn <strong style={{ color: rentalAccent }}>~15–20% more</strong> than co-owners because their entire share is distributed every month — with no usage offset. Co-owners forfeit income on the days they drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab 2: Financials (both models) ── */}
            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Financial Overview
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { label: "Car price", val: `€${car.price.toLocaleString()}` },
                    { label: "Token price", val: `€${car.tokenPrice}` },
                    { label: "Total tokens", val: car.totalTokens.toString() },
                    { label: "Expected yield", val: isOwnership ? car.ownershipYield : car.rentalYield },
                  ].map((s) => (
                    <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.125rem", color: accent, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="card mb-6">
                  <h3 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>Monthly Revenue Projection</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Gross monthly rental", val: `€${car.monthlyRevenue.toLocaleString()}` },
                      { label: "At occupancy", val: `${car.occupancyPct}% (${Math.round(30 * car.occupancyPct / 100)} days/month)` },
                      { label: "Daily rental rate", val: `€${car.rentalRatePerDay}/day` },
                      { label: "Net to investors (~80%)", val: `€${Math.round(car.monthlyRevenue * 0.8).toLocaleString()}/month` },
                      { label: "Annual net", val: `€${Math.round(car.monthlyRevenue * 0.8 * 12).toLocaleString()}` },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{row.label}</span>
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card">
                  <h3 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>Token Details</h3>
                  <div className="space-y-2">
                    {[
                      { label: "Chain", val: car.chain },
                      { label: "Contract", val: car.contractAddress },
                      { label: "SPV", val: car.spvName },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{row.label}</span>
                        <span className="text-sm font-medium" style={{ color: "var(--foreground)", fontFamily: row.label === "Contract" ? "monospace" : undefined }}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Co-Ownership Tab 3: Ownership Rights ── */}
            {activeTab === 3 && isOwnership && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Ownership Rights
                </h2>
                <div className="space-y-5">
                  <div className="card">
                    <h3 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>What you legally own</h3>
                    <p className="text-sm leading-body mb-4" style={{ color: "var(--muted-foreground)" }}>
                      Each token represents a fractional share in {car.spvName} — a Malta-registered SPV that legally owns the vehicle. This gives you proportional rights to rental income, voting, and proceeds from any future sale.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Proportional claim on rental revenue",
                        "Voting rights on car decisions (sell, replace, upgrade)",
                        "Proportional share of sale proceeds if the car is sold",
                        "Driving access proportional to token holding",
                      ].map((r) => (
                        <div key={r} className="flex items-start gap-2.5">
                          <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: accent }} />
                          <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card">
                    <h3 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>Token Transferability</h3>
                    <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                      Tokens are transferable to any KYC-verified wallet. The P2P marketplace launches Q3 2026 for 24/7 trading. Until then, direct wallet-to-wallet transfer is available.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Rental Tab 3: Why Rental? ── */}
            {activeTab === 3 && !isOwnership && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Why Rental Investment?
                </h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: <TrendingUp size={20} />, title: "Higher yield", desc: "No usage offset — your entire share is distributed monthly. ~15% more than co-ownership." },
                      { icon: <Zap size={20} />, title: "Zero admin", desc: "No bookings. No pickups. No deposits. Just passive income arriving in your wallet." },
                      { icon: <Shield size={20} />, title: "Fleet-managed", desc: "Insurance, maintenance, and operations fully covered. You own without any responsibility." },
                      { icon: <Coins size={20} />, title: "Monthly payouts", desc: "Smart contract distributes revenue every month. No chasing payments, no delays." },
                    ].map((b) => (
                      <div key={b.title} className="card" style={{ borderColor: `${rentalAccent}20` }}>
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${rentalAccent}12`, color: rentalAccent }}>{b.icon}</div>
                        <h3 className="font-semibold mb-1.5 text-sm" style={{ color: "var(--foreground)" }}>{b.title}</h3>
                        <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{b.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="card">
                    <h3 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>Your Rights as a Rental Investor</h3>
                    <div className="space-y-2">
                      {["Proportional monthly dividends", "Voting rights on car decisions", "Token transferability on P2P marketplace (Q3 2026)", "Proportional proceeds if car is sold"].map((r) => (
                        <div key={r} className="flex items-start gap-2.5">
                          <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: rentalAccent }} />
                          <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── FAQ (below all tabs, always visible) ── */}
          </motion.div>
        </AnimatePresence>

        {/* FAQ always visible */}
        <div className="mt-12 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
          <h2 className="font-bold mb-6" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>FAQ</h2>
          <FAQ items={car.faqs} />
        </div>
      </div>

      {/* ── Mobile sticky CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-30 p-4" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", boxShadow: "0 -4px 20px rgba(45,42,38,0.12)" }}>
        <Link href="#invest" className="btn-primary w-full text-center block" style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem", background: accent, borderColor: accent }}>
          <span>{isOwnership ? "Co-Own from €" : "Invest from €"}{car.tokenPrice} →</span>
        </Link>
      </div>
    </div>
  );
}
