import React from "react";
import * as NavigationService from '../../services/NavigationService';
import { HamburgerMenu } from '../../styled/global.ltr.styles';

const HamburgerButton = (): JSX.Element => (
  <HamburgerMenu name="menu" size={30} onPress={() => NavigationService.openDrawer()} />
);

export default HamburgerButton;
