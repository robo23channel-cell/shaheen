import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBarAir'
import ButtonsChipsNormal from '../../assets/ButtonsChipsNormal.svg'
import ButtonsChips from '../../assets/ButtonsChips.svg'
import Tag1 from '../../assets/Tag3.svg'
import Tag2 from '../../assets/Tag4.svg'
import SingleElement from './components/SingleElement'
import { TouchableOpacity } from 'react-native'
import AppModal from './components/AppModal'
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

const content = `السلام عليكم ورحمه الله وبركاته..

سياسة الوزن الحجمي 📏⚖️:

- للشحنات أقل من 30 كيلوجرام، يتم احتساب الوزن الحجمي إذا كان الوزن الحجمي 45 كيلوجرام فما فوق.

- أما الشحنات فوق 30 كيلوجرام، يتم احتساب الوزن الحجمي فقط إذا كان الوزن الحجمي  أكبر من الوزن الفعلي بنسبة 50%. 

ملاحظه هامه 📢 :
الوزن الحجمي عبارة عن ناتج ضرب الأبعاد الثلاث مقسوماً على 6000


لمزيد من الاستفسارات، لا تترددوا في التواصل معنا 📞🤝.

شكرًا لتفهمكم.`


export default function AirPrices({ navigation }) {
   const [infoVisable, setInfoVisable] = useState(false);
   const [data, setData] = useState({});


   const getPricingApi = useApi(calcolator.getAirPricing);

   const fetchData = async () => {

      try{
  
        const res = await getPricingApi.request();
   
       if (res.ok) setData(res.data.data);
   
       console.log("JJJJ",res.data); 
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
             <Text style={styles.subTitle}>#جميع الاسعار تحسب لكل 1KG</Text>
             <View style={{ paddingTop: 18, alignSelf: 'flex-end', paddingRight: width * 0.025}}>
                <ButtonsChips/>
             </View>
        </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.minimumPrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >أقل قيمة شحن جوي</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.firstRangePrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >من 0.1 كجم الى 50 كجم</Text>} />
          </View>

          
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.secondRangePrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >من 50.1 كجم الى 100 كجم</Text>} />
          </View>

                    
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.thirdRangePrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >من 100 كجم الى 150 كجم</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.fourthRangePrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >من 150.1 كجم الى 300 كجم</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.normalPricing?.fifthRangePrice} color={"#F4782B"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}} >أكبر من 300 كجم</Text>} />
          </View>




          <View style={{  }}>
             <View style={{ paddingTop: 18, alignSelf: 'flex-end', paddingRight: width * 0.025}}>
                <ButtonsChipsNormal/>
             </View>
        </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.minimumPrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily:  'IBMPlexSansArabic-SemiBold'}} >أقل قيمة شحن جوي</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.firstRangePrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily:  'IBMPlexSansArabic-SemiBold'}} >من 0.1 كجم الى 50 كجم</Text>} />
          </View>

          
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.secondRangePrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily:  'IBMPlexSansArabic-SemiBold'}} >من 50.1 كجم الى 100 كجم</Text>} />
          </View>

                    
          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.thirdRangePrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily:  'IBMPlexSansArabic-SemiBold'}} >من 100 كجم الى 150 كجم</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.fourthRangePrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily:  'IBMPlexSansArabic-SemiBold'}} >من 150.1 كجم الى 300 كجم</Text>} />
          </View>

          <View style={{ marginTop: 8}}>
             <SingleElement Lside={() =><NoteIcon text={data?.vipPricing?.fifthRangePrice} color={"#1557A9"} />} Rside={() => <Text style={{ fontSize: 16, color: '#1557A9', fontFamily:  'IBMPlexSansArabic-SemiBold'}} >أكبر من 300 كجم</Text>} />
          </View>

           <TouchableOpacity onPress={() => {setInfoVisable(! infoVisable)}} style={{ alignSelf: 'flex-end', paddingRight: width * 0.025, paddingTop: 20}}>
           <Tag1/>
          </TouchableOpacity>

          <View  style={{ alignSelf: 'flex-end', paddingRight: width * 0.025, paddingTop: 10}}>
           <Tag2/>
          </View>

          <View
    style={{ paddingVertical: height * 0.1}}
/>
    <AppModal visible={infoVisable} setModalVisible={setInfoVisable} content={content}/>
    </ScrollView>
    <TopBar navigation={navigation}  />
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