import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopDetailsBar'
import ImageGallery from './components/ImageGallery'
import StateLable from './components/StateLable'
import ContentElement from './components/ContentElement'
import Vector from '../../assets/Vector.svg';
import CityPicker from './components/CityPicker'
import ActivityIndicator from '../../components/ActivityIndicator'
import ShipmentsApi from '../../Api/SeaFCLShipments'
import transLateContries from '../../helpers/transLateContries'
import statusEnum from '../../helpers/status'



export default function SeaFullShippingDetailsScreen({ navigation, route }) {
  const { orderId } = route.params; 
  const [selectedCity, setSelectedCity] = useState("مخزن طريق الشوك");
  const [data, setData] = useState({});
  const { translateConstToEnum } = transLateContries;
 
  const getAirShipmentsApi = useApi(ShipmentsApi.getShipmentById);
  const changePlaceAirShipmentsApi = useApi(ShipmentsApi.changeDeleveryPlace);

  const translateType = (type) => {
      if(type == 1) return "عادي";
      if(type == 1) return "طبي";
      if(type == 1) return "آلات";
      if(type == 1) return "مقلد";
  }

  const handleChangeCity = async (val) => {
     if(data?.followUpStatus > 7 ) return;
     setSelectedCity(val); 
     
     const res = await changePlaceAirShipmentsApi.request(data?.id, selectedCity);

      
  }

  const fetchData = async () => {

    const res = await getAirShipmentsApi.request(
      orderId
    );
       if (res.ok){
        
        setSelectedCity(res.data.data?.deliveryPlace? res.data.data?.deliveryPlace : res.data.data?.branch?.name)
         setData(res.data.data);
                  // console.log("Data:", res.data.data)

        }
       console.log(res.data.data)
   };



  useEffect(() => { 
    fetchData();
  },[]);


  return ( 
    <AppBackground>
        <ActivityIndicator visible={ getAirShipmentsApi.loading || changePlaceAirShipmentsApi.loading  } />
        <ScrollView style={styles.container} >
        {data?.imges && <ImageGallery images={data.imges ? data?.imges : []} onPress={() => navigation.navigate("GalaryPage", { images: data?.imges})} />}
     
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#E8EEF6", padding: 10, marginVertical: 10, width: '95%', borderRadius: 12, alignSelf: 'center'}}>
            <StateLable lable={statusEnum.status.ar[data?.followUpStatus - 1]} color={statusEnum.colors[data?.followUpStatus - 1]} />
            <Text style={{ fontFamily: 'IBMPlexSansArabic-Medium', fontSize: 16 }}>حالة الشحنة</Text>
        </View>

      {  data && data.volume && data?.followUpStatus - 1 != 3 && <View style={styles.contetnContainer}>
          <View>
              <Text style={styles.contetnTitle}>تفاصيل الشحنة</Text>
          </View>
          <ContentElement rigthValue={"الحجم"}  leftValue={`${data?.volume} CBM`}/>
          <ContentElement rigthValue={"عدد الصناديق"}  leftValue={data?.numberOfPkgs}/>
          <ContentElement rigthValue={"البلد"}  leftValue={data?.country?.name}/>
          <ContentElement rigthValue={"تصنيف البضائع"}  leftValue={translateType(data?.commodityType)}/>
        </View> }

        <View/>

      { data && data.rate && data.totalPrice && <View style={styles.contetnContainer}>
          <View>
             <Text style={styles.contetnTitle}>التفاصيل المالية</Text>
          </View>
         { data?.country?.name == "China" && <ContentElement rigthValue={"القيمة بالايوانة"}  leftValue={""}/> }
          <ContentElement rigthValue={"سعر الصرف"}  leftValue={data?.rate}/>
          <ContentElement rigthValue={"القيمة بالدولار"}  leftValue={"--"}/>
          <ContentElement rigthValue={"العمولة"}  leftValue={"--"}/>
          <ContentElement rigthValue={"اجمالي القيمة"}  leftValue={data?.totalPrice}/>
        </View>}

        <View/>

       { data && data.createdOn && data?.followUpStatus - 1 != 3  && <View style={styles.contetnContainer}>
          <View>
             <Text style={styles.contetnTitle}>المواعيد</Text>
          </View>
          <ContentElement rigthValue={"تاريخ الاستلام في ليبيا"}  leftValue={data?.arrivalDate?.split("T")[0] ? data?.arrivalDate?.split("T")[0] : '--'}/>
          <ContentElement rigthValue={"التاريخ المتوقع للوصول"}  leftValue={data?.exportDate?.split("T")[0] ? data?.exportDate?.split("T")[0] : '--'}/>
          <ContentElement rigthValue={"تاريخ الخروج  "}  leftValue={data?.recieveDate?.split("T")[0]}/>
          <ContentElement rigthValue={"تاريخ الاستلام  "}  leftValue={data?.recieveDate?.split("T")[0] ? data?.recieveDate?.split("T")[0]:"--"}/>
          <ContentElement rigthValue={"تاريخ الانشاء"}  leftValue={data?.createdOn?.split("T")[0]}/>
        </View>
}
        <View/>

       { data && <View style={styles.contetnContainer}>
          <View>
             <Text style={styles.contetnTitle}>الإستلام في ليبيا</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 5, paddingVertical: 8, alignSelf: 'center'}}>
          <CityPicker selectedCity={selectedCity} setSelectedCity={handleChangeCity} />
          <Text style={{ fontFamily: 'IBMPlexSansArabic-Medium', fontSize: 16 }}>اختر مكان الاستلام</Text>
          </View>
        </View> }

        <View/>

{ data?.fclBulks && 
        <TouchableOpacity onPress={() => navigation.navigate("TrackingScreen")} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#E8EEF6", padding: 10, marginVertical: 10, width: '95%', borderRadius: 12, alignSelf: 'center'}}>
            <Text style={{ fontFamily: 'IBMPlexSansArabic-Medium', fontSize: 16 }}>{`B-${data?.fclBulks[0]?.bulkPckgNum}`}</Text>
            <Text style={{ fontFamily: 'IBMPlexSansArabic-Medium', fontSize: 16 }}>رقم الرحلة</Text>
        </TouchableOpacity>}

        <View/>

      { data &&  <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#E8EEF6", padding: 10, marginVertical: 10, width: '95%', borderRadius: 12, alignSelf: 'center'}}>
            <View style={{ flexDirection: 'row'}}>
               <View style={{ justifyContent: 'center'}}>
                <Vector/>
               </View>
                <Text style={{ fontFamily: 'IBMPlexSansArabic-Medium', fontSize: 16,  paddingHorizontal: 8}}>{`${data?.country?.countryCode}-${data?.orderNumber}FC`}</Text>
            </View>
            <Text style={{ fontFamily: 'IBMPlexSansArabic-Medium', fontSize: 16 }}>رقم الشحنة</Text>
        </View>}

        </ScrollView>
      <TopBar navigation={navigation} />
    </AppBackground>
  )
}


const higth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        marginTop: higth * 0.18,
        paddingBottom: higth * 0.15

    },
    contetnContainer: {
      backgroundColor: "#E8EEF6",
       padding: 10, 
       marginVertical: 10,
       width: '95%', 
      borderRadius: 12,
      alignItems: 'center',
      alignSelf: 'center'
    },
    contetnTitle: {
        textAlign: 'center',
        fontFamily: "IBMPlexSansArabic-SemiBold",
        fontSize: 16
    },
    contentSubText: {

    }
})