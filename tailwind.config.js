/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx}',
    './pages/**/*.{js,ts,jsx}',
    './components/**/*.{js,ts,jsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx}',
  ],
  theme: {
    fontFamily: {
      'dancing-script': ['Dancing Script, cursive'],
      montserrat: ['Montserrat, sans-serif'],
    },
    extend: {
      colors: {
        'candy-pink': '#FFAAA5',
        'candy-green': '#A8E6CF',
        'dark-grey': '#423F3F',
        'green-strong': '#29A71A',
        'light-beige': '#F8F5F1',
        mustard: '#FBD655',
        'red-strong': '#E23B48',
        salmon: '#FFD3B6',
      },
    },
  },
  plugins: [],
};
