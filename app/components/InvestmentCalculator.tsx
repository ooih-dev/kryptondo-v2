"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Coins, Percent, CalendarDays } from "lucide-react";
import type { InvestmentOpportunity } from "../data/mock";

function parseYieldMidpoint(yieldStr: string): number {
  // e.g. "6–8%" → 0.07, "4–6%" → 0.05
  const nums = yieldStr.replace(/%/g, "").split(/[–\-–]/).map(Number).filter((n) => !isNaN(n));
  if (nums.length === 0) return 0.06;
  return (nums.reduce((a, b) => a + b, 0) / nums.length) / 100;
}

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: {
  value: number; prefix?: string; suffix?: string; decimals?: number;
}) {
  const formatted = value.toLocaleString("en-EU", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={formatted}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18 }}
        className="inline-block"
      >
        {prefix}{formatted}{suffix}
      </motion.span>
    </AnimatePresence>
  );
}

interface Props {
  opp: InvestmentOpportunity;
}

export default function InvestmentCalculator({ opp }: Props) {
  const minInvest = opp.minInvestment;
  const maxInvest = 50000;
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const pricePerToken = opp.tokenDetails.pricePerToken;
  const totalSupply = opp.tokenDetails.totalSupply;
  const yieldRate = useMemo(() => parseYieldMidpoint(opp.dividends.expectedYield), [opp.dividends.expectedYield]);
  const growthRate = 0.05; // 5% annual growth assumption

  const calc = useMemo(() => {
    const tokens = amount / pricePerToken;
    const ownershipPct = (tokens / totalSupply) * 100;
    const annualDividend = amount * yieldRate;
    const monthlyDividend = annualDividend / 12;
    const proj1 = amount * Math.pow(1 + growthRate, 1) + annualDividend * 1;
    const proj3 = amount * Math.pow(1 + growthRate, 3) + annualDividend * 3;
    const proj5 = amount * Math.pow(1 + growthRate, 5) + annualDividend * 5;
    return { tokens, ownershipPct, annualDividend, monthlyDividend, proj1, proj3, proj5 };
  }, [amount, pricePerToken, totalSupply, yieldRate]);

  function handleSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    setAmount(v);
    setInputVal(v.toString());
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setInputVal(raw);
    const n = Number(raw);
    if (!isNaN(n) && n >= minInvest && n <= maxInvest) setAmount(n);
  }

  function handleInputBlur() {
    const n = Number(inputVal);
    const clamped = Math.max(minInvest, Math.min(maxInvest, isNaN(n) ? minInvest : n));
    setAmount(clamped);
    setInputVal(clamped.toString());
  }

  const metrics = [
    { icon: <Coins size={16} />, label: "Tokens received", value: calc.tokens, suffix: ` ${opp.tokenDetails.symbol}`, decimals: 1 },
    { icon: <Percent size={16} />, label: "Your ownership", value: calc.ownershipPct, suffix: "%", decimals: 3 },
    { icon: <TrendingUp size={16} />, label: "Annual dividends", prefix: "€", value: calc.annualDividend, decimals: 0 },
    { icon: <CalendarDays size={16} />, label: "Monthly income", prefix: "€", value: calc.monthlyDividend, decimals: 0 },
  ];

  return (
    <section
      id="invest"
      className="px-4 py-10"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="container-lg mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
            >
              <Calculator size={20} />
            </div>
            <div>
              <h2
                className="font-bold"
                style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Investment Calculator
              </h2>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                Based on {opp.dividends.expectedYield} expected yield · {Math.round(growthRate * 100)}% growth assumption
              </p>
            </div>
          </div>

          {/* Card */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}
          >
            {/* Slider row */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  Investment amount
                </label>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>€</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={handleInput}
                    onBlur={handleInputBlur}
                    className="text-right font-bold rounded-lg px-3 py-1.5 w-28"
                    style={{
                      fontSize: "1.125rem",
                      color: "var(--accent)",
                      background: "var(--surface)",
                      border: "1.5px solid var(--accent)",
                      outline: "none",
                      fontFamily: "var(--font-serif), Georgia, serif",
                    }}
                  />
                </div>
              </div>

              {/* Custom slider */}
              <div className="relative">
                <input
                  type="range"
                  min={minInvest}
                  max={maxInvest}
                  step={50}
                  value={amount}
                  onChange={handleSlider}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) 100%)`,
                    accentColor: "var(--accent)",
                  }}
                />
                <div className="flex justify-between mt-1.5">
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{minInvest}</span>
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{maxInvest.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Quick amounts */}
            <div className="flex flex-wrap gap-2 mb-7">
              {[100, 500, 1000, 2500, 5000, 10000].map((v) => (
                <button
                  key={v}
                  onClick={() => { setAmount(v); setInputVal(v.toString()); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
                  style={{
                    background: amount === v ? "var(--accent)" : "var(--surface)",
                    color: amount === v ? "#fff" : "var(--muted-foreground)",
                    border: `1px solid ${amount === v ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  €{v.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2 mb-2" style={{ color: "var(--accent)" }}>
                    {m.icon}
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
                      {m.label}
                    </span>
                  </div>
                  <p
                    className="font-bold"
                    style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  </p>
                </div>
              ))}
            </div>

            {/* Projections */}
            <div
              className="rounded-xl p-4 mb-7"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                Projected total value (investment + dividends)
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "1 Year", val: calc.proj1 },
                  { label: "3 Years", val: calc.proj3 },
                  { label: "5 Years", val: calc.proj5 },
                ].map((p) => (
                  <div key={p.label}>
                    <p
                      className="font-extrabold mb-0.5"
                      style={{ fontSize: "1.125rem", color: "var(--accent)", fontFamily: "var(--font-serif), Georgia, serif" }}
                    >
                      <AnimatedNumber value={p.val} prefix="€" decimals={0} />
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-3 text-center" style={{ color: "var(--muted-foreground)", opacity: 0.7 }}>
                Illustrative projections. Past performance does not guarantee future results.
              </p>
            </div>

            {/* CTA */}
            <Link
              href={`/register?investment=${opp.id}&amount=${amount}`}
              className="btn-primary w-full text-center block"
              style={{ padding: "1rem 1.5rem", fontSize: "1rem" }}
            >
              <span>Invest €{amount.toLocaleString()} in {opp.name} →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
