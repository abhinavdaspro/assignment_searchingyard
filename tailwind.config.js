module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#645CBB",
        "primary-light": "#CBC8E8",
      },
      boxShadow: {
        'nav': '0px -7px 40px 5px #CBC8E8',
      }
    },
  },
  plugins: [],
}

