/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0c",
        "ink-soft": "#131316",
        "ink-line": "#232328",
        bone: "#f5f3ee",
        amber: "#d4a24c",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        googlesans: ["Google Sans", "sans-serif"],
        bondia: ["Bondia", "sans-serif"],
        mortend: ["Mortend", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
