"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle, TrendingUp, Shield, Target, Zap } from "lucide-react";
import { LIVE_OPPORTUNITIES } from "../../../data/mock";
import { getRiskLevel, RISK_LEVELS } from "../../../components/RiskScale";

// ── Types ──────────────────────────────────────────────────────────────────

interface Answers {
  familiarity: number;   // 0–3 (Beginner → Professional)
  startupExp: boolean | null;
  goal: number;          // 0–3
  horizon: number;       // 0–3
  lossReaction: number;  // 0–2
  portion: number;       // 0–3
}

const INITIAL: Answers = {
  familiarity: -1,
  startupExp: null,
  goal: -1,
  horizon: -1,
  lossReaction: -1,
  portion: -1,
};

// ── Score calculation ─────────────────────────────────────────────────────

function calcScore(a: Answers): number {
  let score = 0;
  // familiarity: Beginner=0 → Professional=3 → more experience = can handle more risk
  score += [0, 0.5, 1, 1.5][Math.max(0, a.familiarity)];
  // startup experience: yes → +0.5
  score += a.startupExp ? 0.5 : 0;
  // goal: passive income=0, growth=1, love=0.5, diversification=0.5
  score += [0, 1, 0.5, 0.5][Math.max(0, a.goal)];
  // horizon: <1yr=0, 1-3=0.5, 3-5=1, 5+=1.5
  score += [0, 0.5, 1, 1.5][Math.max(0, a.horizon)];
  // loss reaction: sell=0, hold=0.5, buy more=1
  score += [0, 0.5, 1][Math.max(0, a.lossReaction)];
  // portion: <5%=0, 5-15%=0.5, 15-30%=1, >30%=1.5
  score += [0, 0.5, 1, 1.5][Math.max(0, a.portion)];

  // max = 7 → map to 1–5
  return Math.min(5, Math.max(1, Math.round(1 + (score / 7) * 4)));
}

// ── Step components ───────────────────────────────────────────────────────

function OptionButton({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-200"
      style={{
        background: selected ? "var(--accent)" : "var(--surface)",
        color: selected ? "#fff" : "var(--foreground)",
        border: `1.5px solid ${selected ? "var(--accent)" : "var(--border)"}`,
        fontSize: "0.9375rem",
      }}
    >
      {label}
    </button>
  );
}

// ── Main wizard ───────────────────────────────────────────────────────────

export default function RiskWizardClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL);
  const [profileScore, setProfileScore] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("kryptondo_risk_profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.score) setProfileScore(parsed.score);
      } catch {}
    }
  }, []);

  function saveProfile(score: number) {
    localStorage.setItem(
      "kryptondo_risk_profile",
      JSON.stringify({ score, answers, savedAt: new Date().toISOString() })
    );
  }

  function handleFinish() {
    const score = calcScore(answers);
    setProfileScore(score);
    saveProfile(score);
    setStep(4);
  }

  const canProceed = (() => {
    if (step === 0) return answers.familiarity >= 0 && answers.startupExp !== null;
    if (step === 1) return answers.goal >= 0 && answers.horizon >= 0;
    if (step === 2) return answers.lossReaction >= 0 && answers.portion >= 0;
    return true;
  })();

  const steps = ["Experience", "Goals", "Risk Tolerance", "Your Profile"];
  const TOTAL_STEPS = 3;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--background)" }}>
      <div className="max-w-lg mx-auto">

        {/* Step indicator */}
        {step < 4 && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-1.5 flex-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-semibold transition-all duration-300"
                    style={{
                      fontSize: "0.75rem",
                      background: i < step ? "var(--accent)" : i === step ? "var(--accent)" : "var(--surface)",
                      color: i <= step ? "#fff" : "var(--muted-foreground)",
                      border: i <= step ? "none" : "1.5px solid var(--border)",
                      opacity: i > step ? 0.5 : 1,
                    }}
                  >
                    {i < step ? <CheckCircle size={14} /> : i + 1}
                  </div>
                  <span
                    className="text-xs hidden sm:block"
                    style={{ color: i === step ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: i === step ? 600 : 400 }}
                  >
                    {s}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 h-px mx-2"
                      style={{ background: i < step ? "var(--accent)" : "var(--border)" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(step / TOTAL_STEPS) * 100}%`, background: "var(--accent)" }}
              />
            </div>
          </div>
        )}

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2">
                <span className="section-label">Step 1</span>
                <h1 className="text-display-sm font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Your Experience
                </h1>
                <p className="text-sm mt-2 leading-body" style={{ color: "var(--muted-foreground)" }}>
                  Help us understand your background so we can match you with the right opportunities.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                    How familiar are you with investing?
                  </p>
                  <div className="space-y-2">
                    {["Beginner — I'm just getting started", "Some experience — I've invested before", "Experienced — regular investor", "Professional — finance is my field"].map((opt, i) => (
                      <OptionButton key={i} label={opt} selected={answers.familiarity === i}
                        onClick={() => setAnswers(a => ({ ...a, familiarity: i }))} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                    Have you invested in startups or private companies before?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <OptionButton label="Yes" selected={answers.startupExp === true}
                      onClick={() => setAnswers(a => ({ ...a, startupExp: true }))} />
                    <OptionButton label="No" selected={answers.startupExp === false}
                      onClick={() => setAnswers(a => ({ ...a, startupExp: false }))} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2">
                <span className="section-label">Step 2</span>
                <h1 className="text-display-sm font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Your Goals
                </h1>
                <p className="text-sm mt-2 leading-body" style={{ color: "var(--muted-foreground)" }}>
                  What are you hoping to achieve with your investments?
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                    What&apos;s your primary investment goal?
                  </p>
                  <div className="space-y-2">
                    {["Passive income — steady dividends over time", "Capital growth — grow my portfolio value", "Supporting businesses I love", "Diversification — spread my risk"].map((opt, i) => (
                      <OptionButton key={i} label={opt} selected={answers.goal === i}
                        onClick={() => setAnswers(a => ({ ...a, goal: i }))} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                    What&apos;s your investment horizon?
                  </p>
                  <div className="space-y-2">
                    {["Less than 1 year", "1–3 years", "3–5 years", "5 years or more"].map((opt, i) => (
                      <OptionButton key={i} label={opt} selected={answers.horizon === i}
                        onClick={() => setAnswers(a => ({ ...a, horizon: i }))} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2">
                <span className="section-label">Step 3</span>
                <h1 className="text-display-sm font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                  Risk Tolerance
                </h1>
                <p className="text-sm mt-2 leading-body" style={{ color: "var(--muted-foreground)" }}>
                  Understanding how you react to risk helps us find the right fit.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                    How would you react if your investment lost 20% in a month?
                  </p>
                  <div className="space-y-2">
                    {["Sell immediately — protect what's left", "Hold and wait — it will recover", "Buy more — it's a buying opportunity"].map((opt, i) => (
                      <OptionButton key={i} label={opt} selected={answers.lossReaction === i}
                        onClick={() => setAnswers(a => ({ ...a, lossReaction: i }))} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                    What portion of your savings would you invest on Kryptondo?
                  </p>
                  <div className="space-y-2">
                    {["Less than 5%", "5–15%", "15–30%", "More than 30%"].map((opt, i) => (
                      <OptionButton key={i} label={opt} selected={answers.portion === i}
                        onClick={() => setAnswers(a => ({ ...a, portion: i }))} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && profileScore != null && (
            <ResultStep score={profileScore} />
          )}
        </AnimatePresence>

        {/* Navigation */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-10 gap-4">
            <button
              onClick={() => setStep(s => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-200"
              style={{
                background: "var(--surface)",
                color: step === 0 ? "var(--muted-foreground)" : "var(--foreground)",
                border: "1.5px solid var(--border)",
                opacity: step === 0 ? 0.4 : 1,
                cursor: step === 0 ? "not-allowed" : "pointer",
                fontSize: "0.9375rem",
              }}
            >
              <ChevronLeft size={16} /> Back
            </button>

            {step < 2 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: canProceed ? "var(--accent)" : "var(--surface)",
                  color: canProceed ? "#fff" : "var(--muted-foreground)",
                  border: `1.5px solid ${canProceed ? "var(--accent)" : "var(--border)"}`,
                  cursor: canProceed ? "pointer" : "not-allowed",
                  fontSize: "0.9375rem",
                }}
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={!canProceed}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: canProceed ? "var(--accent)" : "var(--surface)",
                  color: canProceed ? "#fff" : "var(--muted-foreground)",
                  border: `1.5px solid ${canProceed ? "var(--accent)" : "var(--border)"}`,
                  cursor: canProceed ? "pointer" : "not-allowed",
                  fontSize: "0.9375rem",
                }}
              >
                See My Profile <ChevronRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Result Step ────────────────────────────────────────────────────────────

const PROFILE_ICONS: Record<number, React.ReactNode> = {
  1: <Shield size={32} />,
  2: <Target size={32} />,
  3: <TrendingUp size={32} />,
  4: <Zap size={32} />,
  5: <Zap size={32} />,
};

const PROFILE_DESC: Record<number, string> = {
  1: "You prefer capital preservation over returns. Low-risk, stable businesses are your sweet spot.",
  2: "You're comfortable with modest risk for steady income. Established businesses with consistent revenue.",
  3: "You balance risk and reward well. A mix of stable and growing businesses suits your style.",
  4: "You're comfortable with higher risk in exchange for growth potential. Scaling startups fit your profile.",
  5: "You're an aggressive investor who embraces high risk for maximum return potential.",
};

function ResultStep({ score }: { score: number }) {
  const level = getRiskLevel(score);
  const matches = LIVE_OPPORTUNITIES.filter(o => Math.abs(o.riskScore - score) <= 1);

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-8">
        <span className="section-label">Your Risk Profile</span>
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto my-5"
          style={{ background: level.bg, color: level.color }}
        >
          {PROFILE_ICONS[score]}
        </div>
        <h1
          className="text-display-sm font-bold mb-2"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {level.label}
        </h1>
        <p className="text-sm leading-body max-w-sm mx-auto" style={{ color: "var(--muted-foreground)" }}>
          {PROFILE_DESC[score]}
        </p>
      </div>

      {/* Risk scale visual */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs font-semibold mb-4 text-center" style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Risk Scale
        </p>
        <div className="flex gap-1.5 mb-3">
          {RISK_LEVELS.map((l) => (
            <div key={l.score} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className="w-full h-3 rounded-sm transition-all duration-300"
                style={{ background: l.color, opacity: l.score === score ? 1 : 0.18, transform: l.score === score ? "scaleY(1.3)" : "scaleY(1)" }}
              />
              <span
                className="text-[9px] font-semibold"
                style={{ color: l.score === score ? l.color : "var(--muted-foreground)", opacity: l.score === score ? 1 : 0.5 }}
              >
                {l.label}
              </span>
            </div>
          ))}
        </div>
        {score === score && (
          <p className="text-center text-xs font-medium mt-3" style={{ color: level.color }}>
            Your profile: {level.label} ({score}/5)
          </p>
        )}
      </div>

      {/* Matching opportunities */}
      {matches.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
            Recommended for your profile
          </h2>
          <div className="space-y-3">
            {matches.map((opp) => {
              const rLevel = getRiskLevel(opp.riskScore);
              return (
                <Link
                  key={opp.id}
                  href={`/invest/${opp.id}`}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 card-hover"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)", textDecoration: "none" }}
                >
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--foreground)" }}>{opp.name}</p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{opp.sector} · {opp.city}</p>
                  </div>
                  <div className="ml-auto shrink-0">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: rLevel.bg, color: rLevel.color }}
                    >
                      Risk {opp.riskScore}/5
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <Link
          href={`/invest?risk=${score}`}
          className="btn-primary w-full text-center"
          style={{ fontSize: "0.9375rem", padding: "0.875rem 1.5rem" }}
        >
          <span>Browse Matching Investments →</span>
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("kryptondo_risk_profile");
            window.location.reload();
          }}
          className="w-full text-center py-3 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--muted-foreground)" }}
        >
          Retake the quiz
        </button>
      </div>
    </motion.div>
  );
}
