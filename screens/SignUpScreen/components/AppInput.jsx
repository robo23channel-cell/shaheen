import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const AppInput = ({ value, onChangeText, placeholder, IconComponent, onIconPress, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecure}
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
   // marginHorizontal: 20,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: '#93B2D7', // Border color for the input container
    borderRadius: 12, // Rounded corners for the border
    height: 55,
    backgroundColor: '#ffff'
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
