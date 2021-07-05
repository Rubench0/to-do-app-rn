import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {colors} from './src/styles/styles';
import MainStackNavigator from './src/components/navigation/Stack';
import {NativeBaseProvider} from 'native-base';
import {theme} from './theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
