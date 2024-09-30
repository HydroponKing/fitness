/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				//Backgrounds
				green_bg: '#BCEC30',
				white_bg: '#FFFFFF',
				gray_bg: '#F7F7F7',
				//Modal active background
				modal_active_bg: '#FAFAFA',
				//Scroll background and thumb
				scroll_bg: '#F7F7F7',
				scroll_thumb_bg: '#000000',
				//Enter button status backgrounds
				regular: '#BCEC30',
				hover: '#C6FF00',
				active: '#000000',
				inactive: '#F7F7F7',
				//Text
				black: '#202020',
				white: '#FFFFFF',
				gray: '#999999',
				number: '#BCEC30',
				error: '#DB0030',
				placeholder: '#D0CECE',
				//Progress Bar
				progress: '#00C1FF',
				no_progress: '#F7F7F7',
			},
			backgroundImage: {
				//Gradient background for recommend blocks
				black_bg: 'linear-gradient(115.81deg, #151720 34.98%, #1E212E 91.5%)',
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
