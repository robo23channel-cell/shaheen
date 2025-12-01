import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Text } from "react-native";

function ActivityIndicator({ visible = false, opacity = 0.7 }) {
  if (!visible) return null;

  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 100,
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      }}
    >
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={{ flex: 1 }}
      />
    </View>
  );
}

export default ActivityIndicator;
