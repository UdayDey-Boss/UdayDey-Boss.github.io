import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        borderStrong: "rgb(var(--color-borderStrong) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        faint: "rgb(var(--color-faint) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentDeep: "rgb(var(--color-accentDeep) / <alpha-value>)",
        accentTint: "rgb(var(--color-accentTint) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["'Instrument Sans'", "Helvetica", "Arial", "sans-serif"],
        mono: ["'Space Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      transitionTimingFunction: {
        system: "cubic-bezier(.2,.7,.3,1)",
      },
    },
  },
  plugins: [],
 };

export default config;
