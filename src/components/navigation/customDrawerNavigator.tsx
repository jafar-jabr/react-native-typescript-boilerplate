import { Text, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import { version } from '../../../package.json';
import I18n from '../../../shared/I18n/I18n';
import { requestLogout } from '../../redux/actions/loginActions';

import NavigationLtrStyle from '../../../shared/styles/navigation.ltr.style';
import UserAvatar from '../../../shared/components/sections/userAvatar';
import customDrawerRoutes from './customDrawerRoutes';

const CustomDrawerNavigator = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, imgURL } = {
    firstName: 'test1',
    lastName: 'test2',
    email: 'info@yahoo.com',
    imgURL: null,
  };
  const reviewStarsView = () => (
    <View style={NavigationLtrStyle.RatingWrapper}>
      <View style={NavigationLtrStyle.RatingText}>
        <Text style={NavigationLtrStyle.ReviewsText}>{I18n.t('reviews').toLowerCase()}</Text>
      </View>
    </View>
  );

  const customDrawerUI = () => (
    <>
      <View style={NavigationLtrStyle.HeaderView}>
        <UserAvatar imageURL={imgURL} firstName={firstName} lastName={lastName} theme="#ffffff" />
        <View style={NavigationLtrStyle.HeaderContainer}>
          <View style={NavigationLtrStyle.HeaderRow}>
            <Text style={NavigationLtrStyle.UserText} numberOfLines={0}>
              {`${firstName} ${lastName}`}
            </Text>
          </View>
          <View style={NavigationLtrStyle.HeaderRow}>
            <Text style={NavigationLtrStyle.UserEmail} numberOfLines={1} ellipsizeMode="middle">
              {email}
            </Text>
          </View>
          <View style={NavigationLtrStyle.HeaderRow}>{reviewStarsView()}</View>
        </View>
      </View>
      <SafeAreaView style={NavigationLtrStyle.MenuSafeAreaView}>
        <ScrollView>
          {customDrawerRoutes().map((section, index) => (
            <View key={index.toString()}>
              <View style={NavigationLtrStyle.OrdersSection}>
                <Text style={NavigationLtrStyle.HeaderSection}>{section.title}</Text>
                {section.data.map((item) => (
                  <TouchableOpacity key={item.title} onPress={item.onclick}>
                    <View style={NavigationLtrStyle.OrderItemMenu}>
                      <Icon style={NavigationLtrStyle.MenuIcon} name={item.icon} />
                      <Text style={NavigationLtrStyle.MenuItem}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              <Divider />
            </View>
          ))}
          <Text style={NavigationLtrStyle.AppVersion}>{`v${version}`}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );

  const logout = () => {
    dispatch(requestLogout({}));
  };
  const androidCustomDrawerUI = () => (
    <SafeAreaView style={NavigationLtrStyle.MenuView}>
      {customDrawerUI()}
      <TouchableOpacity onPress={logout}>
        <View style={NavigationLtrStyle.FooterWrapper}>
          <View style={NavigationLtrStyle.FooterIconView}>
            <Icon style={NavigationLtrStyle.MenuIcon} name="exit-to-app" />
          </View>
          <Text style={NavigationLtrStyle.FooterLabel}>{I18n.t('logout_button')}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
  const iOSCustomDrawerUI = () => (
    <View style={NavigationLtrStyle.FlexedYellowView}>
      <SafeAreaView style={NavigationLtrStyle.MenuView}>{customDrawerUI()}</SafeAreaView>
      <TouchableOpacity onPress={logout}>
        <View style={NavigationLtrStyle.FooterWrapper}>
          <View style={NavigationLtrStyle.FooterIconView}>
            <Icon style={NavigationLtrStyle.MenuIcon} name="exit-to-app" />
          </View>
          <Text style={NavigationLtrStyle.FooterLabel}>{I18n.t('logout_button')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return {
    ...(Platform.OS === 'ios' ? iOSCustomDrawerUI() : androidCustomDrawerUI()),
  };
};

export default CustomDrawerNavigator;
