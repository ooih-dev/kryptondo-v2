import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Car, TrendingUp, Shield, Wallet, CalendarDays, Zap, CheckCircle, Users } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { CARS, CAR_FAQS } from "../../data/mock";
import FAQ from "../../components/FAQ";

const RISK_LEVELS_DATA = [
  { score: 1, label: "Conservative", color: "#4A7C59", bg: "rgba(74, 124, 89, 0.12)" },
  { score: 2, label: "Moderate",     color: "#7A9A5A", bg: "rgba(122, 154, 90, 0.12)" },
  { score: 3, label: "Balanced",     color: "#B8954F", bg: "rgba(184, 149, 79, 0.12)" },
  { score: 4, label: "Growth",       color: "#C4663A", bg: "rgba(196, 102, 58, 0.12)" },
  { score: 5, label: "Aggressive",   color: "#9E3A2B", bg: "rgba(158, 58, 43, 0.12)" },
];
function getRiskLevel(score: number) {
  return RISK_LEVELS_DATA[Math.min(Math.max(Math.round(score), 1), 5) - 1];
}

export const metadata: Metadata = {
  title: "Car Subscription — Invest in Premium Vehicles | Kryptondo",
  description: "Buy tokens to co-own premium cars. Drive them yourself or earn passive income from every rental. From €50 per token.",
};

const HOW_IT_WORKS = [
  { step: "01", icon: <Car size={20} />, title: "Browse Available Cars", desc: "Explore our curated fleet of premium vehicles. Each car has full specs, yield projections, and risk ratings." },
  { step: "02", icon: <Wallet size={20} />, title: "Buy Tokens from €50", desc: "Each token represents fractional ownership of the car. Fund the car purchase — one token at a time." },
  { step: "03", icon: <Shield size={20} />, title: "Car Enters the Fleet", desc: "Once fully funded, Kryptondo Fleet purchases the car and adds it to the active rental fleet within 14 days." },
  { step: "04", icon: <TrendingUp size={20} />, title: "Drive or Earn", desc: "Co-owners can book the car for personal use. Rental investors sit back and collect monthly dividends." },
];

const BENEFITS = [
  { icon: <Wallet size={20} />, title: "Fractional from €50", desc: "No need to buy the whole car. Start with a single token and build your fleet portfolio over time.", accent: "var(--accent)" },
  { icon: <Shield size={20} />, title: "Zero Maintenance", desc: "Kryptondo Fleet handles all maintenance, insurance, and servicing. You just own and earn.", accent: "#4A7C59" },
  { icon: <Zap size={20} />, title: "On-Chain Ownership", desc: "Your tokens on Arbitrum / Base are verifiable ownership records. Non-custodial, fully transparent.", accent: "#7c8cf8" },
  { icon: <CalendarDays size={20} />, title: "Book Your Car", desc: "Co-owners get calendar-based booking access proportional to their token holding. Drive when you want.", accent: "var(--accent)" },
  { icon: <TrendingUp size={20} />, title: "Monthly Dividends", desc: "Rental investors receive automatic monthly distributions from rental revenue — no action needed.", accent: "#B8954F" },
  { icon: <Users size={20} />, title: "Voting Rights", desc: "Token holders vote on car decisions: sell, replace, upgrade. Your ownership means your voice.", accent: "#C4663A" },
];

export default function CarsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden bg-grid">
        <div className="glow-orb w-[600px] h-[500px] -top-20 -left-40" style={{ background: "radial-gradient(ellipse, rgba(196,102,58,0.15) 0%, transparent 60%)" }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: "radial-gradient(ellipse, rgba(184,149,79,0.12) 0%, transparent 60%)", opacity: 0.6 }} />
        <div className="container-lg mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="badge mb-8 w-fit">Car Subscription · From €50 · Non-Custodial</div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-extrabold text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: "1.08", color: "var(--foreground)" }}>
                Own a Share of{" "}
                <span className="accent-text">Premium Cars.</span>
                <br />Drive or Earn.
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl leading-body" style={{ color: "var(--muted-foreground)" }}>
                Buy tokens to co-own vehicles. Use them yourself or earn from every rental.
                Fully funded cars enter our fleet — your returns start immediately.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#cars" className="btn-primary text-base !py-3.5 !px-8"><span>Browse Cars →</span></a>
                <a href="#how-it-works" className="btn-secondary text-base !py-3.5 !px-8">How It Works</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Two Models ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Two Models</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Choose how you participate</h2>
            <p className="text-sm mt-3 leading-body" style={{ color: "var(--muted-foreground)" }}>Same car, same tokens — different returns structure depending on whether you want to drive or just earn.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Co-Ownership */}
            <FadeIn delay={0.05}>
              <div className="card h-full" style={{ borderColor: "rgba(196,102,58,0.25)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,102,58,0.12)", color: "var(--accent)" }}>
                    <Car size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Co-Ownership</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(196,102,58,0.1)", color: "var(--accent)" }}>Drive + Earn</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Book the car for personal use via app",
                    "Earn rental income when others use it",
                    "Calendar-based access proportional to tokens",
                    "Typical yield: 4–5% annually",
                    "Voting rights on car decisions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                      <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-body p-3 rounded-lg" style={{ background: "rgba(196,102,58,0.06)", color: "var(--muted-foreground)", borderLeft: "3px solid var(--accent)" }}>
                  Best for: investors who want to drive a premium car while earning income from it when they&apos;re not using it.
                </p>
              </div>
            </FadeIn>
            {/* Rental Investment */}
            <FadeIn delay={0.1}>
              <div className="card h-full" style={{ borderColor: "rgba(184,149,79,0.25)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(184,149,79,0.12)", color: "#B8954F" }}>
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>Rental Investment</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(184,149,79,0.1)", color: "#B8954F" }}>Pure Passive Income</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "100% of your rental share, every month",
                    "Higher yield — no usage offset",
                    "No driving, no booking, no hassle",
                    "Typical yield: 5–7% annually",
                    "Token transferable on marketplace",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                      <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#B8954F" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-body p-3 rounded-lg" style={{ background: "rgba(184,149,79,0.06)", color: "var(--muted-foreground)", borderLeft: "3px solid #B8954F" }}>
                  Best for: passive investors seeking steady monthly income without the complexity of car access management.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Model comparison table */}
          <FadeIn delay={0.15}>
            <div className="mt-6 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--surface-2)" }}>
                    <th className="text-left px-5 py-3" style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Feature</th>
                    <th className="px-5 py-3 text-center" style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.75rem" }}>Co-Ownership</th>
                    <th className="px-5 py-3 text-center" style={{ color: "#B8954F", fontWeight: 600, fontSize: "0.75rem" }}>Rental Investment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Personal car access", "✓ Proportional days", "✗ No"],
                    ["Monthly dividends", "✓ When not in use", "✓ Full share always"],
                    ["Typical annual yield", "4–5%", "5–7%"],
                    ["Voting rights", "✓", "✓"],
                    ["Token transferable", "✓ Q3 2026", "✓ Q3 2026"],
                    ["Best for", "Drive + earn", "Pure passive income"],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--surface-2)" }}>
                      <td className="px-5 py-3 font-medium text-sm" style={{ color: "var(--foreground)" }}>{row[0]}</td>
                      <td className="px-5 py-3 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>{row[1]}</td>
                      <td className="px-5 py-3 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <span className="section-label">How It Works</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>From €50 to fleet owner in minutes</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.09}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--accent)" }}>
                    {s.icon}
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--accent)", letterSpacing: "0.12em" }}>{s.step}</p>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs leading-body" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Available Cars ── */}
      <section id="cars" className="section" style={{ background: "var(--surface)" }}>
        <div className="container-lg mx-auto">
          <FadeIn className="mb-10">
            <span className="section-label">Available Cars</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Fund a car. Start earning.</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARS.map((car, i) => {
              const pct = Math.round((car.soldTokens / car.totalTokens) * 100);
              const rLevel = getRiskLevel(car.riskScore);
              return (
                <FadeIn key={car.id} delay={i * 0.07}>
                  <div className="card card-hover flex flex-col h-full" style={{ padding: 0 }}>
                    {/* Car image */}
                    <div className="rounded-t-xl h-36 relative overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
                      <Image src={car.image} alt={`${car.year} ${car.make} ${car.model}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                      <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full z-10" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                        {car.daysLeft}d left
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 p-5">
                      <div>
                        <h3 className="font-semibold mb-0.5" style={{ fontSize: "1rem", color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
                          {car.make} {car.model}
                        </h3>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{car.location}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: `€${car.tokenPrice}`, lbl: "Token price" },
                          { val: `${car.rentalYield}`, lbl: "Rental yield" },
                          { val: `€${car.rentalRatePerDay}/day`, lbl: "Rental rate" },
                          { val: `${car.occupancyPct}%`, lbl: "Occupancy" },
                        ].map((s) => (
                          <div key={s.lbl} className="rounded-lg py-2.5 text-center" style={{ background: "var(--surface-2)" }}>
                            <p className="font-semibold text-xs" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>{s.val}</p>
                            <p className="text-[9px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                      {/* Risk */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ background: rLevel.bg, color: rLevel.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: rLevel.color }} />
                        Risk {car.riskScore}/5 · {rLevel.label}
                      </span>
                      {/* Progress */}
                      <div>
                        <div className="flex justify-between mb-1.5" style={{ fontSize: "0.625rem" }}>
                          <span style={{ color: "var(--muted-foreground)" }}>{car.soldTokens}/{car.totalTokens} tokens</span>
                          <span className="font-semibold" style={{ color: "var(--accent)" }}>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                      <Link href={`/cars/${car.id}`} className="btn-primary w-full text-center mt-auto" style={{ fontSize: "0.8125rem", padding: "0.6875rem 1rem" }}>
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section">
        <div className="container-lg mx-auto">
          <FadeIn className="text-center mb-12 max-w-lg mx-auto">
            <span className="section-label">Why Kryptondo Cars</span>
            <h2 className="text-display-md font-bold" style={{ color: "var(--foreground)" }}>Premium ownership. Zero complexity.</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.07}>
                <div className="card h-full" style={{ borderColor: `${b.accent}18` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${b.accent}12`, color: b.accent }}>
                    {b.icon}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)", fontSize: "0.9375rem" }}>{b.title}</h3>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-10 max-w-md mx-auto">
            <span className="section-label">FAQ</span>
            <h2 className="text-display-sm font-bold" style={{ color: "var(--foreground)" }}>Common questions</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ items={CAR_FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <div className="rounded-3xl p-10 md:p-16" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <span className="section-label">Start Today</span>
              <h2 className="font-extrabold text-balance mb-4 mx-auto max-w-lg" style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", letterSpacing: "-0.01em", lineHeight: "1.15", color: "var(--foreground)" }}>
                Start investing in cars.{" "}
                <span className="accent-text">From €50.</span>
              </h2>
              <p className="text-base mb-10 max-w-md mx-auto leading-body" style={{ color: "var(--muted-foreground)" }}>
                No maintenance. No insurance hassle. Just ownership, income, and the occasional drive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#cars" className="btn-primary text-base !py-3.5 !px-8"><span>Browse Cars →</span></a>
                <Link href="/register" className="btn-secondary text-base !py-3.5 !px-8">Create Account</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
