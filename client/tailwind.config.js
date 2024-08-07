/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D28D9', 
          DEFAULT: '#4C1D95',
          dark: '#3B0B8C',
        },
        secondary: {
          light: '#22D3EE',
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        customGreen: '#10B981',
        customRed: '#EF4444',
      },
    },
  },
  plugins: [],
};
