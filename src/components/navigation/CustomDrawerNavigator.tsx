import { Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import I18n from 'shared/I18n/I18n';
import { requestLogout } from 'src/redux/actions/LoginActions';
import { Row, SafeView } from 'shared/styled/global.ltr.styles';
import UserAvatar from 'shared/components/sections/UserAvatar';
import customDrawerRoutes from 'src/components/navigation/CustomDrawerRoutes';
import {
  RatingWrapper,
  RatingText,
  ReviewsText,
  HeaderView,
  HeaderContainer,
  UserText,
  UserEmail,
  OrdersSection,
  HeaderSection,
  OrderItemMenu,
  MenuIcon,
  MenuItem,
  AppVersion,
  FooterIconView,
  FooterWrapper,
  FooterLabel,
  FlexedYellowView,
} from 'shared/styled/customDrawer.ltr.styles';
import { version } from '../../../package.json';

const CustomDrawerNavigator = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, imgURL } = {
    firstName: 'test1',
    lastName: 'test2',
    email: 'info@yahoo.com',
    imgURL: null,
  };
  const reviewStarsView = () => (
    <RatingWrapper>
      <RatingText>
        <ReviewsText>{I18n.t('reviews').toLowerCase()}</ReviewsText>
      </RatingText>
    </RatingWrapper>
  );

  const customDrawerUI = () => (
    <SafeView>
      <HeaderView>
        <UserAvatar imageURL={imgURL} firstName={firstName} lastName={lastName} />
        <HeaderContainer>
          <Row>
            <UserText numberOfLines={0}>{`${firstName} ${lastName}`}</UserText>
          </Row>
          <Row>
            <UserEmail numberOfLines={1} ellipsizeMode="middle">
              {email}
            </UserEmail>
          </Row>
          <Row>{reviewStarsView()}</Row>
        </HeaderContainer>
      </HeaderView>
      <ScrollView>
        {customDrawerRoutes().map((section, index) => (
          <View key={index.toString()}>
            <OrdersSection>
              <HeaderSection>{section.title}</HeaderSection>
              {section.data.map((item) => (
                <TouchableOpacity key={item.title} onPress={item.onclick}>
                  <OrderItemMenu>
                    <MenuIcon name={item.icon} />
                    <MenuItem>{item.title}</MenuItem>
                  </OrderItemMenu>
                </TouchableOpacity>
              ))}
            </OrdersSection>
            <Divider />
          </View>
        ))}
        <AppVersion>{`v${version}`}</AppVersion>
      </ScrollView>
    </SafeView>
  );

  const logout = () => {
    dispatch(requestLogout({}));
  };
  const androidCustomDrawerUI = () => (
    <SafeView>
      {customDrawerUI()}
      <TouchableOpacity onPress={logout}>
        <FooterWrapper>
          <FooterIconView>
            <MenuIcon name="exit-to-app" />
          </FooterIconView>
          <FooterLabel>{I18n.t('logoutButton')}</FooterLabel>
        </FooterWrapper>
      </TouchableOpacity>
    </SafeView>
  );
  const iOSCustomDrawerUI = () => (
    <FlexedYellowView>
      <SafeView>{customDrawerUI()}</SafeView>
      <TouchableOpacity onPress={logout}>
        <FooterWrapper>
          <FooterIconView>
            <MenuIcon name="exit-to-app" />
          </FooterIconView>
          <FooterLabel>{I18n.t('logoutButton')}</FooterLabel>
        </FooterWrapper>
      </TouchableOpacity>
    </FlexedYellowView>
  );
  return {
    ...(Platform.OS === 'ios' ? iOSCustomDrawerUI() : androidCustomDrawerUI()),
  };
};

export default CustomDrawerNavigator;
