/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { Dashboard } from '../components/Dashboard';
import { Medication } from '../components/Medication';
import { Calendar } from '../components/Calendar';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (focused, source) => (
  <Image
    style={[styles.icon, { tintColor: focused ? 'rgb(0, 122, 255)' : null }]}
    source={source}
  />
);

export const MainBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, require('../assets/home.png')),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, require('../assets/pills.png')),
        }}
        name="Medication"
        component={Medication}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, require('../assets/calendar.png')),
        }}
        name="Calendar"
        component={Calendar}
      />
    </Tab.Navigator>
  );
};
