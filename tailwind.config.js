/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        lightgray: '#f0f2f5',
        iconcolor: '#54656f',
        bordercolor: '#e9edef',
      }
    },
  },
  plugins: [],
}

