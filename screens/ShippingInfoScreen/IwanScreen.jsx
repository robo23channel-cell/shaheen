import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import Tag2 from '../../assets/Tag5.svg'
import TopBar from './components/TopBarIwan'
import ActivityIndicator from '../../components/ActivityIndicator'
import calcolator from '../../Api/calcolator'
import useApi from '../../hooks/useApi'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function IwanScreen({ navigation }) {
    const [data, setData] = useState(); 

    const getPricingApi = useApi(calcolator.Iwanfetch);

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

  return (
    <AppBackground>
    <View style={styles.container}>
    <ActivityIndicator visible={getPricingApi.loading} />

        <View style={{  }}>
             <Text style={styles.subTitle}>#جميع الحوالات المالية بالايوانة</Text>
             <View style={{ paddingTop: 18, alignSelf: 'flex-end', paddingRight: width * 0.025}}>
                {/* <ButtonsChips/> */}
             </View>
         
         <View>
            <Image
              height={320}
              width={320}
              style={{
                borderRadius: 12
              }}
              source={{
                uri: data?.trasferPricePath
              }}
            />
         </View>


          <View  style={{ alignSelf: 'flex-end', paddingRight: width * 0.025, paddingTop: 10}}>
           <Tag2/>
          </View>

          <View
    style={{ paddingVertical: height * 0.1}}
/>
</View>
    </View>
    <TopBar navigation={navigation}/>
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