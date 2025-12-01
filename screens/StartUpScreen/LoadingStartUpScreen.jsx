import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AppBackground from '../../components/AppBacKground';
import ShaheenLogo from "../../assets/ShaheenLogo.svg";

export default function LoadingStartUpScreen() {
  return (
    <AppBackground style={styles.background}>
    <ShaheenLogo 

      style={styles.logo} 
    />
 
  </AppBackground>
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      position: 'absolute', 
      top: Dimensions.get('window').height * 0.25, // Adjusted to position the logo slightly lower
    },
    buttonContainer: {
      position: 'absolute',
      bottom: Dimensions.get('window').height * 0.15, // Positioned 15% from the bottom of the screen
      width: '100%',
      alignItems: 'center',
    },
  });
  