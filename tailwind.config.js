// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}", // Include your styles directory
  ],
  theme: {
    extend: {
      animation: {
        moveit: 'moveit 900ms ease forwards',
        moveitback: 'moveitback 400ms ease forwards',
      },
      keyframes: {
        moveit: {
          '0%': { transform: 'translateY(0) scale(0.96)' },
          '20%': { transform: 'translateY(80px) scale(1.1)' },
          '40%': { transform: 'translateY(50px) scale(0.98)' },
          '60%': { transform: 'translateY(62px) scale(1.05)' },
          '80%': { transform: 'translateY(60px) scale(1.01)' },
          '100%': { transform: 'translateY(60px) scale(1)' },
        },
        moveitback: {
          '0%': { transform: 'translateY(60px)' },
          '100%': { transform: 'translateY(0) scale(0.96)' },
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'], // Ensure 'Inter' is defined
      },
    },
  },
  plugins: [],
}
