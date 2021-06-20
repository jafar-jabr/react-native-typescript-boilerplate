import I18n from 'i18n-js';
import { MutableRefObject, useEffect } from 'react';
import { AppState, StatusBar, View } from 'react-native';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MainAppNavigation from 'src/components/navigation/AppNavigation';
import { createErrorMessageSelector, createLoadingSelector } from 'src/redux/api/ApiWatchMan';
import StorageService from 'shared/services/StorageService';
import { navigationRef, isMountedRef } from 'shared/services/NavigationService';
import { requestLoginError, requestLoginSuccess } from 'src/redux/actions/LoginActions';
import * as StringConstants from 'shared/constants/stringConstants.json';
import LoadingSpinner from 'shared/views/LoadingSpinner';
import { getAuthState } from 'src/redux/StatesGetter';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    <SafeAreaProvider style={{ backgroundColor: 'white' }}>
      <View style={{ height: getStatusBarHeight(), backgroundColor: 'white' }}>
        <StatusBar barStyle="dark-content" translucent />
      </View>
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
    </SafeAreaProvider>
  );
};

export default StatefulAppWrapper;
