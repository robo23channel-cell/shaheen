import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NotificationProcess from '../../../assets/ShahenSvgLogo.svg'

export default function NotificationElement({title , discription, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.description}>{discription}</Text>
      </View>
      <View style={styles.iconContainer}>
        <NotificationProcess/>
        {/* <View style={styles.checkmark}></View> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      backgroundColor: '#F8F9FA', // light background color
      borderWidth: 1,
      borderColor: '#ECECEC',
      width: '90%',
      marginBottom: 10
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
       justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 18,
    },
    checkmark: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF', // white checkmark background
    },
    textContainer: {
      flex: 1,
    },
    header: {
      fontSize: 18,
      fontFamily: 'SomarSans-Bold',
      color: '#333',
    },
    description: {
      fontSize: 12,
      fontFamily: 'SomarSans-SemiBold',
      color: '#333',
    },
  });