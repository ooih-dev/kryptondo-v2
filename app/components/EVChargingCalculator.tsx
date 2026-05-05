"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Coins, Percent, TrendingUp, Zap } from "lucide-react";
import type { EVChargingStation } from "../data/mock";

const EV_ACCENT = "#0EA5E9";

function AnimatedNum({ value, prefix = "", suffix = "", decimals = 0 }: {
  value: number; prefix?: string; suffix?: string; decimals?: number;
}) {
  const formatted = value.toLocaleString("en-EU", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <AnimatePresence mode="wait">
      <motion.span key={formatted} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }} className="inline-block">
        {prefix}{formatted}{suffix}
      </motion.span>
    </AnimatePresence>
  );
}

export default function EVChargingCalculator({ station }: { station: EVChargingStation }) {
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const minInvest = station.tokenPrice;
  const maxInvest = 20000;
  const yieldRate = station.estimatedYield / 100;

  const calc = useMemo(() => {
    const tokens = Math.floor(amount / station.tokenPrice);
    const ownershipPct = (tokens / station.totalTokens) * 100;
    const annualDividend = amount * yieldRate;
    const monthlyDividend = annualDividend / 12;
    const totalStationRevenue = station.monthlyRevenuePerCharger * station.chargerCount;
    const yourMonthlyShare = totalStationRevenue * (ownershipPct / 100);
    const proj1 = amount + annualDividend;
    const proj3 = amount + annualDividend * 3;
    const proj5 = amount + annualDividend * 5;
    return { tokens, ownershipPct, annualDividend, monthlyDividend, totalStationRevenue, yourMonthlyShare, proj1, proj3, proj5 };
  }, [amount, station, yieldRate]);

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

  return (
    <section id="invest" className="px-4 py-10" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="container-lg mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `rgba(14,165,233,0.12)`, color: EV_ACCENT }}>
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="font-bold" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Investment Calculator
              </h2>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {station.estimatedYield}% estimated yield · €{station.tokenPrice}/token · {station.name}
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 md:p-8" style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Investment amount</label>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>€</span>
                  <input type="text" value={inputVal} onChange={handleInputChange} onBlur={handleBlur}
                    className="text-right font-bold rounded-lg px-3 py-1.5 w-28"
                    style={{ fontSize: "1.125rem", color: EV_ACCENT, background: "var(--surface)", border: `1.5px solid ${EV_ACCENT}`, outline: "none", fontFamily: "var(--font-serif), Georgia, serif" }} />
                </div>
              </div>
              <input type="range" min={minInvest} max={maxInvest} step={station.tokenPrice} value={amount} onChange={handleSlider}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, ${EV_ACCENT} 0%, ${EV_ACCENT} ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) 100%)`, accentColor: EV_ACCENT }} />
              <div className="flex justify-between mt-1.5">
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{minInvest}</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{maxInvest.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-7">
              {[station.tokenPrice, 500, 1000, 2000, 5000, 10000].filter((v, i, arr) => arr.indexOf(v) === i).map((v) => (
                <button key={v} onClick={() => { setAmount(v); setInputVal(v.toString()); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
                  style={{ background: amount === v ? EV_ACCENT : "var(--surface)", color: amount === v ? "#fff" : "var(--muted-foreground)", border: `1px solid ${amount === v ? EV_ACCENT : "var(--border)"}` }}>
                  €{v.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: <Coins size={15} />, label: "Tokens received", value: calc.tokens, suffix: " tokens" },
                { icon: <Percent size={15} />, label: "Your ownership", value: calc.ownershipPct, suffix: "%", decimals: 3 },
                { icon: <TrendingUp size={15} />, label: "Monthly dividends", value: calc.monthlyDividend, prefix: "€", decimals: 0 },
                { icon: <Zap size={15} />, label: "Annual return", value: calc.annualDividend, prefix: "€", decimals: 0 },
              ].map((m) => (
                <div key={m.label} className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2" style={{ color: EV_ACCENT }}>
                    {m.icon}
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>{m.label}</span>
                  </div>
                  <p className="font-bold" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    <AnimatedNum value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4 mb-7" style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.12)" }}>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: EV_ACCENT, letterSpacing: "0.08em" }}>Station revenue model</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: EV_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>€{calc.totalStationRevenue.toLocaleString()}/mo</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Total station revenue</p>
                </div>
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: EV_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{station.chargerCount}</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Chargers</p>
                </div>
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: EV_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{station.utilization}%</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Utilization</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 mb-7" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                Projected cumulative returns (investment + dividends)
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[{ l: "1 Year", v: calc.proj1 }, { l: "3 Years", v: calc.proj3 }, { l: "5 Years", v: calc.proj5 }].map((p) => (
                  <div key={p.l}>
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1.125rem", color: EV_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      <AnimatedNum value={p.v} prefix="€" />
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.l}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-3 text-center" style={{ color: "var(--muted-foreground)", opacity: 0.7 }}>Illustrative only. Capital at risk.</p>
            </div>

            <Link href={`/register?station=${station.id}&amount=${amount}`} className="btn-primary w-full text-center block"
              style={{ padding: "1rem 1.5rem", fontSize: "1rem", background: EV_ACCENT, borderColor: EV_ACCENT }}>
              <span>Invest €{amount.toLocaleString()} in {station.name} →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
