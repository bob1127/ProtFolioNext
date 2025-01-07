module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
  	darkMode: 'class',
  	extend: {
  		fontFamily: {
  			custom: [
  				'ResourceHanRoundedCN-Heavy',
  				'sans-serif'
  			]
  		},
  		screens: {
  			portrait: {
  				raw: '(orientation: portrait)'
  			}
  		},
  		boxShadow: {
  			custom: '8px 8px 0px rgba(45, 85, 255 ,.9)'
  		},
  		colors: {
  			'black-rgba': 'rgba(0, 0, 0, 0.25)',
  			blue: {
  				'100': '#2ddcff'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			spring: 'spring 1s cubic-bezier(0.25, 1, 0.5, 1) forwards'
  		},
  		keyframes: {
  			spring: {
  				'0%': {
  					top: '60%'
  				},
  				'20%': {
  					top: '30%'
  				},
  				'50%': {
  					top: '15%'
  				},
  				'70%': {
  					top: '22%'
  				},
  				'100%': {
  					top: '20%'
  				}
  			},
  			textRotation: {
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			moveit: {
  				'0%': {
  					transform: 'translateY(0) scale(0.96)'
  				},
  				'20%': {
  					transform: 'translateY(80px) scale(1.1)'
  				},
  				'40%': {
  					transform: 'translateY(50px) scale(0.98)'
  				},
  				'60%': {
  					transform: 'translateY(62px) scale(1.05)'
  				},
  				'80%': {
  					transform: 'translateY(60px) scale(1.01)'
  				},
  				'100%': {
  					transform: 'translateY(60px) scale(1)'
  				}
  			},
  			moveitback: {
  				'0%': {
  					transform: 'translateY(60px)'
  				},
  				'100%': {
  					transform: 'translateY(0) scale(0.96)'
  				}
  			}
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(90.76deg, #28282b 0%, rgba(40, 40, 43, 0) 100%)'
  		},
  		height: {
  			'screen-50': '50vh'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [ require('tailwind-scrollbar-hide'), require("tailwindcss-animate")],
};
