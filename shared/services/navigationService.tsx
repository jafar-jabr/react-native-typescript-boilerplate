import {
  StackActions,
  DrawerActions,
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';

export const isMountedRef = React.createRef<boolean>();

export const navigationRef = React.createRef<NavigationContainerRef>();

export const openDrawer = (): void => navigationRef.current?.dispatch(DrawerActions.openDrawer());

export const closeDrawer = (): void => navigationRef.current?.dispatch(DrawerActions.closeDrawer());

export const navigate = (routeName, params): void => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  } else {
    // @ref https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
    // You can decide what to do if the src hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
export const goBack = (): void => navigationRef.current?.dispatch(CommonActions.goBack());

export const popToTop = (): void => navigationRef.current?.dispatch(StackActions.popToTop());

export const goBackTo = (target) =>
  navigationRef.current?.dispatch({
    ...CommonActions.goBack(),
    target,
  });

export const resetToDrawer = (target) =>
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      // @ts-ignore
      key: null,
      routes: [{ name: 'Home', params: { screen: target } }],
    }),
  );

export const openAndResetDrawer = (target): void => {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
  resetToDrawer(target);
};

export const closeAndResetDrawer = (target) => {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
  resetToDrawer(target);
};

export const pop = () => navigationRef.current?.dispatch(StackActions.pop());

// @ts-ignore
export const dismiss = () => navigationRef.current?.dangerouslyGetParent()?.pop();

export const push = (routeName, params) =>
  navigationRef.current?.dispatch(
    StackActions.push(routeName, {
      params,
    }),
  );

/**
 * @ref https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html#jumpto
 * @param routeName
 * @param params
 * @returns {*}
 */
// @ts-ignore
export const jumpTo = (routeName, params) => navigationRef.current?.jumpTo(routeName, params);
