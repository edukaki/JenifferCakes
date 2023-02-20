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
    extend: {},
  },
  plugins: [],
};
