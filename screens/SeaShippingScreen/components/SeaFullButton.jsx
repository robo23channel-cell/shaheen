import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import SeaFullSvg from '../../../assets/SeaFullSvg.svg'
 
export default function SeaFullButton({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     <SeaFullSvg/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 'auto', // 90% width for the container
      height: 'auto', // Let the height be auto
      alignSelf: 'center',
    },
  });