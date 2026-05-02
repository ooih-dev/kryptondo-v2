import type { Metadata } from "next";
import Link from "next/link";
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
              <span className="gradient-text">communities can invest</span>
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
