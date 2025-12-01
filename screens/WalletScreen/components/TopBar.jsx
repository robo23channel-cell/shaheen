import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react'
import ArrowBackSvg from '../../../assets/ArrowBackSvg.svg';
import WallettitleSvg from '../../../assets/WallettitleSvg';
import VectorBill from "../../../assets/TopBarNotificationSvg.svg"
import ActiveVectorBill from '../../../assets/ActiveTopBarNotificationSvg.svg'

export default function TopBar({hasNotifications = false, navigation}) {
  return (
    <View style={styles.container}>
    {/* Left Arrow */}
    
    <TouchableOpacity  onPress={() => navigation.navigate("Home")} style={styles.leftIcon}>
    <ArrowBackSvg/>
    </TouchableOpacity>

    {/* Title with Wallet Icon */}
    <View style={styles.titleContainer}>
        <WallettitleSvg/>
    </View>

    {/* Notification Bell */}
    <View style={styles.notificationContainer}>
       { hasNotifications ? <ActiveVectorBill/> : <VectorBill/>}
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
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 8,
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