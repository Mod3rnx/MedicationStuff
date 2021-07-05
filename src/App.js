import React from 'react';
import { MainStack } from './navigation/MainStackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Medication } from './components/Medication';

import { Calendar } from './components/Calendar';

const Drawer = createDrawerNavigator();

export const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={MainStack} />
      <Drawer.Screen name="Medication" component={Medication} />
      <Drawer.Screen name="Calendar" component={Calendar} />
    </Drawer.Navigator>
  );
};
