import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const AppInput = ({ value, onChangeText, placeholder, IconComponent, onIconPress, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />

    </View>
  );
};

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
   
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
   // marginRight: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0', // Border color for the input container
    borderRadius: 12, // Rounded corners for the border
    height: 40,
    backgroundColor:  "#ffffff",// 'rgba(255, 255, 255, 0.5)'
    opacity: 0.7,
    width: width * 0.825, 
    alignSelf: 'center'
    
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    textAlign: 'right',

  },
  iconContainer: {
    padding: 10,
  },
});

export default AppInput;
