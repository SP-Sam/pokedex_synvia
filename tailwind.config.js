module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob-1': '425px',
      'sm': '640px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'purple-0': '#b13cff',
        'purple-1': '#d699ff',
        'purple-2': '#e3b9ff'
      },
    },
  },
  plugins: [],
}