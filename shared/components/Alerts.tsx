import { Alert } from 'react-native';
import I18n from '../I18n/I18n';

const simpleAlert = (title, body) => {
	return Alert.alert(title, body, [{ text: 'OK' }], { cancelable: false });
};

const okCancelAlert = (title, body, buttonText, action) => {
	return Alert.alert(
		title,
		body,
		[
			{ text: I18n.t('cancel'), style: 'cancel' },
			{ text: buttonText, style: 'default', onPress: action }
		],
		{ cancelable: false }
	);
};

const oneActionAlert = (title, body, buttonText, action) => {
	return Alert.alert(title, body, [{ text: buttonText, style: 'default', onPress: action }], {
		cancelable: false
	});
};
const twoActionsAlert = (
	title,
	body,
	firstButtonText,
	firstButtonAction,
	secondButtonText,
	secondButtonAction
) => {
	return Alert.alert(
		title,
		body,
		[
			{ text: firstButtonText, style: 'default', onPress: firstButtonAction },
			{ text: secondButtonText, style: 'default', onPress: secondButtonAction }
		],
		{
			cancelable: false
		}
	);
};

export default {
	simpleAlert,
	oneActionAlert,
	twoActionsAlert,
	okCancelAlert
};
