"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Coins, Percent, TrendingUp, CalendarDays, Car } from "lucide-react";
import type { CarListing } from "../data/mock";

function parseYieldMid(yieldStr: string): number {
  const nums = yieldStr.replace(/%/g, "").split(/[–\-]/).map(Number).filter((n) => !isNaN(n));
  if (nums.length === 0) return 0.05;
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
  car: CarListing;
  model: "ownership" | "rental";
}

export default function CarCalculator({ car, model }: Props) {
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");

  const minInvest = car.tokenPrice;
  const maxInvest = 50000;

  const yieldStr = model === "ownership" ? car.ownershipYield : car.rentalYield;
  const yieldRate = useMemo(() => parseYieldMid(yieldStr), [yieldStr]);
  const growthRate = 0.04;

  const calc = useMemo(() => {
    const tokens = Math.floor(amount / car.tokenPrice);
    const ownershipPct = (tokens / car.totalTokens) * 100;
    const annualDividend = amount * yieldRate;
    const monthlyDividend = annualDividend / 12;
    // Co-ownership: also show driving days
    const drivingDays = model === "ownership"
      ? Math.max(1, Math.round((tokens / car.totalTokens) * 365 * (1 - car.occupancyPct / 100)))
      : 0;
    const proj1 = amount * Math.pow(1 + growthRate, 1) + annualDividend * 1;
    const proj3 = amount * Math.pow(1 + growthRate, 3) + annualDividend * 3;
    const proj5 = amount * Math.pow(1 + growthRate, 5) + annualDividend * 5;
    return { tokens, ownershipPct, annualDividend, monthlyDividend, drivingDays, proj1, proj3, proj5 };
  }, [amount, car, yieldRate, model]);

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

  const isOwnership = model === "ownership";
  const accentColor = isOwnership ? "var(--accent)" : "var(--gold, #B8954F)";

  const metrics = [
    { icon: <Coins size={15} />, label: "Tokens received", value: calc.tokens, suffix: " tokens" },
    { icon: <Percent size={15} />, label: "Your ownership", value: calc.ownershipPct, suffix: "%", decimals: 3 },
    { icon: <TrendingUp size={15} />, label: "Monthly income", value: calc.monthlyDividend, prefix: "€", decimals: 0 },
    isOwnership
      ? { icon: <Car size={15} />, label: "Driving days/year", value: calc.drivingDays, suffix: " days" }
      : { icon: <CalendarDays size={15} />, label: "Annual yield", value: yieldRate * 100, suffix: "%", decimals: 1 },
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
                {isOwnership ? "Co-Ownership Calculator" : "Rental Investment Calculator"}
              </h2>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {yieldStr} estimated yield · €{car.tokenPrice}/token · {car.make} {car.model}
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
                step={car.tokenPrice}
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
              {[car.tokenPrice, 500, 1000, 2500, 5000, 10000].filter((v, i, arr) => arr.indexOf(v) === i).map((v) => (
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

            {/* Projections */}
            <div className="rounded-xl p-4 mb-7" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                Projected value (investment + dividends + {Math.round(growthRate * 100)}% asset growth)
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
              href={`/register?car=${car.id}&model=${model}&amount=${amount}`}
              className="btn-primary w-full text-center block"
              style={{ padding: "1rem 1.5rem", fontSize: "1rem", background: isOwnership ? "var(--accent)" : "var(--gold, #B8954F)" }}
            >
              <span>{isOwnership ? `Co-Own ${car.make} ${car.model} for €${amount.toLocaleString()} →` : `Invest €${amount.toLocaleString()} in ${car.make} ${car.model} →`}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
