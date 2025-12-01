import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NotificationIcon from './NotificationIcon';

export default function UserInfoCard({code, name, hasNotifications=true, navigation }) {
  return (
    <View style={styles.container}>
      <NotificationIcon onPress={() => navigation.navigate('Notification')} hasNotification={hasNotifications}/>
      <View style={{flex: 1}}>
         <Text style={styles.codeText} >الـزبون : {code}</Text>
         <Text style={styles.nameText} >{name}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: "row",
      padding: 0,
      width: "89%",
      marginTop: "18%",
      marginBottom: "5%"
   
    },
    codeText: {
        fontFamily: 'IBMPlexSansArabic-Regular',
        fontSize: 12,
        color: "#1557A9",
        textAlign: 'right'

    },
    nameText: {
        fontFamily: 'IBMPlexSansArabic-SemiBold',
        fontSize: 21,
        color: "#1557A9",
        textAlign: 'right'

    },

  });