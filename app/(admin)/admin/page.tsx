"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Briefcase, TrendingUp, Users } from "lucide-react";

interface Application {
  id: string;
  type: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  investment?: { name: string } | null;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ applications: 0, investments: 0, investors: 0, newApps: 0 });
  const [recentApps, setRecentApps] = useState<Application[]>([]);

  useEffect(() => {
    fetch("/api/applications").then(r => r.json()).then((apps: Application[]) => {
      setRecentApps(apps.slice(0, 5));
      setStats(prev => ({ ...prev, applications: apps.length, newApps: apps.filter(a => a.status === "new").length }));
    });
    fetch("/api/investments").then(r => r.json()).then((invs: { investors: number }[]) => {
      setStats(prev => ({
        ...prev,
        investments: invs.length,
        investors: invs.reduce((sum, i) => sum + (i.investors || 0), 0),
      }));
    });
  }, []);

  const statCards = [
    { label: "Total Applications", value: stats.applications, icon: FileText, color: "var(--accent)" },
    { label: "New (Pending)", value: stats.newApps, icon: TrendingUp, color: "var(--gold)" },
    { label: "Investments", value: stats.investments, icon: Briefcase, color: "#4A7C59" },
    { label: "Total Investors", value: stats.investors, icon: Users, color: "#8B5CF6" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map(s => (
          <div key={s.label} className="card" style={{ padding: "1.25rem" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${s.color}15`, color: s.color }}>
                <s.icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}>{s.value}</p>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="card" style={{ padding: 0 }}>
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Recent Applications</h2>
          <Link href="/admin/applications" className="text-xs font-medium" style={{ color: "var(--accent)" }}>View all →</Link>
        </div>
        {recentApps.length === 0 ? (
          <p className="text-sm text-center py-8" style={{ color: "var(--muted-foreground)" }}>No applications yet</p>
        ) : (
          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {recentApps.map(app => (
              <div key={app.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{app.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{app.email} · {app.type}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: app.status === "new" ? "rgba(196,102,58,0.1)" : "rgba(74,124,89,0.1)", color: app.status === "new" ? "#C4663A" : "#4A7C59" }}>{app.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
