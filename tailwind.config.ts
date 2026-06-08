/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1F3A",
          800: "#081627",
        },
        blue: {
          primary: "#1E5BB8",
          accent: "#2E6FD6",
          light: "#4FC3F7",
        },
        silver: "#C7D2DE",
        text: {
          light: "#EAF1FB",
          dark: "#0B1F3A",
        },
        bg: {
          light: "#F4F8FD",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        display: ["5.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["2.5rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        h3: ["1.75rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "6rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.1)",
        "glow": "0 0 20px rgba(46, 111, 214, 0.3)",
        "glow-cyan": "0 0 30px rgba(79, 195, 247, 0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
