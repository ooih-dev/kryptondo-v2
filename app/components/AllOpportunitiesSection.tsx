"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronDown } from "lucide-react";
import { LIVE_OPPORTUNITIES, CARS, MEDICAL_SPVS, FITNESS_STUDIOS } from "../data/mock";
import RiskScale from "./RiskScale";

type Industry = "All" | "Business" | "Cars" | "Medical" | "Fitness";
type SortKey = "closing" | "yield" | "risk" | "progress";

interface NormalizedInvestment {
  id: string;
  href: string;
  industry: Exclude<Industry, "All">;
  name: string;
  location: string;
  description: string;
  yieldRange: string;
  riskScore: number;
  fundingPct: number;
  investors: number;
  daysLeft: number;
  yieldNum: number;
}

const INDUSTRY_CONFIG: Record<Exclude<Industry, "All">, { bg: string; text: string; border: string; accent: string }> = {
  Business: { bg: "rgba(196,102,58,0.1)", text: "#C4663A", border: "rgba(196,102,58,0.3)", accent: "#C4663A" },
  Cars:     { bg: "rgba(59,130,246,0.1)",  text: "#3B7DD8", border: "rgba(59,130,246,0.3)",  accent: "#3B7DD8" },
  Medical:  { bg: "rgba(74,124,89,0.1)",   text: "#4A7C59", border: "rgba(74,124,89,0.3)",   accent: "#4A7C59" },
  Fitness:  { bg: "rgba(139,92,246,0.1)",  text: "#8B5CF6", border: "rgba(139,92,246,0.3)",  accent: "#8B5CF6" },
};

const FILTERS: Industry[] = ["All", "Business", "Cars", "Medical", "Fitness"];

const SORTS: { key: SortKey; label: string }[] = [
  { key: "closing",  label: "Closing Soon" },
  { key: "yield",    label: "Highest Yield" },
  { key: "risk",     label: "Lowest Risk" },
  { key: "progress", label: "Most Funded" },
];

function normalizeAll(): NormalizedInvestment[] {
  const business: NormalizedInvestment[] = LIVE_OPPORTUNITIES.map(o => ({
    id: o.id,
    href: `/invest/${o.id}`,
    industry: "Business" as const,
    name: o.name,
    location: `${o.city}, ${o.country}`,
    description: o.description,
    yieldRange: o.dividends.expectedYield,
    riskScore: o.riskScore,
    fundingPct: Math.round((o.raisedAmount / o.raisingTarget) * 100),
    investors: o.investorCount,
    daysLeft: o.daysLeft,
    yieldNum: parseFloat(o.dividends.expectedYield),
  }));

  const cars: NormalizedInvestment[] = CARS.map(c => ({
    id: c.id,
    href: `/cars/${c.id}`,
    industry: "Cars" as const,
    name: `${c.make} ${c.model} (${c.year})`,
    location: c.location,
    description: c.description,
    yieldRange: c.rentalYield,
    riskScore: c.riskScore,
    fundingPct: Math.round((c.soldTokens / c.totalTokens) * 100),
    investors: c.investors,
    daysLeft: c.daysLeft,
    yieldNum: parseFloat(c.rentalYield),
  }));

  const medical: NormalizedInvestment[] = MEDICAL_SPVS.map(m => ({
    id: m.id,
    href: `/medical/${m.id}`,
    industry: "Medical" as const,
    name: m.name,
    location: m.geographicFocus,
    description: m.description,
    yieldRange: m.placementYield,
    riskScore: m.riskScore,
    fundingPct: Math.round((m.soldTokens / m.totalTokens) * 100),
    investors: m.investors,
    daysLeft: m.daysLeft,
    yieldNum: parseFloat(m.placementYield),
  }));

  const fitness: NormalizedInvestment[] = FITNESS_STUDIOS.map(f => ({
    id: f.id,
    href: `/fitness/${f.id}`,
    industry: "Fitness" as const,
    name: f.name,
    location: f.location,
    description: f.description,
    yieldRange: `${f.estimatedYield}%`,
    riskScore: f.riskScore,
    fundingPct: Math.round((f.soldTokens / f.totalTokens) * 100),
    investors: f.investors,
    daysLeft: f.daysLeft,
    yieldNum: f.estimatedYield,
  }));

  return [...business, ...cars, ...medical, ...fitness];
}

const ALL_INVESTMENTS = normalizeAll();

function InvestmentCard({ inv }: { inv: NormalizedInvestment }) {
  const cfg = INDUSTRY_CONFIG[inv.industry];
  const short = inv.description.length > 90 ? inv.description.slice(0, 90) + "…" : inv.description;

  return (
    <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
      {/* Header */}
      <div
        className="rounded-t-xl px-5 pt-5 pb-4"
        style={{ background: cfg.bg, borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}` }}
          >
            {inv.industry}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
            <Clock size={11} />
            {inv.daysLeft}d left
          </span>
        </div>
        <h3
          className="font-semibold mb-0.5"
          style={{ fontSize: "0.9375rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif", lineHeight: 1.3 }}
        >
          {inv.name}
        </h3>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{inv.location}</p>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col gap-3 p-5">
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {short}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg py-2.5 px-3 text-center" style={{ background: "var(--surface-2)" }}>
            <p className="font-semibold text-sm" style={{ color: cfg.text, fontFamily: "var(--font-serif), Georgia, serif" }}>
              {inv.yieldRange}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>Est. yield</p>
          </div>
          <div className="rounded-lg py-2.5 px-3 text-center" style={{ background: "var(--surface-2)" }}>
            <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
              {inv.investors}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>Investors</p>
          </div>
        </div>

        <RiskScale score={inv.riskScore} compact />

        {/* Progress */}
        <div>
          <div className="flex justify-between mb-1.5" style={{ fontSize: "0.6875rem" }}>
            <span style={{ color: "var(--muted-foreground)" }}>Funded</span>
            <span className="font-semibold" style={{ color: cfg.text }}>{inv.fundingPct}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.min(inv.fundingPct, 100)}%`, background: cfg.accent }}
            />
          </div>
        </div>

        <div className="mt-auto pt-1">
          <Link
            href={inv.href}
            className="btn-primary w-full text-center block"
            style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem", background: cfg.accent, borderColor: cfg.accent }}
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AllOpportunitiesSection() {
  const [filter, setFilter] = useState<Industry>("All");
  const [sort, setSort] = useState<SortKey>("closing");

  const filtered = useMemo(() => {
    const result = filter === "All" ? ALL_INVESTMENTS : ALL_INVESTMENTS.filter(i => i.industry === filter);
    switch (sort) {
      case "yield":    return [...result].sort((a, b) => b.yieldNum - a.yieldNum);
      case "risk":     return [...result].sort((a, b) => a.riskScore - b.riskScore);
      case "progress": return [...result].sort((a, b) => b.fundingPct - a.fundingPct);
      case "closing":  return [...result].sort((a, b) => a.daysLeft - b.daysLeft);
      default:         return result;
    }
  }, [filter, sort]);

  const countFor = (ind: Exclude<Industry, "All">) =>
    ALL_INVESTMENTS.filter(i => i.industry === ind).length;

  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="container-lg mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <span className="section-label">All Opportunities</span>
            <h2 className="text-display-md font-bold text-balance" style={{ color: "var(--foreground)" }}>
              Explore Investment Opportunities
            </h2>
            <p className="text-sm mt-2 max-w-none" style={{ color: "var(--muted-foreground)" }}>
              {ALL_INVESTMENTS.length} live investments across 4 sectors — from €40/token
            </p>
          </div>
          {/* Sort */}
          <div className="relative shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="appearance-none text-sm rounded-lg pl-3 pr-8 py-2 cursor-pointer"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                outline: "none",
                fontFamily: "Geist, system-ui, sans-serif",
              }}
            >
              {SORTS.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--muted-foreground)" }}
            />
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-150"
              style={{
                background: filter === f ? "var(--accent)" : "var(--background)",
                color: filter === f ? "#fff" : "var(--muted-foreground)",
                border: `1px solid ${filter === f ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {f}
              {f !== "All" && (
                <span className="ml-1.5 opacity-70 text-xs">
                  ({countFor(f as Exclude<Industry, "All">)})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map(inv => (
              <motion.div
                key={`${inv.industry}-${inv.id}`}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <InvestmentCard inv={inv} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-sm" style={{ color: "var(--muted-foreground)" }}>
            No investments found.
          </p>
        )}
      </div>
    </section>
  );
}
