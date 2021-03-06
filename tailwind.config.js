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
      colors: {
        'obsidian-black': '#0d0e10',
        'green-grass': '#5CBA88',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
};
