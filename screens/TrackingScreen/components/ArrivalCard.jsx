import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SelelankaFlag from '../../../assets/SelelankaFlag.svg'; 
import LibyaSvg from '../../../assets/LibyaSvg.svg'; 
import EgyptSvg from '../../../assets/EgyptSvg.svg'; 
import SomalSvg from '../../../assets/SomalSvg.svg'; 
import UAESVG from '../../../assets/UAESVG.svg'; 
import ChinaSvg from '../../../assets/ChinaSvg.svg'; 



const Lable = (type) => {
    if(type == 0) return
    if(type == 1) return  <View style={[styles.statusContainer, { backgroundColor : "#F4782B"}]}> <Text style={styles.statusText}>قيد الوصول</Text> </View>
    if(type == 2) return  <View style={[styles.statusContainer, { backgroundColor : "#808080"}]}> <Text style={styles.statusText}>إنتظار</Text> </View>
}


const Country = (type) => {
  if(type == 1) return "الصين"
  if(type == 2) return "سريلانكا"
  if(type == 3) return "الصومال"
  if(type == 4) return "مصر"
  if(type == 5) return "ليبيا"
}

const CountryIcon = (type) => {
  if(type == 1) return <ChinaSvg/>
  if(type == 2) return <SelelankaFlag/>
  if(type == 3) return <SomalSvg/>
  if(type == 4) return <EgyptSvg/>
  if(type == 5) return <LibyaSvg/>
}

const ArrivalCard = ({date, type, isActive}) => {
  return (
    <View style={[styles.card, { opacity: isActive? 1 : 0.4}]}>
      {/* Left Status */}
    { isActive &&   <View style={styles.statusContainer}>
         <Text style={styles.statusText}>وصلت</Text> 
    </View>
}
 
{ !isActive &&   <View style={[styles.statusContainer, { backgroundColor : "#808080"}]}>
         <Text style={styles.statusText}>إنتظار</Text> 
    </View>
}

      {/* Right Content */}
      <View style={styles.contentContainer}>
        {/* Country and Date */}
        <View >
          <Text style={styles.countryName}>{Country(type)}</Text>
          <Text style={styles.date}>{ !isActive ? "-- --" : date?.split("T")[0]}</Text>
        </View>

        {/* Flag */}
        <View style={styles.flagContainer}>
          {CountryIcon(type)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FBFF", // Light blue background
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    height: 74,
    marginTop: 10
  },
  statusContainer: {
    backgroundColor: "#22C55E", // Green background
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 8,
    height: 20,
    alignSelf: 'flex-start'
    
  },
  statusText: {
    color: "#FFF",
    fontSize: 10,
    fontFamily: "IBMPlexSansArabic-SemiBold",
    textAlign: "center",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  countryName: {
    fontSize: 14,
    fontFamily: "IBMPlexSansArabic-SemiBold",
    color: "#092547", // Dark blue
    textAlign: "right",
  },
  date: {
    fontSize: 12,
    color: "#0C305D", // Gray
    textAlign: "right",
    fontFamily: 'IBMPlexSansArabic-Regular'
  },
  flagContainer: {
    width: 50,
    height: 50,
    borderRadius: 13,
    overflow: "hidden",
    marginLeft: 12,
    backgroundColor: "#E8EEF6",
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ArrivalCard;
