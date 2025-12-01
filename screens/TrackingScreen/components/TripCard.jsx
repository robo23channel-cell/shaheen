import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DotLine from '../../../assets/DotLine.svg'
import FlagSvg from '../../../assets/FlagSvg.svg'


const TripCard = ({ code }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: 'center'}}>
           <View style={{paddingRight: 5}}>
           <FlagSvg/>
            </View> 
        <Text style={styles.tripNumber}>#B-{code}</Text>
        </View>
        <Text style={styles.tripLabel}>رقم الرحلة</Text>
      </View>

      {/* Route */}
      <View style={styles.route}>
        {/* Destination */}
        <View style={styles.cityContainer}>
          <Text style={styles.cityName}>الصين، قوانجو</Text>
          <Text style={styles.date}>-- --, ----</Text>
        </View>

        {/* Dotted Line */}
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          {/* <DotLine/> */}
          <Text style={styles.dotText}>------------------------</Text>
          {/* <View style={styles.dottedLine} /> */}
          <View style={styles.dot} />
        </View>

        {/* Departure */}
        <View style={styles.cityContainer}>
          <Text style={styles.cityName}>ليبيا، طرابلس</Text>
          <Text style={styles.date}>-- --, ----</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F8FBFF", // Light blue background
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    width: '90%',
    alignSelf: 'center'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  tripNumber: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1E3A5F", // Dark blue color
  },
  tripLabel: {
    fontSize: 14,
    color: "#1E3A5F", // Gray color
    fontWeight: "bold",

  },
  route: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cityContainer: {
    alignItems: "center",
  },
  cityName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A5F", // Dark blue
  },
  date: {
    fontSize: 12,
    color: "#6B7280", // Gray color
  },
  lineContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1E3A5F", // Dark blue
  },
  dottedLine: {
    flex: 1,
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#6B7280", // Gray color
    marginHorizontal: 4,
  },
  dotText: {
    color: "#6B7280",
    alignSelf: 'center',
    textAlign: 'center',
    paddingBottom: 2
  }
});

export default TripCard;
