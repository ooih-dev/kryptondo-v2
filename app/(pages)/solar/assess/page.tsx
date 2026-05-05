"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sun, CheckCircle, Upload, MapPin } from "lucide-react";
import { useLocalePath } from "../../../i18n/useLocale";
import { useTranslations } from "../../../i18n/useTranslations";

const SOLAR_ACCENT = "#F59E0B";
const SOLAR_GREEN = "#4A7C59";

export default function SolarAssessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    address: "", roofSize: "", roofType: "flat", orientation: "south",
    name: "", email: "", phone: "", notes: "",
  });
  const lp = useLocalePath();
  const t = useTranslations("solar");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "rooftop_assessment",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `Address: ${form.address}\nRoof size: ${form.roofSize}m²\nRoof type: ${form.roofType}\nOrientation: ${form.orientation}\nNotes: ${form.notes}`,
          data: { address: form.address, roofSize: form.roofSize, roofType: form.roofType, orientation: form.orientation },
        }),
      });
      setSubmitted(true);
    } catch {
      alert(t.assessError);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--background)" }}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(74,124,89,0.12)", color: SOLAR_GREEN }}>
            <CheckCircle size={32} />
          </div>
          <h1 className="font-bold text-2xl mb-3" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
            {t.assessSuccessTitle}
          </h1>
          <p className="text-base leading-body mb-8" style={{ color: "var(--muted-foreground)" }}>
            {t.assessSuccessMsg}
          </p>
          <Link href={lp("/solar")} className="btn-primary text-base !py-3 !px-8" style={{ background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT }}>
            <span>{t.assessSuccessBack}</span>
          </Link>
        </div>
      </div>
    );
  }

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    outline: "none",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--background)" }}>
      <div className="container-md mx-auto max-w-xl">
        <Link href={lp("/solar")} className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity" style={{ color: "var(--muted-foreground)" }}>
          <ArrowLeft size={16} /> {t.assessSuccessBack.replace(" →", "")}
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.12)", color: SOLAR_ACCENT }}>
            <Sun size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif), Georgia, serif" }}>
              {t.assessTitle}
            </h1>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{t.assessSubtitle}</p>
          </div>
        </div>

        <div className="rounded-xl p-4 mb-8 mt-6" style={{ background: "rgba(74,124,89,0.06)", border: "1px solid rgba(74,124,89,0.15)" }}>
          <p className="text-xs font-semibold uppercase mb-2" style={{ color: SOLAR_GREEN, letterSpacing: "0.08em" }}>{t.assessWhyTitle}</p>
          <div className="space-y-1.5">
            {[t.assessWhy1, t.assessWhy2, t.assessWhy3, t.assessWhy4].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: SOLAR_GREEN }} />
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessAddress} *</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--muted-foreground)" }} />
              <input required type="text" value={form.address} onChange={(e) => update("address", e.target.value)}
                placeholder="Straße, Stadt, PLZ" className="w-full rounded-xl pl-10 pr-4 py-3 text-sm" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessRoofSize} *</label>
              <input required type="number" value={form.roofSize} onChange={(e) => update("roofSize", e.target.value)}
                placeholder="z.B. 400" className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessRoofType} *</label>
              <select value={form.roofType} onChange={(e) => update("roofType", e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle}>
                <option value="flat">{t.flat}</option>
                <option value="pitched">{t.pitched}</option>
                <option value="mixed">{t.mixed}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessOrientation} *</label>
            <select value={form.orientation} onChange={(e) => update("orientation", e.target.value)}
              className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle}>
              <option value="south">{t.south}</option>
              <option value="east-west">{t.eastWest}</option>
              <option value="east">{t.east}</option>
              <option value="west">{t.west}</option>
              <option value="north">{t.north}</option>
              <option value="unknown">{t.unknown}</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessPhotos}</label>
            <div className="rounded-xl p-6 text-center" style={{ border: "2px dashed var(--border)" }}>
              <Upload size={24} className="mx-auto mb-2" style={{ color: "var(--muted-foreground)" }} />
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{t.assessPhotosNote}</p>
            </div>
          </div>

          <hr style={{ borderColor: "var(--border)" }} />

          <div>
            <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessName} *</label>
            <input required type="text" value={form.name} onChange={(e) => update("name", e.target.value)}
              placeholder="Vollständiger Name" className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessEmail} *</label>
              <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                placeholder="du@firma.de" className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessPhone}</label>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                placeholder="+49 ..." className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-1.5 block" style={{ color: "var(--foreground)" }}>{t.assessNotes}</label>
            <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)}
              placeholder={t.assessNotesPlaceholder} rows={3}
              className="w-full rounded-xl px-4 py-3 text-sm resize-none" style={inputStyle} />
          </div>

          <button type="submit" disabled={loading}
            className="btn-primary w-full text-center !py-3.5" style={{ fontSize: "1rem", background: SOLAR_ACCENT, borderColor: SOLAR_ACCENT, opacity: loading ? 0.7 : 1 }}>
            <span>{loading ? "..." : t.assessSubmit}</span>
          </button>
          <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
            {t.assessDisclaimer}
          </p>
        </form>
      </div>
    </div>
  );
}
