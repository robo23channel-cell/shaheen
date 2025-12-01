import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const AppInput = ({ value, onChangeText, placeholder, IconComponent, onIconPress, IsSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={IsSecure}
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
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Border color for the input container
    borderRadius: 12, // Rounded corners for the border
    height: Dimensions.get('window').height * 0.055,
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
