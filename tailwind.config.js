/** @type {import('tailwindcss').Config} */
export default {
	future: {
		hoverOnlyWhenSupported: true
	},
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: '"Inter Variable", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			display: ['"Inter Variable", sans-serif']
		},
		extend: {
			colors: {
				primary: '#287fbf',
				'dark-secondary': '#ec8574',
				'light-secondary': '#e8403b',
				'light-background': '#ededed',
				'bg-dark': 'bg-slate-900'
			},
			keyframes: {
				animateArrowOut: {
					'0%': { opacity: 0, transform: 'translateY(0.5rem) rotate(180deg)' },
					'80%': { opacity: 0, transform: 'translateY(0.5rem) rotate(180deg)' },
					'100%': { opacity: 1, transform: 'translateY(0) rotate(180deg)' }
				},
				animateArrowIn: {
					'0%': { opacity: 0, transform: 'translateY(-0.5rem) rotate(0deg)' },
					'80%': { opacity: 0, transform: 'translateY(-0.5rem) rotate(0deg)' },
					'100%': { opacity: 1, transform: 'translateY(0) rotate(0deg)' }
				}
			},
			animation: {
				'arrow-out': 'animateArrowOut var(--duration) ease',
				'arrow-in': 'animateArrowIn var(--duration) ease'
			}
		}
	},
	plugins: []
};
