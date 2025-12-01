import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Control from "../../../assets/control.svg"

export default function CheckBox({ label, checked, onChange }) {
  return (
    <TouchableOpacity onPress={onChange} style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Control/>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    alignSelf: 'flex-end'
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#3182CE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  checked: {
    backgroundColor: '#333',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 10,
    color: '#1A202C',
    fontFamily: 'SomarSans-Medium'
  },
});
