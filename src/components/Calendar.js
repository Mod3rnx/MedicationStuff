/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export const Calendar = () => {
  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      <Text>
        Calendar.{'\n'}Nothing{'\n'}here
      </Text>
    </View>
  );
};
