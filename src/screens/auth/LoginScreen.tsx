import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import Config from 'react-native-config';
import { useState } from 'react';
import HamburgerButton from '../../../shared/components/buttons/HamburgerButton';
import Header from '../../components/sections/header';
import { SafeView, FlexedView, Space } from '../../../shared/styled/global.ltr.styles';
import { LoginButton, LogoText } from '../../../shared/styled/login.ltr.styles';
import FloatPlaceholderTextInput from '../../../shared/components/sections/FloatPlaceholderTextInput';

const LoginScreen = (): JSX.Element => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPress = () => {};

  return (
    <SafeView>
      <Header leftComponent={<HamburgerButton />} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlexedView flex={1}>
            <LogoText>{Config.APP_NAME}</LogoText>
            <FloatPlaceholderTextInput
              label="Username"
              value={user}
              type="regular"
              onChange={(value) => setUser(value)}
            />
            <FloatPlaceholderTextInput
              label="Password"
              value={password}
              type="password"
              onChange={(value) => setPassword(value)}
            />
            <Space />
            <LoginButton onPress={onLoginPress} title="Login" />
          </FlexedView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeView>
  );
};

export default LoginScreen;
