import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import BookMarkActiveScg from '../../../assets/BookMarkActiveScg.svg'
import BookMarkSvg from '../../../assets/BookMarkSvg.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewsElement({isActive = true, header, date, onPress, path}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Placeholder for the bookmark icon */}
        { isActive ? <BookMarkActiveScg/> : <BookMarkSvg/>}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* Placeholder for the branch image */}
        <Image
          source={{ uri: path }} // Replace with your actual image URL
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 12,
      backgroundColor: '#F8F9FA', // light background color
      borderWidth: 1,
      borderColor: '#ECECEC',
      width: '90%',
      marginBottom: 10
    },
    iconContainer: {
      width: 24,
      height: 24,
       borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      alignSelf: 'flex-start',
      marginTop: 5
    },
    bookmark: {
      width: 12,
      height: 12,
      backgroundColor: '#FFFFFF', // white inside the bookmark icon
    },
    textContainer: {
      flex: 1,
      alignSelf: 'flex-start',
      alignItems: 'flex-end',
      padding: 10
    },
    header: {
      fontSize: 13,
      fontFamily: 'SomarSans-Bold',
      color: '#333',
    },
    date: {
      fontSize: 12,
      fontFamily: 'SomarSans-SemiBold',
      color: '#9397A0',
    },
    imageContainer: {
      width: 70,
      height: 70,
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });