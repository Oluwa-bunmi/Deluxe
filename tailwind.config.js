/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#891619",
        dark: "#1B1B1B",
        gray: "#B2B0BB",
      },
      fontFamily: {
        hat: "'Red Hat Display', sans-serif",
      },
    },
  },
  plugins: [],
};
