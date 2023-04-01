import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {BanksListScreen} from './src/screens/BanksListScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <BanksListScreen />
    </SafeAreaProvider>
  );
}

export default App;
