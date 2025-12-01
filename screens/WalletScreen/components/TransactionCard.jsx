import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GreenTransactionSvg from "../../../assets/GreenTransactionSvg.svg";
import RedTransActionSvg from "../../../assets/RedTransActionSvg.svg";

const TransactionCard = ({amount, currency, type, date}) => {
  return (
    <View style={styles.container}>
      {/* Amount and Currency */}
      <View style={styles.amountContainer}>
        <Text style={type == "red"? styles.amountTextRed : styles.amountText}>{new Intl.NumberFormat().format(amount)}</Text>
        <Text style={type == "red"? styles.currencyTextRed : styles.currencyText }>{currency == "LYD" ? "LYD" : "$"}</Text>
      
      </View>

      {/* Status and Date */}
      {/* <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{type == "red" ? "تم السحب" : "تم الإيداع"}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View> */}

      {/* Icon */}
      <View   style={{ flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{type == "red" ? "تم السحب" : "تم الإيداع"}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={type == "red"? styles.iconContainerRed : styles.iconContainer}>
        {/* Replace with your image or icon */}
        {type == "red"? <RedTransActionSvg/> : <GreenTransactionSvg/>}
 
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E8EEF6', // light background color
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 0, // Add shadow/elevation if needed
    width: '90%',
    marginBottom: 15
    
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amountText: {
    fontSize: 21,
    color: '#27AE60', // Green color for amount
    fontFamily: 'SomarSans-ExtraBold'
  },
  amountTextRed: {
    fontSize: 21,
    color: '#E64646', // Green color for amount
    fontFamily: 'SomarSans-ExtraBold',
  },
  currencyText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#27AE60', // Same green color for currency
  },
  currencyTextRed: {
    fontSize: 16,
    marginLeft: 5,
    color: '#E64646', 
  },
  statusContainer: {
    alignItems: 'flex-end',
    padding: 10,
    paddingHorizontal: 25
    // backgroundColor: 'red'
    
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'SomarSans-Bold',
    color: '#1c2237', // Dark navy color for status
    marginTop: -8,
    
  },
  dateText: {
    fontSize: 12,
    color: '#043857E3', // Lighter grey for date
    opacity: 0.89,
    marginTop: 1.5,
  },
  iconContainer: {
    backgroundColor: '#d3f3e2', // Light green background for icon
    padding: 10,
    borderRadius: 10,
    height: 46,
    width: 42.64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainerRed: {
    backgroundColor: '#AE272729', // Light green background for icon
    padding: 10,
    borderRadius: 10,
    height: 46,
    width: 42.64,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default TransactionCard;
