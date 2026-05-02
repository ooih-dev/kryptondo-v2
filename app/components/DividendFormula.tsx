import FadeIn from "./FadeIn";

interface DividendFormulaProps {
  audience?: "b2b" | "b2c";
}

export default function DividendFormula({ audience = "b2c" }: DividendFormulaProps) {
  return (
    <FadeIn>
      <div
        className="rounded-2xl p-7 md:p-10"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div className="mb-7">
          <span className="section-label">How Dividends Work</span>
          <h3
            className="font-bold text-balance"
            style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", color: "var(--foreground)" }}
          >
            Automatic profit sharing, on-chain
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          <div
            className="flex-1 rounded-xl p-5 text-center"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
          >
            <p
              className="font-extrabold mb-1"
              style={{ fontSize: "2rem", color: "var(--accent-blue)", letterSpacing: "-0.03em" }}
            >
              €10,000
            </p>
            <p className="text-xs font-medium" style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {audience === "b2b" ? "You distribute as profit" : "Business distributes as profit"}
            </p>
          </div>

          <div className="flex items-center justify-center text-xl font-light px-2" style={{ color: "var(--muted-foreground)" }}>
            →
          </div>

          <div
            className="flex-1 rounded-xl p-5 text-center"
            style={{
              background: "var(--accent-gold-glow)",
              border: "1px solid rgba(201, 168, 76, 0.2)",
            }}
          >
            <p
              className="font-extrabold mb-1"
              style={{ fontSize: "2rem", color: "var(--accent-gold)", letterSpacing: "-0.03em" }}
            >
              €10
            </p>
            <p className="text-xs font-medium" style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {audience === "b2b"
                ? "Auto-sent to holder of 0.1%"
                : "Sent to your wallet instantly"}
            </p>
          </div>
        </div>

        <p
          className="text-xs text-center mt-5"
          style={{ color: "var(--muted-foreground)" }}
        >
          Smart contracts handle the math and distribution — no manual transfers, no delays.
        </p>
      </div>
    </FadeIn>
  );
}
