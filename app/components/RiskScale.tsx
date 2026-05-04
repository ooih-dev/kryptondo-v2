"use client";

import type { RiskBreakdown } from "../data/mock";

export const RISK_LEVELS = [
  { score: 1, label: "Conservative", color: "#4A7C59", bg: "rgba(74, 124, 89, 0.12)" },
  { score: 2, label: "Moderate",     color: "#7A9A5A", bg: "rgba(122, 154, 90, 0.12)" },
  { score: 3, label: "Balanced",     color: "#B8954F", bg: "rgba(184, 149, 79, 0.12)" },
  { score: 4, label: "Growth",       color: "#C4663A", bg: "rgba(196, 102, 58, 0.12)" },
  { score: 5, label: "Aggressive",   color: "#9E3A2B", bg: "rgba(158, 58, 43, 0.12)" },
];

export function getRiskLevel(score: number) {
  return RISK_LEVELS[Math.min(Math.max(Math.round(score), 1), 5) - 1];
}

interface RiskScaleProps {
  score: number;
  breakdown?: RiskBreakdown[];
  compact?: boolean;
  showBreakdown?: boolean;
}

export default function RiskScale({ score, breakdown, compact = false, showBreakdown = false }: RiskScaleProps) {
  const level = getRiskLevel(score);

  if (compact) {
    return (
      <span
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
        style={{ background: level.bg, color: level.color }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: level.color }}
        />
        Risk {score}/5 · {level.label}
      </span>
    );
  }

  return (
    <div>
      {/* Scale bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
            Risk Rating
          </p>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: level.bg, color: level.color }}
          >
            {level.label}
          </span>
        </div>

        {/* 5-segment bar */}
        <div className="flex gap-0.5 mb-1.5">
          {RISK_LEVELS.map((l) => (
            <div
              key={l.score}
              className="flex-1 h-2.5 rounded-sm transition-opacity duration-200"
              style={{
                background: l.color,
                opacity: l.score <= score ? 1 : 0.18,
              }}
            />
          ))}
        </div>

        <div className="flex justify-between">
          {RISK_LEVELS.map((l) => (
            <span
              key={l.score}
              className="text-[9px] font-medium"
              style={{ color: l.score === score ? l.color : "var(--muted-foreground)", opacity: l.score === score ? 1 : 0.6 }}
            >
              {l.score}
            </span>
          ))}
        </div>
      </div>

      {/* Breakdown */}
      {showBreakdown && breakdown && breakdown.length > 0 && (
        <div className="space-y-2 mt-4">
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Risk Factors
          </p>
          {breakdown.map((item) => {
            const itemLevel = getRiskLevel(item.score);
            return (
              <div key={item.criterion} className="flex items-center gap-3">
                <span className="text-xs w-36 shrink-0" style={{ color: "var(--muted-foreground)" }}>
                  {item.criterion}
                </span>
                <div className="flex-1 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className="flex-1 h-1.5 rounded-sm"
                      style={{
                        background: s <= item.score ? itemLevel.color : "var(--border)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs w-28 text-right" style={{ color: "var(--muted-foreground)" }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
