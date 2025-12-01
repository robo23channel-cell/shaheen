import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../components/AppBacKground';
import TopBar from './components/TopBar';
import AppPicker from './components/AppPicker';
import AppButton from '../../components/AppBotton';
import InfoLable from './components/InfoLable';
import CBMSvg from '../../assets/CBMSvg.svg'; 
import AppInput from './components/AppInput';
import calcolatorApi from '../../Api/calcolator';
import useApi from '../../hooks/useApi';
import ActivityIndicator from '../../components/ActivityIndicator';
import AppModal from '../../components/AppModal';

const shippingTypes = [
  {
    label: "شحن بحري",
    value: 2
},
{
    label: "شحن جوي",
    value: 1
},
]

const coutries = [
  {
      label: "الصين",
      value: "67f1df67-7a44-457b-84f0-d7996d20c2cd"
  },
  {
      label: "امريكا",
      value:  "d7d05bd1-4804-4be9-8d5c-f1c0b704cfd6"
  },
  {
    label: "الامارات",
    value:  "2204cd5c-393e-4d89-ba08-953329feccc3"
},
]


const commidityType = [
  {
      label: "عادي",
      value: 1
  },
  {
    label: "طبي",
    value: 2
  },
  {
    label: "آلات",
    value: 3
  },
  {
    label: "مقلد",
    value: 4
  },
]

 

export default function CalculatorScreen({navigation}) {
  const [type, setType] = useState(2);
  const [commidity, setCommidity] = useState();
  const [country, setCouontry] = useState();
  const [value, setValue] = useState(0);
  const [errorMsg, setErrorMessage] = useState("");
  const [sucessModal, setSuccessModal] = useState(false); 
  const [result, setResult] = useState(0);
  const [Vipresult, setVipResult] = useState(0);

  const getResultApi = useApi(calcolatorApi.calculate);

  const handleCalculations = async () => {
      const schema = {
        value: value,
        countryId: country,
        shipmentType: type,
        shippingType: commidity,
  
      }

      console.log(schema)
      const res = await getResultApi.request(schema)

          if(res.ok){
                console.log(res.data);
                setResult(res?.data?.data?.normal);
                setVipResult(res?.data?.data?.vip);
                setSuccessModal(true);
          
          }

          if (!res.ok) {
            setErrorMSG(res?.data?.message);
            setErrorModalVisible(true);
          }

  }

  return (
    <AppBackground >
      <ActivityIndicator visible={getResultApi.loading} />
      <View style={styles.container} >
      <AppPicker title={"اختر الفئة"} placeHolder={"نوع الشحن"} itmes={shippingTypes} setItem={setType} />
      <AppPicker title={"اختر النوع"} placeHolder={"النوع"} itmes={commidityType}  setItem={setCommidity}/>
      <AppPicker title={"اختر البلد"} placeHolder={"البلد"} itmes={coutries} setItem={setCouontry}  />
      <View style={{margin: 5}}/>
      {   type == 2 ?
          <>
          <InfoLable lable={`اقل سعر ${ commidity == 2 ? 40 : 5} دولار`} />
          <InfoLable lable={"ادخل الحجم بوحدة CBM"} />
          <AppInput IconComponent={CBMSvg} placeholder={"الحجم"} value={value} onChangeText={setValue}  />
          </>
          : 
          <>
          <InfoLable lable={`اقل سعر ${ commidity == 2 ? 10 : 1} دولار`} />
          <InfoLable lable={"ادخل الوزن بوحدة KG"} />
          <AppInput IconComponent={CBMSvg} placeholder={"الوزن"} value={value} onChangeText={setValue} />
          </>
      }
      <AppButton color={"#1B50A5"} title={"حساب"} style={{ alignSelf: 'center', marginTop: 15}} fun={handleCalculations} />
      <AppModal
        visible={getResultApi.error}
        setModalVisible={getResultApi.setError}
        content={errorMsg}
        type="fail"
      />
      <AppModal
        visible={sucessModal}
        setModalVisible={setSuccessModal}
        content={
          `التكلفة للحسابات العادية\n${result}$\nالتكلفة لحسابات VIP\n${Vipresult}$`
        }
        type="success"
      />
      </View>
      <TopBar navigation={navigation} />
    
    </AppBackground>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
       
    
    }
})