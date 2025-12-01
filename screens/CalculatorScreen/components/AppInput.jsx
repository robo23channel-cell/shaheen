import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const AppInput = ({ value, onChangeText, placeholder, IconComponent, onIconPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
        {IconComponent && <IconComponent width={24} height={24} />} 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //alignItems: 'center',
   
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 90,
    marginRight: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0', // Border color for the input container
    borderRadius: 12, // Rounded corners for the border
    height: 40,
    backgroundColor:  "#ffffff",// 'rgba(255, 255, 255, 0.5)'
    opacity: 0.7
    
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
