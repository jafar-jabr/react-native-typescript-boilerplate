import styled from 'styled-components';
import { Image } from 'react-native';

export const AvatarWrapper = styled.View`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  background-color: ${(props) => props.theme.colors.border};
  border-color: ${(props) => props.theme.colors.border};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 100px;
`;

export const AvatarText = styled.Text`
  font-size: ${(props) => props.theme.fonts.regular}px;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
`;

export const AvatarImage = styled(Image).attrs({})`
  border-radius: 100px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
