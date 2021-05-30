import { Text } from 'react-native';
import { debounce } from 'lodash';
import Config from 'react-native-config';
import I18n from '../../shared/I18n/I18n';
import Header from '../components/sections/header';
import HamburgerButton from '../../shared/components/buttons/HamburgerButton';
import { Images } from '../../shared/themes';
import RegularButton from '../../shared/components/buttons/RegularButton';
import Alerts from '../../shared/components/Alerts';
import ImagePickingService from '../../shared/services/ImagePickingService';
import { CustomScroll, LogoImage, SafeView } from '../../shared/styled/global.ltr.styles';

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
    <SafeView>
      <Header leftComponent={<HamburgerButton />} />
      <CustomScroll contentInsetAdjustmentBehavior="automatic">
        <LogoImage source={Images.logo} />
        <Text>{`${I18n.t('homeScreen.title')} to ${Config.APP_NAME}`}</Text>
        <RegularButton title={I18n.t('homeScreen.camera')} onPress={getImage} />
      </CustomScroll>
    </SafeView>
  );
};

export default MainScreen;
