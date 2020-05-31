import { StyleSheet } from 'react-native';
import Colors from '../themes/Colors';

const UserProfileLtrStyle = StyleSheet.create({
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

export default UserProfileLtrStyle;
