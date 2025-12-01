import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SingleElement({ Lside, Rside}) {
  return (
    <View style={styles.container}>
        {Lside()}
        {Rside()}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        width: '95%',
        borderRadius: 12,
        height: 48.12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        alignSelf: 'center'
    }
})