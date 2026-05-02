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
        navy: {
          950: "#060919",
          900: "#0A0E27",
          800: "#0F1535",
          700: "#161C45",
          600: "#1E2558",
        },
        accent: {
          blue: "#00D4FF",
          "blue-dim": "#00AACC",
          gold: "#C9A84C",
          "gold-dim": "#A8863C",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
