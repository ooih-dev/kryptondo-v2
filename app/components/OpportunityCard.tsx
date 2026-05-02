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

const SECTOR_COLORS: Record<string, { bg: string; text: string }> = {
  Hospitality: { bg: "rgba(61, 139, 255, 0.1)", text: "#3d8bff" },
  "Creative/Media": { bg: "rgba(201, 168, 76, 0.1)", text: "#c9a84c" },
  Retail: { bg: "rgba(124, 140, 248, 0.1)", text: "#7c8cf8" },
  "Local Services": { bg: "rgba(52, 199, 89, 0.1)", text: "#34c759" },
};

export default function OpportunityCard({ opp }: { opp: Opportunity }) {
  const pct = Math.round((opp.raisedAmount / opp.raisingTarget) * 100);
  const sector = SECTOR_COLORS[opp.sector] || SECTOR_COLORS["Hospitality"];

  return (
    <div
      className="card card-hover flex flex-col h-full group"
      style={{ padding: "1.25rem" }}
    >
      {/* Header image area */}
      <div
        className="h-32 rounded-xl mb-4 flex flex-col justify-between p-3 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${sector.bg.replace("0.1)", "0.15)")}, ${sector.bg.replace("0.1)", "0.06)")})`,
        }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="flex justify-between relative z-10">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: sector.bg, color: sector.text }}
          >
            {opp.sector}
          </span>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(255,80,80,0.12)", color: "#ff6060" }}
          >
            {opp.daysLeft}d left
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{opp.city}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-3">
        <div>
          <h3
            className="font-semibold mb-1 tracking-tight-sub"
            style={{ fontSize: "0.9375rem", color: "var(--foreground)" }}
          >
            {opp.name}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            {opp.description}
          </p>
        </div>

        {/* Highlight pill */}
        <div
          className="text-xs px-3 py-2 rounded-lg"
          style={{ background: "var(--accent-blue-glow)", color: "var(--accent-blue)" }}
        >
          ✦ {opp.highlight}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1 text-center">
          {[
            { val: `${opp.equityAvailable}%`, lbl: "Equity" },
            { val: `€${(opp.raisingTarget / 1000).toFixed(0)}K`, lbl: "Target" },
            { val: `${opp.investorCount}`, lbl: "Investors" },
          ].map((s) => (
            <div
              key={s.lbl}
              className="rounded-lg py-2"
              style={{ background: "var(--surface-2)" }}
            >
              <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{s.val}</p>
              <p className="text-[10px] font-medium" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div>
          <div className="flex justify-between mb-1.5" style={{ fontSize: "0.6875rem" }}>
            <span style={{ color: "var(--muted-foreground)" }}>
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
          className="btn-primary w-full text-center mt-auto"
          style={{ fontSize: "0.8125rem", padding: "0.625rem 1rem" }}
        >
          <span>Invest from €{opp.minInvestment}</span>
        </Link>
      </div>
    </div>
  );
}
