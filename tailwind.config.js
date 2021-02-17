module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          primary: 'rgb(29, 161, 242)',
          light: 'rgba(29, 161, 242, 0.1)',
          dark: 'rgb(26, 145, 218)',
        },
        gray: {
          1: 'rgb(245, 248, 250)',
          2: 'rgb(225, 232, 237)',
          3: 'rgb(170, 184, 194)',
          4: 'rgb(101, 119, 134)'
        },
        dark: 'rgb(20, 23, 26)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
