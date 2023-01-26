/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#90caf9',
			secondary: '#2f4553',
			background: '#0A1929',
			theme: '#121212',
			white: '#FFF',
			black: '#000',
		},
		screens: {
			'2xl': { max: '1920px' },
			xl: { max: '1535px' },
			lg: { max: '1279px' },
			md: { max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '575px' },
		},
		extend: {
			gridTemplateRows: {
				14: 'repeat(14, minmax(0, 1fr))',
			},
		},
	},
}
