import { StyleSheet } from 'react-native';
import Colors from '../themes/Colors';

const UserAvatarLtrStyle = StyleSheet.create({
  UserAvatarImage: {
    borderRadius: 100,
    marginTop: 0,
  },
  UserImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.greyBackground,
    borderRadius: 100,
  },
});

export default UserAvatarLtrStyle;
