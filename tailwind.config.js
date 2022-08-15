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
      padding:{
        'sm-rem-p': '.4rem',
        '3.25rem': '3.25rem',
        '0.725rem' : '0.725rem'
      },
      lineHeight: {
        '.8': '.8',
      },
      height: {
        '2.375rem': '2.375rem',
        '0.75rem' : '0.75rem'
      },
    },
  },
  plugins: [require('tailgrids/plugin')],
};
