/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B91C1C ",
          light: "#eaf1ff",
          "dark-light": "rgba(67,97,238,.15)",
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
