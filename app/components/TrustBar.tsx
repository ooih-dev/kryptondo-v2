import FadeIn from "./FadeIn";

interface Stat {
  value: string;
  label: string;
}

export default function TrustBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="py-7" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-lg mx-auto px-4">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-y-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-baseline gap-2 px-5"
                style={{
                  borderLeft: i === 0 ? "none" : "1px solid var(--border)",
                }}
              >
                <span
                  className="font-bold tracking-tight"
                  style={{ fontSize: "1.125rem", color: "var(--foreground)", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </span>
                <span
                  style={{ fontSize: "0.6875rem", fontWeight: 500, color: "var(--muted-foreground)", letterSpacing: "0.04em", textTransform: "uppercase" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
