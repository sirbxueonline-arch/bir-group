import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EE",
        ink: "#1A1A1A",
        ember: "#E8572A",
        "ember-light": "#FF7A52",
        sand: "#EDE8E1",
        stone: "#888074",
        charcoal: "#2A2A2A",
      },
      fontFamily: {
        display: ["var(--font-big-shoulders)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
