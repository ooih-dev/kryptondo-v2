"use client";

import { useState, useEffect } from "react";

interface Application {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string | null;
  status: string;
  amount: number | null;
  message: string | null;
  createdAt: string;
  investment?: { name: string; category?: { name: string } } | null;
}

const STATUSES = ["new", "contacted", "approved", "rejected"];
const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  new: { bg: "rgba(196,102,58,0.1)", text: "#C4663A" },
  contacted: { bg: "rgba(184,149,79,0.1)", text: "#B8954F" },
  approved: { bg: "rgba(74,124,89,0.1)", text: "#4A7C59" },
  rejected: { bg: "rgba(158,58,43,0.1)", text: "#9E3A2B" },
};

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (filterType) params.set("type", filterType);
    if (filterStatus) params.set("status", filterStatus);
    fetch(`/api/applications?${params}`).then(r => r.json()).then(setApps);
  }, [filterType, filterStatus]);

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/applications/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setApps(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Applications</h1>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <select value={filterType} onChange={e => setFilterType(e.target.value)} className="text-sm rounded-lg px-3 py-2" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
          <option value="">All types</option>
          <option value="investor">Investor</option>
          <option value="business">Business</option>
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="text-sm rounded-lg px-3 py-2" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
          <option value="">All statuses</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["Name", "Email", "Type", "Investment", "Amount", "Status", "Date", "Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase" style={{ color: "var(--muted-foreground)", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {apps.map(app => {
                const sc = STATUS_COLORS[app.status] || STATUS_COLORS.new;
                return (
                  <tr key={app.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "var(--foreground)" }}>{app.name}</td>
                    <td className="px-4 py-3" style={{ color: "var(--muted-foreground)" }}>{app.email}</td>
                    <td className="px-4 py-3"><span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: "var(--surface-2)", color: "var(--foreground)" }}>{app.type}</span></td>
                    <td className="px-4 py-3" style={{ color: "var(--muted-foreground)" }}>{app.investment?.name || "—"}</td>
                    <td className="px-4 py-3" style={{ color: "var(--foreground)" }}>{app.amount ? `€${app.amount.toLocaleString()}` : "—"}</td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: sc.bg, color: sc.text }}>{app.status}</span></td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted-foreground)" }}>{new Date(app.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <select value={app.status} onChange={e => updateStatus(app.id, e.target.value)} className="text-xs rounded px-2 py-1" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {apps.length === 0 && <p className="text-center py-8 text-sm" style={{ color: "var(--muted-foreground)" }}>No applications found</p>}
      </div>
    </div>
  );
}
