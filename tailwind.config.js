const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        fira: "var(--font-fira)",
        bespoke: "var(--font-bespoke)",
        supreme: "var(--font-supreme)",
        jose: "var(--font-jose)",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "19.5px"],
        lg: ["18px", "21.94px"],
        xl: ["20px", "24.38px"],
        "2xl": ["24px", "29.26px"],
        "3xl": ["28px", "50px"],
        "4xl": ["42px", "58px"],
        "6xl": ["70px", "88px"],
        "8xl": ["96px", "106px"],
      },
    },
  },
  plugins: [],
};
