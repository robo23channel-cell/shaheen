import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AppBackground from '../../components/AppBacKground';
import ShaheenLogo from "../../assets/ShaheenLogo.svg";
import AppButton from '../../components/AppBotton';
import colors from '../../config/colors';

export default function StartUpScreen({ navigation }) {
  return (
    <AppBackground style={styles.background}>
      <ShaheenLogo 

        style={styles.logo} 
      />
      <View style={styles.buttonContainer}>
        <AppButton title='سجل دخولك' color={colors.blue} fun={() => navigation.navigate('Login')} />
        <AppButton title='إنشاء حساب' color={colors.orange} fun={() => navigation.navigate('SignUpScreen')} />
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute', 
    top: Dimensions.get('window').height * 0.25, // Adjusted to position the logo slightly lower
  },
  buttonContainer: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.15, // Positioned 15% from the bottom of the screen
    width: '100%',
    alignItems: 'center',
  },
});
