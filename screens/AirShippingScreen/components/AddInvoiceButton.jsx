import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import InvoiceButton from '../../../assets/InvoiceButton.svg';
import TicketButton from '../../../assets/TicketButton.svg';

export default function AddInvoiceButton({ onPressI, onPressT }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.butoonContainer} onPress={onPressT} >
        <InvoiceButton/>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.butoonContainer} onPress={onPressI} >
        <TicketButton/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    butoonContainer: {
      marginHorizontal: 3
    }
})