/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1440px'
    },
    extend: {
      colors: {
        red: '#e57474',
        green: '#8ccf7e',
        yellow: '#e5c76b',
        blue: '#67b0e8',
        magenta: '#c47fd5',
        cyan: '#6cbfbf',
        lightGray: '#b3b9b8',
        white: '#dadada',
        bg: '#232a2d',
        bgDark: '#141b1e',
        bgDarker: '#0f1619',
      }
    },
  },
  plugins: [],
}
