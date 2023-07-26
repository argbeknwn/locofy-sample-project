/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oldlace: "#fff8e9",
        whitesmoke: "#ececeb",
        teal: "#00614f",
        "white-color": "#fff",
        "primary-color": "#009379",
      },
      fontFamily: {
        poppins: "Poppins",
        caveat: "Caveat",
        mulish: "Mulish",
      },
      borderRadius: {
        "69xl-2": "88.2px",
      },
    },
    fontSize: {
      sm: "0.88rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
