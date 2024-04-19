/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#891619",
        secondary: "#F4E5DE",
        dark: "#1B1B1B",
        gray: "#B2B0BB",
        light: "#F8F1F1",
        darkTwo: "#2E0708",
        lightTwo: "#FFFFFF",
        tertiary: "#450B0D",
        cyber: "rgb(102, 102, 102)",
      },
      fontFamily: {
        hat: "'Red Hat Display', sans-serif",
      },
      backgroundImage: {
        aboutBg: "url('../src/assets/aboutBanner.png')",
        contactBg: "url('../src/assets/contactBanner.png')",
      },
    },
  },
  plugins: [],
};
