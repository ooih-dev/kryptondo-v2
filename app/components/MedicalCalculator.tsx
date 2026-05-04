"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Coins, Percent, TrendingUp, CalendarDays, Stethoscope } from "lucide-react";
import type { MedicalSPV } from "../data/mock";

const MEDICAL_ACCENT = "#4A7C59";
const MEDICAL_GOLD = "#B8954F";

function parseYieldMid(yieldStr: string): number {
  const nums = yieldStr.replace(/%/g, "").split(/[–\-]/).map(Number).filter((n) => !isNaN(n));
  if (nums.length === 0) return 0.12;
  return (nums.reduce((a, b) => a + b, 0) / nums.length) / 100;
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
  spv: MedicalSPV;
  model: "placement" | "staffing";
}

export default function MedicalCalculator({ spv, model }: Props) {
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const minInvest = spv.tokenPrice;
  const maxInvest = 25000;
  const isPlacement = model === "placement";
  const accentColor = isPlacement ? MEDICAL_ACCENT : MEDICAL_GOLD;

  const yieldStr = isPlacement ? spv.placementYield : spv.staffingYield;
  const yieldRate = useMemo(() => parseYieldMid(yieldStr), [yieldStr]);

  const calc = useMemo(() => {
    const tokens = Math.floor(amount / spv.tokenPrice);
    const ownershipPct = (tokens / spv.totalTokens) * 100;
    const annualDividend = amount * yieldRate;
    const monthlyDividend = annualDividend / 12;
    const placementsFunded = Math.max(0, Math.round((amount / (spv.avgPlacementFee * spv.totalTokens)) * spv.placementsPerYear));
    const revenuePerToken = (spv.avgPlacementFee * spv.placementsPerYear) / spv.totalTokens;
    const proj1 = amount + annualDividend;
    const proj3 = amount + annualDividend * 3;
    const proj5 = amount + annualDividend * 5;
    return { tokens, ownershipPct, annualDividend, monthlyDividend, placementsFunded, revenuePerToken, proj1, proj3, proj5 };
  }, [amount, spv, yieldRate]);

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
    isPlacement
      ? { icon: <Stethoscope size={15} />, label: "Placements funded", value: calc.placementsFunded, suffix: " placements" }
      : { icon: <CalendarDays size={15} />, label: "Monthly income", value: calc.monthlyDividend, prefix: "€", decimals: 0 },
    { icon: <TrendingUp size={15} />, label: isPlacement ? "Annual return" : "Annual yield", value: yieldRate * 100, suffix: "%", decimals: 1 },
  ];

  return (
    <section id="invest" className="px-4 py-10" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="container-lg mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${accentColor}18`, color: accentColor }}>
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="font-bold" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                {isPlacement ? "Placement Fund Calculator" : "Staffing Contract Calculator"}
              </h2>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {yieldStr} estimated yield · €{spv.tokenPrice}/token · {spv.name}
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
                    style={{ fontSize: "1.125rem", color: accentColor, background: "var(--surface)", border: `1.5px solid ${accentColor}`, outline: "none", fontFamily: "var(--font-serif), Georgia, serif" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={minInvest}
                max={maxInvest}
                step={spv.tokenPrice}
                value={amount}
                onChange={handleSlider}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) 100%)`,
                  accentColor,
                }}
              />
              <div className="flex justify-between mt-1.5">
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{minInvest}</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{maxInvest.toLocaleString()}</span>
              </div>
            </div>

            {/* Quick amounts */}
            <div className="flex flex-wrap gap-2 mb-7">
              {[spv.tokenPrice, 500, 1000, 2500, 5000, 10000].filter((v, i, arr) => arr.indexOf(v) === i).map((v) => (
                <button key={v} onClick={() => { setAmount(v); setInputVal(v.toString()); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
                  style={{ background: amount === v ? accentColor : "var(--surface)", color: amount === v ? "#fff" : "var(--muted-foreground)", border: `1px solid ${amount === v ? accentColor : "var(--border)"}` }}
                >
                  €{v.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2" style={{ color: accentColor }}>
                    {m.icon}
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>{m.label}</span>
                  </div>
                  <p className="font-bold" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    <AnimatedNum value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue context */}
            {isPlacement && (
              <div className="rounded-xl p-4 mb-7" style={{ background: "rgba(74,124,89,0.06)", border: "1px solid rgba(74,124,89,0.15)" }}>
                <p className="text-xs font-semibold uppercase mb-2" style={{ color: MEDICAL_ACCENT, letterSpacing: "0.08em" }}>Placement revenue model</p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1rem", color: MEDICAL_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      €{spv.avgPlacementFee.toLocaleString()}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Avg placement fee</p>
                  </div>
                  <div>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1rem", color: MEDICAL_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      {spv.placementsPerYear}/yr
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Target placements</p>
                  </div>
                </div>
              </div>
            )}

            {!isPlacement && (
              <div className="rounded-xl p-4 mb-7" style={{ background: "rgba(184,149,79,0.06)", border: "1px solid rgba(184,149,79,0.15)" }}>
                <p className="text-xs font-semibold uppercase mb-2" style={{ color: MEDICAL_GOLD, letterSpacing: "0.08em" }}>Staffing contract revenue</p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1rem", color: MEDICAL_GOLD, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      €{spv.contractRevenueMonthly.toLocaleString()}/mo
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>SPV contract revenue</p>
                  </div>
                  <div>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1rem", color: MEDICAL_GOLD, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      €{Math.round((spv.contractRevenueMonthly / spv.totalTokens) * Math.floor(amount / spv.tokenPrice))}/mo
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Your estimated share</p>
                  </div>
                </div>
              </div>
            )}

            {/* Projections */}
            <div className="rounded-xl p-4 mb-7" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                Projected cumulative returns (investment + dividends)
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[{ l: "1 Year", v: calc.proj1 }, { l: "3 Years", v: calc.proj3 }, { l: "5 Years", v: calc.proj5 }].map((p) => (
                  <div key={p.l}>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1.125rem", color: accentColor, fontFamily: "var(--font-serif), Georgia, serif" }}>
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
              href={`/register?spv=${spv.id}&model=${model}&amount=${amount}`}
              className="btn-primary w-full text-center block"
              style={{ padding: "1rem 1.5rem", fontSize: "1rem", background: accentColor, borderColor: accentColor }}
            >
              <span>{isPlacement ? `Invest €${amount.toLocaleString()} in Placement Fund →` : `Invest €${amount.toLocaleString()} in Staffing Contracts →`}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
