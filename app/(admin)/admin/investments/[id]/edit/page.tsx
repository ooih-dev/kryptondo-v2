"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import InvestmentForm from "../../InvestmentForm";

export default function EditInvestmentPage() {
  const { id } = useParams<{ id: string }>();
  const [investment, setInvestment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/investments/${id}`)
      .then(r => r.json())
      .then(data => { setInvestment(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ color: "var(--muted-foreground)" }}>Loading...</p>;
  if (!investment) return <p style={{ color: "var(--accent)" }}>Investment not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Edit Investment</h1>
      <InvestmentForm investment={investment} />
    </div>
  );
}
