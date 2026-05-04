"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Investment {
  id: string;
  name: string;
  status: string;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  estimatedYield: number;
  riskScore: number;
  location: string | null;
  category: { name: string; slug: string };
}

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  draft: { bg: "rgba(138,125,112,0.1)", text: "#8A7D70" },
  live: { bg: "rgba(74,124,89,0.1)", text: "#4A7C59" },
  funded: { bg: "rgba(139,92,246,0.1)", text: "#8B5CF6" },
  closed: { bg: "rgba(158,58,43,0.1)", text: "#9E3A2B" },
};

export default function InvestmentsPage() {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    fetch("/api/investments").then(r => r.json()).then(setInvestments);
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this investment?")) return;
    await fetch(`/api/investments/${id}`, { method: "DELETE" });
    setInvestments(prev => prev.filter(i => i.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Investments</h1>
        <Link href="/admin/investments/new" className="btn-primary flex items-center gap-2" style={{ fontSize: "0.8125rem", padding: "0.6rem 1.25rem" }}>
          <Plus size={16} /> New Investment
        </Link>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["Name", "Category", "Status", "Price", "Sold", "Yield", "Risk", "Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase" style={{ color: "var(--muted-foreground)", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investments.map(inv => {
                const sc = STATUS_COLORS[inv.status] || STATUS_COLORS.draft;
                const pct = Math.round((inv.soldTokens / inv.totalTokens) * 100);
                return (
                  <tr key={inv.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td className="px-4 py-3">
                      <p className="font-medium" style={{ color: "var(--foreground)" }}>{inv.name}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{inv.location}</p>
                    </td>
                    <td className="px-4 py-3 text-xs font-medium" style={{ color: "var(--foreground)" }}>{inv.category.name}</td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: sc.bg, color: sc.text }}>{inv.status}</span></td>
                    <td className="px-4 py-3" style={{ color: "var(--foreground)" }}>€{inv.tokenPrice}</td>
                    <td className="px-4 py-3" style={{ color: "var(--foreground)" }}>{pct}% ({inv.soldTokens}/{inv.totalTokens})</td>
                    <td className="px-4 py-3" style={{ color: "var(--foreground)" }}>{inv.estimatedYield}%</td>
                    <td className="px-4 py-3" style={{ color: "var(--foreground)" }}>{inv.riskScore}/5</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/investments/${inv.id}/edit`} className="p-1.5 rounded hover:bg-[var(--surface-2)]" style={{ color: "var(--muted-foreground)" }}><Pencil size={14} /></Link>
                        <button onClick={() => handleDelete(inv.id)} className="p-1.5 rounded hover:bg-[var(--surface-2)]" style={{ color: "#9E3A2B" }}><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {investments.length === 0 && <p className="text-center py-8 text-sm" style={{ color: "var(--muted-foreground)" }}>No investments yet</p>}
      </div>
    </div>
  );
}
