/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '19': 'repeat(19, minmax(0, 1fr))',
      },
      colors: {
        'custom-blue': '#4336ca',
      },
    },
  },
  plugins: [],
}