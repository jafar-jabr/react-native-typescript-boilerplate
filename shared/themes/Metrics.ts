import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 8,
  marginVertical: 8,
  noMargin: 0,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 4,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    splash: 300,
    splash_second: 200,
    logoWidth: 250,
    logoHeight: 80,
  },
  shopperImages: {
    subLogoWidth: 100,
    subLogoHeight: 22,
  },
  dispatcherImages: {
    subLogoWidth: 200,
    subLogoHeight: 22,
  },
  accountingImages: {
    subLogoWidth: 150,
    subLogoHeight: 22,
  },
};

export default metrics;
