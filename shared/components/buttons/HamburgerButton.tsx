import * as NavigationService from '../../services/NavigationService';
import { HamburgerMenu } from '../../styled/global.ltr.styles';

function HamburgerButton(): JSX.Element {
	return <HamburgerMenu name="menu" size={30} onPress={() => NavigationService.openDrawer()} />;
}

export default HamburgerButton;
