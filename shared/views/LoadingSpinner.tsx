import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import {
	ContainerBg,
	ContainerTxt,
	SpinnerActivityIndicator,
	TextContent,
	Container
} from '../styled/loadingSpinner.ltr.styles';

function LoadingSpinner({
	visible,
	textContent,
	color,
	size,
	textStyle,
	cancelable,
	customIndicator,
	indicatorStyle,
	overlayColor,
	children,
	animation
}) {
	const [isVisible, setIsVisible] = useState(visible);

	useEffect(() => {
		setIsVisible(visible);
	}, [visible]);
	const close = () => {
		setIsVisible(false);
	};

	const handleOnRequestClose = () => {
		if (cancelable) {
			close();
		}
	};

	const renderDefaultContent = () => {
		return (
			<ContainerBg>
				{customIndicator || (
					<SpinnerActivityIndicator color={color} size={size} style={[{ ...indicatorStyle }]} />
				)}
				<ContainerTxt style={[{ ...indicatorStyle }]}>
					<TextContent style={[textStyle]}>{textContent}</TextContent>
				</ContainerTxt>
			</ContainerBg>
		);
	};
	const spinner = (
		<Container style={[{ backgroundColor: overlayColor }]} key={`spinner_${Date.now()}`}>
			{children || renderDefaultContent()}
		</Container>
	);

	return (
		<Modal
			animationType={animation}
			onRequestClose={() => handleOnRequestClose()}
			supportedOrientations={['landscape', 'portrait']}
			transparent
			visible={isVisible}>
			{spinner}
		</Modal>
	);
}

LoadingSpinner.defaultProps = {
	animation: 'none',
	cancelable: false,
	textContent: '',
	color: 'white',
	size: 'large',
	overlayColor: 'rgba(0, 0, 0, 0.25)',
	children: null,
	textStyle: {},
	customIndicator: null,
	indicatorStyle: {}
};

const animationOptions = ['none', 'slide', 'fade'];

const sizeOptions = ['small', 'normal', 'large'];

LoadingSpinner.propTypes = {
	animation: PropTypes.oneOf(animationOptions),
	visible: PropTypes.bool.isRequired,
	textStyle: PropTypes.shape({}),
	customIndicator: PropTypes.element,
	indicatorStyle: PropTypes.shape({}),
	children: PropTypes.element,
	cancelable: PropTypes.bool,
	textContent: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.oneOf(sizeOptions), // 'normal',
	overlayColor: PropTypes.string
};

export default LoadingSpinner;
