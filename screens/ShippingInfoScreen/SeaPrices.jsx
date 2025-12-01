import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBarSea'
import ButtonsChipsNormal from '../../assets/ButtonsChipsNormal.svg'
import ButtonsChips from '../../assets/ButtonsChips.svg'
import Tag1 from '../../assets/Tag1.svg'
import Tag2 from '../../assets/Tag2.svg'
import SingleElement from './components/SingleElement'
import ActivityIndicator from '../../components/ActivityIndicator'
import useApi from '../../hooks/useApi'
import calcolator from '../../Api/calcolator'


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const NoteIcon = ({text, color}) => (
    <View style={{ backgroundColor:color, paddingVertical: 5, paddingHorizontal: 10,borderRadius: 12}}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600'}}>{text}$</Text>
    </View>
);


export default function SeaPrices({ navigation }) {
    const [data, setData] = useState({});


    const getPricingApi = useApi(calcolator.getSeaPricing);
 
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
         <ActivityIndicator visible={getPricingApi.loading} />
    <ScrollView style={styles.container}>
        <View style={{  }}>
             <Text style={styles.subTitle}>#جميع الاسعار تقاس بالمتر المكعب</Text>
             <View style={{ paddingTop: 18, alignSelf: 'flex-end', paddingRight: width * 0.025}}>
                <ButtonsChips/>
             </View>
        </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.normal} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >المتر المكعب الواحد</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.copy} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >لبضائع الكوبي</Text>} />
          </View>

          
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.minimumPrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >أقل سعر للشحن البحري</Text>} />
          </View>

                    
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.machineCNC} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >مكينات CNC والمعدات الثقيلة</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.medical} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >لبضائع الطبية</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.minimumPriceMedical} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >اقل قيمة شحن للمعدات الطبية</Text>} />
          </View>




          <View style={{  }}>
             <View style={{ paddingTop: 18, alignSelf: 'flex-end', paddingRight: width * 0.025}}>
                <ButtonsChipsNormal/>
             </View>
        </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.normal} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >المتر المكعب الواحد</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.copy} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >لبضائع الكوبي</Text>} />
          </View>

          
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.minimumPrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >أقل سعر للشحن البحري</Text>} />
          </View>

                    
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.machineCNC} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >مكينات CNC والمعدات الثقيلة</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.medical} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >لبضائع الطبية</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.minimumPriceMedical} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >اقل قيمة شحن للمعدات الطبية</Text>} />
          </View>

           <View  style={{ alignSelf: 'flex-end', paddingRight: width * 0.025, paddingTop: 10}}>
           <Tag1/>
          </View>

          <View  style={{ alignSelf: 'flex-end', paddingRight: width * 0.025, paddingTop: 10}}>
           <Tag2/>
          </View>

          <View
    style={{ paddingVertical: height * 0.1}}
/>
    </ScrollView>
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