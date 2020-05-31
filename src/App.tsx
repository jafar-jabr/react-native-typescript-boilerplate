/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from './redux/reduxStore';
import ReduxAppWrapper from './redux/reduxAppWrapper';

// @ts-ignore
const App: () => React$Node = () => (
  <Provider>
    <ReduxAppWrapper />
  </Provider>
);

export default App;
