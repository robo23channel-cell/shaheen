import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AppPicker = ({onSelect, items, label}) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelect = (val) => {
      console.log(val)
      setSelectedCountry(val);
      onSelect(val); 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>بيانات خاصة بالتاجر</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue) => handleSelect(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >

          <Picker.Item label="اختر البلد" value="" />
          { items?.map((e,i) => <Picker.Item key={i} label={e.label} value={e.value} /> )}
          {/* Add more countries as needed */}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'right',
    fontFamily: "IBMPlexSansArabic-Bold",
    color: '#000',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#93B2D7',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerItem: {
    fontFamily: 'SomarSans-Regular',
    fontSize: 16,
    color: '#000000'

  }
});

export default AppPicker;
