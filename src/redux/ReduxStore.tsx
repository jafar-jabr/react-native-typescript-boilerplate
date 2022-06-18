import { combineReducers, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from 'src/redux/reducers/AuthReducer';
import { LOGOUT_SUCCESS } from 'src/redux/types/loginTypes';

const sagaMiddleware = createSagaMiddleware();

const persistRootKey = `root_awesome_app`;

const appReducer = combineReducers({
	authState: AuthReducer
});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_SUCCESS) {
		AsyncStorage.removeItem(`persist:${persistRootKey}`);
		return appReducer(undefined, action);
	}
	return appReducer(state, action);
};

const persistConfig = {
	key: persistRootKey,
	storage: AsyncStorage,
	blacklist: ['loadingState', 'errorState'],
	timeout: 0,
	version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = configureStore({
	reducer: persistedReducer,
	devTools: __DEV__,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			thunk: false
		}),
		sagaMiddleware
	]
});

// sagaMiddleware.run(appSaga);

const persistor = persistStore(store);

const storeDispatcher = (action) => store.dispatch(action);

const storeStateGetter = (state) => store.getState()[state];

export { persistor, store, storeDispatcher, storeStateGetter };
