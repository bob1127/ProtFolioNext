module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    darkMode: 'class', // 启用 class-based dark mode
    extend: {
      boxShadow: {
        'custom-inset': 'inset -3px -7px 0 0.2rem rgba(0, 0, 128, 0.8)',
        'custom-hover': 'inset -1px -5px 0 0.2rem rgba(0, 0, 128, 0.8)',
      },
      screens: {
        portrait: { raw: '(orientation: portrait)' }, // 定义 portrait 屏幕断点
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
        blue: {
          100: '#2ddcff', // 自定义蓝色
        },
      },
      fontFamily: {
        anton: ['"Anton Placeholder"', 'sans-serif'], // 添加自定义字体
        primary: ['Inter', 'sans-serif'], // 默认字体
      },
      boxShadow: {
        custom: '8px 8px 0px rgba(45, 85, 255 ,.9)',
      },
      animation: {
        moveit: 'moveit 900ms ease forwards',
        moveitback: 'moveitback 400ms ease forwards',
        textRotation: "textRotation 8s linear infinite",
      },
      keyframes: {
        textRotation: {
          to: {
            transform: "rotate(360deg)",
          },
        },
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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90.76deg, #28282b 0%, rgba(40, 40, 43, 0) 100%)',
      },
      height: {
        'screen-50': '50vh', // 自定义高度类
      },
    },
  },
  plugins: [],
};
