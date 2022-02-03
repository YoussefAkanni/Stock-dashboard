module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      gridTemplateRows: {
        7: "reapeat(7, minmax(0,1fr))",
        8: "reapeat(8, minmax(0,1fr))",
      },
    },
  },
  plugins: [],
};
