import { Text } from 'react-native';
import I18n from 'shared/I18n/I18n';
import Header from 'src/components/sections/header';
import MenuButton from 'shared/components/buttons/MenuButton';
import { Images } from 'shared/themes';
import { CustomScroll, LogoImage, SafeView } from 'shared/styled/global.ltr.styles';

function SplashScreen(): JSX.Element {
	return (
		<SafeView>
			<Header leftComponent={<MenuButton />} />
			<CustomScroll contentInsetAdjustmentBehavior="automatic">
				<LogoImage source={Images.logo} />
				<Text>{`Hello ${I18n.t('homeScreen.title')}`}</Text>
			</CustomScroll>
		</SafeView>
	);
}

export default SplashScreen;
