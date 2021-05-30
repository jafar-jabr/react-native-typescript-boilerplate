import { View, Platform } from 'react-native';
import { useState } from 'react';
/* eslint-disable no-param-reassign */
import * as PropTypes from 'prop-types';
import Config from 'react-native-config';
import {
  HidePassword,
  PasswordIcon,
  PlaceholderText,
  CurrencyWrapper,
  CustomTextInput,
  PlaceholderWrapper,
  SearchIcon,
  CurrencyText,
  SearchButton,
} from '../../styled/floatPlaceholderTextInput.ltr.styles';

const FloatPlaceholderTextInput = (props) => {
  const {
    label,
    onChange,
    value,
    extraStyle,
    type,
    multiline,
    notFocusedMultiline,
    numberOfLines,
    extraInputStyle,
    searchAction,
    editable,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [icon, setIcon] = useState('eye-off');
  const [showPassword, setShowPassword] = useState(true);
  const changeState = () => {
    setIcon((prevState) => (prevState === 'eye' ? 'eye-off' : 'eye'));
    setShowPassword((prevState) => !prevState);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const fixExpirationCard = (text) => {
    if (text?.length === 2 && Number(value) === 1) {
      text += '/';
    } else if (text?.length === 2 && value?.length === 3) {
      text = text.substring(0, text?.length - 1);
    }
    onChange(text);
  };
  const renderType = () => {
    switch (type) {
      case 'password':
        return (
          <>
            <CustomTextInput
              hasValue={!!value?.length}
              isFocused={isFocused}
              editable={editable}
              style={extraInputStyle}
              secureTextEntry={showPassword}
              onChangeText={(t) => onChange(t)}
              value={value}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={handleFocus}
              onBlur={handleBlur}
              blurOnSubmit
            />
            <HidePassword onPress={changeState}>
              <PasswordIcon name={icon} />
            </HidePassword>
          </>
        );
      case 'search':
        return (
          <>
            <CustomTextInput
              hasValue={!!value?.length}
              isFocused={isFocused}
              style={extraInputStyle}
              editable={editable}
              onChangeText={(t) => onChange(t)}
              value={value}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={handleFocus}
              onBlur={handleBlur}
              blurOnSubmit
            />
            <SearchButton onPress={searchAction}>
              <SearchIcon name="magnify" />
            </SearchButton>
          </>
        );
      case 'price':
        return (
          <>
            <CustomTextInput
              hasValue={!!value?.length}
              isFocused={isFocused}
              style={extraInputStyle}
              editable={editable}
              onChangeText={(t) => onChange(t)}
              value={value}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={handleFocus}
              onBlur={handleBlur}
              blurOnSubmit
              keyboardType="numeric"
            />
            <CurrencyWrapper>
              <CurrencyText>{Config.CURRENCY}</CurrencyText>
            </CurrencyWrapper>
          </>
        );
      case 'expiration':
        return (
          <CustomTextInput
            hasValue={!!value?.length}
            isFocused={isFocused}
            style={extraInputStyle}
            editable={editable}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(txt) => fixExpirationCard(txt)}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            blurOnSubmit
          />
        );
      case 'phone':
        return (
          <CustomTextInput
            hasValue={!!value?.length}
            isFocused={isFocused}
            style={extraInputStyle}
            editable={editable}
            onChangeText={(t) => onChange(t)}
            value={value}
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={handleFocus}
            onBlur={handleBlur}
            blurOnSubmit
            keyboardType={Platform.OS === 'ios' ? 'name-phone-pad' : 'phone-pad'}
          />
        );
      default:
        return (
          <CustomTextInput
            hasValue={!!value?.length}
            isFocused={isFocused}
            editable={editable}
            onChangeText={(t) => onChange(t)}
            value={value}
            onFocus={handleFocus}
            style={extraInputStyle}
            onBlur={handleBlur}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            multiline={multiline}
            numberOfLines={
              !isFocused && !notFocusedMultiline && value?.length < 20 ? 1 : numberOfLines
            }
          />
        );
    }
  };
  return (
    <PlaceholderWrapper style={[extraStyle]}>
      <View style={{ width: '100%' }}>
        <PlaceholderText
          style={{ opacity: !isFocused && value?.length ? 0 : 1 }}
          isFocused={isFocused}
        >
          {label}
        </PlaceholderText>
        {renderType()}
      </View>
    </PlaceholderWrapper>
  );
};

FloatPlaceholderTextInput.defaultProps = {
  extraStyle: {},
  extraInputStyle: {},
  multiline: false,
  numberOfLines: 1,
  notFocusedMultiline: false,
  editable: true,
  value: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  searchAction: () => {},
};

FloatPlaceholderTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  extraStyle: PropTypes.shape({}),
  extraInputStyle: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  searchAction: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  editable: PropTypes.bool,
  numberOfLines: PropTypes.number,
  notFocusedMultiline: PropTypes.bool,
};

export default FloatPlaceholderTextInput;
