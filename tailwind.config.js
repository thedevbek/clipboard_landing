/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}',
		'./index.html',
		'./src/**/*.{html,js}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'header-image-mobile': 'url(/images/bg-header-mobile.png)',
				'header-image-desktop': 'url(/images/bg-header-desktop.png)',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			metal: ' hsl(210, 10%, 33%)',
			green: ' hsl(171, 66%, 44%)',
			grayish: 'hsl(201, 11%, 66%)',
			blue: 'hsl(233, 100%, 69%)',
            white:'#fff',
            bgfoot: 'rgb(243, 245, 247)'
		},
		fontFamily: {
			sans: ['Bai Jamjuree', 'sans-serif'],
		},
	},
	variants: {},
	plugins: [],
};
