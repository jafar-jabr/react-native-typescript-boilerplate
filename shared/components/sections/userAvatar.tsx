import * as PropTypes from 'prop-types';
import React from 'react';
import { Text, View, Image } from 'react-native';
import UserAvatarStyle from '../../styles/userAvatar.ltr.styles';

const UserAvatar = ({ imageURL, firstName, lastName, theme, size }) => {
  if (!imageURL) {
    return (
      <View style={UserAvatarStyle.UserImageWrapper}>
        <Text style={UserAvatarStyle.UserAvatarImage}>
          {`${firstName.charAt(0)}${lastName.charAt(0)}`}
        </Text>
      </View>
    );
  }
  return <Image source={{ uri: imageURL }} />;
};

UserAvatar.defaultProps = {
  imageURL: undefined,
  size: '80',
};

UserAvatar.propTypes = {
  imageURL: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default UserAvatar;
