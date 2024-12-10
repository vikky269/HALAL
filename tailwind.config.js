/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:[ 'Work Sans', 'Rubik', 'Barlow']
      }
    },
  },
  plugins: [],
}
