import { View, Text, StyleSheet, Image, Dimensions, Platform, PermissionsAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import Tag2 from '../../assets/Tag6.svg'
import ButtonsChipsWareHouse from '../../assets/ButtonsChipsWareHouse.svg'
import TopBar from './components/TitleTopBar'
import { TouchableOpacity } from 'react-native'
import SingleElement from './components/SingleElement'
import BulidSvg from '../../assets/BiBuildings.svg';
import useApi from '../../hooks/useApi'
import WareHouse from '../../Api/WareHouse'
import ActivityIndicator from '../../components/ActivityIndicator'
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

 
async function downloadImageFromUrl(imageUrl) {
  try {
    // Request permissions to save to the media library (for Android only)
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "We need permission to save the image.");
      return;
    }

    // Generate a unique file name
    const fileName = imageUrl.split("/").pop();
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;

    // Download the file
    const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);

    // Save the file to the media library
    if (Platform.OS === "android" || Platform.OS === "ios") {
      await MediaLibrary.createAssetAsync(uri);
      Alert.alert("Download Complete", "Image has been saved to your gallery.");
    }
  } catch (error) {
    console.error("Error downloading the image:", error);
    Alert.alert("Download Failed", "An error occurred while downloading the image.");
  }
}


const retunApi = (name) => {
     if(name == "مخزن فوشان") return useApi(WareHouse.fetchGwanzu); 
     if(name == "مخزن أيو") return useApi(WareHouse.fetchAiwe);
     
     return useApi(WareHouse.fetchAiwetest);
}

export default function WareHouseScreen({ navigation, route }) {
  const { name } = route.params; 
  const [data, setData] = useState({});


  const getPricingApi = retunApi(name);

  const fetchData = async () => {

     try{
 
       const res = await getPricingApi.request();
  
      if (res.ok) setData(res.data.data);
  
      console.log(res.data.data); 
     } catch(e){ console.log(e)}

   }

   useEffect(() => {
     fetchData();
   }, []);


  const BuildIcon = ({name}) => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}}>{name}</Text>
        <View style={{ paddingLeft: 8}}>
          <BulidSvg/>
        </View>
    </View>
)


  return (
    <AppBackground>
    <View style={styles.container}>
    <ActivityIndicator visible={getPricingApi.loading} />

        <View style={{  }}>
             {/* <Text style={styles.subTitle}>#جميع الحوالات المالية بالايوانة</Text> */}
             <View style={{ paddingTop: 18, alignSelf: 'flex-end', paddingRight: width * 0.025}}>
                {/* <ButtonsChips/> */}
             </View>
         
         <View style={{ alignSelf: 'center', marginVertical: 10}}>
            <Image
              height={320}
              width={320}
              style={{
                borderRadius: 12
              }}
              source={{
                uri: data.image
              }}
            />
         </View>

         <View style={{ marginTop: 10}}>
                 <SingleElement Lside={() => <TouchableOpacity onPress={() => downloadImageFromUrl( data.image)}><ButtonsChipsWareHouse/></TouchableOpacity>} Rside={() =><BuildIcon name={name} />} />
 
                 </View>

          <View  style={{ alignSelf: 'flex-end', paddingRight: width * 0.025, paddingTop: 10}}>
          {name == "مخزن أيو" && <Tag2/>}
          </View>

          <View
    style={{ paddingVertical: height * 0.1}}
/>
</View>
    </View>
    <TopBar navigation={navigation} title={name} />
</AppBackground>
  )
}



const styles =StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: height * 0.16,
        alignSelf: 'center',
},
contentContainer: {
    backgroundColor: '#ffff',
    marginVertical: 10,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center'
}, 
title: {
    fontSize: 21,
     color: '#1557A9',
      fontFamily: 'IBMPlexSansArabic-Bold'
},
subTitle: {
    fontSize: 14,
    color: '#1557A9',
     fontFamily: 'IBMPlexSansArabic-Bold',
     textAlign: 'right',
     paddingRight: width * 0.025
}
})