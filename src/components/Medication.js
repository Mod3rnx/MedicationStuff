import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import { styles } from '../styles';

const medicationItems = [
  { time: '12:03', name: 'analgin' },
  { time: '09:00', name: 'aspirin' },
];

export const Medication = ({ navigation }) => {
  const [medicationItemsState, setMedicationItemsState] = useState([]);

  const handleCheckBox = checkBoxValue => {
    setMedicationItemsState(currentMedicationItemsArray => {
      const currentMedicationItemsArrayCopy = [...currentMedicationItemsArray];
      const currentIndex =
        currentMedicationItemsArrayCopy.indexOf(checkBoxValue);
      if (currentIndex > -1) {
        currentMedicationItemsArrayCopy.splice(currentIndex, 1);
        return currentMedicationItemsArrayCopy;
      }
      return [...currentMedicationItemsArrayCopy, checkBoxValue];
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.messagesContainer}>
          <View style={styles.messagesContainerHeader}>
            <Text>Medication</Text>
          </View>
          <View>
            {medicationItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.medicationItem}
                onPress={() => {
                  navigation.navigate('MedicationDetails', {
                    time: item.time,
                    name: item.name,
                  });
                }}>
                <Text>{item.time}</Text>
                <Text>{item.name}</Text>
                <CheckBox
                  boxType="square"
                  disabled={medicationItems.includes(item.name)}
                  value={item.name}
                  onValueChange={() => handleCheckBox(item.name)}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
