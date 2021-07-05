/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

const AppDelegate = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => AppDelegate);
