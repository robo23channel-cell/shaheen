import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImageSvg from '../../../assets/UploadImageSvg.svg'

export default function ImageComponent({selectedImage, setSelectedImage}) {
  //const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'We need permission to access your photo library to upload an image.'
      );
      return;
    }

    // Launch the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
      allowsEditing: true, // Allow user to crop/edit the image
      quality: 1, // Image quality (1 = best)
    });

    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri }); // Get the image URI
    }
  };

  return (
    <View  >
      <TouchableOpacity onPress={pickImage}  >
        <UploadImageSvg />
      </TouchableOpacity>

      {/* {selectedImage && (
        <Image source={selectedImage} style={styles.imagePreview} />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  uploadButton: {
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
