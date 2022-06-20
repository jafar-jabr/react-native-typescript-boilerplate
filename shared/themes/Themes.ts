import { Dimensions, PixelRatio, Platform } from 'react-native';

const responsiveFont = (size: number) => {
	const { width: SCREEN_WIDTH } = Dimensions.get('window');
	// based on iphone 5s's scale
	const scale = SCREEN_WIDTH / 320;
	const newSize = size * scale;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const AppThemeName = () => {
	return {
		mode: 'light',
		colors: {
			accent: '#00cbb2',
			primaryOpacity: '#FFBE9D',
			green: '#4EDCCA',
			yellow: '#EDBD40',
			red: '#EB3300',
			white: '#FFFFFF',
			backdrop: 'rgba(0, 0, 0, 0.5)',
			inputBg: 'rgba(0, 0, 0, 0.05)',
			inputBgFocused: '#FFFFFF',
			placeholder: 'rgba(0, 0, 0, 0.6)',
			placeholderFocused: 'rgba(0, 0, 0, 0.3)',
			disabled: 'rgba(0, 0, 0, 0.1)',
			border: '#E5E7E8',
			darkGrey: '#80898A',
			grey: '#BFC4C5',
			text: '#000000',
			background: '#FFFFFF',
			primaryDarkest: '#01579B',
			primaryDark: '#0277BD',
			primary: '#0288D1',
			primaryLight: '#03A9F4',
			accentColor: '#F9A825',
			nearlyWhite: '#FAFAFA',
			black: '#000000',
			nearlyBlack: '#213333',
			lightText: '#ffffff',
			greyText: '#4a6572',
			darkText: '#253840',
			greyBackground: '#90A4AE'
		},
		fonts: {
			h0: responsiveFont(35),
			h1: responsiveFont(28),
			h2: responsiveFont(26),
			h3: responsiveFont(24),
			h4: responsiveFont(22),
			h5: responsiveFont(20),
			h6: responsiveFont(18),
			big: responsiveFont(16),
			regular: responsiveFont(14),
			medium: responsiveFont(12),
			small: responsiveFont(10),
			tiny: responsiveFont(8)
		},
		metrics: {
			xxs: 5,
			xs: 10,
			s: 16,
			m: 20,
			l: 24,
			xl: 32,
			xxl: 42,
			modals: 30,
			btns: 56,
			icons: 46,
			btmBtns: 66,
			avatar: 100,
			image: 160,
			bigImage: 200
		},
		roundness: 8
	};
};

const ThemeExporter = {
	AppThemeName
};

export default ThemeExporter;

export const palette = {
	primary: '#0564d4',
	secondary: '#ff6a00',
	background: '#f6f8fa',
	white: '#fff',
	black: '#101214',
	button: '#1c1e21',
	shadow: '#757575',
	text: '#30363b',
	borderColor: '#d0d7de',
	borderColorDark: '#333942',
	placeholder: '#a1a1a1',
	danger: 'rgb(208, 2, 27)',
	title: 'rgb(102, 102, 102)',
	separator: 'rgb(194, 194, 195)',
	highlight: 'rgb(199, 198, 203)',
	blackOverlay: 'rgba(0,0,0,0.6)',
	iconWhite: '#fff',
	iconBlack: '#101214',
	dynamicWhite: '#fff',
	dynamicBlack: '#1c1e21',
	dynamicBackground: '#fff',
	transparent: 'transparent',
	calpyse: '#2b7488'
};
