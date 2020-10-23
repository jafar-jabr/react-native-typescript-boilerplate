import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { Button } from 'react-native-elements';
import Config from 'react-native-config';
import loginPageStyle from '../../../shared/styles/auth.ltr.style';
import HamburgerButton from '../../../shared/components/buttons/hamburgerButton';
import Header from '../../components/sections/header';

const LoginScreen = (): JSX.Element => {
  const onLoginPress = () => {};

  return (
    <>
      <Header leftComponent={<HamburgerButton />} />
      <KeyboardAvoidingView style={loginPageStyle.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loginPageStyle.loginScreenContainer}>
            <View style={loginPageStyle.loginFormView}>
              <Text style={loginPageStyle.logoText}>{Config.APP_NAME}</Text>
              <TextInput placeholder="Username" style={loginPageStyle.loginFormTextInput} />
              <TextInput
                placeholder="Password"
                style={loginPageStyle.loginFormTextInput}
                secureTextEntry
              />
              <Button
                buttonStyle={loginPageStyle.loginButton}
                onPress={onLoginPress}
                title="Login"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
