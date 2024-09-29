/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      color: {
        pink: "hsl(322,100%,66%)",
        "light-pink": "hsl(321,100%,78%)",
        "light-red": "hsl(0,100%,63%)",
        "very-dark-cyan": "hsl(192,100%,9%)",
        "very-pale-blue": "hsl(207,100%,98%)",
      },
    },
  },
  plugins: [],
};
