/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // synchronized with the landing theme (darker gradient companion applied in styles)
        zapGreen: "#6fa1de",
        zapGray: "#001D39",
        zapOrange: "#F99D1C",
        zapBlue: "#00AEEF"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
