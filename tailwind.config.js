module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}