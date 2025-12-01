import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'

export default function FinancialDetails({lyAmount, UsdAmount}) {
  return (
    <View style={styles.container} >
      <Text style={styles.UsdTitle} >${UsdAmount}</Text>
      <Text style={styles.LyTitle} >{lyAmount} دينار</Text>
      <Text style={styles.noteTitle} >القيمة الموجودة في المحفظة</Text>
      <Text style={styles.noteTitle} >الحساب تحت المراجعه</Text>
    </View>
  )
}


styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'red',
        // top: 138
        
  
    },
    UsdTitle: {
        fontFamily: "SomarSans-Bold",
        fontSize: 36,
        color: colors.blue

    },
    LyTitle: {
        fontFamily: "SomarSans-Medium",
        fontSize: 16,
        color: colors.blue
    },
    noteTitle: {
        textDecorationLine: 'underline',
        fontFamily: "SomarSans-Medium",
        fontSize: 12,
        color: colors.red
    }
})