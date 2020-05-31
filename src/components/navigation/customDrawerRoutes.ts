import I18n from '../../../shared/I18n/I18n';
import * as NavigationService from '../../../shared/services/navigationService';

const customDrawerRoutes = () => {
  const defaultAction = (path) => {
    NavigationService.navigate('Home', {
      screen: path,
    });
    NavigationService.closeDrawer();
  };
  const homeRoute = {
    title: I18n.t('main_screen'),
    path: 'MainScreen',
    icon: 'home',
    onclick: () => defaultAction('MainScreen'),
  };
  const aboutUsRoute = {
    title: I18n.t('about_us'),
    path: 'AboutUs',
    icon: 'info',
    onclick: () => defaultAction('AboutUs'),
  };
  const loginRoute = {
    title: I18n.t('login'),
    path: 'Login',
    icon: 'info',
    onclick: () => defaultAction('Login'),
  };
  return [
    {
      title: '',
      data: [homeRoute, aboutUsRoute],
    },
    {
      title: '',
      data: [loginRoute, aboutUsRoute],
    },
  ];
};
export default customDrawerRoutes;
