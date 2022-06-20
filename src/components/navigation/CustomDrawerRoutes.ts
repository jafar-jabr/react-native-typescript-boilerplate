import I18n from 'shared/I18n/I18n';
import * as NavigationService from 'shared/services/NavigationService';
import { SCREENS } from 'shared/constants';

const customDrawerRoutes = () => {
	const defaultAction = (path) => {
		NavigationService.navigate(SCREENS.MAIN, {
			screen: path
		});
		NavigationService.closeDrawer();
	};
	const homeRoute = {
		title: I18n.t('mainScreen'),
		path: SCREENS.HOME,
		icon: 'home',
		onclick: () => defaultAction(SCREENS.HOME)
	};
	const aboutUsRoute = {
		title: I18n.t('aboutUs'),
		path: SCREENS.ABOU_US,
		icon: 'info',
		onclick: () => defaultAction(SCREENS.ABOU_US)
	};
	const loginRoute = {
		title: I18n.t('login'),
		path: SCREENS.LOGIN,
		icon: 'info',
		onclick: () => defaultAction(SCREENS.LOGIN)
	};
	return [
		{
			title: '',
			key: 'first',
			data: [homeRoute, aboutUsRoute]
		},
		{
			title: '',
			key: 'second',
			data: [loginRoute, aboutUsRoute]
		}
	];
};
export default customDrawerRoutes;
