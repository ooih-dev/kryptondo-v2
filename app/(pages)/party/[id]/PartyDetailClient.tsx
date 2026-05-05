"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, Music, Globe, Zap, Star,
  TrendingUp, CheckCircle, Coins, ChevronRight, FileText, Ticket,
  Calculator, Percent,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import type { PartyClub } from "../../../data/mock";

const PARTY_ACCENT = "#E879F9";
const PARTY_GOLD = "#B8954F";

const TABS = ["Overview", "Financials", "Perks & Access", "Events", "Team", "Risk", "Documents"];

const PERK_TIERS = [
  { name: "Bronze", range: "€100 – €499", color: "#C4663A", perks: ["2 discounted tickets/month", "Priority queue access", "Monthly investor newsletter", "Token holder Discord"] },
  { name: "Silver", range: "€500 – €1,999", color: "#8A8A9A", perks: ["Free entry every event", "Guest +1 included", "VIP area access", "Artist meet at select events"] },
  { name: "Gold", range: "€2,000 – €4,999", color: PARTY_GOLD, perks: ["Unlimited free entry + guest", "Backstage / artist area access", "Complimentary drinks per event", "Quarterly investor party"] },
  { name: "Platinum", range: "€5,000+", color: PARTY_ACCENT, perks: ["All Gold perks", "Co-branding one event/quarter", "Wall of Founders recognition", "Voting rights on major decisions"] },
];

const VENUE_ICONS: Record<string, React.ReactNode> = {
  "Techno Club":       <Music size={36} />,
  "Rooftop Lounge":    <Globe size={36} />,
  "Event Collective":  <Zap size={36} />,
  "Beach Club":        <Star size={36} />,
};

function getPerkTier(amount: number) {
  if (amount >= 5000) return { name: "Platinum", color: PARTY_ACCENT, highlight: "Backstage access + co-branding + Wall of Founders" };
  if (amount >= 2000) return { name: "Gold", color: PARTY_GOLD, highlight: "Unlimited free entry + backstage + complimentary drinks" };
  if (amount >= 500) return { name: "Silver", color: "#8A8A9A", highlight: "Free entry every event + VIP area + guest +1" };
  return { name: "Bronze", color: "#C4663A", highlight: "2 discounted tickets/month + priority queue" };
}

export default function PartyDetailClient({ club }: { club: PartyClub }) {
  const [activeTab, setActiveTab] = useState(0);
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const pct = Math.round((club.soldTokens / club.totalTokens) * 100);
  const icon = VENUE_ICONS[club.type] ?? <Music size={36} />;

  const calc = useMemo(() => {
    const tokens = Math.floor(amount / club.tokenPrice);
    const yieldRate = club.estimatedYield / 100;
    const annualIncome = amount * yieldRate;
    const monthlyIncome = annualIncome / 12;
    const year3Total = amount + annualIncome * 3;
    return { tokens, annualIncome, monthlyIncome, year3Total };
  }, [amount, club.tokenPrice, club.estimatedYield]);

  const perkTier = getPerkTier(amount);

  function handleInput(v: string) {
    setInputVal(v);
    const n = parseInt(v.replace(/\D/g, ""), 10);
    if (!isNaN(n) && n >= club.tokenPrice && n <= 50000) setAmount(n);
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto">
          <Link href="/party" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
            <ArrowLeft size={16} /> Back to Party &amp; Clubs
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT }}>
                  {club.type}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {club.location}
                </span>
                <RiskScale score={club.riskScore} compact />
              </div>
              <h1 className="font-extrabold text-balance mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: "1.1", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {club.name}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {club.description}
              </p>

              {/* Venue hero visual */}
              <div className="w-full rounded-2xl h-40 md:h-52 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, rgba(232,121,249,0.08) 0%, var(--surface-2) 100%)", border: "1px solid var(--border)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(232,121,249,0.12)", color: PARTY_ACCENT }}>
                  {icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{club.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{club.type} · {club.location}</p>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              <div className="mb-5">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{club.soldTokens}/{club.totalTokens} tokens sold</span>
                  <span className="font-semibold" style={{ color: PARTY_ACCENT }}>{pct}%</span>
                </div>
                <div className="progress-bar mb-1">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: PARTY_ACCENT }} />
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>of €{(club.totalTokens * club.tokenPrice).toLocaleString()} goal</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <Coins size={14} />, label: "Token price", val: `€${club.tokenPrice}` },
                  { icon: <Users size={14} />, label: "Investors", val: club.investors.toString() },
                  { icon: <Clock size={14} />, label: "Days left", val: club.daysLeft.toString() },
                  { icon: <TrendingUp size={14} />, label: "Est. yield", val: `${club.estimatedYield}%` },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "var(--surface-2)" }}>
                    <div className="flex justify-center mb-1" style={{ color: PARTY_ACCENT }}>{s.icon}</div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
                    <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Perk preview */}
              <div className="rounded-xl p-3 mb-4" style={{ background: "rgba(232,121,249,0.07)", border: "1px solid rgba(232,121,249,0.15)" }}>
                <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: PARTY_ACCENT, letterSpacing: "0.08em" }}>From €100 you unlock</p>
                <div className="flex items-center gap-1.5">
                  <Ticket size={12} style={{ color: "#C4663A" }} />
                  <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>Bronze: 2 discounted tickets/month + priority queue</span>
                </div>
              </div>

              <Link
                href="#invest"
                className="btn-primary w-full text-center block mb-2"
                style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem", background: PARTY_ACCENT, borderColor: PARTY_ACCENT }}
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

      {/* ── Investment Calculator ── */}
      <section id="invest" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <div className="rounded-2xl p-6 md:p-8" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT }}>
                <Calculator size={20} />
              </div>
              <h2 className="font-bold" style={{ fontSize: "1.125rem", color: "var(--foreground)" }}>Investment Calculator</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input */}
              <div>
                <label className="text-xs font-semibold uppercase mb-2 block" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>Investment Amount</label>
                <div className="relative mb-3">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: "var(--muted-foreground)" }}>€</span>
                  <input
                    type="number"
                    value={inputVal}
                    onChange={(e) => handleInput(e.target.value)}
                    className="w-full rounded-xl px-8 py-3 text-lg font-bold"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--foreground)", outline: "none" }}
                  />
                </div>
                <input
                  type="range"
                  min={club.tokenPrice}
                  max={50000}
                  step={club.tokenPrice}
                  value={amount}
                  onChange={(e) => { setAmount(Number(e.target.value)); setInputVal(e.target.value); }}
                  className="w-full"
                  style={{ accentColor: PARTY_ACCENT }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>
                  <span>€{club.tokenPrice}</span>
                  <span>€50,000</span>
                </div>

                {/* Quick pick */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {[250, 500, 1000, 2500, 5000].map((v) => (
                    <button
                      key={v}
                      onClick={() => { setAmount(v); setInputVal(String(v)); }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                      style={amount === v
                        ? { background: PARTY_ACCENT, color: "#fff", border: `1px solid ${PARTY_ACCENT}` }
                        : { background: "var(--surface-2)", color: "var(--muted-foreground)", border: "1px solid var(--border)" }
                      }
                    >
                      €{v.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div className="space-y-3">
                {[
                  { icon: <Coins size={16} />, label: "Tokens received", val: `${calc.tokens} tokens` },
                  { icon: <Percent size={16} />, label: "Est. annual yield", val: `${club.estimatedYield}%` },
                  { icon: <TrendingUp size={16} />, label: "Est. annual income", val: `€${calc.annualIncome.toFixed(0)}` },
                  { icon: <TrendingUp size={16} />, label: "Est. monthly income", val: `€${calc.monthlyIncome.toFixed(0)}` },
                  { icon: <TrendingUp size={16} />, label: "3-year total (est.)", val: `€${calc.year3Total.toFixed(0)}` },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: "var(--surface-2)" }}>
                    <span className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                      <span style={{ color: PARTY_ACCENT }}>{row.icon}</span>
                      {row.label}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={row.val}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {row.val}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                ))}

                {/* Perk tier indicator */}
                <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: `${perkTier.color}12`, border: `1px solid ${perkTier.color}25` }}>
                  <Star size={16} style={{ color: perkTier.color, flexShrink: 0 }} />
                  <div>
                    <p className="text-xs font-bold" style={{ color: perkTier.color }}>{perkTier.name} Tier Unlocked</p>
                    <p className="text-[11px] leading-snug" style={{ color: "var(--muted-foreground)" }}>{perkTier.highlight}</p>
                  </div>
                </div>

                <p className="text-xs text-center pt-1" style={{ color: "var(--muted-foreground)", opacity: 0.7 }}>
                  Illustrative only. Capital at risk. Past performance not indicative of future returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  color: activeTab === i ? PARTY_ACCENT : "var(--muted-foreground)",
                  borderBottom: activeTab === i ? `2px solid ${PARTY_ACCENT}` : "2px solid transparent",
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

            {/* Tab 0: Overview */}
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Venue Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Type", val: club.type },
                      { label: "Location", val: club.location },
                      { label: "Token price", val: `€${club.tokenPrice}` },
                      { label: "Capacity", val: `${club.capacityPax} pax` },
                      { label: "Events/month", val: club.eventsPerMonth.toString() },
                      { label: "Est. yield", val: `${club.estimatedYield}%` },
                    ].map((s) => (
                      <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                        <p className="font-extrabold mb-1" style={{ fontSize: "1rem", color: PARTY_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{club.description}</p>
                </div>
                <div className="space-y-5">
                  <div className="card">
                    <RiskScale score={club.riskScore} breakdown={club.riskBreakdown} showBreakdown />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: Financials */}
            {activeTab === 1 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Financials</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: `€${club.ticketRevenueMonthly.toLocaleString()}/mo`, label: "Monthly ticket revenue", note: "Avg across all events" },
                    { val: `${club.capacityPax} pax`, label: "Venue capacity", note: "Total across all spaces" },
                    { val: `${club.eventsPerMonth}`, label: "Events per month", note: "Regular programming" },
                    { val: `${club.estimatedYield}%`, label: "Est. annual yield", note: "For token investors" },
                    { val: `€${(club.ticketRevenueMonthly * 12 / 1000).toFixed(0)}k/yr`, label: "Annual revenue run rate", note: "At current performance" },
                    { val: `€${(club.ticketRevenueMonthly / club.eventsPerMonth / club.capacityPax).toFixed(0)}`, label: "Revenue per guest avg", note: "Tickets + bar (est.)" },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <p className="font-extrabold mb-1" style={{ fontSize: "1.25rem", color: PARTY_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.note}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h4 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>Revenue breakdown (estimated monthly)</h4>
                  <div className="space-y-2.5">
                    {[
                      { item: "Ticket sales", pct: "55%", val: `€${Math.round(club.ticketRevenueMonthly * 0.55).toLocaleString()}` },
                      { item: "Bar & drinks revenue", pct: "30%", val: `€${Math.round(club.ticketRevenueMonthly * 0.30).toLocaleString()}` },
                      { item: "Private hire & events", pct: "10%", val: `€${Math.round(club.ticketRevenueMonthly * 0.10).toLocaleString()}` },
                      { item: "Merch & other", pct: "5%", val: `€${Math.round(club.ticketRevenueMonthly * 0.05).toLocaleString()}` },
                    ].map((r) => (
                      <div key={r.item} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{r.item}</span>
                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{r.val}</span>
                        <span className="text-sm font-semibold" style={{ color: PARTY_ACCENT }}>{r.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Perks & Access */}
            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Perks &amp; Access</h2>
                <p className="text-sm leading-body mb-8" style={{ color: "var(--muted-foreground)" }}>
                  Your investment in {club.name} unlocks real nightlife perks. The more you invest, the higher your tier — and the better the access. Perks activate automatically when your tokens are in your wallet.
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

            {/* Tab 3: Events */}
            {activeTab === 3 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Upcoming Events</h2>
                <div className="space-y-3 mb-8">
                  {club.upcomingEvents.map((ev) => (
                    <div key={ev.name} className="card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT }}>
                          <Ticket size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{ev.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{ev.date} · {ev.tickets} capacity</p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                        style={ev.soldOut
                          ? { background: "rgba(196,102,58,0.12)", color: "#C4663A" }
                          : { background: "rgba(74,124,89,0.12)", color: "#4A7C59" }
                        }
                      >
                        {ev.soldOut ? "Sold Out" : "Available"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h4 className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>As a token holder</h4>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>
                    Silver+ holders (€500) get free entry to all events — including sold-out nights. Gold+ holders also get complimentary drinks and VIP / backstage access. Platinum holders can apply to co-brand any event.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 4: Team */}
            {activeTab === 4 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>The Team</h2>
                <div className="space-y-4">
                  {club.team.map((member) => (
                    <div key={member.name} className="card flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: `${member.color}18`, color: member.color }}>
                        {member.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>{member.name}</p>
                        <p className="text-xs font-medium mb-1.5" style={{ color: PARTY_ACCENT }}>{member.role}</p>
                        <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 5: Risk */}
            {activeTab === 5 && (
              <div className="max-w-2xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Risk Assessment</h2>
                <div className="card mb-6">
                  <RiskScale score={club.riskScore} breakdown={club.riskBreakdown} showBreakdown />
                </div>
                <div className="rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h4 className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>Venue features &amp; risk mitigants</h4>
                  <div className="space-y-2">
                    {club.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "var(--surface-2)" }}>
                        <ChevronRight size={14} style={{ color: PARTY_ACCENT }} />
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6: Documents */}
            {activeTab === 6 && (
              <div className="max-w-xl">
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Documents</h2>
                <div className="space-y-3">
                  {[
                    { name: "Investor Information Document", type: "PDF", size: "1.2 MB" },
                    { name: "Malta SPV Registration Certificate", type: "PDF", size: "285 KB" },
                    { name: "Venue Financials (2024–2025)", type: "PDF", size: "2.1 MB" },
                    { name: "Smart Contract Audit (CertiK)", type: "PDF", size: "710 KB" },
                    { name: "Entertainment License", type: "PDF", size: "540 KB" },
                    { name: "Risk Disclosure Statement", type: "PDF", size: "380 KB" },
                  ].map((doc) => (
                    <div key={doc.name} className="card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT }}>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "rgba(232,121,249,0.10)", color: PARTY_ACCENT }}>
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
            <FAQ items={club.faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
