/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#a259ff",
        background: "#263243",
        footerColor: "rgba(243, 242, 255, .75)",
      },
      fontFamily: {
        generalSans: ["Generalsans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
