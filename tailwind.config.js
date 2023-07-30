/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#a259ff",
        background: "#263244",
      },
      fontFamily: {
        generalSans: ["Generalsans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
