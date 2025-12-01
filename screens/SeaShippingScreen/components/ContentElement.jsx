import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ContentElement({ rigthValue, leftValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.contentSubText} >{leftValue}</Text>
      <Text style={styles.contentSubText} >{rigthValue}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    contentSubText: {
      fontFamily: "IBMPlexSansArabic-Medium",
      fontSize: 14,
      
    }
})