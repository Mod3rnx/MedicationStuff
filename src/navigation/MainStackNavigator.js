/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { MainBottomTabs } from './MainBottomTabNavigator';
import { MedicationDetails } from '../components/MedicationDetails';

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard';
  return routeName;
};

const Stack = createStackNavigator();

export const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../assets/drawer.png')}
              style={{ width: 30, height: 30, marginHorizontal: 7 }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="Dashboard"
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
        component={MainBottomTabs}
      />
      <Stack.Screen
        name="MedicationDetails"
        options={{ title: 'Medication details' }}
        component={MedicationDetails}
      />
    </Stack.Navigator>
  );
};
