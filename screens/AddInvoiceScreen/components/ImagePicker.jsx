import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import InvoiceImgPickerSvg from "../../../assets/InvoiceImgPickerSvg.svg";
import * as ImagePicker from "expo-image-picker";

export default function AppImagePicker({ selectedImage, setSelectedImage }) {
  const pickImage = async () => {
    // Request permission

    const status = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      selectionLimit: 1,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "We need permission to access your photo library to upload an image."
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
    <TouchableOpacity onPress={pickImage} style={{ alignSelf: "center" }}>
      <InvoiceImgPickerSvg />
    </TouchableOpacity>
  );
}
