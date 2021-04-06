import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
