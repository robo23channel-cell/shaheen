import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, slideAnim } from 'react-native';
 

export default function SlideUpComponent({isVisible, slideAnim, toggle}) {
    const [PageIndex, setPageIndex] = useState(0);

 
 


  return (
    
    <TouchableOpacity style={[styles.container, { height: isVisible? '100%' : '0%'} ]} onPress={() =>{ setPageIndex(0); toggle()}}  >

      <Animated.View style={[styles.slideUpContainer, { transform: [{ translateY: slideAnim }] }]}>
        
        
         <Text>dmcpemwfpoemw</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  //  / zIndex: 10,
    height: '100%',
    width: '98%',
    alignSelf: 'center',
    bottom: Dimensions.get('window').height - Dimensions.get('window').height * 0.70 ,
    
  },
  button: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
  },
  slideUpContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height * 0.70, // Adjust this value for the height of the sliding component
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  slideText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  elementContainer: {
    width: '90%',
    height: 70,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#546881',
    marginTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20
  }
});
