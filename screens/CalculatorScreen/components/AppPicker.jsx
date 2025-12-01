import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AppPicker = ({ title, placeHolder, itmes = [], setItem }) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  handleSetItem = (val) => {
    console.log("oout:", val)
    setSelectedCountry(val); 
    setItem(val?.value); 
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue) => {setSelectedCountry(itemValue); setItem(itemValue)}}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label={placeHolder} value="" /> 
          { itmes?.map( (e, i) => <Picker.Item key={i} label={e?.label} value={e?.value} />)}
          {/* Add more countries as needed */}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'right',
    fontFamily: 'SomarSans-SemiBold',
    color: '#000',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    backgroundColor: '#fff',
    opacity: 0.5,
    justifyContent: 'center', // Center items vertically
  },
  picker: {
    height: 40,
    width: '100%',
    textAlign: 'center', // Aligns text in the center
  },
  pickerItem: {
    fontFamily: 'SomarSans-Regular',
    fontSize: 16,
    color: '#ffff',
    textAlign: 'center', // Aligns picker items text in the center
  },
});

export default AppPicker;
