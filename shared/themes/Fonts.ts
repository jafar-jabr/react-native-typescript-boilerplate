import { Dimensions, PixelRatio, Platform } from 'react-native';

const responsiveFont = (size: number) => {
	const { width: SCREEN_WIDTH } = Dimensions.get('window');
	const scale = SCREEN_WIDTH / 320;
	const newSize = size * scale;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const size = {
	h1: responsiveFont(38),
	h2: responsiveFont(34),
	h3: responsiveFont(30),
	h4: responsiveFont(26),
	h5: responsiveFont(20),
	h6: responsiveFont(19),
	input: responsiveFont(18),
	regular: responsiveFont(17),
	medium: responsiveFont(14),
	small: responsiveFont(12),
	tiny: responsiveFont(8.5)
};

const fonts = {
	montserrat: {
		black: 'Montserrat-Black',
		blackItalic: 'Montserrat-BlackItalic',
		bold: 'Montserrat-Bold',
		boldItalic: 'Montserrat-BoldItalic',
		extraBold: 'Montserrat-ExtraBold',
		extraBoldItalic: 'Montserrat-ExtraBoldItalic',
		extraLight: 'Montserrat-ExtraLight',
		extraLightItalic: 'Montserrat-ExtraLightItalic',
		italic: 'Montserrat-Italic',
		light: 'Montserrat-Light',
		lightItalic: 'Montserrat-LightItalic',
		medium: 'Montserrat-Medium',
		mediumItalic: 'Montserrat-MediumItalic',
		regular: 'Montserrat-Regular',
		semiBold: 'Montserrat-SemiBold',
		semiBoldItalic: 'Montserrat-SemiBoldItalic',
		thin: 'Montserrat-Thin',
		thinItalic: 'Montserrat-ThinItalic'
	}
};

const FontExporter = {
	size,
	fonts
};
export default FontExporter;
