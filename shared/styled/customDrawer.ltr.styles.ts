import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'react-native-elements';

export const RatingWrapper = styled(View).attrs({})`
	flex-direction: row;
	align-items: center;
	padding-vertical: 5px;
`;

export const RatingText = styled(View).attrs({})`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const ReviewsText = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.darkText};
	font-size: ${(props) => props.theme.fonts.small}px;
`;

export const HeaderView = styled(View).attrs({})`
	background-color: ${(props) => props.theme.colors.primaryLight};
	color: ${(props) => props.theme.colors.white};
	flex-direction: row;
	align-items: center;
	padding-vertical: 10px;
	padding-horizontal: 10px;
`;

export const HeaderContainer = styled(View).attrs({})`
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	justify-content: flex-start;
	margin-top: 5px;
	margin-bottom: 10px;
`;

export const UserText = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.darkText};
	font-size: ${(props) => props.theme.fonts.medium}px;
	text-transform: capitalize;
`;
export const UserEmail = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.darkText};
	font-size: ${(props) => props.theme.fonts.small}px;
	margin-top: 5px;
`;

export const OrdersSection = styled(View).attrs({})`
	padding-horizontal: 20px;
	padding-vertical: 20px;
`;

export const HeaderSection = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.black};
	text-align: left;
	font-size: ${(props) => props.theme.fonts.h5}px;
	margin-bottom: 5px;
`;

export const OrderItemMenu = styled(View).attrs({})`
	padding-horizontal: 10px;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const MenuIcon = styled(Icon).attrs({})`
	font-size: ${(props) => props.theme.fonts.medium}px;
	color: ${(props) => props.theme.colors.white};
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.accentColor};
	width: 25px;
	height: 25px;
	line-height: 25px;
	text-align: center;
`;

export const MenuItem = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.black};
	text-align: left;
	font-size: ${(props) => props.theme.fonts.small}px;
	align-items: center;
	justify-content: center;
	padding-horizontal: 10px;
	padding-vertical: 10px;
`;

export const AppVersion = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.primaryDark};
	background-color: ${(props) => props.theme.colors.white};
	text-align: left;
	font-size: ${(props) => props.theme.fonts.tiny}px;
	padding-top: 5px;
	padding-horizontal: 20px;
`;

export const FooterWrapper = styled(View).attrs({})`
	flex-direction: row;
	margin: 0;
	padding-vertical: 20px;
	padding-horizontal: 20px;
	align-items: center;
	justify-content: flex-start;
	background-color: ${(props) => props.theme.colors.greyBackground};
`;

export const FooterLabel = styled(Text).attrs({})`
	color: ${(props) => props.theme.colors.darkText};
	margin: 0;
	padding-vertical: 0;
	padding-horizontal: 10px;
	align-items: center;
	justify-content: center;
`;

export const FooterIconView = styled(View).attrs({})`
	margin: 0;
	padding: 0;
	align-items: center;
	justify-content: center;
`;

export const FlexedYellowView = styled(View).attrs({})`
	flex: 1;
	background-color: ${(props) => props.theme.colors.primary};
`;
