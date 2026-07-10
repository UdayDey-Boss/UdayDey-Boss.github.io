import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F7F5",
        surface: "#FFFFFF",
        border: "#E4E3DE",
        borderStrong: "#D3D1C9",
        ink: "#14151A",
        muted: "#6B6D76",
        faint: "#9A9CA3",
        accent: "#3049E0",
        accentDeep: "#1F2E9E",
        accentTint: "#EEF0FC",
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
