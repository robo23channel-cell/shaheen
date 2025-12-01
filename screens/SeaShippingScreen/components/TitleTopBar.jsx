import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
 import ArrowBackSvg from '../../../assets/ArrowBackSvg.svg';
import React from 'react'

export default function TitleTopBar({ title, navigation }) {
  return (
    <View style={styles.container}>
    {/* Left Arrow */}
    
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftIcon}>
    <ArrowBackSvg/>
    </TouchableOpacity>

    {/* Title with Wallet Icon */}
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
    </View>

    {/* Notification Bell */}
    <View style={styles.notificationContainer}>
       <></>
    </View>
  </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingTop: 56,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      elevation: 0.25,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      position: 'absolute',
      top: 0,
      width: '100%'

    },
    leftIcon: {
      padding: 10,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
     },
    titleText: {
      fontSize: 14,
fontFamily: 'SomarSans-SemiBold',
     // marginLeft: 8,
      color: 'black',
    },
    notificationContainer: {
      position: 'relative',
      padding: 10,
    },
    redDot: {
      position: 'absolute',
      top: 5,
      right: 5,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'red',
    },
  });