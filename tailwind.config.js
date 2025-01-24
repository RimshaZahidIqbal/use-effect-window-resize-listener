/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      boxShadow: {
        'custom-orange': '0 0 20px #ff8c00'
      }
    },
  },
  plugins: [],
}
