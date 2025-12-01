import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import DotSvg from '../../../assets/DotSvg.svg';
import ActiveDotsSvg from '../../../assets/ActiveDotsSvg.svg';
import { TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const ImageGallery = ({onPress, images}) => {
   const [activeIndex, setActiveIndex] = useState(0); // Index of the current image
  // const images = [
      
      
  //   // require('../../../assets/splash.png'), // Replace with your actual image paths
  //   // require('../../../assets/splash.png'),
  //   // require('../../../assets/splash.png'),
  //   // require('../../../assets/splash.png'),
  // ];

  // Function to switch to the next image
  const changeImage = () => {
    if(images.length < 1) return ;
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use effect to automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(changeImage, 5000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Generate the image dots (indicator)
  //   <View
  //     key={index}
  //     style={[
  //       styles.dot,
  //       index === activeIndex ? styles.activeDot : styles.inactiveDot,
  //     ]}
  //   />
  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
            index === activeIndex ? <ActiveDotsSvg style={{ marginHorizontal: 2}} /> : <DotSvg/> 
        ))}
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={{padding: 15, marginTop: -15 }}>

    <View style={styles.container}>
      {/* Image gallery */}
      {/* <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false} // Disable manual scrolling
        contentContainerStyle={styles.scrollView}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri : image}}
            style={styles.image}
          />
        ))}
      </ScrollView> */}
 <Image
          
            source={{ uri : images[activeIndex]}}
            style={styles.image}
          />
      {/* Dots (indicator) */}
    </View>
      {renderDots()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9, // Width of the gallery
    height: 138, // Height of the gallery
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden', // Hide overflow
    backgroundColor: '#ddd', // Placeholder background
   // marginTop: -10,
    marginBottom: 10
  },
  scrollView: {
    flexDirection: 'row',
  },
  image: {
    width: width * 0.9,
    height: '100%',
    resizeMode: 'cover', // Adjust image fit
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#888',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});

export default ImageGallery;
