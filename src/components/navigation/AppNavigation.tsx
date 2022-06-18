import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import * as PropTypes from 'prop-types';
import AboutUsScreen from 'src/screens/staticScreens/AboutUsScreen';
import SplashScreen from 'src/screens/staticScreens/SplashScreen';
import MainScreen from 'src/screens/MainScreen';
import CustomDrawerNavigator from 'src/components/navigation/CustomDrawerNavigator';
import LoginScreen from 'src/screens/auth/LoginScreen';

const { width, height } = Dimensions.get('screen');

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      //headerMode="none"
     // mode="modal"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5],
              outputRange: [0, 0.25],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
const AppDrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="MainScreen"
     // overlayColor="rgba(0,0,0, 0.5)"
      //drawerStyle={{
     //   width: Math.min(height, width) * 0.65,
     // }}
      // @ts-ignore
      drawerContent={(props) => <CustomDrawerNavigator {...props} />}
    >
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};
const MainAppNavigation = ({ isLoggedIn }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
     // headerMode="none"
     // mode="modal"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5],
              outputRange: [0, 0.25],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoggedIn === undefined ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : isLoggedIn === false ? (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      ) : (
        <>
          <Stack.Screen name="Home" component={AppDrawerNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};
MainAppNavigation.defaultProps = {
  isLoggedIn: undefined,
};
MainAppNavigation.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default MainAppNavigation;
