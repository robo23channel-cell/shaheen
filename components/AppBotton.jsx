import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

export default function AppButton({ title, color , fun, style}) {
  return (
    <TouchableOpacity onPress={fun} style={[styles.button, { backgroundColor: color }, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.9,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily:  'SomarSans-Bold',
    
  },
});
