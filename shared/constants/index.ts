export const SCREENS = {
	SPLASH: 'Splash',
	AUTH: 'Auth',
	MAIN: 'MainScreen',
	HOME: 'Home',
	ABOU_US: 'AboutUs',
	LOGIN: 'Login',
	SEARCH: 'Search',
	NOTIFICATION: 'Notification',
	PROFILE: 'Profile',
	DETAIL: 'Detail'
};

export const API_ENDPOINTS = {
	LOGIN_ENDPOINT: '/login',
	LOGOUT_ENDPOINT: '/logout',
	REFRESH_TOKEN_ENDPOINT: '/jwt-api/token/refresh',
	GET_PRIVACY_POLICY: '/static-page/privacy-policy',
	GET_TERMS_AND_CONDITIONS: '/static-page/terms-and-conditions',
	FORGOT_PASSWORD_API: '/users/request-password-reset',
	CHANGE_PASSWORD_API: '/users/password-reset'
};

export const ACTIONS = {
	REFRESH_TOKEN: 'REFRESH_TOKEN',
	USER_TOKEN: 'USER_TOKEN',
	CURRENCY: 'RON',
	UNHANDLED_BACKGROUND_NOTIFICATIONS: 'UNHANDLED_BACKGROUND_NOTIFICATIONS',
	APP_SETTINGS_NOTIFICATION_SOUND: 'APP_SETTINGS_NOTIFICATION_SOUND',
	DEFAULT_NOTIFICATION_SOUND: 'default',
	CUSTOM_NOTIFICATION_SOUND: 'custom',
	APP_LANGUAGE: 'APP_LANGUAGE'
};
