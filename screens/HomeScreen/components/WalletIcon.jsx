import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WalletIconSvg from "../../../assets/WalletIcon.svg"

export default function WalletIcon() {
  return (
    <View  style={styles.circle}>
        <WalletIconSvg/>
    </View>
  )
}


const styles = StyleSheet.create({
    circle: {
      width: 54.24,
      height: 54.24,
      borderRadius: 28, // Half of the width/height to make it circular
      backgroundColor: '#1557A9', // Background color
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 3,
      marginLeft: -10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
   //   opacity: 0.0, // This sets the opacity to 0, making the circle fully transparent
    },
  });