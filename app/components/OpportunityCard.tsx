"use client";

import Link from "next/link";

interface Opportunity {
  id: string;
  name: string;
  sector: string;
  city: string;
  description: string;
  equityAvailable: number;
  raisingTarget: number;
  raisedAmount: number;
  investorCount: number;
  daysLeft: number;
  minInvestment: number;
  highlight: string;
}

const SECTOR_COLORS: Record<string, string> = {
  Hospitality: "#00D4FF",
  "Creative/Media": "#C9A84C",
  Retail: "#7C8CF8",
  "Local Services": "#4CAF50",
};

export default function OpportunityCard({ opp }: { opp: Opportunity }) {
  const pct = Math.round((opp.raisedAmount / opp.raisingTarget) * 100);

  return (
    <div className="card group hover:border-[var(--accent-blue)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
      {/* Placeholder image */}
      <div
        className="h-36 rounded-xl mb-4 flex items-end p-3 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${SECTOR_COLORS[opp.sector] || "#00D4FF"}22, ${SECTOR_COLORS[opp.sector] || "#00D4FF"}44)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)",
          }}
        />
        <div className="flex items-center justify-between w-full relative z-10">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: `${SECTOR_COLORS[opp.sector] || "#00D4FF"}33`,
              color: SECTOR_COLORS[opp.sector] || "#00D4FF",
            }}
          >
            {opp.sector}
          </span>
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "rgba(255,100,100,0.15)", color: "#ff6464" }}
          >
            {opp.daysLeft}d left
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-base text-[var(--foreground)]">{opp.name}</h3>
          <span className="text-xs text-[var(--muted-foreground)] shrink-0">{opp.city}</span>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] mb-3 leading-relaxed">{opp.description}</p>

        {/* Highlight */}
        <div
          className="text-xs px-3 py-2 rounded-lg mb-4"
          style={{ background: "rgba(0,212,255,0.08)", color: "var(--accent-blue)" }}
        >
          ✦ {opp.highlight}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div>
            <p className="font-bold text-sm text-[var(--foreground)]">{opp.equityAvailable}%</p>
            <p className="text-[10px] text-[var(--muted-foreground)]">Equity</p>
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--foreground)]">€{(opp.raisingTarget / 1000).toFixed(0)}K</p>
            <p className="text-[10px] text-[var(--muted-foreground)]">Target</p>
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--foreground)]">{opp.investorCount}</p>
            <p className="text-[10px] text-[var(--muted-foreground)]">Investors</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-[var(--muted-foreground)]">
              €{opp.raisedAmount.toLocaleString()} raised
            </span>
            <span className="font-semibold" style={{ color: "var(--accent-blue)" }}>{pct}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <Link
          href="/invest"
          className="btn-primary w-full text-center text-sm py-2.5 mt-auto"
        >
          Invest from €{opp.minInvestment}
        </Link>
      </div>
    </div>
  );
}
