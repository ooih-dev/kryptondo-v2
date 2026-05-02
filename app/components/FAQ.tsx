"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden transition-all duration-200"
          style={{
            border: `1px solid ${open === i ? "var(--accent)" : "var(--border)"}`,
            background: open === i ? "var(--accent-glow)" : "var(--surface)",
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <p
              className="font-semibold tracking-tight-sub"
              style={{
                fontSize: "0.9375rem",
                color: open === i ? "var(--accent)" : "var(--foreground)",
                transition: "color 0.2s ease",
              }}
            >
              {item.q}
            </p>
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
              style={{
                background: open === i ? "var(--accent)" : "var(--surface-2)",
                border: `1px solid ${open === i ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              <svg
                width="10"
                height="10"
                fill="none"
                stroke={open === i ? "#fff" : "var(--muted-foreground)"}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
              >
                <path d="M5 1v8M1 5h8" />
              </svg>
            </div>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p
                  className="px-5 pb-4 text-sm leading-body"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
