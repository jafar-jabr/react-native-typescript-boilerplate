import I18n from 'shared/I18n/I18n';
import * as NavigationService from 'shared/services/NavigationService';

const customDrawerRoutes = () => {
	const defaultAction = (path) => {
		NavigationService.navigate('Home', {
			screen: path
		});
		NavigationService.closeDrawer();
	};
	const homeRoute = {
		title: I18n.t('mainScreen'),
		path: 'MainScreen',
		icon: 'home',
		onclick: () => defaultAction('MainScreen')
	};
	const aboutUsRoute = {
		title: I18n.t('aboutUs'),
		path: 'AboutUs',
		icon: 'info',
		onclick: () => defaultAction('AboutUs')
	};
	const loginRoute = {
		title: I18n.t('login'),
		path: 'Login',
		icon: 'info',
		onclick: () => defaultAction('Login')
	};
	return [
		{
			title: 'first',
			data: [homeRoute, aboutUsRoute]
		},
		{
			title: 'second',
			data: [loginRoute, aboutUsRoute]
		}
	];
};
export default customDrawerRoutes;
