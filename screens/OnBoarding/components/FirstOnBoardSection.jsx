import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import LogoSvg from "../../../assets/LogoSvg.svg";
import AppButton from '../../../components/AppBotton';
import Sliderindicator1 from '../../../assets/Sliderindicator1.svg'
import colors from '../../../config/colors';


export default function FirstOnBoardSection({next}) {
  return (
    <>
        <LogoSvg  style={styles.logo} />
        <Sliderindicator1 style={styles.slider} />
        <View style={styles.headerContainer}>
        <Text  style={styles.header} >تطبيق الشاهين!</Text>
        </View>
       
        <View style={styles.contentContainer}>
        <Text  style={styles.content} >يمكنك الان التمتع بالخدمات{'\n'} المقدمة من قبل الشركة بالكامل{'\n'} عن طريق التطبيق</Text>
        </View>
        <View style={styles.buttonContainer}>
         <AppButton title='التــالي' color={colors.blue} fun={next} />
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
      top: 187 - Dimensions.get('window').height * 0.02, 
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
  