import { SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { debounce } from 'lodash';
import Config from 'react-native-config';
import I18n from '../../shared/I18n/I18n';
import HomePageLtrStyle from '../../shared/styles/homePage.ltr.style';
import Header from '../components/sections/header';
import HamburgerButton from '../../shared/components/buttons/HamburgerButton';
import { Images } from '../../shared/themes';
import RegularButton from '../../shared/components/buttons/RegularButton';
import Alerts from '../../shared/components/Alerts';
import ImagePickingService from '../../shared/services/ImagePickingService';

const MainScreen = (): JSX.Element => {
  const onImagePicked = (photoResponse): void => {
    if (photoResponse.didCancel) {
      return;
    }
    const { uri } = photoResponse.assets ? photoResponse.assets[0] : { uri: '' };
    console.warn(`image url is ${uri}`);
  };
  const getImage = () => {
    Alerts.twoActionsAlert(
      I18n.t('info'),
      I18n.t('chooseCameraOrGallery'),
      I18n.t('camera'),
      () => debounce(ImagePickingService.captureImage, 150)(onImagePicked),
      I18n.t('gallery'),
      () => debounce(ImagePickingService.chooseFile, 150)(onImagePicked),
    );
  };
  return (
    <>
      <Header leftComponent={<HamburgerButton />} />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={HomePageLtrStyle.scrollView}>
          <Image style={HomePageLtrStyle.logo} source={Images.logo} />
          <Text>{`${I18n.t('homeScreen.title')} to ${Config.APP_NAME}`}</Text>
          <RegularButton title={I18n.t('homeScreen.camera')} onPress={getImage} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default MainScreen;
