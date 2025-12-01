import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
import ImagePicker from './components/ImagePicker'
import AppPicker from '../../components/AppPicker'
import PhoneIconSvg from '../../assets/PhnSvg'; 
import AppInput from './components/AppInput'
import AppButton from '../../components/AppBotton'
import ActivityIndicator from '../../components/ActivityIndicator'
import InvoiceApi from '../../Api/Invoice'
import useApi from '../../hooks/useApi'
import AppModal from '../../components/AppModal'



const AirCantries = [
    {
       label: "الصين",
      value: "67f1df67-7a44-457b-84f0-d7996d20c2cd",
      status: true,
    },
    {
      label: "امريكا",
      value: "d7d05bd1-4804-4be9-8d5c-f1c0b704cfd6",
      status: false,
    },
    // {
    //    label: "المارات",
    //   value:  "2204cd5c-393e-4d89-ba08-953329feccc3",
    //   status: false,
    // },
  ];
  
  const seaContries = [
    {
       label: "الصين",
      value: "67f1df67-7a44-457b-84f0-d7996d20c2cd",
      status: true,
    },
    {
       label: "امريكا",
      value: "d7d05bd1-4804-4be9-8d5c-f1c0b704cfd6",
      status: true,
    },
    {
       label: "الامارات",
      value: "2204cd5c-393e-4d89-ba08-953329feccc3",
      status: true,
    },
  ];
  
  

export default function AddInvoiceScreen({ navigation, route }) {
    const { type, endpoint  } = route.params;
    const [country, setCountry] = useState();
    const [phone, setPhone] = useState();
    const [image, setImage] = useState();
    const [errorMsg, setErrorMsg] = useState("");
    const [sucessModal, setSuccessModal] = useState(false);


    const createInvoiceApi = useApi(InvoiceApi.create); 

    const handleSubmit = async () => {
        if (!image) return alert("يجب اختيار صورة الفاتورة");
        if (!country) return alert("يجب اختيار  البلد");
        if(!phone)return alert("يجب ادخال  رقم");
 
    
        const result = await createInvoiceApi.request(
          {
             supplierContact: phone,
            ShipmentType: type,
            CountryId: country,
            image: [image],
            BranchId: "2b93ba8a-7a60-47b4-a83a-b3104b565acb",
          },
          endpoint,
          (progress) => console.log(progress)
        );

         if(result.ok){
           setImage(null);
           setPhone(null); 
           setSuccessModal(true);
          }
         if (!result.ok) {
           console.log(result.data);
           setErrorMsg(result.data.message); 
          return alert(`${result.data.message}`);
        }
    
       };
    
    
  return (
    <AppBackground>
        <ActivityIndicator visible={createInvoiceApi.loading } />
        <TopBar navigation={navigation} />
        <View  style={[styles.container, image ? { marginTop: 45} : {}]} >
            <ImagePicker selectedImage={image} setSelectedImage={setImage} />
            {image && <View style={{ marginTop: 12, padding: 8, borderRadius: 12, backgroundColor: '#BEE3F8', width: 150, alignSelf: 'flex-end', marginRight: 23}}>
                    <Text style={styles.label}>تم اختيار صورة بالفعل</Text>
                </View>}

            <View  style={styles.seperator} />
            <AppPicker onSelect={setCountry} items={seaContries}/>
            <AppInput value={phone} onChangeText={setPhone} IconComponent={PhoneIconSvg} placeholder={"رقم الهاتف الخاص بالتاجر"} />
            <AppButton title={"تسجيل"} color={"#F4782B"} style={styles.btn} fun={handleSubmit} />
        <AppModal
        visible={createInvoiceApi.error}
        setModalVisible={createInvoiceApi.setError}
        content={errorMsg}
        type="fail"
      />
      <AppModal
        visible={sucessModal}
        setModalVisible={setSuccessModal}
        content={
            "تم انشاء الفاتورة بنجاح"
         }
        type="success"
      />
        </View>
    </AppBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center'
    },

    seperator: {
        margin: 25
    },
    btn : {
        alignSelf : "center", 
        marginVertical: 20
    }, 
    label: {
      fontSize: 10,
      color: '#1A202C',
      fontFamily: 'SomarSans-Medium'
    }
})