"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Coins, Percent, TrendingUp, Sun } from "lucide-react";
import type { SolarProject } from "../data/mock";

const SOLAR_ACCENT = "#F59E0B";

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

export default function SolarCalculator({ project }: { project: SolarProject }) {
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const minInvest = project.tokenPrice;
  const maxInvest = 20000;
  const yieldRate = project.investorYield / 100;

  const calc = useMemo(() => {
    const tokens = Math.floor(amount / project.tokenPrice);
    const ownershipPct = (tokens / project.totalTokens) * 100;
    const annualDividend = amount * yieldRate;
    const monthlyDividend = annualDividend / 12;
    const yourKWh = Math.round(project.annualProductionKWh * (ownershipPct / 100));
    const feedInRevenue = Math.round(yourKWh * project.feedInTariffCentsKWh / 100);
    const proj1 = amount + annualDividend;
    const proj3 = amount + annualDividend * 3;
    const proj5 = amount + annualDividend * 5;
    return { tokens, ownershipPct, annualDividend, monthlyDividend, yourKWh, feedInRevenue, proj1, proj3, proj5 };
  }, [amount, project, yieldRate]);

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
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `rgba(245,158,11,0.12)`, color: SOLAR_ACCENT }}>
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="font-bold" style={{ fontSize: "1.125rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Investment Calculator
              </h2>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {project.investorYield}% estimated yield · €{project.tokenPrice}/token · {project.name}
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
                    style={{ fontSize: "1.125rem", color: SOLAR_ACCENT, background: "var(--surface)", border: `1.5px solid ${SOLAR_ACCENT}`, outline: "none", fontFamily: "var(--font-serif), Georgia, serif" }} />
                </div>
              </div>
              <input type="range" min={minInvest} max={maxInvest} step={project.tokenPrice} value={amount} onChange={handleSlider}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, ${SOLAR_ACCENT} 0%, ${SOLAR_ACCENT} ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) ${((amount - minInvest) / (maxInvest - minInvest)) * 100}%, var(--border) 100%)`, accentColor: SOLAR_ACCENT }} />
              <div className="flex justify-between mt-1.5">
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{minInvest}</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>€{maxInvest.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-7">
              {[project.tokenPrice, 500, 1000, 2000, 5000, 10000].filter((v, i, arr) => arr.indexOf(v) === i).map((v) => (
                <button key={v} onClick={() => { setAmount(v); setInputVal(v.toString()); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
                  style={{ background: amount === v ? SOLAR_ACCENT : "var(--surface)", color: amount === v ? "#fff" : "var(--muted-foreground)", border: `1px solid ${amount === v ? SOLAR_ACCENT : "var(--border)"}` }}>
                  €{v.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: <Coins size={15} />, label: "Tokens received", value: calc.tokens, suffix: " tokens" },
                { icon: <Percent size={15} />, label: "Your ownership", value: calc.ownershipPct, suffix: "%", decimals: 3 },
                { icon: <TrendingUp size={15} />, label: "Monthly dividends", value: calc.monthlyDividend, prefix: "€", decimals: 0 },
                { icon: <Sun size={15} />, label: "Your annual kWh", value: calc.yourKWh, suffix: " kWh" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2" style={{ color: SOLAR_ACCENT }}>
                    {m.icon}
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>{m.label}</span>
                  </div>
                  <p className="font-bold" style={{ fontSize: "1.25rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                    <AnimatedNum value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4 mb-7" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.12)" }}>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: SOLAR_ACCENT, letterSpacing: "0.08em" }}>Energy production model</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{project.capacityKWp}kWp</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>System capacity</p>
                </div>
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{(project.annualProductionKWh / 1000).toFixed(0)}MWh/yr</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Annual production</p>
                </div>
                <div>
                  <p className="font-extrabold mb-0.5" style={{ fontSize: "0.9375rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>{project.feedInTariffCentsKWh}ct/kWh</p>
                  <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>Feed-in tariff</p>
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
                    <p className="font-extrabold mb-0.5" style={{ fontSize: "1.125rem", color: SOLAR_ACCENT, fontFamily: "var(--font-serif), Georgia, serif" }}>
                      <AnimatedNum value={p.v} prefix="€" />
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.l}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-3 text-center" style={{ color: "var(--muted-foreground)", opacity: 0.7 }}>Illustrative only. Capital at risk.</p>
            </div>

            <Link href={`/register?solar=${project.id}&amount=${amount}`} className="btn-primary w-full text-center block"
              style={{ padding: "1rem 1.5rem", fontSize: "1rem", background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT }}>
              <span>Invest €{amount.toLocaleString()} in {project.name} →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
