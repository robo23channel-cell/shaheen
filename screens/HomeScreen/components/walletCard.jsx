import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WalletCardBackground from '../../../assets/walletCardBackground.svg'
import WalletIcon from './WalletIcon'

export default function WalletCard({usdAmount, lyAmount, style}) {
  return (
    <View style={[styles.container, style]} >
        <View>
            <WalletCardBackground style={styles.backgroundImage} />
        </View>
        <View  style={styles.walletContent}>
            <View  style={{alignItems: 'center'}}>
                <WalletIcon/>
                <Text style={styles.walletTitleText}>محفظتك</Text>
            </View>
            <View style={{ marginTop: 6}}>
                <Text style={[styles.medumText, { fontSize: 14}]}>قيمة محفظتك</Text>
                <Text style={[styles.medumText, { fontSize: 12}]}>{lyAmount}  دينار</Text>
                <Text style={[styles.BoldText, { fontSize: 28, textAlign: "right"}]}>$ {usdAmount}</Text>
            </View>
        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 23,
      paddingVertical: 28,
      marginBottom: 100,
      
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignSelf: "center",
        resizeMode: 'contain', // 'cover' or 'contain' depending on your needs
      },
      walletContent: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        width: '80%',
        paddingTop:10,
      },
      walletTitleText : {
        fontFamily: "SomarSans-Medium",
        color: "#ffff",
        fontSize: 11,
        paddingTop: 5,
        textAlign: "center",
        marginLeft: -10
      },
      medumText: {
        fontFamily: "SomarSans-Medium",
        color: "#ffff",
        fontSize: 11,
      },
      BoldText: {
        fontFamily: "SomarSans-Bold",
        color: "#ffff",
       }
  });