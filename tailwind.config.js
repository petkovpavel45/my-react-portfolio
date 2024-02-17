/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'angular-red': '#dd002c',
        'node-green': '#8ac64a',
        'react-blue': '#00d7fb',
        'tailwind-blue': '#44a8b3',
        'wordpress-blue': '#1b769c',
        'html-orange': '#e44d26',
        'css-blue': '#0277bd',
        'js-yellow': '#ffd600'
      }
    },
  },
  plugins: [],
};
