/**
 * @format
 * @flow strict-local
 */

import { Provider } from './redux/reduxStore';
import ReduxAppWrapper from './redux/reduxAppWrapper';

// @ts-ignore
const App = () => (
  <Provider>
    <ReduxAppWrapper />
  </Provider>
);

export default App;
