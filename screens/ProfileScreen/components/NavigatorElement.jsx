import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import ArrowSvg from '../../../assets/ArrowSvg.svg'; 

const width = Dimensions.get("screen").width
const NavigatorElement = ({ title, SvgIcon, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <ArrowSvg/>
      <Text style={styles.text}>{title}</Text>
      <View style={{ marginRight: - width * 0.05, paddingBottom: 6}} >
      { SvgIcon  && <SvgIcon/>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: "#C3CDDA",
    paddingBottom: -1
  },
  icon: {
    marginRight: 8,
  },
  text: {
    flex: 1,
    fontSize: 14,
    paddingRight: 5,
    fontFamily: 'SomarSans-Medium',
    color: '#092547',
    textAlign: 'right', // Aligns text to the right
  },
  lockIcon: {
    marginLeft: 8,
  },
});

export default NavigatorElement;
