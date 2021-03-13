module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      fontFamily: {
        default: ['Raleway', 'sans-serif'],
        hero: ['Dancing Script', 'cursive']
      },
      colors: {
        primary: '#e5bda7',
        secondary: '#fff7ee',
        tertiary: '#74583e',
        accentOne: '#b4607b',
        accentTwo: '#de6262',
        dark: '#5e6572'
      }
    },
  },
  variants: {},
  plugins: [],
}
