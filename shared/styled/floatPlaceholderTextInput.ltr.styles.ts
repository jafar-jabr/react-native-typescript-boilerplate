import { TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HidePassword = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  right: 3%;
  top: 15%;
`;

export const PasswordIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  size: props.theme.fonts.h4,
}))`
  align-self: center;
  height: ${(props) => props.theme.metrics.xxl}px;
  width: ${(props) => props.theme.metrics.xxl}px;
  text-align: center;
  line-height: 35px;
  color: ${(props) => props.theme.colors.placeholderFocused};
`;

export const CustomTextInput = styled(TextInput).attrs({
  width: '100%',
})`
  opacity: ${(props) => (!props.editable ? 0.5 : 1)};
  background-color: ${(props) => (props.isFocused ? 'transparent' : props.theme.colors.inputBg)};
  border-width: ${(props) => (props.isFocused ? 1 : 0)}px;
  border-color: ${(props) => (props.isFocused ? props.theme.colors.primary : 'transparent')};
  padding-horizontal: ${(props) => props.theme.metrics.m}px;
  min-height: ${(props) => props.theme.metrics.btns}px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Regular';
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
`;

export const PlaceholderText = styled.Text`
  position: absolute;
  font-family: 'Roboto-Medium';
  background-color: ${(props) => (props.isFocused ? props.theme.colors.white : 'transparent')};
  left: ${(props) => (props.isFocused ? 10 : 5)}px;
  z-index: ${(props) => (props.isFocused ? 2 : 0)};
  top: ${(props) => (props.isFocused ? -10 : props.theme.fonts.regular)}px;
  padding-horizontal: ${(props) => props.theme.metrics.xs}px;
  font-size: ${(props) =>
    props.isFocused ? props.theme.fonts.medium : props.theme.fonts.regular}px;
  color: ${(props) =>
    props.isFocused ? props.theme.colors.primary : props.theme.colors.placeholderFocused};
`;

export const PlaceholderWrapper = styled.View`
  align-items: center;
  justify-content: center;
  align-self: stretch;
  min-height: ${(props) => props.theme.metrics.btns}px;
  margin-top: ${(props) => props.theme.metrics.s}px;
`;

export const SearchButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  right: 2%;
  top: 18%;
`;

export const CurrencyWrapper = styled(View).attrs({})`
  position: absolute;
  right: 5%;
  top: 35%;
`;

export const SearchIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  size: props.theme.fonts.h4,
}))`
  align-self: center;
  height: ${(props) => props.theme.metrics.xxl}px;
  width: ${(props) => props.theme.metrics.xxl}px;
  text-align: center;
  line-height: 35px;
  color: ${(props) => props.theme.colors.placeholderFocused};
`;

export const CurrencyText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: ${(props) => props.theme.fonts.medium}px;
  color: ${(props) => props.theme.colors.placeholderFocused};
`;
