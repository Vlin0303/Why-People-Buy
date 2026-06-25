/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom font using CSS variable set in layout.jsx
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      // Design token colors — edit these to retheme the whole site
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        muted: "#f7f7f7",
        "muted-foreground": "#737373",
        border: "#e5e5e5",
        "border-strong": "#d4d4d4",
        accent: "#0a0a0a",
      },
      // Spacing tokens for consistent section padding
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      // Smooth transitions
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
