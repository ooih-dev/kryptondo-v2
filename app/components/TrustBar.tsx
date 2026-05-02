import FadeIn from "./FadeIn";

interface Stat {
  value: string;
  label: string;
}

export default function TrustBar({ stats }: { stats: Stat[] }) {
  return (
    <div
      className="py-10"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="container-lg mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x"
          style={{ "--tw-divide-opacity": 1, divideColor: "var(--border)" } as React.CSSProperties}
        >
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.07} className="text-center px-4">
              <p
                className="font-extrabold mb-1 tracking-tight-display"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--foreground)" }}
              >
                {stat.value}
              </p>
              <p
                style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", color: "var(--muted-foreground)", textTransform: "uppercase" }}
              >
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
