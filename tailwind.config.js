/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include React files
  ],
  theme: {
    extend: {
      colors:{
        customgrey:{
          100: '#141414'
        }
      },
      text:{
        xs: "15px"
      }
    },
  },
  plugins: [],
};
