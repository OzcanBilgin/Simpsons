import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/StackNavigator';
import {theme} from './src/utils/theme';
import {ThemeProvider} from 'styled-components';
import {store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/redux/store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {bootstrapped => {
            if (bootstrapped) {
              return <RootNavigator />;
            }
            return <></>;
          }}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
