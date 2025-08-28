/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'drift-1': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(10%, -5%) scale(1.2)' },
          '100%': { transform: 'translate(0%, 0%) scale(1)' },
        },
        'drift-2': {
          '0%': { transform: 'translate(-5%, 5%) scale(1)' },
          '50%': { transform: 'translate(5%, 10%) scale(1.15)' },
          '100%': { transform: 'translate(-5%, 5%) scale(1)' },
        },
        'drift-3': {
          '0%': { transform: 'translate(5%, -5%) scale(1)' },
          '50%': { transform: 'translate(-10%, 0%) scale(1.1)' },
          '100%': { transform: 'translate(5%, -5%) scale(1)' },
        },
      },
      animation: {
        'drift-1': 'drift-1 18s ease-in-out infinite',
        'drift-2': 'drift-2 24s ease-in-out infinite',
        'drift-3': 'drift-3 30s ease-in-out infinite',
      },
      colors: {
        peach: {
          200: '#ffe0c1',
        },
      },
    },
  },
  plugins: [],
};
