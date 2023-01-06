/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'glow-border': 'linear-gradient(90deg, #dc2626 0%, #71C4FFFF 100%);',
      },
      keyframes: {
        rotate: {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        spin_word: {
          '10%': { transform: 'translateY(-112%)' },
          '25%': { transform: 'translateY(-100%)' },
          '35%': { transform: 'translateY(-212%)' },
          '50%': { transform: 'translateY(-200%)' },
          '60%': { transform: 'translateY(-312%)' },
          '75%': { transform: 'translateY(-300%)' },
          '85%': { transform: 'translateY(-412%)' },
          '100%': { transform: 'translateY(-400%)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
        spin_word: 'spin_word 6s infinite',
        spin_slow: '4s rotate linear infinite',
      },
    },
  },
  plugins: [],
};
