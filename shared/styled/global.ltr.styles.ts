// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
  SectionList,
  StatusBar,
  TouchableOpacity,
  Image,
  View,
  Platform,
} from 'react-native';
import { CheckBox, Divider, Header, Icon, ListItem, Overlay } from 'react-native-elements';

export const SafeView = styled(SafeAreaView).attrs({
  flex: 1,
})`
  background-color: ${(props) => props.theme.colors.background};
`;

export const ButtonWrapper = styled.View`
  align-self: stretch;
  padding-top: ${(props) => props.theme.metrics.xs}px;
  padding-bottom: ${(props) => props.theme.metrics.s}px;
`;

export const CustomStatusBar = styled(StatusBar).attrs((props) => ({
  backgroundColor: props.theme.colors.background,
}))``;

export const EmptyButton = styled(TouchableOpacity).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  flex-direction: row;
`;

export const EmptyButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  padding: ${(props) => props.theme.metrics.s}px;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const EmptyColorButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.regular}px;
  padding: ${(props) => props.theme.metrics.s}px;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const RedEmptyButtonText = styled.Text`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fonts.regular}px;
  padding: ${(props) => props.theme.metrics.s}px;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const RoundButton = styled(TouchableOpacity).attrs({})`
  height: ${(props) => props.theme.metrics.btns}px;
  width: ${(props) => props.theme.metrics.btns}px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  flex-direction: row;
`;

export const RoundButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const FilledButton = styled(TouchableOpacity).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const RedFilledButton = styled(TouchableOpacity).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.red};
`;

export const GreyFilledButton = styled(TouchableOpacity).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.grey};
`;

export const CustomFilledButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const CustomCapitalSubTitle = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Regular';
  text-align: left;
  text-transform: uppercase;
`;

export const PaddingView = styled.View`
  padding-horizontal: ${(props) => props.theme.metrics.l}px;
  margin-vertical: ${(props) => props.theme.metrics.l}px;
  flex: 1;
`;

export const FilledButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts.regular}px;
  padding: ${(props) => props.theme.metrics.s}px;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.h2}px;
  font-family: 'Roboto-Bold';
  text-align: left;
`;

export const BlackTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.h3}px;
  font-family: 'Roboto-Bold';
  text-align: left;
`;

export const BlackTitleCentered = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.h3}px;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Regular';
  text-align: left;
`;

export const GreySubTitle = styled.Text`
  color: ${(props) => props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Regular';
  text-align: left;
`;

export const GreySubTitleWithPadding = styled.Text`
  color: ${(props) => props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.regular}px;
  padding-horizontal: ${(props) => props.theme.metrics.xxs}px;
  font-family: 'Roboto-Regular';
  text-align: left;
`;

export const DarkGreySubTitle = styled.Text`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Regular';
  text-align: left;
`;

export const GreyCapitalSubTitle = styled.Text`
  color: ${(props) => props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
  text-align: left;
  text-transform: uppercase;
`;

export const SmallGreyCapitalSubTitle = styled.Text`
  color: ${(props) => props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Medium';
  text-align: left;
  text-transform: uppercase;
`;

export const TextButtonWrapper = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const LeftTextButtonWrapper = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
`;

export const NoPaddingTextButtonWrapper = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const AbsoluteIconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  right: 10%;
  top: 5%;
  z-index: 2;
`;
export const WhiteAbsoluteIconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  width: ${(props) => props.theme.metrics.xxl}px;
  height: ${(props) => props.theme.metrics.xxl}px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  right: 5%;
  bottom: 3%;
  z-index: 2;
  border-radius: 100px;
`;

export const BottomAbsoluteIconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  right: 7%;
  bottom: 10%;
  z-index: 2;
`;

export const AvatarAbsoluteIconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  right: 5%;
  bottom: 3%;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.darkGrey};
  padding: ${(props) => props.theme.metrics.xxs}px;
  border-radius: 100px;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Regular';
  text-align: center;
  padding-horizontal: ${(props) => props.theme.metrics.s}px;
`;

export const CustomTextButton = styled.Text`
  color: ${(props) => props.txtColor};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Regular';
  text-align: center;
  padding-horizontal: ${(props) => props.theme.metrics.s}px;
`;

export const CapitalTextButton = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Bold';
  text-align: center;
  text-transform: uppercase;
`;

export const TextBg = styled.Text`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.green};
  font-size: ${(props) => props.theme.fonts.medium}px;
  padding-left: ${(props) => props.theme.metrics.s}px;
  padding-right: ${(props) => props.theme.metrics.s}px;
  font-family: 'Roboto-Regular';
  border-radius: ${(props) => props.theme.roundness}px;
`;

export const CustomHeader = styled(Header).attrs({})``;

export const NoImageWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.inputBg};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.metrics.btmBtns}px;
  height: ${(props) => props.theme.metrics.btmBtns}px;
  border-radius: ${(props) => props.theme.roundness}px;
`;

export const CustomCheckbox = styled(CheckBox).attrs((props) => ({
  containerStyle: {
    margin: 0,
    padding: 0,
  },
  checkedColor: props.theme.colors.primary,
}))``;

export const CustomColorCheckbox = styled(CheckBox).attrs((props) => ({
  containerStyle: {
    margin: 0,
    padding: 0,
  },
  checkedColor: props.isEnabled ? props.theme.colors.primaryOpacity : props.theme.colors.primary,
}))``;

export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxTextWrapper = styled.View`
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TextLink = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  margin-left: ${(props) => props.theme.metrics.xxs}px;
`;

export const CheckboxBoldText = styled.Text`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Bold';
  text-decoration: underline;
  flex-wrap: wrap;
  padding-top: 3px;
  padding-bottom: 3px;
  text-decoration: none;
`;

export const CheckboxRegularText = styled.Text`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Regular';
  flex-wrap: wrap;
`;

export const CheckboxBigText = styled.Text`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
  flex-wrap: wrap;
  text-transform: uppercase;
`;

export const CheckboxColoredText = styled.Text`
  color: ${(props) =>
    props.isEnabled ? props.theme.colors.placeholderFocused : props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
  flex-wrap: wrap;
`;

export const CustomScroll = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  padding-horizontal: ${(props) => props.theme.metrics.l}px;
  margin-vertical: ${(props) => props.theme.metrics.l}px;
  background-color: ${(props) => props.theme.colors.nearlyWhite};
`;

export const LogoImage = styled(Image).attrs({})`
  width: 96px;
  height: 88px;
`;

export const CustomScrollNoPadding = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
`;

export const HamburgerMenu = styled(Icon).attrs({})`
  color: ${(props) => props.theme.colors.black};
  margin-vertical: 10px;
  margin-left: 10px;
`;
export const CustomSectionList = styled(SectionList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  padding-top: ${(props) => props.theme.metrics.xs}px;
  padding-left: ${(props) => props.theme.metrics.l}px;
  padding-right: ${(props) => props.theme.metrics.l}px;
  padding-bottom: ${(props) => props.theme.metrics.l}px;
`;

export const CustomFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  padding-left: ${(props) => props.theme.metrics.l}px;
  padding-right: ${(props) => props.theme.metrics.l}px;
  padding-bottom: ${(props) => props.theme.metrics.l}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AlignTopRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AlignTopRowWithPadding = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const SpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SpacedRowWithPadding = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const FixedBottomButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const RowWithPadding = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.metrics.s}px;
  flex-direction: row;
`;

export const WrapperWithPadding = styled.View`
  align-items: center;
  padding: ${(props) => (Platform.OS === 'ios' ? props.theme.metrics.s : 0)}px;
`;

export const CenteredRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CenteredColumn = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const ColumnWithPadding = styled.View`
  flex-direction: column;
  padding-horizontal: ${(props) => props.theme.metrics.s}px;
`;

export const ColumnWithAllPadding = styled.View`
  flex-direction: column;
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const ColumnWithAllMargin = styled.View`
  flex-direction: column;
  margin: ${(props) => props.theme.metrics.s}px;
`;

export const HalfColumn = styled.View`
  flex-direction: column;
  width: 48%;
`;

export const HalfColumnCentered = styled.View`
  flex-direction: column;
  width: 48%;
  justify-content: center;
  background-color: red;
`;

export const FullWidthSpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LineSeparator = styled(Divider).attrs({})`
  height: 1px;
  background-color: ${(props) => props.theme.colors.border};
`;

export const VerticalSeparator = styled(View).attrs({})`
  width: 2px;
  height: ${(props) => props.theme.metrics.btns}px;
  background-color: ${(props) => props.theme.colors.border};
`;

export const MediumVerticalSeparator = styled(View).attrs({})`
  width: 2px;
  height: ${(props) => props.theme.metrics.icons}px;
  background-color: ${(props) => props.theme.colors.border};
`;

export const SmallSpace = styled(Divider).attrs({})`
  height: ${(props) => props.theme.metrics.xxs}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Space = styled(Divider).attrs({})`
  height: ${(props) => props.theme.metrics.s}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const MiddleSpace = styled(Divider).attrs({})`
  height: ${(props) => props.theme.metrics.l}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const BigSpace = styled(Divider).attrs({})`
  height: ${(props) => props.theme.metrics.xxl}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const RenderLoadingWrapper = styled(View).attrs({})`
  height: ${Dimensions.get('screen').height - 100}px;
  justify-content: center;
  align-items: center;
`;

export const RenderLoadingIcon = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.primary,
}))``;

export const BoldTitle = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.h3}px;
  font-family: 'Roboto-Black';
  text-align: left;
`;

export const GreySubtitle = styled.Text`
  color: ${(props) => props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.big}px;
  font-family: 'Roboto-Regular';
  text-align: left;
`;

export const ListTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Bold';
  text-align: left;
`;

export const BigListTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.big}px;
  font-family: 'Roboto-Bold';
  text-align: left;
`;

export const ListSubTitle = styled.Text`
  color: ${(props) => props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Medium';
  text-align: left;
`;

export const CustomListItem = styled(ListItem).attrs((props) => ({
  underlayColor: props.theme.colors.background,
  activeOpacity: 0.7,
  containerStyle: {
    backgroundColor: 'transparent',
  },
}))`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FlexedView = styled.View`
  flex: ${(props) => props.flex};
`;

export const HeaderText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.big}px;
  font-family: 'Roboto-Medium';
  text-align: left;
`;

export const PrimaryHeaderText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.big}px;
  font-family: 'Roboto-Medium';
  text-align: left;
`;

export const SmallerHeaderText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.medium}px;
  padding-left: ${(props) => props.theme.metrics.s}px;
  padding-right: ${(props) => props.theme.metrics.xs}px;
  font-family: 'Roboto-Bold';
  text-align: right;
  text-transform: uppercase;
`;

export const SectionTitle = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.h4}px;
  font-family: 'Roboto-Bold';
`;

export const SectionText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.h4}px;
  font-family: 'Roboto-Medium';
`;

export const MediumSectionTitle = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Bold';
`;

export const MediumSectionText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
`;

export const TitleSectionText = styled.Text`
  color: ${(props) =>
    props.isActive ? props.theme.colors.primaryOpacity : props.theme.colors.placeholderFocused};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
`;

export const CustomOverlay = styled(Overlay).attrs((props) => ({
  backdropStyle: props.theme.backdrop,
  overlayStyle: {
    padding: props.theme.metrics.l,
    margin: 0,
    width: '90%',
    height: '90%',
    borderRadius: props.theme.roundness,
  },
}))``;

export const CenteredContainer = styled.View`
  flex: 6;
  justify-content: center;
`;

export const FullCenteredContainer = styled.View`
  flex: 6;
  align-items: stretch;
  justify-content: center;
`;

export const SmallDescription = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Regular';
  padding-left: ${(props) => props.theme.metrics.xs}px;
`;

export const BorderedWrapper = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.roundness}px;
`;

export const BorderedWrapperWithPadding = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.roundness}px;
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const BorderedWrapperWithMargin = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.roundness}px;
  margin-horizontal: ${(props) => props.theme.metrics.l}px;
  margin-vertical: ${(props) => props.theme.metrics.xs}px;
`;

export const BorderedButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.roundness}px;
  padding: ${(props) => props.theme.metrics.xs}px;
`;

export const SocialButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.roundness}px;
  padding: ${(props) => props.theme.metrics.l}px;
`;

export const CustomBorderedButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  border-width: 1px;
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.theme.roundness}px;
  padding: ${(props) => props.theme.metrics.xs}px;
  margin: ${(props) => props.theme.metrics.xxs}px;
`;

export const PaddingButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  padding: ${(props) => props.theme.metrics.xs}px;
`;

export const Circle = styled.View`
  width: ${(props) => props.theme.metrics.xs}px;
  height: ${(props) => props.theme.metrics.xs}px;
  border-radius: ${(props) => props.theme.roundness}px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CustomCircle = styled.View`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.theme.roundness}px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const GreenCircle = styled.View`
  width: ${(props) => props.theme.metrics.xs}px;
  height: ${(props) => props.theme.metrics.xs}px;
  border-radius: ${(props) => props.theme.roundness}px;
  background-color: ${(props) => props.theme.colors.green};
`;

export const Key = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
`;

export const GreyKey = styled.Text`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: ${(props) => props.theme.fonts.small}px;
  font-family: 'Roboto-Regular';
  padding-horizontal: ${(props) => props.theme.metrics.s}px;
`;

export const GreyKeyNoPadding = styled.Text`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: ${(props) => props.theme.fonts.small}px;
  font-family: 'Roboto-Regular';
`;

export const SmallBlackKey = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.small}px;
  font-family: 'Roboto-Regular';
  padding-horizontal: ${(props) => props.theme.metrics.s}px;
`;

export const Value = styled.Text`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Regular';
`;

export const KeyValueWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const SmallKey = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Medium';
`;

export const SmallValue = styled.Text`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: ${(props) => props.theme.fonts.medium}px;
  font-family: 'Roboto-Regular';
  margin-left: ${(props) => props.theme.metrics.xs}px;
`;
export const FakeDropdownButton = styled(TouchableOpacity).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: space-between;
  border-width: 1px;
  flex-direction: row;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.border};
`;

export const FakeDropdownText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.regular}px;
  padding: ${(props) => props.theme.metrics.s}px;
  font-family: 'Roboto-Medium';
  text-align: center;
`;

export const AbsoluteRow = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.metrics.s}px;
`;

export const WhiteRegularText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
  text-align: left;
`;

export const AboveNavigationRow = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.metrics.s}px;
  position: absolute;
  bottom: 11%;
  width: 100%;
`;

export const FakeDropdownView = styled(View).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.inputBg};
  padding: ${(props) => props.theme.metrics.xs}px;
`;

export const CustomTextWrapper = styled(View).attrs({})`
  min-height: ${(props) => props.theme.metrics.l}px;
  padding: ${(props) => props.theme.metrics.xs}px;
  border-radius: ${(props) => props.theme.roundness}px;
  align-self: stretch;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.color};
  flex-direction: row;
`;

export const CustomColorText = styled(Text).attrs({})`
  font-size: ${(props) => props.theme.fonts.regular}px;
  font-family: 'Roboto-Medium';
  text-align: left;
  color: ${(props) => props.color};
`;

export const CustomColorTitle = styled(Text).attrs({})`
  font-size: ${(props) => props.theme.fonts.big}px;
  font-family: 'Roboto-Bold';
  text-align: center;
  color: ${(props) => props.color};
`;
