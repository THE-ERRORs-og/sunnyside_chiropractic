/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#53683F",
        secondary: " #FFC24A",
        ascent: "#F5EDE1",
        dark_ascent:"#FFDE9D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "libre-regular": ["libre-regular", "serif"],
        "libre-bold": ["libre-bold", "serif"],
        "libre-italic": ["libre-italic", "serif"],
      },
    },
  },
  plugins: [],
};
