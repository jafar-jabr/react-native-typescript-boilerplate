import { persistStore, persistCombineReducers } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import AuthReducer from 'src/redux/reducers/AuthReducer';
import { LOGOUT_SUCCESS } from 'src/redux/types/loginTypes';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const persistRootKey = `root_awesome_app`;

const appReducer = persistCombineReducers(
  {
    key: persistRootKey,
    storage: AsyncStorage,
    blacklist: ['loadingState', 'errorState'],
    timeout: 0,
  },
  {
    authState: AuthReducer,
  },
);

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    AsyncStorage.removeItem(`persist:${persistRootKey}`);
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const store = __DEV__
  ? createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
  : createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(CustomSagas);

const persistor = persistStore(store);

const storeDispatcher = (action) => store.dispatch(action);

const storeStateGetter = (state) => store.getState()[state];

export { persistor, store, storeDispatcher, storeStateGetter };
