/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: {
          DEFAULT: "#3c82f6",
          hover: "#2372f6",
        },
        form: '#1f2937',
      }
    },
  },
  plugins: [],
}

