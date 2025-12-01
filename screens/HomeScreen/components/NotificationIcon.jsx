import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import VectorBill from "../../../assets/VectorBill.svg"
import ActiveVectorBill from '../../../assets/ActiveVectorBill.svg'

export default function NotificationIcon({hasNotification, onPress}) {
  return (
    <TouchableOpacity  onPress={onPress}  style={styles.circle}>
       { hasNotification ?  <ActiveVectorBill/> : <VectorBill/>}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    circle: {
      width: 48,
      height: 48,
      borderRadius: 24, // Half of the width/height to make it circular
      backgroundColor: '#1557A9', // Background color
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
   //   opacity: 0.0, // This sets the opacity to 0, making the circle fully transparent
    },
  });