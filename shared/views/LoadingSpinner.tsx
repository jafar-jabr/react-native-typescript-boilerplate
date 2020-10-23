import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Modal, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
  },
  background: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: 'transparent',
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    top: 80,
  },
});

const LoadingSpinner = ({
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
  animation,
}) => {
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
      <View style={styles.background}>
        {customIndicator || (
          <ActivityIndicator
            color={color}
            size={size}
            style={[styles.activityIndicator, { ...indicatorStyle }]}
          />
        )}
        <View style={[styles.textContainer, { ...indicatorStyle }]}>
          <Text style={[styles.textContent, textStyle]}>{textContent}</Text>
        </View>
      </View>
    );
  };
  const spinner = (
    <View
      style={[styles.container, { backgroundColor: overlayColor }]}
      key={`spinner_${Date.now()}`}
    >
      {children || renderDefaultContent()}
    </View>
  );

  return (
    <Modal
      animationType={animation}
      onRequestClose={() => handleOnRequestClose()}
      supportedOrientations={['landscape', 'portrait']}
      transparent
      visible={isVisible}
    >
      {spinner}
    </Modal>
  );
};
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
  indicatorStyle: {},
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
  overlayColor: PropTypes.string,
};
export default LoadingSpinner;
