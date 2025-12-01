import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Clipboard, Alert } from "react-native";
import CopySvg from '../../../assets/CopySvg.svg';

const CopyTextComponent = ({ text = "" }) => {
  const handleCopy = () => {
    Clipboard.setString(text);
    //Alert.alert("Copied!", "Text has been copied to clipboard.");
  };

  return (
    <TouchableOpacity onPress={handleCopy} style={styles.container}>
      <TouchableOpacity onPress={handleCopy} style={styles.iconContainer}>
         <CopySvg/>
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF2EA", // Light peach background color
    borderRadius: 5, // Rounded edges
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5
    // shadowColor: "#000", // Shadow for iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 3, // Shadow for Android
  },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "#0056b3", // Blue text color
    fontWeight: "bold",
  },
});

export default CopyTextComponent;
