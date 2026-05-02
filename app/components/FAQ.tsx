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
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="card cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold text-[var(--foreground)] text-sm md:text-base">{item.q}</p>
            <div
              className="w-6 h-6 rounded-full border border-[var(--border)] flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ borderColor: open === i ? "var(--accent-blue)" : undefined }}
            >
              <svg
                width="12"
                height="12"
                fill="none"
                stroke={open === i ? "var(--accent-blue)" : "var(--muted-foreground)"}
                strokeWidth={2.5}
                className={`transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
              >
                <path d="M6 1v10M1 6h10" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed pt-3 border-t border-[var(--border)] mt-3">
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
