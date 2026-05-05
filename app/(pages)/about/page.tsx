import type { Metadata } from "next";
import Link from "next/link";
import { Shield, TrendingUp, Eye, Scale } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { TEAM_MEMBERS } from "../../data/mock";
import { getTranslations } from "../../i18n/server";

export const metadata: Metadata = {
  title: "About Kryptondo",
  description: "Kryptondo connects investors with local businesses through tokenized equity. Malta SPV structure. EU-regulated. Non-custodial.",
};

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <div className="pt-24">
      <section className="section">
        <div className="container-md mx-auto text-center">
          <FadeIn>
            <p className="section-label">{t.label}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6">
              {t.headline}{" "}
              <span className="accent-text">{t.headlineAccent}</span>
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed mb-10">
              {t.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container-md mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="section-label">{t.teamLabel}</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{t.teamTitle}</h2>
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
            <p className="section-label">{t.philosophyLabel}</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{t.philosophyTitle}</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              {t.philosophySub}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield size={22} />,
                label: t.pillarRiskLabel,
                title: t.pillarRiskTitle,
                desc: t.pillarRiskDesc,
                accent: "var(--accent)",
              },
              {
                icon: <TrendingUp size={22} />,
                label: t.pillarInterestLabel,
                title: t.pillarInterestTitle,
                desc: t.pillarInterestDesc,
                accent: "var(--gold)",
              },
              {
                icon: <Eye size={22} />,
                label: t.pillarTransparencyLabel,
                title: t.pillarTransparencyTitle,
                desc: t.pillarTransparencyDesc,
                accent: "#7c8cf8",
              },
              {
                icon: <Scale size={22} />,
                label: t.pillarLawLabel,
                title: t.pillarLawTitle,
                desc: t.pillarLawDesc,
                accent: "#4A7C59",
              },
            ].map((pillar, i) => (
              <FadeIn key={pillar.label} delay={i * 0.08}>
                <div className="card card-hover h-full" style={{ borderColor: `${pillar.accent}25` }}>
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
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">{t.contactTitle}</h2>
            <p className="text-[var(--muted-foreground)] mb-4">
              {t.contactText}{" "}
              <a href="mailto:info@kryptondo.de" className="font-semibold" style={{ color: "var(--accent-blue)" }}>
                info@kryptondo.de
              </a>
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/invest" className="btn-primary px-6 py-3">{t.startInvesting}</Link>
              <Link href="/for-business" className="btn-secondary px-6 py-3">{t.listYourBusiness}</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
