/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'staples-red': '#cc0000',
        'staples-blue': '#037f96',
        'staples-grey': '#747679',
      },
    },
  },
  plugins: [require('tailgrids/plugin')],
};
