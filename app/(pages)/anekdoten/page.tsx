import type { Metadata } from "next";
import Link from "next/link";
import { Laugh, TrendingUp, Rocket, ArrowLeft } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { getTranslations, getLocale } from "../../i18n/server";

export const metadata: Metadata = {
  title: "Jokes & Anecdotes | Kryptondo",
  description: "Finance, crypto, and startup humor for serious investors.",
};

const JOKES_EN = {
  crypto: [
    {
      text: "Why did the crypto investor get a second job? His portfolio was going 'to the moon' — turns out that's the floor.",
    },
    {
      text: "HODLing: DCA with extra existential dread.",
    },
    {
      text: "My portfolio is so diversified I've lost money in 47 different ways.",
    },
    {
      text: "Why don't crypto traders ever get hungry? Because they're always looking for 'the dip.'",
    },
    {
      text: "Blockchain: because the internet wasn't complicated enough.",
    },
    {
      text: "Not your keys, not your coins. Not your ex's Netflix password, not your problem.",
    },
    {
      text: "The crypto market has four seasons: bull, bear, crab, and therapy.",
    },
  ],
  investor: [
    {
      text: "A stock market investor and a gambler walk into a bar. They are the same person. The bar charges a 2% management fee.",
    },
    {
      text: "What's the difference between a bond and a bond trader? The bond has maturity.",
    },
    {
      text: "I finally understand compounding interest. It means I'll be rich — in 47 years.",
    },
    {
      text: "My financial advisor said to diversify. Now I'm losing money in 12 different asset classes simultaneously.",
    },
    {
      text: "Due diligence: reading 400 pages of documentation before losing money with full confidence.",
    },
    {
      text: "ROI on my coffee habit: -€3,650/year. ROI on my emotional stability: priceless.",
    },
    {
      text: "The market can stay irrational longer than you can stay solvent. My therapist confirmed.",
    },
  ],
  startup: [
    {
      text: "A startup is a company that hasn't figured out how to make money yet, but has excellent slides about it.",
    },
    {
      text: "\"We're not burning cash. We're investing in learnings.\" — Every founder, 6 months before Series B fails.",
    },
    {
      text: "Disrupting an industry means doing what existing companies do, but unprofitably, until they acquire you.",
    },
    {
      text: "Our runway is 8 months. But in startup time, that's basically forever.",
    },
    {
      text: "MVP stands for Minimum Viable Product. Also: Maximum Visible Problems.",
    },
    {
      text: "We're pre-revenue, but post-ambition.",
    },
    {
      text: "If a startup pivots in a forest and no one updates their LinkedIn, did it really pivot?",
    },
  ],
};

const JOKES_DE = {
  crypto: [
    {
      text: "Warum hat der Krypto-Investor einen Nebenjob angenommen? Sein Portfolio sollte 'zum Mond fliegen' — stellte sich raus: das war der Boden.",
    },
    {
      text: "HODLn: DCA mit extra existenzieller Verzweiflung.",
    },
    {
      text: "Mein Portfolio ist so diversifiziert, dass ich auf 47 verschiedene Arten Geld verloren habe.",
    },
    {
      text: "Warum haben Krypto-Trader nie Hunger? Weil sie immer nach dem 'Dip' suchen.",
    },
    {
      text: "Blockchain: Weil das Internet allein nicht kompliziert genug war.",
    },
    {
      text: "Not your keys, not your coins. Nicht dein Ex-Konto, nicht dein Problem.",
    },
    {
      text: "Der Kryptomarkt hat vier Jahreszeiten: Bulle, Bär, Krabbe und Therapie.",
    },
  ],
  investor: [
    {
      text: "Ein Börseninvestor und ein Spieler gehen in eine Bar. Es ist dieselbe Person. Die Bar berechnet 2 % Verwaltungsgebühr.",
    },
    {
      text: "Was ist der Unterschied zwischen einer Anleihe und einem Anleihehändler? Die Anleihe hat Laufzeit.",
    },
    {
      text: "Ich habe den Zinseszinseffekt endlich verstanden. Er bedeutet, dass ich in 47 Jahren reich sein werde.",
    },
    {
      text: "Mein Finanzberater riet mir zur Diversifikation. Jetzt verliere ich gleichzeitig in 12 verschiedenen Asset-Klassen Geld.",
    },
    {
      text: "Due Diligence: 400 Seiten Dokumentation lesen, um danach mit voller Überzeugung Geld zu verlieren.",
    },
    {
      text: "ROI meiner Kaffeegewohnheit: -3.650 €/Jahr. ROI meiner emotionalen Stabilität: unbezahlbar.",
    },
    {
      text: "Der Markt kann länger irrational bleiben als du zahlungsfähig. Mein Therapeut hat das bestätigt.",
    },
  ],
  startup: [
    {
      text: "Ein Startup ist ein Unternehmen, das noch nicht herausgefunden hat, wie man Geld verdient, aber hervorragende Slides dazu hat.",
    },
    {
      text: "\"Wir verbrennen kein Kapital. Wir investieren in Learnings.\" — Jeder Gründer, 6 Monate bevor Series B scheitert.",
    },
    {
      text: "Eine Branche zu disruptieren bedeutet, das zu tun, was bestehende Unternehmen tun, aber unrentabel, bis sie dich aufkaufen.",
    },
    {
      text: "Unsere Runway beträgt 8 Monate. Aber in Startup-Zeit ist das quasi eine Ewigkeit.",
    },
    {
      text: "MVP steht für Minimum Viable Product. Auch: Maximum Visible Problems.",
    },
    {
      text: "Wir sind pre-revenue, aber post-Ambition.",
    },
    {
      text: "Wenn ein Startup in einem Wald pivotiert und niemand LinkedIn aktualisiert — hat es dann wirklich pivotiert?",
    },
  ],
};

const CATEGORIES_EN = [
  { key: "crypto" as const, label: "Crypto Humor", icon: Laugh, color: "#E879F9" },
  { key: "investor" as const, label: "Investor Life", icon: TrendingUp, color: "#C4663A" },
  { key: "startup" as const, label: "Startup Reality", icon: Rocket, color: "#8B5CF6" },
];

const CATEGORIES_DE = [
  { key: "crypto" as const, label: "Krypto-Humor", icon: Laugh, color: "#E879F9" },
  { key: "investor" as const, label: "Investor-Alltag", icon: TrendingUp, color: "#C4663A" },
  { key: "startup" as const, label: "Startup-Realität", icon: Rocket, color: "#8B5CF6" },
];

export default function AnekdotenPage() {
  const t = getTranslations("anekdoten");
  const locale = getLocale();

  const jokes = locale === "de" ? JOKES_DE : JOKES_EN;
  const categories = locale === "de" ? CATEGORIES_DE : CATEGORIES_EN;

  return (
    <main style={{ background: "var(--bg-primary)" }}>
      {/* Hero */}
      <section className="section-sm" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto px-4">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={14} />
              {t.backToHome}
            </Link>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#E879F9" }}
            >
              {t.badge}
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--text-primary)" }}
            >
              {t.pageTitle}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--text-muted)" }}>
              {t.pageSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Jokes by category */}
      {categories.map((cat, catIdx) => {
        const catJokes = jokes[cat.key];
        const Icon = cat.icon;
        return (
          <section
            key={cat.key}
            className="section-sm"
            style={{ background: catIdx % 2 === 1 ? "var(--bg-surface)" : "var(--bg-primary)" }}
          >
            <div className="container-lg mx-auto px-4">
              <FadeIn>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}18`, color: cat.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--text-primary)" }}
                  >
                    {cat.label}
                  </h2>
                </div>

                {/* Joke cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catJokes.map((joke, i) => (
                    <div
                      key={i}
                      className="card card-hover h-full"
                      style={{ padding: "1.5rem" }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-3"
                        style={{ background: `${cat.color}18`, color: cat.color }}
                      >
                        {i + 1}
                      </div>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
                      >
                        &ldquo;{joke.text}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* CTA footer strip */}
      <section className="section-sm" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
        <div className="container-lg mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--text-primary)" }}>
              {locale === "de"
                ? "Genug gelacht — jetzt investieren."
                : "Had enough laughs? Now let's invest."}
            </p>
            <p className="mb-8" style={{ color: "var(--text-muted)" }}>
              {locale === "de"
                ? "Kryptondo ist ernst gemeint. Die Renditen auch."
                : "Kryptondo is no joke. Neither are the returns."}
            </p>
            <Link href="/invest" className="btn-primary">
              {locale === "de" ? "Investments entdecken →" : "Browse Investments →"}
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
