/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { styles } from '../styles';

export const MedicationDetails = ({ route }) => {
  const { name, time } = route.params;
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <View
          style={[
            styles.messagesContainer,
            {
              borderWidth: StyleSheet.hairlineWidth,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text>
            {name.toUpperCase()}
            {'\n'}
            {time}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
