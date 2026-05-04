"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Users, Clock, TrendingUp, Landmark,
  ShieldCheck, FileText, Download, CheckCircle, Circle,
  ExternalLink, Wallet, Coins, Gift, BarChart3,
} from "lucide-react";
import RiskScale from "../../../components/RiskScale";
import FAQ from "../../../components/FAQ";
import type { InvestmentOpportunity } from "../../../data/mock";

const TABS = [
  "Overview", "Financials", "Team", "Token Details",
  "Dividends", "Perks", "Documents", "Timeline", "FAQ",
];

const SECTOR_COLORS: Record<string, { text: string; bg: string }> = {
  Hospitality:     { text: "#C4663A", bg: "rgba(196, 102, 58, 0.1)" },
  "Creative/Media":{ text: "#B8954F", bg: "rgba(184, 149, 79, 0.1)" },
  Retail:          { text: "#4A7C59", bg: "rgba(74, 124, 89, 0.1)" },
  "Local Services":{ text: "#C4663A", bg: "rgba(196, 102, 58, 0.08)" },
};

export default function InvestmentDetailClient({ opp }: { opp: InvestmentOpportunity }) {
  const [activeTab, setActiveTab] = useState(0);
  const pct = Math.round((opp.raisedAmount / opp.raisingTarget) * 100);
  const sector = SECTOR_COLORS[opp.sector] ?? SECTOR_COLORS.Hospitality;

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section
        className="pt-24 pb-10 px-4"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-lg mx-auto">
          <Link
            href="/invest"
            className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity"
            style={{ color: "var(--muted-foreground)" }}
          >
            <ArrowLeft size={16} /> Back to opportunities
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left: business info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: sector.bg, color: sector.text }}
                >
                  {opp.sector}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                  <MapPin size={12} /> {opp.city}, {opp.country}
                </span>
                <RiskScale score={opp.riskScore} compact />
              </div>

              <h1
                className="font-extrabold text-balance mb-3"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-serif), Georgia, serif",
                }}
              >
                {opp.name}
              </h1>
              <p className="text-base leading-body mb-6 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
                {opp.tagline}
              </p>

              {/* Hero image placeholder */}
              <div
                className="w-full rounded-2xl h-48 md:h-64 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${sector.bg} 0%, var(--background-2) 100%)`,
                  border: "1px solid var(--border)",
                }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
                  {opp.name}
                </span>
              </div>
            </div>

            {/* Right: CTA card */}
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}
            >
              <div className="mb-4">
                <div className="flex justify-between mb-1.5" style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>
                    €{opp.raisedAmount.toLocaleString()} raised
                  </span>
                  <span className="font-semibold" style={{ color: "var(--accent)" }}>{pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>
                  of €{opp.raisingTarget.toLocaleString()} goal
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: <TrendingUp size={14} />, label: "Equity", val: `${opp.equityAvailable}%` },
                  { icon: <Users size={14} />, label: "Investors", val: opp.investorCount.toString() },
                  { icon: <Clock size={14} />, label: "Days Left", val: opp.daysLeft.toString() },
                  { icon: <Coins size={14} />, label: "Min. Invest", val: `€${opp.minInvestment}` },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "var(--surface-2)" }}
                  >
                    <div className="flex justify-center mb-1" style={{ color: "var(--accent)" }}>{s.icon}</div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
                    <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#invest"
                className="btn-primary w-full text-center block mb-2"
                style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem" }}
              >
                <span>Invest from €{opp.minInvestment} →</span>
              </a>
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                EU-regulated · KYC required · Non-custodial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div
        className="sticky top-0 z-20 overflow-x-auto"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-lg mx-auto px-4">
          <div className="flex gap-0 min-w-max">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-4 py-3.5 text-sm font-medium transition-all duration-200 relative whitespace-nowrap"
                style={{
                  color: activeTab === i ? "var(--accent)" : "var(--muted-foreground)",
                  borderBottom: activeTab === i ? "2px solid var(--accent)" : "2px solid transparent",
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

            {/* ── 0: Overview ── */}
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                <div>
                  <h2 className="font-bold mb-4" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    About {opp.name}
                  </h2>
                  <p className="text-sm leading-body mb-8" style={{ color: "var(--muted-foreground)", lineHeight: "1.75" }}>
                    {opp.fullDescription}
                  </p>
                  <h3 className="font-semibold mb-3" style={{ fontSize: "1rem", color: "var(--foreground)" }}>
                    Our Mission
                  </h3>
                  <p className="text-sm leading-body mb-8" style={{ color: "var(--muted-foreground)", lineHeight: "1.75" }}>
                    {opp.mission}
                  </p>
                  <h3 className="font-semibold mb-3" style={{ fontSize: "1rem", color: "var(--foreground)" }}>
                    Market Opportunity
                  </h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)", lineHeight: "1.75" }}>
                    {opp.marketOpportunity}
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="card">
                    <RiskScale score={opp.riskScore} breakdown={opp.riskBreakdown} showBreakdown />
                  </div>
                  <div className="card">
                    <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                      Key Highlights
                    </p>
                    <div className="space-y-2.5">
                      {[
                        { icon: <TrendingUp size={14} />, text: `${opp.financials.growth} YoY revenue growth` },
                        { icon: <BarChart3 size={14} />, text: `${opp.financials.profitMargin} profit margin` },
                        { icon: <Users size={14} />, text: `${opp.investorCount} investors so far` },
                        { icon: <ShieldCheck size={14} />, text: "CertiK audited smart contracts" },
                        { icon: <Landmark size={14} />, text: "Malta SPV · MiCA compliant" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2.5">
                          <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                          <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── 1: Financials ── */}
            {activeTab === 1 && (
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Financial Overview
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                  {[
                    { label: "Annual Revenue", val: opp.financials.revenue },
                    { label: "YoY Growth", val: opp.financials.growth },
                    { label: "Profit Margin", val: opp.financials.profitMargin },
                    { label: "Founded", val: opp.financials.yearFounded.toString() },
                    { label: "Employees", val: opp.financials.employees.toString() },
                  ].map((s) => (
                    <div key={s.label} className="card text-center" style={{ padding: "1rem" }}>
                      <p
                        className="font-extrabold mb-1"
                        style={{ fontSize: "1.375rem", color: "var(--accent)", fontFamily: "var(--font-serif), Georgia, serif" }}
                      >
                        {s.val}
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold mb-4" style={{ fontSize: "1rem", color: "var(--foreground)" }}>
                  Revenue Projections
                </h3>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "var(--surface-2)" }}>
                        {["Year", "Projected Revenue", "Projected Profit"].map((h) => (
                          <th key={h} className="text-left px-5 py-3" style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {opp.financials.projections.map((row, i) => (
                        <tr
                          key={row.year}
                          style={{
                            background: i % 2 === 0 ? "var(--surface)" : "var(--background)",
                            borderTop: "1px solid var(--border)",
                          }}
                        >
                          <td className="px-5 py-3 font-semibold" style={{ color: "var(--foreground)" }}>{row.year}</td>
                          <td className="px-5 py-3" style={{ color: "var(--foreground)" }}>{row.revenue}</td>
                          <td className="px-5 py-3" style={{ color: "var(--green)" }}>{row.profit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3" style={{ color: "var(--muted-foreground)" }}>
                  Projections based on current growth trajectory and expansion plans. Not a guarantee of future performance.
                </p>
              </div>
            )}

            {/* ── 2: Team ── */}
            {activeTab === 2 && (
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  The Team
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {opp.team.map((member) => (
                    <div key={member.name} className="card text-center">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-4"
                        style={{ background: `${member.color}18`, color: member.color, border: `1px solid ${member.color}30` }}
                      >
                        {member.initials}
                      </div>
                      <h3 className="font-semibold mb-0.5 tracking-tight-sub" style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}>
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold mb-3" style={{ color: member.color, letterSpacing: "0.04em" }}>
                        {member.role}
                      </p>
                      <p className="text-xs leading-body mb-4" style={{ color: "var(--muted-foreground)", lineHeight: "1.65" }}>
                        {member.bio}
                      </p>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center gap-1.5 text-xs font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        <ExternalLink size={12} /> LinkedIn
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── 3: Token Details ── */}
            {activeTab === 3 && (
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Token Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Token Name", val: opp.tokenDetails.name },
                    { label: "Symbol", val: opp.tokenDetails.symbol },
                    { label: "Total Supply", val: `${opp.tokenDetails.totalSupply.toLocaleString()} tokens` },
                    { label: "Price Per Token", val: `€${opp.tokenDetails.pricePerToken}` },
                    { label: "Blockchain", val: opp.tokenDetails.chain },
                    { label: "SPV Entity", val: opp.tokenDetails.spvName },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.label}</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{item.val}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span className="text-xs font-semibold block mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                    Contract Address
                  </span>
                  <code className="text-xs font-mono" style={{ color: "var(--foreground)" }}>
                    {opp.tokenDetails.contractAddress}
                  </code>
                  <span
                    className="ml-3 text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                  >
                    Placeholder
                  </span>
                </div>
                <div
                  className="mt-4 p-4 rounded-xl text-sm"
                  style={{ background: "var(--gold-subtle)", border: "1px solid var(--gold-glow)" }}
                >
                  <Wallet size={14} className="inline mr-2" style={{ color: "var(--gold)" }} />
                  <span style={{ color: "var(--foreground)" }}>
                    Tokens are non-custodial — held directly in your wallet. Kryptondo never takes custody.
                  </span>
                </div>
              </div>
            )}

            {/* ── 4: Dividends ── */}
            {activeTab === 4 && (
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Dividends & Returns
                </h2>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Expected Annual Yield", val: opp.dividends.expectedYield, accent: true },
                    { label: "Distribution Frequency", val: opp.dividends.frequency, accent: false },
                    { label: "Next Distribution", val: opp.dividends.nextDistribution, accent: false },
                  ].map((s) => (
                    <div key={s.label} className="card text-center">
                      <p
                        className="font-extrabold mb-1"
                        style={{
                          fontSize: "1.5rem",
                          color: s.accent ? "var(--accent)" : "var(--foreground)",
                          fontFamily: "var(--font-serif), Georgia, serif",
                        }}
                      >
                        {s.val}
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold mb-4" style={{ fontSize: "1rem", color: "var(--foreground)" }}>
                  Historical Dividend Payments
                </h3>
                <div
                  className="rounded-xl overflow-hidden mb-4"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "var(--surface-2)" }}>
                        {["Period", "Per Token", "Total Distributed"].map((h) => (
                          <th key={h} className="text-left px-5 py-3" style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {opp.dividends.history.map((row, i) => (
                        <tr
                          key={row.period}
                          style={{
                            background: i % 2 === 0 ? "var(--surface)" : "var(--background)",
                            borderTop: "1px solid var(--border)",
                          }}
                        >
                          <td className="px-5 py-3" style={{ color: "var(--foreground)" }}>{row.period}</td>
                          <td className="px-5 py-3 font-semibold" style={{ color: "var(--green)" }}>{row.perToken}</td>
                          <td className="px-5 py-3" style={{ color: "var(--muted-foreground)" }}>{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  Past distributions are not a guarantee of future payments. Dividends depend on business profitability.
                </p>
              </div>
            )}

            {/* ── 5: Perks ── */}
            {activeTab === 5 && (
              <div>
                <h2 className="font-bold mb-3" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Perks & Loyalty
                </h2>
                <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
                  Token holders unlock exclusive perks from {opp.name}. The more tokens you hold, the better your benefits.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {opp.perks.map((tier, i) => (
                    <div
                      key={tier.tier}
                      className="card h-full"
                      style={{
                        borderColor: i === opp.perks.length - 1 ? "var(--gold-glow)" : "var(--border-subtle)",
                        background: i === opp.perks.length - 1 ? "var(--gold-subtle)" : "var(--surface)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{
                            background: i === opp.perks.length - 1 ? "var(--gold-glow)" : "var(--accent-subtle)",
                            color: i === opp.perks.length - 1 ? "var(--gold)" : "var(--accent)",
                          }}
                        >
                          {tier.tier}
                        </span>
                        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                          {tier.minTokens}+ tokens
                        </span>
                      </div>
                      <p className="text-xs mb-4 italic" style={{ color: "var(--muted-foreground)" }}>
                        {tier.description}
                      </p>
                      <ul className="space-y-2">
                        {tier.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>
                              <CheckCircle size={13} />
                            </span>
                            <span style={{ color: "var(--foreground)" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 p-4 rounded-xl text-sm"
                  style={{ background: "var(--accent-subtle)", border: "1px solid var(--accent-glow)" }}
                >
                  <Gift size={14} className="inline mr-2" style={{ color: "var(--accent)" }} />
                  <span style={{ color: "var(--foreground)" }}>
                    Perks activate as soon as tokens arrive in your wallet. No manual registration required.
                  </span>
                </div>
              </div>
            )}

            {/* ── 6: Documents ── */}
            {activeTab === 6 && (
              <div>
                <h2 className="font-bold mb-3" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Legal Documents
                </h2>
                <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>
                  Full documentation for KYC-verified investors. Documents are available after identity verification.
                </p>
                <div className="space-y-2">
                  {opp.documents.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div style={{ color: "var(--accent)" }}>
                          <FileText size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{doc.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: "var(--surface-2)", color: "var(--muted-foreground)" }}
                        >
                          {doc.type}
                        </span>
                        <button
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                          style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                        >
                          <Download size={12} /> Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── 7: Timeline ── */}
            {activeTab === 7 && (
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Campaign Timeline
                </h2>
                <div className="relative">
                  <div
                    className="absolute left-5 top-0 bottom-0 w-px"
                    style={{ background: "var(--border)" }}
                  />
                  <div className="space-y-6 pl-14">
                    {opp.timeline.map((event, i) => (
                      <div key={i} className="relative">
                        <div
                          className="absolute -left-14 top-0 w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background: event.done ? "var(--accent-subtle)" : "var(--surface)",
                            border: `2px solid ${event.done ? "var(--accent)" : "var(--border)"}`,
                          }}
                        >
                          {event.done ? (
                            <CheckCircle size={18} style={{ color: "var(--accent)" }} />
                          ) : (
                            <Circle size={18} style={{ color: "var(--border)" }} />
                          )}
                        </div>
                        <div
                          className="card"
                          style={{
                            borderColor: event.done ? "var(--accent-glow)" : "var(--border-subtle)",
                            background: event.done ? "var(--accent-subtle)" : "var(--surface)",
                            opacity: event.done ? 1 : 0.8,
                          }}
                        >
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{ color: event.done ? "var(--accent)" : "var(--muted-foreground)", letterSpacing: "0.05em" }}
                          >
                            {event.date}
                          </p>
                          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                            {event.event}
                          </p>
                          {!event.done && (
                            <span
                              className="text-xs mt-1 inline-block"
                              style={{ color: "var(--muted-foreground)" }}
                            >
                              Upcoming
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── 8: FAQ ── */}
            {activeTab === 8 && (
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Frequently Asked Questions
                </h2>
                <FAQ items={opp.faqs} />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Mobile sticky CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 lg:hidden z-30 p-4"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", boxShadow: "0 -4px 20px rgba(45,42,38,0.12)" }}
      >
        <a
          href="#invest"
          className="btn-primary w-full text-center block"
          style={{ padding: "0.875rem 1rem", fontSize: "0.9375rem" }}
        >
          <span>Invest from €{opp.minInvestment} →</span>
        </a>
      </div>
    </div>
  );
}
