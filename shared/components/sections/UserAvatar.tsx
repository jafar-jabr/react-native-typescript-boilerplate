import React from "react";
import * as PropTypes from 'prop-types';
import { AvatarText, AvatarWrapper, AvatarImage } from '../../styled/avatar.ltr.styles';

const UserAvatar = ({ imageURL, firstName, lastName, size }) => {
  if (!imageURL) {
    return (
      <AvatarWrapper size={size}>
        <AvatarText>{`${firstName?.charAt(0)}${lastName?.charAt(0)}`}</AvatarText>
      </AvatarWrapper>
    );
  }
  return <AvatarImage size={size} source={{ uri: imageURL }} />;
};

UserAvatar.defaultProps = {
  imageURL: undefined,
  size: '80',
};

UserAvatar.propTypes = {
  imageURL: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default UserAvatar;
