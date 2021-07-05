import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../styles';

export const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.avatar} />
          <Text>Good morning, Eugen</Text>
        </View>
        <View style={styles.messagesContainer}>
          <View style={styles.messagesContainerHeader}>
            <Text>Messages</Text>
          </View>
          <View style={styles.messagesContainerBody}>
            <Text>No symptoms today</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
