"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Settings, TrendingUp, Bookmark, AlertCircle, ChevronRight } from "lucide-react";
import { LIVE_OPPORTUNITIES } from "../../data/mock";
import { getRiskLevel, RISK_LEVELS } from "../../components/RiskScale";

const STORAGE_KEY = "kryptondo_registration";

interface Profile {
  name: string;
  email: string;
  riskScore: number;
  sectors: string[];
  budget: number;
  horizon: number;
}

const BUDGET_LABELS = ["< €500", "€500–€2k", "€2k–€10k", "€10k+"];
const HORIZON_LABELS = ["< 1 year", "1–3 years", "3–5 years", "5+ years"];

function matchScore(profile: Profile, opp: typeof LIVE_OPPORTUNITIES[0]): number {
  const riskDiff = Math.abs(profile.riskScore - opp.riskScore);
  const riskPct = Math.max(0, 1 - riskDiff * 0.22) * 65;
  const sectorMatch = profile.sectors.length === 0 || profile.sectors.some((s) =>
    opp.sector.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(opp.sector.toLowerCase())
  );
  const sectorPct = sectorMatch ? 35 : 15;
  return Math.round(riskPct + sectorPct);
}

function MatchBadge({ score }: { score: number }) {
  const color = score >= 85 ? "#4A7C59" : score >= 65 ? "#B8954F" : "#C4663A";
  const bg = score >= 85 ? "rgba(74,124,89,0.12)" : score >= 65 ? "rgba(184,149,79,0.12)" : "rgba(196,102,58,0.12)";
  return (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: bg, color }}>
      {score}% match
    </span>
  );
}

function InvestCard({ opp, score }: { opp: typeof LIVE_OPPORTUNITIES[0]; score: number }) {
  const pct = Math.round((opp.raisedAmount / opp.raisingTarget) * 100);
  const rLevel = getRiskLevel(opp.riskScore);
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Link href={`/invest/${opp.id}`} style={{ textDecoration: "none" }}>
        <div
          className="card card-hover p-5 h-full"
          style={{ cursor: "pointer" }}
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {opp.name}
              </p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{opp.sector} · {opp.city}</p>
            </div>
            <MatchBadge score={score} />
          </div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
            {opp.tagline}
          </p>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: rLevel.bg, color: rLevel.color }}
            >
              Risk {opp.riskScore}/5 · {rLevel.label}
            </span>
            <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              {opp.equityAvailable}% equity · {opp.daysLeft}d left
            </span>
          </div>
          {/* Progress */}
          <div>
            <div className="flex justify-between mb-1" style={{ fontSize: "0.625rem" }}>
              <span style={{ color: "var(--muted-foreground)" }}>€{opp.raisedAmount.toLocaleString()} raised</span>
              <span className="font-semibold" style={{ color: "var(--accent)" }}>{pct}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function DashboardClient() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setProfile(JSON.parse(saved));
    } catch {}
  }, []);

  if (!mounted) return null;

  // No profile — prompt registration
  if (!profile || !profile.name) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center" style={{ background: "var(--background)" }}>
        <div className="max-w-md mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: "var(--surface)", color: "var(--accent)" }}
          >
            <User size={28} />
          </div>
          <h1 className="text-display-sm font-bold mb-3" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
            No profile found
          </h1>
          <p className="text-sm mb-8 leading-body" style={{ color: "var(--muted-foreground)" }}>
            Create your investor profile to see personalised investment matches.
          </p>
          <Link href="/register" className="btn-primary">
            <span>Create Profile →</span>
          </Link>
        </div>
      </div>
    );
  }

  const riskLevel = getRiskLevel(profile.riskScore);
  const firstName = profile.name.split(" ")[0];

  // Compute matches and sort
  const ranked = LIVE_OPPORTUNITIES
    .map((opp) => ({ opp, score: matchScore(profile, opp) }))
    .sort((a, b) => b.score - a.score);

  const topMatch = ranked[0];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--background)" }}>
      <div className="container-lg mx-auto">

        {/* Welcome header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Dashboard</span>
            <h1 className="text-display-sm font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
              Welcome back, {firstName}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
              style={{ background: riskLevel.bg, color: riskLevel.color }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: riskLevel.color }} />
              {riskLevel.label} Investor
            </span>
            <Link
              href="/register"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:opacity-80"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
            >
              <Settings size={14} /> Edit Profile
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          {/* Main content */}
          <div>
            {/* Top match highlight */}
            {topMatch && topMatch.score >= 80 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl p-6 mb-8"
                style={{ background: "linear-gradient(135deg, rgba(196,102,58,0.08) 0%, rgba(184,149,79,0.05) 100%)", border: "1px solid rgba(196,102,58,0.2)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} style={{ color: "var(--accent)" }} />
                  <span className="text-xs font-semibold uppercase" style={{ color: "var(--accent)", letterSpacing: "0.08em" }}>
                    Your Top Match
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-bold mb-1" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                      {topMatch.opp.name}
                    </h2>
                    <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>{topMatch.opp.tagline}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <MatchBadge score={topMatch.score} />
                      <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                        {topMatch.opp.equityAvailable}% equity · €{topMatch.opp.minInvestment} min
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/invest/${topMatch.opp.id}`}
                    className="btn-primary shrink-0"
                    style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem", whiteSpace: "nowrap" }}
                  >
                    <span>View →</span>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* All matches */}
            <div className="mb-6">
              <h2 className="font-bold mb-4" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Matched Investments ({ranked.length})
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {ranked.map(({ opp, score }) => (
                  <InvestCard key={opp.id} opp={opp} score={score} />
                ))}
              </div>
            </div>

            {/* Portfolio — empty state */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "var(--surface-2)", color: "var(--muted-foreground)" }}>
                <Bookmark size={22} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Your Portfolio
              </h3>
              <p className="text-sm mb-5 max-w-xs mx-auto leading-body" style={{ color: "var(--muted-foreground)" }}>
                You haven&apos;t invested yet. Start with your top match!
              </p>
              {topMatch && (
                <Link
                  href={`/invest/${topMatch.opp.id}`}
                  className="btn-primary"
                  style={{ padding: "0.625rem 1.5rem", fontSize: "0.875rem" }}
                >
                  <span>Invest in {topMatch.opp.name} →</span>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar — Profile Summary */}
          <div className="space-y-4">
            {/* Profile card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base"
                  style={{
                    background: riskLevel.bg,
                    color: riskLevel.color,
                    fontFamily: "var(--font-serif), Georgia, serif",
                  }}
                >
                  {firstName[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{profile.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{profile.email}</p>
                </div>
              </div>

              <div className="space-y-3.5">
                <div>
                  <p className="text-[10px] font-semibold uppercase mb-1.5" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                    Risk Profile
                  </p>
                  <div className="flex gap-0.5 mb-1">
                    {RISK_LEVELS.map((l) => (
                      <div
                        key={l.score}
                        className="flex-1 h-1.5 rounded-sm"
                        style={{ background: l.color, opacity: l.score <= profile.riskScore ? 1 : 0.18 }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: riskLevel.color }}>
                    {riskLevel.label} ({profile.riskScore}/5)
                  </p>
                </div>

                {profile.sectors.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase mb-1.5" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                      Preferred Sectors
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {profile.sectors.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {profile.budget >= 0 && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>Budget Range</p>
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{BUDGET_LABELS[profile.budget]}</p>
                  </div>
                )}

                {profile.horizon >= 0 && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>Investment Horizon</p>
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{HORIZON_LABELS[profile.horizon]}</p>
                  </div>
                )}
              </div>

              <Link
                href="/register"
                className="flex items-center justify-between w-full mt-5 pt-4 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ borderTop: "1px solid var(--border)", color: "var(--muted-foreground)" }}
              >
                Edit Profile <ChevronRight size={14} />
              </Link>
            </div>

            {/* Disclaimer */}
            <div
              className="rounded-xl p-4 flex gap-3"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
            >
              <AlertCircle size={16} className="shrink-0 mt-0.5" style={{ color: "var(--muted-foreground)" }} />
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Investments are illiquid. Capital is at risk. Past returns do not guarantee future performance. EU-regulated · Malta SPV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
