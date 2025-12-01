import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import LogoSvg from "../../assets/LogoSvg.svg";
import AppButton from '../../components/AppBotton';
import colors from '../../config/colors';
import AppBackground from '../../components/AppBacKground';
import FirstOnBoardSection from './components/FirstOnBoardSection'
import SecondOnBoardSection from './components/SecondOnBoardSection';
import TherdOnBoaedSection from './components/TherdOnBoaedSection';


export default function OnBoardingScreen({ navigation }) {
    const [section, setSection] = useState(0); 

    const nextPage = () => {
        if( section < 2 ) setSection(section + 1);
        else navigation.navigate('StartUpScreen')
    }
    const Section = () => {
        switch(section) {
            case 0: return <FirstOnBoardSection next={nextPage} /> 
            case 1: return <SecondOnBoardSection next={nextPage} /> 
            case 2: return <TherdOnBoaedSection next={nextPage} /> 
        }
    }

  return (
    <AppBackground>
        <Section/>
    </AppBackground>
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
      top: 187, 
    },
    buttonContainer: {
      position: 'absolute',
      bottom: Dimensions.get('window').height * 0.15, 
      width: '100%',
      alignItems: 'center',
    },
    header:{
      textAlign:"right"
    }
  });
  