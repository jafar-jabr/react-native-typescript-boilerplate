import { Linking } from 'react-native';
import I18n from '../../I18n/I18n';

const OpenSettingsButton = {
	text: I18n.t('settings'),
	onPress: () => Linking.openURL('src-settings:')
};

export default OpenSettingsButton;
