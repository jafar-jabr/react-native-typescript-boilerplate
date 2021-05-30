import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { Text } from 'react-native';

export const LogoText = styled(Text).attrs({})`
  font-size: 40px;
  margin-top: 150px;
  margin-bottom: 30px;
  text-align: center;
`;

export const LoginButton = styled(Button).attrs((props) => ({
  buttonStyle: {
    backgroundColor: '#3897f1',
    borderRadius: props.theme.roundness,
    height: 45,
    marginTop: 10,
  },
}))``;
