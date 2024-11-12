/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm:"567px",
      md: "768px",
      lg:"904px",
      xl: "1000px",
      "2xl":"1100px"
    },
    extend: {
      container:{
        center:true,
        padding:"0.1rem",
      }
    },
  },
  plugins: [],
});
