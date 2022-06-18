import { Button } from 'react-native-elements';
import * as PropTypes from 'prop-types';

function RegularButton(props) {
	return <Button {...props} />;
}
RegularButton.protoTypes = {
	props: PropTypes.shape({}).isRequired
};
export default RegularButton;
