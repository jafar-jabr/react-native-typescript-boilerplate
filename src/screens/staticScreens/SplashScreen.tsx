import { Text } from 'react-native';
import I18n from '../../../shared/I18n/I18n';
import Header from '../../components/sections/header';
import HamburgerButton from '../../../shared/components/buttons/HamburgerButton';
import { Images } from '../../../shared/themes';
import { CustomScroll, LogoImage, SafeView } from '../../../shared/styled/global.ltr.styles';

const SplashScreen = (): JSX.Element => {
  return (
    <SafeView>
      <Header leftComponent={<HamburgerButton />} />
      <CustomScroll contentInsetAdjustmentBehavior="automatic">
        <LogoImage source={Images.logo} />
        <Text>{`Hello ${I18n.t('homeScreen.title')}`}</Text>
      </CustomScroll>
    </SafeView>
  );
};

export default SplashScreen;