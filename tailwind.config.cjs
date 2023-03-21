/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '1': '#244034',
          '2': '#D2F34C',
          '3': '#00BF58',
        },
        secondary: {
          '1': '#EFF6F3',
          '2': '#F8FDE4',
          '3': '#755146',
          '4': '#EFF6F3',
          '5': '#000000',
          '6': '#31795A',
        },
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        gordita: ['Gordita', 'sans-serif'],
      },
      content: {
        'category-icon': 'url("./assets/category-icon.svg")',
        'jobi-icon': 'url("./assets/jobi-icon.svg")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
