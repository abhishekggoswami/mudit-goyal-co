import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#132238", paper: "#fafaf8", accent: "#0f766e" },
      boxShadow: { soft: "0 12px 32px rgba(19, 34, 56, 0.08)" }
    }
  },
  plugins: []
};
export default config;
