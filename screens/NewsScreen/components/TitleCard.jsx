import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
 import BigBookMark from '../../../assets/BigBookMark.svg';

export default function TitleCard({title}) {
  return (
    <View style={styles.containetr}>
      <BigBookMark />
      <Text style={styles.title} >{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    containetr : {
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-between',
        paddingHorizontal: 25
        
    },
    title: {
        fontSize: 21,
        fontFamily: 'SomarSans-Bold',
        color: '#19202D'
    }
 
})