import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AirIconSvg from '../../../assets/AirIconSvg.svg'

export default function AirIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}  style={styles.container}>
    <Text style={styles.titleText}>شحن جوي</Text>
    <AirIconSvg/>
     </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
      width: 148.5,
      height: 154.63,
      padding: 13,
      paddingHorizontal: 15,
      paddingVertical: 23,
      margin: 10,
      borderRadius: 24,
      backgroundColor: '#1557A9', // Background color added here
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
        color: '#ffff',
        fontSize: 20,
        fontFamily: 'SomarSans-Bold',
        marginBottom: 15,
       // width: '100%',
        alignSelf: 'center'
    }
  });