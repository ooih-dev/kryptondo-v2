"use client";

import InvestmentForm from "../InvestmentForm";

export default function NewInvestmentPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Create Investment</h1>
      <InvestmentForm />
    </div>
  );
}
