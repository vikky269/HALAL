/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-left-loop': 'moveLeftLoop 5s linear infinite',
        'move-right-loop': 'moveRightLoop 5s linear infinite',
        'marquee': 'marquee 10s linear infinite', // Add second animation here
      },
      keyframes: {
        moveLeftLoop: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveRightLoop: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        title: ['Work Sans', 'Rubik', 'Barlow'],
      },
    },
  },
  plugins: [],
};
