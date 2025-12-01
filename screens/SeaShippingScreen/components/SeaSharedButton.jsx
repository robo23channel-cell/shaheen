import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import SeaSharedSv from '../../../assets/SeaSharedSv.svg'
 
export default function SeaSharedButton({onPress, style}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
     <SeaSharedSv/>
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