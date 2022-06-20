import { Platform } from 'react-native';
import { Header as ElementHeader } from 'react-native-elements';
import { Colors } from 'shared/themes';

function Header(props): JSX.Element {
	return (
		<ElementHeader
			{...props}
			containerStyle={{
				backgroundColor: Colors.white,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around',

				...Platform.select({ android: { paddingTop: 0 }, ios: {} }),
				...Platform.select({ android: { height: 0 }, ios: {} })
			}}
			statusBarProps={{ height: 50 }}
		/>
	);
}

export default Header;
