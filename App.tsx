import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './App/Navigation/Navigation';
import {StatusBar} from 'react-native';
import useColorScheme from './App/Hooks/useColourScheme';
import ConnectionListener from './App/Components/ConnectionListener/ConnectionListener';
import {Provider} from 'react-redux';
import store, {persistor} from './App/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const Main = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <ConnectionListener />
      <StatusBar />
    </>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Main />
        {/* </PersistGate> */}
      </Provider>
    </SafeAreaProvider>
  );
}
