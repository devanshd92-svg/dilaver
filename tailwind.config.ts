import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0c1528",
          50: "#e8ecf4",
          100: "#c5cfde",
          200: "#9fadc5",
          300: "#7a8bab",
          400: "#5e7399",
          500: "#435d87",
          600: "#3a5076",
          700: "#2d3e5c",
          800: "#1f2c43",
          900: "#0c1528",
        },
        brand: {
          DEFAULT: "#d81e2e",
          dark: "#b01522",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
        glow: "0 0 40px rgba(216, 30, 46, 0.15)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom, rgba(12, 21, 40, 0.55) 0%, rgba(12, 21, 40, 0.85) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
