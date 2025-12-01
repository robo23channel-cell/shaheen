import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InfoSvg from '../../../assets/InfoSvg.svg'

export default function InfoLable({lable}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >{lable}</Text>
      <InfoSvg/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#BEE3F8',
        alignSelf: 'flex-end',
        marginRight: 25,
        marginVertical: 5,
        padding: 8
         
    },
    text: {
        marginRight: 5,
        color: "#2A4365",
        fontFamily: 'SomarSans-Regular',
        fontSize: 12
    }
})