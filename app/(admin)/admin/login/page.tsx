"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Login failed");
        return;
      }
      router.push("/admin");
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--background)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mx-auto mb-4" style={{ background: "var(--accent)", color: "#fff", fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic" }}>K</div>
          <h1 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>Admin Login</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Kryptondo Management Panel</p>
        </div>
        <form onSubmit={handleSubmit} className="card" style={{ padding: "2rem" }}>
          {error && <div className="text-sm px-3 py-2 rounded-lg mb-4" style={{ background: "rgba(196,102,58,0.1)", color: "var(--accent)" }}>{error}</div>}
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--foreground)" }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-3 py-2.5 rounded-lg text-sm" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--foreground)", outline: "none" }} placeholder="admin@kryptondo.de" />
          </div>
          <div className="mb-6">
            <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--foreground)" }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-3 py-2.5 rounded-lg text-sm" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--foreground)", outline: "none" }} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full" style={{ opacity: loading ? 0.7 : 1 }}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
