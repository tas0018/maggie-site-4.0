module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      hero: "0.25em",
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
      },

      backgroundPosition: {
        "maggie-img": "50% 15%",
      },
      colors: {
        rum: {
          DEFAULT: "#746685",
          50: "#D1CBD7",
          100: "#C6C0CE",
          200: "#B2A9BD",
          300: "#9D92AB",
          400: "#887A99",
          500: "#746685",
          600: "#584E65",
          700: "#3D3545",
          800: "#211D26",
          900: "#050506",
        },
      },
    },
  },
  plugins: [],
}
