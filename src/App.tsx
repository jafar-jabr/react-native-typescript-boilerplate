/**
 * @format
 * @flow strict-local
 */

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store as patientStore, persistor } from './redux/ReduxStore';
import StatefulAppWrapper from './redux/StatefulAppWrapper';
import LoadingSpinner from '../shared/views/LoadingSpinner';

// @ts-ignore
const App = () => (
  <Provider store={patientStore}>
    <PersistGate
      loading={<LoadingSpinner visible textContent="Loading..." textStyle={{ color: '#fff' }} />}
      persistor={persistor}
    >
      <StatefulAppWrapper />
    </PersistGate>
  </Provider>
);

export default App;
