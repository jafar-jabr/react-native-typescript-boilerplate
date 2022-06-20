import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as PropTypes from 'prop-types';
import AboutUsScreen from 'src/screens/staticScreens/AboutUsScreen';
import MainScreen from 'src/screens/MainScreen';
import CustomDrawerNavigator from 'src/components/navigation/CustomDrawerNavigator';
import LoginScreen from 'src/screens/auth/LoginScreen';
import SplashScreen from 'src/screens/staticScreens/SplashScreen';
import { SCREENS } from 'shared/constants';

function AuthNavigation() {
	const AuthStack = createStackNavigator();
	return (
		<AuthStack.Navigator
			initialRouteName={SCREENS.LOGIN}
			// headerMode="none"
			// mode="modal"
			screenOptions={{
				cardStyle: { backgroundColor: 'transparent' },
				cardOverlayEnabled: true,
				cardStyleInterpolator: ({ current: { progress } }) => ({
					cardStyle: {
						opacity: progress.interpolate({
							inputRange: [0, 0.5, 0.9, 1],
							outputRange: [0, 0.25, 0.7, 1]
						})
					},
					overlayStyle: {
						opacity: progress.interpolate({
							inputRange: [0, 0.5],
							outputRange: [0, 0.25],
							extrapolate: 'clamp'
						})
					}
				})
			}}>
			<AuthStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
		</AuthStack.Navigator>
	);
}
function AppDrawerNavigator() {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			// initialRouteName="MainScreen"
			// @ts-ignore
			drawerContent={(props) => <CustomDrawerNavigator {...props} />}>
			<Drawer.Screen name={SCREENS.HOME} component={MainScreen} />
			<Drawer.Screen name={SCREENS.ABOU_US} component={AboutUsScreen} />
			<Drawer.Screen name={SCREENS.LOGIN} component={LoginScreen} />
		</Drawer.Navigator>
	);
}
function MainAppNavigation({ isLoggedIn }) {
	// eslint-disable-next-line no-shadow
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{/* eslint-disable-next-line no-nested-ternary */}
			{isLoggedIn === undefined ? (
				<Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
			) : isLoggedIn === false ? (
				<Stack.Screen name={SCREENS.AUTH} component={AuthNavigation} />
			) : (
				<Stack.Screen name={SCREENS.MAIN} component={AppDrawerNavigator} />
			)}
		</Stack.Navigator>
	);
}

MainAppNavigation.defaultProps = {
	isLoggedIn: undefined
};
MainAppNavigation.propTypes = {
	isLoggedIn: PropTypes.bool
};
export default MainAppNavigation;
