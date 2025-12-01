import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ShahenIconSvg from '../../../assets/ShahenIconSvg.svg'; 

const ShippingCompanyNotification = ({date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>شركة الشاهين للشحن</Text>
        <Text style={styles.date}>{date?.split("T")[0]}</Text>
      </View>
      <View style={styles.iconContainer}>
        {/* Placeholder for the company logo */}
        <ShahenIconSvg/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingTop: 16,
    borderRadius: 16,
    borderColor: '#B6CBE4',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: '90%',
    marginTop: 25
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 12,
    fontFamily: 'SomarSans-SemiBold',
    color: '#1A3D6E', // dark blue color for text
  },
  date: {
    fontSize: 12,
    color: '#B0B0B0', // grey color for date
    fontFamily: 'SomarSans-Medium',
    marginTop: 4,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
   // backgroundColor: '#FFEFE6', // light background for icon
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default ShippingCompanyNotification;
