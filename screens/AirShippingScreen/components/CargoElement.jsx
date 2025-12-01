import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
 import AirIconElementSvg from '../../../assets/AirIconElementSvg'; 
import BsPencilSquare from '../../../assets/FiAlertTriangle.svg'; 
import statusEnum from '../../../helpers/status'

const getDateFormat = (date) => date?.split("T")[0]; 

export default function CargoElement({ onPress, onPressIcon, data}) {
  console.log("D: ", data);
    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
          {/* Left Section with Icon */}
          <View style={styles.iconContainer}>
            <View  >
              <AirIconElementSvg/>
            </View>
          </View>
    
          {/* Right Section with Information */}
          <View style={styles.infoContainer}>
            <View style={styles.topSection}>
              <TouchableOpacity onPress={onPressIcon} >
                 <BsPencilSquare/>
              </TouchableOpacity>
              <Text style={[styles.statusText, { backgroundColor : statusEnum.colors[data.followUpStatus - 1] }]}>{statusEnum.status.ar[data.followUpStatus - 1]}</Text>
            </View>
    
            <Text style={styles.title}>{data?.country?.countryCode}-{data?.orderNumber}-AC</Text>
            <Text style={styles.subText}>{""}</Text>
            <Text style={styles.dateText}>{getDateFormat(data?.createdOn)}</Text>
          </View>
        </TouchableOpacity>
      );
}



const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
     // backgroundColor: '#f9f9f9',
      borderRadius: 20,
      padding: 10,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-between',
       margin: 10,
       borderWidth: 1,
       borderColor: '#E7E7E7',
     },
    iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconBackground: {
      backgroundColor: '#F46B1D', // Orange background for the icon
      padding: 15,
      borderRadius: 12,
    },
    infoContainer: {
      flex: 4,
      paddingLeft: 10,
      alignItems: 'flex-end'
    },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statusText: {
      color: 'white',
      borderRadius: 10,
      padding: 5,
      paddingHorizontal: 10,
       fontSize: 14,
      marginLeft: 7,
      fontFamily: 'SomarSans-Regular'
    },
    title: {
      fontSize: 16,
       fontFamily: 'SomarSans-SemiBold',
      color: '#333',
      marginVertical: 5,
    },
    subText: {
      fontSize: 14,
      color: '#808080',
    },
    dateText: {
      fontSize: 14,
      color: '#808080',
      marginTop: 5,
    },
  });