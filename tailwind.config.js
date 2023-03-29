module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "410px",
      xxs: "450px",
      xs: "520px",
      nav_logo: "550px",
      sm: "640px",
      md: "768px",
      base: "870px",
      md_link: "980px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1650px",
      "4xl": "1850px",
      "5xl": "2140px",
    },
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

