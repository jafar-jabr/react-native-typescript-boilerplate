import React from 'react';
import { SafeAreaView, ScrollView, Text, Image } from 'react-native';
import I18n from '../../../shared/I18n/I18n';
import HomePageLtrStyle from '../../../shared/styles/homePage.ltr.style';
import Header from '../../components/sections/header';
import HamburgerButton from '../../../shared/components/buttons/hamburgerButton';
import { Images } from '../../../shared/themes';

const SplashScreen = (): JSX.Element => {
  return (
    <>
      <Header leftComponent={<HamburgerButton />} />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={HomePageLtrStyle.scrollView}>
          <Image style={HomePageLtrStyle.logo} source={Images.logo} />
          <Text>{`Hello ${I18n.t('home_screen.title')}`}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default SplashScreen;
