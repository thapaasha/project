module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#01422B",
        white: "#FCFBFB",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
