"use client";

import Link from "next/link";
import RiskScale from "./RiskScale";

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
  riskScore?: number;
}

const SECTOR_COLORS: Record<string, { bg: string; text: string; headerBg: string }> = {
  Hospitality: { bg: "rgba(196, 102, 58, 0.1)", text: "#C4663A", headerBg: "rgba(196, 102, 58, 0.08)" },
  "Creative/Media": { bg: "rgba(184, 149, 79, 0.1)", text: "#B8954F", headerBg: "rgba(184, 149, 79, 0.08)" },
  Retail: { bg: "rgba(74, 124, 89, 0.1)", text: "#4A7C59", headerBg: "rgba(74, 124, 89, 0.08)" },
  "Local Services": { bg: "rgba(196, 102, 58, 0.08)", text: "#C4663A", headerBg: "rgba(196, 102, 58, 0.06)" },
};

export default function OpportunityCard({ opp }: { opp: Opportunity }) {
  const pct = Math.round((opp.raisedAmount / opp.raisingTarget) * 100);
  const sector = SECTOR_COLORS[opp.sector] || SECTOR_COLORS["Hospitality"];

  return (
    <div
      className="card card-hover flex flex-col h-full"
      style={{ padding: "0" }}
    >
      {/* Header area — warm tinted background */}
      <div
        className="rounded-t-xl px-5 pt-5 pb-4"
        style={{ background: sector.headerBg, borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: sector.bg, color: sector.text, whiteSpace: "nowrap" }}
          >
            {opp.sector}
          </span>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: "rgba(196, 102, 58, 0.1)", color: "var(--accent)", whiteSpace: "nowrap" }}
          >
            {opp.daysLeft}d left
          </span>
        </div>
        {opp.riskScore != null && (
          <div className="mb-2">
            <RiskScale score={opp.riskScore} compact />
          </div>
        )}
        <h3
          className="font-semibold mb-1"
          style={{ fontSize: "1rem", color: "var(--foreground)", letterSpacing: "-0.01em", lineHeight: "1.3", fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {opp.name}
        </h3>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{opp.city}</p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-3 p-5">
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {opp.description}
        </p>

        {/* Highlight */}
        <div
          className="text-xs px-3 py-2 rounded-lg"
          style={{ background: "var(--accent-subtle)", color: "var(--accent)", fontStyle: "italic" }}
        >
          {opp.highlight}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { val: `${opp.equityAvailable}%`, lbl: "Equity" },
            { val: `€${(opp.raisingTarget / 1000).toFixed(0)}K`, lbl: "Target" },
            { val: `${opp.investorCount}`, lbl: "Investors" },
          ].map((s) => (
            <div
              key={s.lbl}
              className="rounded-lg py-2.5"
              style={{ background: "var(--background-2, var(--surface-2))" }}
            >
              <p className="font-semibold text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
              <p className="text-[10px] font-medium mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div>
          <div className="flex justify-between mb-2" style={{ fontSize: "0.6875rem" }}>
            <span style={{ color: "var(--muted-foreground)" }}>
              €{opp.raisedAmount.toLocaleString()} raised
            </span>
            <span className="font-semibold" style={{ color: "var(--accent)" }}>{pct}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <Link
          href={`/invest/${opp.id}`}
          className="btn-primary w-full text-center mt-auto"
          style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem" }}
        >
          <span>Invest from €{opp.minInvestment}</span>
        </Link>
      </div>
    </div>
  );
}
