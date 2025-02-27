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
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		animation: {
  			spring: 'spring 1s cubic-bezier(0.25, 1, 0.5, 1) forwards',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate'
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
  			},
  			'aurora-border': {
  				'0%, 100%': {
  					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
  				},
  				'25%': {
  					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
  				},
  				'50%': {
  					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
  				},
  				'75%': {
  					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
  				}
  			},
  			'aurora-1': {
  				'0%, 100%': {
  					top: '0',
  					right: '0'
  				},
  				'50%': {
  					top: '50%',
  					right: '25%'
  				},
  				'75%': {
  					top: '25%',
  					right: '50%'
  				}
  			},
  			'aurora-2': {
  				'0%, 100%': {
  					top: '0',
  					left: '0'
  				},
  				'60%': {
  					top: '75%',
  					left: '25%'
  				},
  				'85%': {
  					top: '50%',
  					left: '50%'
  				}
  			},
  			'aurora-3': {
  				'0%, 100%': {
  					bottom: '0',
  					left: '0'
  				},
  				'40%': {
  					bottom: '50%',
  					left: '25%'
  				},
  				'65%': {
  					bottom: '25%',
  					left: '50%'
  				}
  			},
  			'aurora-4': {
  				'0%, 100%': {
  					bottom: '0',
  					right: '0'
  				},
  				'50%': {
  					bottom: '25%',
  					right: '40%'
  				},
  				'90%': {
  					bottom: '50%',
  					right: '25%'
  				}
  			},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
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
