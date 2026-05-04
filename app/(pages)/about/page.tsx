import type { Metadata } from "next";
import Link from "next/link";
import { Shield, TrendingUp, Eye, Scale } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { TEAM_MEMBERS } from "../../data/mock";

export const metadata: Metadata = {
  title: "About Kryptondo",
  description: "Kryptondo connects investors with local businesses through tokenized equity. Malta SPV structure. EU-regulated. Non-custodial.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <p className="section-label">About Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6">
              We tokenize business equity so{" "}
              <span className="accent-text">communities can invest</span>
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed mb-10">
              Kryptondo is a EU-regulated crowdinvesting platform that tokenizes equity in local businesses
              on Arbitrum and Base. Investors earn real dividends and exclusive perks. Businesses raise
              capital from their most loyal customers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Our Team</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Finance. Technology. Law.</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="card text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4"
                    style={{ background: `${member.color}22`, color: member.color, border: `1px solid ${member.color}33` }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Our Philosophy</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">The 360° Investment Platform</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              Every investment on Kryptondo is built on four non-negotiable pillars.
              We believe you deserve all four — not a trade-off between them.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield size={22} />,
                label: "Risk",
                title: "Risk-Driven Investing",
                desc: "We built AI-powered risk scoring into every offering. Your personalised risk profile from the onboarding wizard shapes every recommendation. We surface opportunities that match your appetite — not just what is most profitable for us to promote. Conservative investors see different opportunities than aggressive ones. That is intentional.",
                accent: "var(--accent)",
              },
              {
                icon: <TrendingUp size={22} />,
                label: "Interest",
                title: "Interest-Aligned Returns",
                desc: "Kryptondo makes money when you make money. Our 5% success fee is charged only on successful raises — never upfront. Dividends come from real revenue: membership fees, placement contracts, rental income. We do not manufacture returns through token speculation. Your interest and ours are the same.",
                accent: "var(--gold)",
              },
              {
                icon: <Eye size={22} />,
                label: "Transparency",
                title: "Radical Transparency",
                desc: "Ownership is recorded on Arbitrum and Base blockchains — publicly verifiable by anyone. SPV structures are published in full. Performance data updates monthly. We tell you when a studio is underperforming, not just when it is doing well. We believe transparency is not a feature — it is the foundation.",
                accent: "#7c8cf8",
              },
              {
                icon: <Scale size={22} />,
                label: "Law",
                title: "Legally Secured",
                desc: "Every offering is structured through a Malta-registered SPV licensed by the MFSA under MiCA. Smart contracts are audited by CertiK. KYC and AML checks are mandatory. We are regulated the same way as traditional securities — but built on open, non-custodial infrastructure. You own your tokens. No one can take them.",
                accent: "#4A7C59",
              },
            ].map((pillar, i) => (
              <FadeIn key={pillar.label} delay={i * 0.08}>
                <div className="card h-full" style={{ borderColor: `${pillar.accent}25` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${pillar.accent}14`, color: pillar.accent }}>
                      {pillar.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: pillar.accent, letterSpacing: "0.1em" }}>{pillar.label}</p>
                      <h3 className="font-semibold" style={{ fontSize: "1rem", color: "var(--foreground)" }}>{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-body" style={{ color: "var(--muted-foreground)" }}>{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">Contact</h2>
            <p className="text-[var(--muted-foreground)] mb-4">
              For investor inquiries, business applications, and press:{" "}
              <a href="mailto:info@kryptondo.de" className="font-semibold" style={{ color: "var(--accent-blue)" }}>
                info@kryptondo.de
              </a>
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/invest" className="btn-primary px-6 py-3">Start Investing</Link>
              <Link href="/for-business" className="btn-secondary px-6 py-3">List Your Business</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
