/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    fontSize: {
      xxs: "0.5rem",
      xs: "0.75rem",
      sm: "0.938rem",
      base: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.85rem",
      "4xl": "2rem",
      "5xl": "4rem",
    },
    extend: {
      colors: {
        purple: {
          500: "#8468F5",
        },
        pink: {
          500: "#EC74E7",
        },
      },
    },
  },
  plugins: [],
};
