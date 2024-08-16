/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        active: 'inset 0px 4px #94a3b8'
      }
    },
  },
  plugins: [],
}

