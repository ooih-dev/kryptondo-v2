"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface InvestmentData {
  id?: string;
  name: string;
  description: string;
  categoryId: string;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  estimatedYield: number;
  riskScore: number;
  status: string;
  daysLeft: number;
  location: string;
}

const INITIAL: InvestmentData = {
  name: "", description: "", categoryId: "", tokenPrice: 100, totalTokens: 1000,
  soldTokens: 0, investors: 0, estimatedYield: 8, riskScore: 2, status: "draft", daysLeft: 30, location: "",
};

export default function InvestmentForm({ investment }: { investment?: InvestmentData }) {
  const router = useRouter();
  const [form, setForm] = useState<InvestmentData>(investment || INITIAL);
  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(setCategories);
  }, []);

  function update(field: string, value: string | number) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const url = investment?.id ? `/api/investments/${investment.id}` : "/api/investments";
      const method = investment?.id ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) { const d = await res.json(); setError(d.error || "Failed"); return; }
      router.push("/admin/investments");
    } catch { setError("Network error"); } finally { setSaving(false); }
  }

  const fieldStyle = { background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--foreground)", outline: "none" };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {error && <div className="text-sm px-3 py-2 rounded-lg mb-4" style={{ background: "rgba(196,102,58,0.1)", color: "var(--accent)" }}>{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Name *</label>
          <input value={form.name} onChange={e => update("name", e.target.value)} required className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Description</label>
          <textarea value={form.description} onChange={e => update("description", e.target.value)} rows={3} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Category *</label>
          <select value={form.categoryId} onChange={e => update("categoryId", e.target.value)} required className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle}>
            <option value="">Select...</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Status</label>
          <select value={form.status} onChange={e => update("status", e.target.value)} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle}>
            <option value="draft">Draft</option>
            <option value="live">Live</option>
            <option value="funded">Funded</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Token Price (€)</label>
          <input type="number" value={form.tokenPrice} onChange={e => update("tokenPrice", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Total Tokens</label>
          <input type="number" value={form.totalTokens} onChange={e => update("totalTokens", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Sold Tokens</label>
          <input type="number" value={form.soldTokens} onChange={e => update("soldTokens", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Investors</label>
          <input type="number" value={form.investors} onChange={e => update("investors", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Estimated Yield (%)</label>
          <input type="number" step="0.1" value={form.estimatedYield} onChange={e => update("estimatedYield", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Risk Score (1-5)</label>
          <input type="number" min={1} max={5} value={form.riskScore} onChange={e => update("riskScore", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Days Left</label>
          <input type="number" value={form.daysLeft} onChange={e => update("daysLeft", Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>Location</label>
          <input value={form.location} onChange={e => update("location", e.target.value)} className="w-full px-3 py-2.5 rounded-lg text-sm" style={fieldStyle} placeholder="Berlin, Germany" />
        </div>
      </div>

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.7 : 1 }}>
          {saving ? "Saving..." : investment?.id ? "Update" : "Create"} Investment
        </button>
        <button type="button" onClick={() => router.back()} className="btn-secondary">Cancel</button>
      </div>
    </form>
  );
}
