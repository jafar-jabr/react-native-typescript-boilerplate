import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components';
import { store as appStore, persistor } from 'src/redux/ReduxStore';
import StatefulAppWrapper from 'src/redux/StatefulAppWrapper';
import LoadingSpinner from 'shared/views/LoadingSpinner';
import ThemeExporter from 'shared/themes/Themes';
import 'react-native-gesture-handler';
import React from 'react';

function App() {
	const theme = ThemeExporter[Config.APP_THEME]();
	return (
		<ThemeProvider theme={theme}>
			<Provider store={appStore}>
				<PersistGate
					loading={
						<LoadingSpinner visible textContent="Loading..." textStyle={{ color: '#fff' }} />
					}
					persistor={persistor}>
					<StatefulAppWrapper />
				</PersistGate>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
