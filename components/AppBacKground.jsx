import React from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView,  } from 'react-native';
import BackgroundSvg from '../assets/Background.svg';
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from 'expo-status-bar';



export default function AppBackground({ children, style }) {
  return (
   
 
      <View style={[styles.container, style]}> 
            <StatusBar translucent backgroundColor="transparent" style="dark" /> 
      <Image style={styles.Image} source={require('../assets/Layer_1.png')} />
      {/* <BackgroundSvg
        width='100%'
        height='101%'
        /> */}
      {children}
       </View>  
         
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%"
    

    
  },
  Image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: "100%"

  }
});
