import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AppButton from '../../../components/AppBotton';
import SliderIndicator2 from '../../../assets/SliderIndicator2.svg'
import TrackLogo from '../../../assets/TrackLogo.svg'
import colors from '../../../config/colors';

export default function SecondOnBoardSection({next}) {
  return (
    <>
        <TrackLogo  style={styles.logo} />
        <SliderIndicator2 style={styles.slider} />
        <View style={styles.headerContainer}>
        <Text  style={styles.header} >تتبع شحناتك بكل سهولة</Text>
        </View>
       
        <View style={styles.contentContainer}>
        <Text  style={styles.content} >مع تطبيق الشاهين, يمكنك تتبع{'\n'} شحناتك فالوقت الفعلي{'\n'} ومعرفة حالتها في اي وقت ومن{'\n'} اي مكان</Text>
        </View>
        <View style={styles.buttonContainer}>
         <AppButton title='التــالي' color={colors.blue}  fun={next}/>
        </View>
    </>
  )
}




const styles = StyleSheet.create({
    background: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    logo: {
      position: 'absolute', 
      top: 143 - Dimensions.get('window').height * 0.02, 
    },
    buttonContainer: {
      position: 'absolute',
      top: 692 - Dimensions.get('window').height * 0.02, 
      width: '100%',
      alignItems: 'center',
    },
    header:{
      fontFamily: "SomarSans-Bold",
      color: '#00000',
      fontSize: 24,
      width: '100%'
      // position: 'absolute',
      // top: 466  - Dimensions.get('window').height * 0.02,
      // left: 24
    },
    content:{
      fontFamily: "SomarSans-Medium",
      color: '#00000',
      fontSize: 21,
      textAlign: 'center'
    },
    headerContainer: {
      position: 'absolute',
      top: 466  - Dimensions.get('window').height * 0.02,
    //  left: 24
    },
    contentContainer: {
      position: 'absolute',
      top: 519  - Dimensions.get('window').height * 0.02,
    },
    slider: {
        position: 'absolute',
        top: 442 - Dimensions.get('window').height * 0.02,
        left: 141
    }
  });
  