/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Orbitron", "sans-serif"],
    },
    fontSize: {
      xs: "8px",
      sm: "10px",
      md: "12px",
      lg: "14px",
      "2lg": "16px",
      "3lg": "20px",
      xl: "24px",
      "2xl": "36px",
      "3xl": "48px",
      "4xl": "56px",
    },
    extend: {
      colors: {
        text: "#F9F9F9",
        primary: "#0837DE",
        secondary: "#089EDE",
        background: {
          1: "#0D0D0D", //Default Color
          2: "#293148", //Contrast type1 for Default
          3: "#28304A", //Contrast type2 for Default (border)
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
