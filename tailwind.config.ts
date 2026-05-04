import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        muted: "var(--muted-foreground)",
        accent: "var(--accent)",
        gold: "var(--gold)",
        green: "var(--green)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Geist", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.375rem, 2vw, 1.875rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "28": "7rem",
        "36": "9rem",
      },
      borderRadius: {
        "sm": "var(--radius-sm)",
        "md": "var(--radius-md)",
        "lg": "var(--radius-lg)",
        "xl": "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        "xs": "var(--shadow-xs)",
        "sm": "var(--shadow-sm)",
        "md": "var(--shadow-md)",
        "lg": "var(--shadow-lg)",
        "xl": "var(--shadow-xl)",
      },
      letterSpacing: {
        "tight-display": "-0.02em",
        "tight-sub": "-0.01em",
      },
      transitionTimingFunction: {
        "out": "cubic-bezier(.16, 1, .3, 1)",
        "in-out": "cubic-bezier(.65, 0, .35, 1)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s cubic-bezier(.16, 1, .3, 1) forwards",
        "fade-in": "fadeIn 0.4s cubic-bezier(.16, 1, .3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
