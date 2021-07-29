module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      logo: ["logo-font"],
      k2d: ["k2d"],
      rubik: ["rubik"],
      fugaz: ["fugaz"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
