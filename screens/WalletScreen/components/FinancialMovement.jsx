import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import TransactionCard from './TransactionCard'

const higth = Dimensions.get('screen').height; 


function separateCurrency(value) {
  const match = value.match(/^([\d.]+)([A-Za-z]+)$/);
  if (!match) {
    throw new Error("Invalid input format");
  }
  return {
    amount: parseFloat(match[1]), // Convert to a number
    currency: match[2]           // Extract the currency
  };
}

export default function FinancialMovement({data}) {
  console.log(data)
   return (
    <View style={[styles.container, data?.length < 4 ? {height: higth *0.8 } : {}]}>
      <View style={styles.TitleContainer}>
          <Text style={styles.subTitle}>الكل</Text>
          <Text style={styles.mainTitle}>العمليات</Text>
      </View>
      {
        data?.map( (e, i) => (
          <>
          <TransactionCard key={i} amount={separateCurrency(e?.value)?.amount} currency={separateCurrency(e?.value)?.currency} type={e.type != "Withdraw" ? "green" : "red"} date={e?.date.split("T")[0]} />
        
          </>
        ))
      }
      {/* <TransactionCard amount={400} currency={"USD"} type={"red"} date="12 Oct 2021" />
      <TransactionCard amount={50000} currency={"LYD"} type={"green"} date="12 Oct 2021" />
      <TransactionCard amount={50000} currency={"LYD"} type={"green"} date="12 Oct 2021" /> */}


    </View>
  )
}


const styles = StyleSheet.create({
    container: {
       // position: "absolute",
        alignItems: "center",
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
      //  top: 280,
        width: '100%',
        backgroundColor: "#ffff",
        // height: higth *0.8,
        elevation: 0.5,
    },
    TitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      //  alignContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    mainTitle: {
        fontFamily: "SomarSans-SemiBold",
        fontSize: 21,
        color: colors.blue
    },
    subTitle: {
        fontFamily: "SomarSans-SemiBold",
        fontSize: 12,
        color: colors.blue
    }
})