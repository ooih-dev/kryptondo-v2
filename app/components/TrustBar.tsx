import FadeIn from "./FadeIn";

interface Stat {
  value: string;
  label: string;
}

export default function TrustBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="py-8 border-y border-[var(--border)]">
      <div className="container-lg mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1">{stat.value}</p>
              <p className="text-xs text-[var(--muted-foreground)] font-medium">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
