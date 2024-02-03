/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        mainShadow: '0 2px 8px rgba(0, 0, 0, 0.26)'
      }
    }
  },
  plugins: []
}
