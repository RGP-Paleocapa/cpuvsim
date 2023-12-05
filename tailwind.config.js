/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        customOpenSans: ['Open Sans', 'sans-serif'],
      },
      // Define margin classes for normal screens
      margin: {
        '140': '140px',
      },
    },
  },
  plugins: [],
}