"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle, Eye, EyeOff, Building2 } from "lucide-react";
import { LIVE_OPPORTUNITIES } from "../../data/mock";
import { getRiskLevel, RISK_LEVELS } from "../../components/RiskScale";

// ── Shared answer types ───────────────────────────────────────────────────

interface RegData {
  email: string;
  password: string;
  name: string;
  country: string;
  phone: string;
  // risk
  familiarity: number;
  startupExp: boolean | null;
  lossReaction: number;
  portion: number;
  // preferences
  sectors: string[];
  budget: number;
  horizon: number;
}

const INIT: RegData = {
  email: "", password: "", name: "", country: "", phone: "",
  familiarity: -1, startupExp: null, lossReaction: -1, portion: -1,
  sectors: [], budget: -1, horizon: -1,
};

const STORAGE_KEY = "kryptondo_registration";

const EU_COUNTRIES = [
  "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Austria",
  "Portugal", "Poland", "Czech Republic", "Hungary", "Romania", "Bulgaria",
  "Croatia", "Slovakia", "Slovenia", "Lithuania", "Latvia", "Estonia",
  "Denmark", "Sweden", "Finland", "Ireland", "Luxembourg", "Malta",
  "United Kingdom", "Switzerland", "Norway", "United States", "Other",
];

const SECTORS = ["Hospitality", "Retail", "Tech", "Real Estate", "Creative/Media"];

function calcRiskScore(d: RegData): number {
  let score = 0;
  score += [0, 0.5, 1, 1.5][Math.max(0, d.familiarity)];
  score += d.startupExp ? 0.5 : 0;
  score += [0, 0.5, 1][Math.max(0, d.lossReaction)];
  score += [0, 0.5, 1, 1.5][Math.max(0, d.portion)];
  // budget → higher = more risk-tolerant
  score += [0, 0.5, 1, 1.5][Math.max(0, d.budget)];
  // horizon → longer = can take more risk
  score += [0, 0.5, 1, 1.5][Math.max(0, d.horizon)] * 0.5;
  // max ~7 → map to 1-5
  return Math.min(5, Math.max(1, Math.round(1 + (score / 7) * 4)));
}

// ── Sub-components ────────────────────────────────────────────────────────

function OptionBtn({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3.5 rounded-xl font-medium transition-all duration-200"
      style={{
        background: selected ? "var(--accent)" : "var(--surface)",
        color: selected ? "#fff" : "var(--foreground)",
        border: `1.5px solid ${selected ? "var(--accent)" : "var(--border)"}`,
        fontSize: "0.9rem",
      }}
    >
      {label}
    </button>
  );
}

function SectorChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
      style={{
        background: selected ? "var(--accent)" : "var(--surface)",
        color: selected ? "#fff" : "var(--foreground)",
        border: `1.5px solid ${selected ? "var(--accent)" : "var(--border)"}`,
      }}
    >
      {label}
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────

export default function RegisterClient() {
  const params = useSearchParams();
  const router = useRouter();

  const investmentId = params.get("investment");
  const investmentAmount = params.get("amount");
  const preselectedOpp = investmentId ? LIVE_OPPORTUNITIES.find((o) => o.id === investmentId) : null;

  const [step, setStep] = useState(0);
  const [data, setData] = useState<RegData>(INIT);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirm, setConfirm] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((d) => ({ ...d, ...parsed }));
      }
    } catch {}
  }, []);

  // Save to localStorage on data change
  useEffect(() => {
    if (data.email) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  function set<K extends keyof RegData>(key: K, val: RegData[K]) {
    setData((d) => ({ ...d, [key]: val }));
  }

  function toggleSector(s: string) {
    setData((d) => ({
      ...d,
      sectors: d.sectors.includes(s) ? d.sectors.filter((x) => x !== s) : [...d.sectors, s],
    }));
  }

  const canProceed = (() => {
    if (step === 0) return data.email.includes("@") && data.password.length >= 6 && data.password === confirm;
    if (step === 1) return data.name.length > 0 && data.country.length > 0;
    if (step === 2) return data.familiarity >= 0 && data.startupExp !== null && data.lossReaction >= 0 && data.portion >= 0;
    if (step === 3) return data.sectors.length > 0 && data.budget >= 0 && data.horizon >= 0;
    return true;
  })();

  const TOTAL = 5;
  const stepLabels = ["Account", "Basic Info", "Risk Profile", "Preferences", "Complete"];

  function handleFinish() {
    const score = calcRiskScore(data);
    const profile = { ...data, riskScore: score, completedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    setStep(4);
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--background)" }}>
      <div className="max-w-lg mx-auto">

        {/* Pre-selected investment banner */}
        {preselectedOpp && step < 4 && (
          <div
            className="rounded-xl px-4 py-3 mb-8 flex items-center gap-3"
            style={{ background: "rgba(196,102,58,0.08)", border: "1px solid rgba(196,102,58,0.2)" }}
          >
            <Building2 size={18} style={{ color: "var(--accent)", flexShrink: 0 }} />
            <p className="text-sm" style={{ color: "var(--foreground)" }}>
              You&apos;re signing up to invest{" "}
              <strong style={{ color: "var(--accent)" }}>€{Number(investmentAmount).toLocaleString()}</strong>{" "}
              in <strong>{preselectedOpp.name}</strong>
            </p>
          </div>
        )}

        {/* Step indicator */}
        {step < 4 && (
          <div className="mb-10">
            <div className="flex items-center mb-4">
              {stepLabels.map((label, i) => (
                <div key={label} className="flex items-center" style={{ flex: i < stepLabels.length - 1 ? 1 : "none" }}>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-semibold transition-all duration-300"
                    style={{
                      fontSize: "0.7rem",
                      background: i < step ? "var(--accent)" : i === step ? "var(--accent)" : "var(--surface)",
                      color: i <= step ? "#fff" : "var(--muted-foreground)",
                      border: i <= step ? "none" : "1.5px solid var(--border)",
                      opacity: i > step ? 0.45 : 1,
                    }}
                  >
                    {i < step ? <CheckCircle size={13} /> : i + 1}
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div
                      className="flex-1 h-px mx-1.5"
                      style={{ background: i < step ? "var(--accent)" : "var(--border)" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(step / (TOTAL - 1)) * 100}%`, background: "var(--accent)" }}
              />
            </div>
          </div>
        )}

        {/* Step content */}
        <AnimatePresence mode="wait">

          {/* ── Step 0: Account ── */}
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.28 }}>
              <span className="section-label">Step 1</span>
              <h1 className="text-display-sm font-bold mb-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Create your account
              </h1>
              <p className="text-sm mb-8 leading-body" style={{ color: "var(--muted-foreground)" }}>
                Join 1,800+ investors on Kryptondo.
              </p>

              {/* Social login placeholders */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Continue with Google", icon: "G" },
                  { label: "Continue with Apple", icon: "" },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
                    style={{ background: "var(--surface)", border: "1.5px solid var(--border)", color: "var(--foreground)" }}
                  >
                    <span style={{ fontWeight: 900, fontSize: "0.875rem" }}>{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>or with email</span>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--foreground)" }}>Email address</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                    style={{ background: "var(--surface)", border: "1.5px solid var(--border)", color: "var(--foreground)", outline: "none" }}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--foreground)" }}>Password</label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      value={data.password}
                      onChange={(e) => set("password", e.target.value)}
                      placeholder="Min. 6 characters"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                      style={{ background: "var(--surface)", border: "1.5px solid var(--border)", color: "var(--foreground)", outline: "none" }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--foreground)" }}>Confirm password</label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="Repeat password"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                      style={{
                        background: "var(--surface)",
                        border: `1.5px solid ${confirm && confirm !== data.password ? "#C4663A" : "var(--border)"}`,
                        color: "var(--foreground)",
                        outline: "none",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {confirm && confirm !== data.password && (
                    <p className="text-xs mt-1" style={{ color: "var(--accent)" }}>Passwords don&apos;t match</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Step 1: Basic Info ── */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.28 }}>
              <span className="section-label">Step 2</span>
              <h1 className="text-display-sm font-bold mb-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Basic information
              </h1>
              <p className="text-sm mb-8 leading-body" style={{ color: "var(--muted-foreground)" }}>
                Required for KYC and dividend payments.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--foreground)" }}>Full name</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your full legal name"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{ background: "var(--surface)", border: "1.5px solid var(--border)", color: "var(--foreground)", outline: "none" }}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--foreground)" }}>Country of residence</label>
                  <select
                    value={data.country}
                    onChange={(e) => set("country", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm appearance-none"
                    style={{ background: "var(--surface)", border: "1.5px solid var(--border)", color: data.country ? "var(--foreground)" : "var(--muted-foreground)", outline: "none" }}
                  >
                    <option value="">Select country...</option>
                    {EU_COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--foreground)" }}>
                    Phone number <span style={{ color: "var(--muted-foreground)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+49 123 456 789"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{ background: "var(--surface)", border: "1.5px solid var(--border)", color: "var(--foreground)", outline: "none" }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Step 2: Risk Profile ── */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.28 }}>
              <span className="section-label">Step 3</span>
              <h1 className="text-display-sm font-bold mb-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Your risk profile
              </h1>
              <p className="text-sm mb-8 leading-body" style={{ color: "var(--muted-foreground)" }}>
                We&apos;ll use this to match you with suitable investments.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>How familiar are you with investing?</p>
                  <div className="space-y-2">
                    {["Beginner — just getting started", "Some experience — invested before", "Experienced — regular investor", "Professional — finance is my field"].map((opt, i) => (
                      <OptionBtn key={i} label={opt} selected={data.familiarity === i} onClick={() => set("familiarity", i)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Invested in startups or private companies before?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <OptionBtn label="Yes" selected={data.startupExp === true} onClick={() => set("startupExp", true)} />
                    <OptionBtn label="No" selected={data.startupExp === false} onClick={() => set("startupExp", false)} />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>If your investment lost 20% in a month, you would…</p>
                  <div className="space-y-2">
                    {["Sell immediately — protect what&apos;s left", "Hold and wait — it will recover", "Buy more — great opportunity"].map((opt, i) => (
                      <OptionBtn key={i} label={opt.replace("&apos;", "'")} selected={data.lossReaction === i} onClick={() => set("lossReaction", i)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>What portion of your savings would you invest?</p>
                  <div className="space-y-2">
                    {["Less than 5%", "5–15%", "15–30%", "More than 30%"].map((opt, i) => (
                      <OptionBtn key={i} label={opt} selected={data.portion === i} onClick={() => set("portion", i)} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Preferences ── */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.28 }}>
              <span className="section-label">Step 4</span>
              <h1 className="text-display-sm font-bold mb-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                Investment preferences
              </h1>
              <p className="text-sm mb-8 leading-body" style={{ color: "var(--muted-foreground)" }}>
                Help us personalise your investment feed.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Preferred sectors (pick all that apply)</p>
                  <div className="flex flex-wrap gap-2">
                    {SECTORS.map((s) => (
                      <SectorChip key={s} label={s} selected={data.sectors.includes(s)} onClick={() => toggleSector(s)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Investment budget range</p>
                  <div className="space-y-2">
                    {["Less than €500", "€500 – €2,000", "€2,000 – €10,000", "More than €10,000"].map((opt, i) => (
                      <OptionBtn key={i} label={opt} selected={data.budget === i} onClick={() => set("budget", i)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Investment horizon</p>
                  <div className="space-y-2">
                    {["Less than 1 year", "1–3 years", "3–5 years", "5 years or more"].map((opt, i) => (
                      <OptionBtn key={i} label={opt} selected={data.horizon === i} onClick={() => set("horizon", i)} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Step 4: Complete ── */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
              {(() => {
                const score = calcRiskScore(data);
                const level = getRiskLevel(score);
                return (
                  <div className="text-center">
                    {/* Success animation */}
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "rgba(196,102,58,0.12)", color: "var(--accent)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, times: [0, 0.7, 1] }}
                    >
                      <CheckCircle size={40} />
                    </motion.div>
                    <h1 className="text-display-sm font-bold mb-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                      Welcome, {data.name.split(" ")[0]}!
                    </h1>
                    <p className="text-sm mb-8 leading-body" style={{ color: "var(--muted-foreground)" }}>
                      Your account is ready. Here&apos;s your investor profile.
                    </p>

                    {/* Risk profile */}
                    <div
                      className="rounded-2xl p-6 mb-6 text-left"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <p className="text-xs font-semibold uppercase mb-4" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                        Your Risk Profile
                      </p>
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                          style={{ background: level.bg, color: level.color, fontFamily: "var(--font-serif), Georgia, serif" }}
                        >
                          {score}
                        </div>
                        <div>
                          <p className="font-bold" style={{ color: "var(--foreground)" }}>{level.label}</p>
                          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Risk score {score}/5</p>
                        </div>
                      </div>
                      {/* Scale */}
                      <div className="flex gap-1">
                        {RISK_LEVELS.map((l) => (
                          <div
                            key={l.score}
                            className="flex-1 h-2 rounded-sm"
                            style={{ background: l.color, opacity: l.score <= score ? 1 : 0.18 }}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => router.push("/dashboard")}
                      className="btn-primary w-full text-center mb-3"
                      style={{ padding: "1rem 1.5rem", fontSize: "1rem" }}
                    >
                      <span>View Your Matches →</span>
                    </button>
                    {preselectedOpp && (
                      <button
                        onClick={() => router.push(`/invest/${investmentId}`)}
                        className="w-full text-sm font-medium py-2 hover:opacity-70 transition-opacity"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Return to {preselectedOpp.name}
                      </button>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-200"
              style={{
                background: "var(--surface)",
                color: step === 0 ? "var(--muted-foreground)" : "var(--foreground)",
                border: "1.5px solid var(--border)",
                opacity: step === 0 ? 0.4 : 1,
                cursor: step === 0 ? "not-allowed" : "pointer",
                fontSize: "0.9rem",
              }}
            >
              <ChevronLeft size={16} /> Back
            </button>
            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: canProceed ? "var(--accent)" : "var(--surface)",
                  color: canProceed ? "#fff" : "var(--muted-foreground)",
                  border: `1.5px solid ${canProceed ? "var(--accent)" : "var(--border)"}`,
                  cursor: canProceed ? "pointer" : "not-allowed",
                  fontSize: "0.9rem",
                }}
              >
                Continue <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={!canProceed}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: canProceed ? "var(--accent)" : "var(--surface)",
                  color: canProceed ? "#fff" : "var(--muted-foreground)",
                  border: `1.5px solid ${canProceed ? "var(--accent)" : "var(--border)"}`,
                  cursor: canProceed ? "pointer" : "not-allowed",
                  fontSize: "0.9rem",
                }}
              >
                Complete Profile <ChevronRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
