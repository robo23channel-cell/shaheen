import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StateLable({ color, lable}) {
  return (
    <View style={[styles.container, { backgroundColor: color ? color : "#BB3737" }]} >
      <Text style={styles.text}>{lable ? lable : "خطأ"}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      borderRadius: 18,
     paddingHorizontal: 8
    },
    text: {
        fontFamily: 'IBMPlexSansArabic-Medium',
        fontSize: 16,
        color: "#fff"
    }
})