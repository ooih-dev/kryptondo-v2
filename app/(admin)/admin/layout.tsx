"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Briefcase, LogOut } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/applications", label: "Applications", icon: FileText },
  { href: "/admin/investments", label: "Investments", icon: Briefcase },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; name: string | null } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.user) setUser(d.user); else if (pathname !== "/admin/login") router.push("/admin/login"); })
      .catch(() => { if (pathname !== "/admin/login") router.push("/admin/login"); })
      .finally(() => setLoading(false));
  }, [pathname, router]);

  if (pathname === "/admin/login") return <>{children}</>;
  if (loading) return <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}><p style={{ color: "var(--muted-foreground)" }}>Loading...</p></div>;
  if (!user) return null;

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="flex min-h-screen" style={{ background: "var(--background)" }}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <div className="p-6">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: "var(--accent)", color: "#fff", fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic" }}>K</div>
            <span className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>Admin Panel</span>
          </Link>
        </div>
        <nav className="px-3 space-y-1">
          {NAV.map(item => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" style={{ background: active ? "var(--accent-subtle)" : "transparent", color: active ? "var(--accent)" : "var(--muted-foreground)" }}>
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{user.name || user.email}</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{user.email}</p>
            </div>
            <button onClick={handleLogout} className="p-2 rounded-lg hover:bg-[var(--surface-2)]" style={{ color: "var(--muted-foreground)" }}>
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
