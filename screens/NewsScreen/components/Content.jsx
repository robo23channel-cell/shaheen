import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Content({ text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{text}</Text>
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        paddingHorizontal: 25,
         marginTop: 20
    },
    content: {
        fontFamily: "SomarSans-Medium",
        fontSize: 12
    }
})