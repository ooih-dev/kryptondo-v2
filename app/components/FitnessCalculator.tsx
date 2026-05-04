"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Coins, Percent, TrendingUp, Star } from "lucide-react";
import type { FitnessStudio } from "../data/mock";

const FITNESS_ACCENT = "#8B5CF6";
const FITNESS_GOLD = "#B8954F";

interface PerkTier {
  name: string;
  minAmount: number;
  color: string;
  highlight: string;
  nextTierAmount: number | null;
  nextTierName: string | null;
}

function getPerkTier(amount: number): PerkTier {
  if (amount >= 5000) return { name: "Platinum", minAmount: 5000, color: FITNESS_ACCENT, highlight: "Free membership + unlimited PT + voting rights + exclusive events", nextTierAmount: null, nextTierName: null };
  if (amount >= 2000) return { name: "Gold", minAmount: 2000, color: FITNESS_GOLD, highlight: "Free membership + unlimited PT + VIP lounge access", nextTierAmount: 5000, nextTierName: "Platinum" };
  if (amount >= 500) return { name: "Silver", minAmount: 500, color: "#8A8A9A", highlight: "Free monthly membership + 2 PT sessions/month", nextTierAmount: 2000, nextTierName: "Gold" };
  return { name: "Bronze", minAmount: 100, color: "#C4663A", highlight: "20% off membership + priority class booking", nextTierAmount: 500, nextTierName: "Silver" };
}

function AnimatedNum({ value, prefix = "", suffix = "", decimals = 0 }: {
  value: number; prefix?: string; suffix?: string; decimals?: number;
}) {
  const formatted = value.toLocaleString("en-EU", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={formatted}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.15 }}
        className="inline-block"
      >
        {prefix}{formatted}{suffix}
      </motion.span>
    </AnimatePresence>
  );
}

interface Props {
  studio: FitnessStudio;
}

export default function FitnessCalculator({ studio }: Props) {
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const minInvest = studio.tokenPrice;
  const maxInvest = 10000;
  const yieldRate = studio.estimatedYield / 100;

  const calc = useMemo(() => {
    const tokens = Math.floor(amount / studio.tokenPrice);
    const ownershipPct = (tokens / studio.totalTokens) * 100;
    const annualDividend = amount * yieldRate;
    const monthlyDividend = annualDividend / 12;
    const proj1 = amount + annualDividend;
    const proj3 = amount + annualDividend * 3;
    const proj5 = amount + annualDividend * 5;
    return { tokens, ownershipPct, annualDividend, monthlyDividend, proj1, proj3, proj5 };
  }, [amount, studio, yieldRate]);

  const tier = useMemo(() => getPerkTier(amount), [amount]);

  function handleSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    setAmount(v);
    setInputVal(v.toString());
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setInputVal(raw);
    const n = Number(raw);
    if (!isNaN(n) && n >= minInvest && n <= maxInvest) setAmount(n);
  }

  function handleBlur() {
    const n = Number(inputVal);
    const clamped = Math.max(minInvest, Math.min(maxInvest, isNaN(n) ? minInvest : n));
    setAmount(clamped);
    setInputVal(clamped.toString());
  }

  const metrics = [
    { icon: <Coins size={15} />, label: "Tokens received", value: calc.tokens, suffix: " tokens" },
    { icon: <Percent size={15} />, label: "Your ownership", value: calc.ownershipPct, suffix: "%", decimals: 3 },
    { icon: <TrendingUp size={15} />, label: "Monthly dividends", value: calc.monthlyDividend, prefix: "€", decimals: 0 },
    { icon: <Star size={15} />, label: "Perk tier", value: 0, suffix: "" },
  ];

  return (
    <section id="invest" className="px-4 py-10" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="container-lg mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `rgba(139,92,246,0.12)`, color: FITNESS_ACCENT }}>
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="font-bold" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Investment Calculator
              </h2>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {studio.estimatedYield}% estimated yield · €{studio.tokenPrice}/token · {studio.name}
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 md:p-8" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
            {/* Amount input */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Investment amount</label>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>€</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="text-right font-bold rounded-lg px-3 py-1.5 w-28"
                    style={{ fontSize: "1.125rem", color: FITNESS_ACCENT, background: "var(--surface)", border: `1.5px solid ${FITNESS_ACCENT}`, outline: "none", fontFamily: "var(--font-serif), Georgia, serif" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={minInvest}
                max={maxInvest}
                step={studio.tokenPrice}
                value={amount}
                onChange={handleSlider}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${FITNESS_ACCENT} 0%, ${FITNESS_ACCENT} ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) 100%)`,
                  accentColor: FITNESS_ACCENT,
                }}
              />
              <div className="flex justify-between mt-1.5">
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{minInvest}</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{maxInvest.toLocaleString()}</span>
              </div>
            </div>

            {/* Quick amounts */}
            <div className="flex flex-wrap gap-2 mb-7">
              {[studio.tokenPrice, 500, 1000, 2000, 5000, 10000].filter((v, i, arr) => arr.indexOf(v) === i).map((v) => (
                <button key={v} onClick={() => { setAmount(v); setInputVal(v.toString()); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
                  style={{ background: amount === v ? FITNESS_ACCENT : "var(--surface)", color: amount === v ? "#fff" : "var(--muted-foreground)", border: `1px solid ${amount === v ? FITNESS_ACCENT : "var(--border)"}` }}
                >
                  €{v.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Metrics 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {metrics.slice(0, 3).map((m) => (
                <div key={m.label} className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2" style={{ color: FITNESS_ACCENT }}>
                    {m.icon}
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>{m.label}</span>
                  </div>
                  <p className="font-bold" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    <AnimatedNum value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  </p>
                </div>
              ))}
              {/* Perk tier card */}
              <div className="rounded-xl p-4" style={{ background: `${tier.color}10`, border: `1px solid ${tier.color}30` }}>
                <div className="flex items-center gap-2 mb-2" style={{ color: tier.color }}>
                  <Star size={15} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>Perk tier</span>
                </div>
                <p className="font-bold" style={{ fontSize: "1.25rem", color: tier.color, fontFamily: "var(--font-serif), Georgia, serif" }}>
                  {tier.name}
                </p>
              </div>
            </div>

            {/* Perk tier detail */}
            <div className="rounded-xl p-4 mb-7" style={{ background: `${tier.color}08`, border: `1px solid ${tier.color}25` }}>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: tier.color, letterSpacing: "0.08em" }}>{tier.name} perks unlocked</p>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{tier.highlight}</p>
              {tier.nextTierAmount && (
                <p className="text-xs mt-2 font-medium" style={{ color: tier.color, opacity: 0.8 }}>
                  Invest €{(tier.nextTierAmount - amount).toLocaleString()} more to unlock {tier.nextTierName} →
                </p>
              )}
            </div>

            {/* Studio stats context */}
            <div className="rounded-xl p-4 mb-7" style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.12)" }}>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: FITNESS_ACCENT, letterSpacing: "0.08em" }}>Studio revenue model</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: FITNESS_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>€{studio.monthlyRevenue.toLocaleString()}/mo</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Monthly revenue</p>
                </div>
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: FITNESS_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{studio.members}</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Members</p>
                </div>
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: FITNESS_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>€{studio.avgMemberFee}/mo</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Avg member fee</p>
                </div>
              </div>
            </div>

            {/* Projections */}
            <div className="rounded-xl p-4 mb-7" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                Projected cumulative returns (investment + dividends)
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[{ l: "1 Year", v: calc.proj1 }, { l: "3 Years", v: calc.proj3 }, { l: "5 Years", v: calc.proj5 }].map((p) => (
                  <div key={p.l}>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1.125rem", color: FITNESS_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      <AnimatedNum value={p.v} prefix="€" />
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.l}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-3 text-center" style={{ color: "var(--muted-foreground)", opacity: 0.7 }}>
                Illustrative only. Capital at risk.
              </p>
            </div>

            <Link
              href={`/register?studio=${studio.id}&amount=${amount}`}
              className="btn-primary w-full text-center block"
              style={{ padding: "1rem 1.5rem", fontSize: "1rem", background: FITNESS_ACCENT, borderColor: FITNESS_ACCENT }}
            >
              <span>Invest €{amount.toLocaleString()} &amp; Get {tier.name} Perks →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
