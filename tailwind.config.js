/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			//Container set for all pages
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1200px',
				'2xl': '1200px',
			},
		},
		extend: {
			screens: {
				//Media query set for mobile screens
				mobile: { min: '360px', max: '400px' },
			},
			boxShadow: {
				//Box-shadow set for project
				shadow_primary: '0 4px 67px -12px #00000021',
			},
			backgroundImage: {
				//Gradient background set for recommend blocks
				black_bg: 'linear-gradient(115.81deg, #151720 34.98%, #1E212E 91.5%)',
			},
			objectPosition: {
				//Course card custom img positions
				yoga: '53% -130px',
			},
			colors: {
				//Backgrounds
				green_bg: '#BCEC30',
				gray_bg: '#F7F7F7',
				//Modal active background
				modal: 'rgb(0 0 0 / 50%)',
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
			fontFamily: {
				//Custom use set for font-families
				Roboto: ['Roboto', 'sans-serif'],
			},
			keyframes: {
				//Custom keyframes for animations
				rotation: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(180deg)' },
				},
			},
			animation: {
				//Custom use set for animations
				rotation: 'rotation 150ms linear forwards',
			},
		},
	},
	plugins: [],
}
