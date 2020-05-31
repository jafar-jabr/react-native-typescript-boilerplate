import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as PropTypes from 'prop-types';
import AuthReducer from './reducers/authReducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  authState: AuthReducer,
});

// @ts-ignore
const rootReducer = (state, action: AnyAction) => {
  return appReducer(state, action);
};

const createPreloadedStore = (preloadedState: Record<string, unknown> | undefined) =>
  createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = createPreloadedStore({});

// @ts-ignore
const Provider = ({ children }) => <ReduxProvider store={store}>{children}</ReduxProvider>;
Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export { Provider, createPreloadedStore, store };
