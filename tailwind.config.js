/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        "2xl": "9rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--ibm-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--dm-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: "#84EC8E",
        dark: "#03090E",
      },
    },
  },
  plugins: [],
};
