module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Display'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
