// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}", // Include your styles directory
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'], // Ensure 'Inter' is defined
      },
    },
  },
  plugins: [],
}
