import FadeIn from "./FadeIn";

interface DividendFormulaProps {
  audience?: "b2b" | "b2c";
}

export default function DividendFormula({ audience = "b2c" }: DividendFormulaProps) {
  return (
    <FadeIn>
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(201,168,76,0.06))",
          borderColor: "rgba(0,212,255,0.2)",
        }}
      >
        <p className="section-label">How Dividends Work</p>
        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6">
          Automatic profit sharing, on-chain
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="card flex-1 text-center py-5">
            <p className="text-3xl font-bold mb-1" style={{ color: "var(--accent-blue)" }}>€10,000</p>
            <p className="text-xs text-[var(--muted-foreground)]">
              {audience === "b2b" ? "You distribute as profit" : "Business distributes as profit"}
            </p>
          </div>
          <div className="text-2xl text-[var(--muted-foreground)] font-light">→</div>
          <div className="card flex-1 text-center py-5">
            <p className="text-3xl font-bold mb-1" style={{ color: "var(--accent-gold)" }}>€10</p>
            <p className="text-xs text-[var(--muted-foreground)]">
              {audience === "b2b"
                ? "Auto-sent to holder of 0.1% of tokens"
                : "Sent to your wallet instantly (0.1% holder)"}
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] mt-4 text-center">
          Smart contracts handle the math and distribution — no manual transfers, no delays.
        </p>
      </div>
    </FadeIn>
  );
}
