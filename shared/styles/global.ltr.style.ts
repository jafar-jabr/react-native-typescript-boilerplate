import { StyleSheet } from 'react-native';
import Colors from '../themes/Colors';

const GlobalLtrStyle = StyleSheet.create({
  FlexView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  HamburgerIcon: {
    color: Colors.black,
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default GlobalLtrStyle;
