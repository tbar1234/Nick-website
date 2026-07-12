import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171D19",
        pine: {
          DEFAULT: "#24402E",
          dark: "#152A1C",
          light: "#3C6349",
        },
        moss: "#8B9C7E",
        sand: {
          DEFAULT: "#F3F1E8",
          deep: "#E9E3D2",
        },
        clay: "#A2582F",
        stone: {
          line: "#DAD4C2",
        },
        charcoal: "#33392F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1320px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(23, 29, 25, 0.35)",
        card: "0 12px 32px -18px rgba(23, 29, 25, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        "ken-burns": "ken-burns 20s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
