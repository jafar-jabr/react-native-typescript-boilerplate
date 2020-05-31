import { Button } from 'react-native-elements';
import React from 'react';
import * as PropTypes from 'prop-types';

const RegularButton = (props) => {
  return <Button {...props} />;
};
RegularButton.protoTypes = {
  props: PropTypes.shape({}).isRequired,
};
export default RegularButton;
