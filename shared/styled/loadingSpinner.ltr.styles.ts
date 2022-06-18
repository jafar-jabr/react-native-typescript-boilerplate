import { ActivityIndicator, View, Text } from 'react-native';
import styled from 'styled-components';

export const ContainerBg = styled(View).attrs({})`
	align-items: center;
	bottom: 0;
	justify-content: center;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`;

export const Container = styled(View).attrs({})`
	background-color: transparent;
	bottom: 0;
	flex: 1;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`;

export const ContainerTxt = styled(View).attrs({})`
	align-items: center;
	bottom: 0;
	flex: 1;
	justify-content: center;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`;

export const TextContent = styled(Text).attrs({})`
	font-size: 20px;
	font-weight: bold;
	height: 50px;
	top: 80px;
`;

export const SpinnerActivityIndicator = styled(ActivityIndicator).attrs({})`
	flex: 1;
`;
