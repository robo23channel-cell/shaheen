import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ARWDWN from '../../../assets/ARWDWN.svg'


 
const CityPicker = ({type, setSelectedCity, selectedCity}) => {
  //const [selectedCity, setSelectedCity] = useState("مخزن طريق الشوك");
  const content = type == 'air'? [
    { label: 'مخزن طريق الشوك', value: 'مخزن طريق الشوك' },
    { label: 'بنغازي', value: 'بنغازي' },
    { label: 'مصراتة', value: 'مصراتة' },
    { label: 'نقطة تسليم حي دمشق', value: 'نقطة تسليم حي دمشق' },
    { label: 'نقطة تسليم تاجوراء', value:'نقطة تسليم تاجوراء' },
    { label: 'نقطة تسليم جنزور ', value: 'نقطة تسليم جنزور ' },
  ] : 
  [
    { label: 'طريق الشوك', value: 'طريق الشوك' },
    { label: 'بنغازي', value: 'بنغازي' },
    { label: 'مصراتة', value: 'مصراتة' },
  ] ;
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedCity(value)}
        items={content}
        value={selectedCity}
        style={{
          inputAndroid: styles.input,
          inputIOS: styles.input,
          iconContainer: styles.iconContainer,
        }}
        placeholder={{}} // This removes the "select an item..." placeholder
        useNativeAndroidPickerStyle={false} // Disables default picker style on Android
        Icon={() => <View><ARWDWN/></View>}

        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 105, // Adjust as needed
        height: 30,
        borderRadius: 8,
        overflow: 'hidden',
      
    },
    input: {
        backgroundColor: '#B0C4DE', // Light blue background similar to the image
        paddingVertical: 5,
        paddingHorizontal: 12,
        color: 'black',
        fontSize: 16,
        textAlign: 'right', // Align text to the right for Arabic text
    },
    iconContainer: {
        top: '50%',
        left: '10%'
    },
});

export default CityPicker;
