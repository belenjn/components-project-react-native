/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {Navigator} from './src/navigator/Navigator';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: ,
    // background: ,
    // card: ,
    // text: ,
    // border: ,
    // notification: ,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
