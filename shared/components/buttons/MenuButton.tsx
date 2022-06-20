import * as NavigationService from '../../services/NavigationService';
import { AppMenu } from '../../styled/global.ltr.styles';

function MenuButton(): JSX.Element {
	return <AppMenu name="menu" size={30} onPress={() => NavigationService.openDrawer()} />;
}

export default MenuButton;
