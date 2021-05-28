import I18n from 'i18n-js';
import { MutableRefObject, useEffect } from 'react';
import { AppState, StatusBar, View } from 'react-native';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigation from '../components/navigation/AppNavigation';
import { Colors } from '../../shared/themes';
import { createErrorMessageSelector, createLoadingSelector } from './api/ApiWatchMan';
import StorageService from '../../shared/services/StorageService';
import { navigationRef, isMountedRef } from '../../shared/services/NavigationService';
import { requestLoginError, requestLoginSuccess } from './actions/LoginActions';
import * as StringConstants from '../../shared/constants/stringConstants.json';
import GlobalLtrStyle from '../../shared/styles/global.ltr.style';
import LoadingSpinner from '../../shared/views/LoadingSpinner';
import { getAuthState } from './StatesGetter';

const StatefulAppWrapper = (): JSX.Element => {
  const loadingSelector = createLoadingSelector([]);
  const errorSelector = createErrorMessageSelector([]);
  const { isLoggedIn } = useSelector(getAuthState, shallowEqual);
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      I18n.locale = await StorageService.getData(StringConstants.APP_LANGUAGE, 'en');
    })();
    return () => {
      try {
        // @ts-ignore
        AppState.removeAllListeners();
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
  }, []);
  useEffect(() => {
    (isMountedRef as MutableRefObject<boolean>).current = true;
  }, []);
  useEffect(() => {
    if (isLoggedIn === undefined) {
      (async () => {
        try {
          const userToken = await StorageService.getData(StringConstants.USER_TOKEN, null);
          if (userToken) {
            dispatch(requestLoginSuccess({}));
          } else {
            dispatch(requestLoginError({}));
          }
        } catch (e) {
          dispatch(requestLoginError({}));
        }
      })();
    }
  });
  return (
    <View style={GlobalLtrStyle.FlexView}>
      <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
      <NavigationContainer ref={navigationRef}>
        <MainAppNavigation isLoggedIn={isLoggedIn} />
      </NavigationContainer>
      <LoadingSpinner
        visible={isLoading}
        textContent="Loading..."
        textStyle={{
          color: '#fff',
        }}
      />
    </View>
  );
};

export default StatefulAppWrapper;
