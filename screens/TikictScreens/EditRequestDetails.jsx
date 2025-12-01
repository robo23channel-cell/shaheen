import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
import AppButton from '../../components/AppBotton'
import AppInput from './components/AppInput'
import { TouchableOpacity } from 'react-native'
import IwaNonActive from '../../assets/IwaNonActive.svg'
import IwaActive from '../../assets/IwaActive.svg'
import FushanActive from '../../assets/FushanActive.svg'
import FushanNonActive from '../../assets/FushanNonActive.svg'
import CustomDatePicker from './components/CustomDatePicker'
import YesActive from '../../assets/YesActive.svg'
import YesNonActive from '../../assets/YesNonActive.svg'
import NoNonActive from '../../assets/NoNonActive.svg'
import NoActive from '../../assets/NoActive.svg'
import UploadSection from '../../assets/UploadSection.svg'
import SeaIconActiveSvg from '../../assets/SeaIconActiveSvg.svg'
import SeaIconInActiveSvg from '../../assets/SeaIconInActiveSvg.svg'
import AirIconInActiveSvg from '../../assets/AirIconInActiveSvg.svg'
import AirIconActiveSvg from '../../assets/AirIconActiveSvg.svg'
import InfoImage1 from '../../assets/InfoImage1.svg'
import InfoImage2 from '../../assets/InfoImage2.svg'
import KgSvg from '../../assets/KgSvg.svg'
import AuthContext from '../../auth/context'
import useApi from '../../hooks/useApi'
import TicketApi from '../../Api/Ticket'
import ActivityIndicator from '../../components/ActivityIndicator'
import AppModal from '../../components/AppModal'


const width = Dimensions.get('screen').width;

export default function EditRequestDetailsScreen({navigation, route}) {
    const { type, orderId } = route.params; 
    const [storage, setStorage] = useState(0);
    const [hasCode, setHasCode] = useState(false);
    const [shippingType, setShippingType] = useState(false);
    const [sucessModal, setSuccessModal] = useState(false);
    const [oldWigth, setOldWigth] = useState("");
    const [newWigth, setNewWigth] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [note, setNote] = useState();

    const { user } = useContext(AuthContext);

    const createTicketApi = useApi(TicketApi.createTicket); 

    const handleChangeShippingType = async () => {
        const schema = {
            subject: "تغيير وسيلة الشحن",
            description: `تغيير نوع الشحن الى ${shippingType == 0 ? "بحري" : "جوي"} `+ '\n' + `Order Number : ${orderId}` ,
            customerId: user.uid,
            ticketType: 1,
            ticketState: 1,
            images:  [] 
        }
        const response = await createTicketApi.request(schema);
        
        if(response.ok) setSuccessModal(true);
        if (!response.ok) {
            console.log(response?.data?.message)
           // setErrorMsg(response?.data?.message);
         }
    }

    const handleChangeWigth = async () => {
        const schema = {
            subject: "خطأ في احتساب الوزن",
            description: `الوزن الصحيح: ${newWigth}`+ '\n' + `الوزن الخاطئ: ${oldWigth}` + '\n' + `Order Number : ${orderId}` ,
            customerId: user.uid,
            ticketType: 1,
            ticketState: 1,
            images:  [] 
        }
        const response = await createTicketApi.request(schema);
        
        if(response.ok) setSuccessModal(true);
        if (!response.ok) {
            console.log(response?.data?.message)
           // setErrorMsg(response?.data?.message);
         }
    }

    const handleImageRequest = async () => {
        const schema = {
            subject: "طلب تصوير الشحنة",
            description: `Order Number : ${orderId}` ,
            customerId: user.uid,
            ticketType: 1,
            ticketState: 1,
            images:  [] 
        }
        const response = await createTicketApi.request(schema);
        
        if(response.ok) setSuccessModal(true);
        if (!response.ok) {
            console.log(response?.data?.message)
           // setErrorMsg(response?.data?.message);
         }
    }

    const handleOther = async () => {
        const schema = {
            subject: "أخرى",
            description: `Note: ${note}` + "\n" + `Order Number : ${orderId}` ,
            customerId: user.uid,
            ticketType: 1,
            ticketState: 1,
            images:  [] 
        }
        const response = await createTicketApi.request(schema);
        
        if(response.ok) setSuccessModal(true);
        if (!response.ok) {
            console.log(response?.data?.message)
           // setErrorMsg(response?.data?.message);
         }
    }
    
    const NonResiceSection = () => (
        
        <View>
            <View style={{ width: '100%'}}>
                <Text style={styles.title} >الشحنة لم يتم استلامها</Text>
    
                <AppInput placeholder={"اضافة رقم التتبع"} />

                <View  style={{ flexDirection: 'row', width: '96%', justifyContent:'space-between', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => setStorage(0)}>
                        { storage == 0 ? <IwaActive/> : <IwaNonActive/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStorage(1)}>
                    { storage == 1 ? <FushanActive/> : <FushanNonActive/>}
                    </TouchableOpacity>
                </View>
                
                 <View style={{ width: width * 0.9, paddingVertical: 5, marginVertical: 5}} >
                    <CustomDatePicker/>
                </View>

                <View>
                    <Text style={styles.subTitle}>هل تم كتابة الكود على الشحنة</Text>
                </View>
                <View  style={{ flexDirection: 'row', width: '96%', justifyContent:'space-between', alignSelf: 'center', marginTop: 8 }} >
                    <TouchableOpacity onPress={() => setHasCode(true)}>
                        { hasCode  ? <YesActive/> : <YesNonActive/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHasCode(false)}>
                        { hasCode ? <NoNonActive/> : <NoActive/>}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 20}}>
                    <UploadSection/>
                </TouchableOpacity>

                <AppInput value={note} onChangeText={setNote}  placeholder={"اضافة اي ملاحظة مهمة"}style={{ marginTop: 0}} />

                <AppButton color={"#F4782B"} title={"ارسال"} style={{ width: width * 0.8, alignSelf: 'center'}} />

                </View> 
        </View>
    );




    const ChangeShippingType = () => (
        <View>
        <View style={{ width: '100%'}}>
            <Text style={styles.title} >إختر وسيلة الشحن التي تريدها</Text>

            <View  style={{ flexDirection: 'row', width: '96%', justifyContent:'space-between', alignSelf: 'center', paddingTop: 20 }} >
                <TouchableOpacity onPress={() => setShippingType(0)}>
                    { shippingType == 0 ? <SeaIconActiveSvg/> : <SeaIconInActiveSvg/>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShippingType(1)}>
                { shippingType == 1 ? <AirIconActiveSvg/> : <AirIconInActiveSvg/>}
                </TouchableOpacity>
            </View>
             
            <View style={{ marginBottom: 20}} />
            <AppButton color={"#F4782B"} title={"ارسال"} style={{ width: width * 0.8, alignSelf: 'center'}} fun={handleChangeShippingType} />

            </View> 
    </View>
    );

    const ChangeWigth = () => (
        <View>
        <View style={{ width: '100%'}}>
            <Text style={styles.title} >خطأ في احتساب الوزن</Text>

            <View style={{ paddingTop: 15}} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}} >
                    <View style={{ alignSelf: 'center', paddingHorizontal: 5}}>
                        <KgSvg/>
                    </View>
                    <AppInput value={oldWigth} onChangeText={setOldWigth} style={{ width: width * 0.60}} placeholder={"اضافة الوزن الخاطئ"} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}} >
                    <View style={{ alignSelf: 'center', paddingHorizontal: 5}}>
                        <KgSvg/>
                    </View>
                    <AppInput value={newWigth} onChangeText={setNewWigth} style={{ width: width * 0.60}} placeholder={"اضافة الوزن الصحيح"} />
                </View>

            </View>
             
            <View style={{ marginBottom: 20}} />
            <AppButton color={"#F4782B"} title={"ارسال"} style={{ width: width * 0.8, alignSelf: 'center'}} fun={handleChangeWigth} />

            </View> 
    </View>
    );


    const ImageRequest = () => (
<View>
        <View style={{ width: '100%'}}>
            <Text style={styles.title} >طلب تصوير الشحنة</Text>

             
             
            <View style={{ marginBottom: 20}} />
            <AppButton color={"#F4782B"} title={"ارسال"} style={{ width: width * 0.8, alignSelf: 'center'}} fun={handleImageRequest} />
                <View style={{ alignSelf: 'center', padding: 5}} >
                    <View  style={{ alignSelf: 'center', marginVertical: 5}}>
                    <InfoImage1/>
                    </View>
                    <InfoImage2/>
                </View>
            </View> 
    </View>
    );


    const Other = () => (
        <View>
        <View style={{ width: '100%'}}>
            <Text style={styles.title} >طلب تصوير الشحنة</Text>

             
             
            <View style={{ marginBottom: 20}} />
                <AppInput placeholder={"اضافة اي ملاحظة مهمة"}style={{ marginTop: 0, height: 80}} />
                
            <AppButton color={"#F4782B"} title={"ارسال"} style={{ width: width * 0.8, alignSelf: 'center'}} fun={handleOther} />
            </View> 
    </View>
    );
    
    
    const ServiceSection = (type) => {
        if(type == 0) return  <NonResiceSection/>
        if(type == 1) return <ChangeShippingType/>
        if(type == 2) return <ChangeWigth/>
        if(type == 3) return <ImageRequest/>
        if(type == 4) return <Other/>

    }


  return (
    <AppBackground style={styles.backGround} >
              <ActivityIndicator visible={createTicketApi.loading} />

      <View style={styles.container}>
            {ServiceSection(type)}
      </View>
      <AppModal
        visible={createTicketApi.error}
        setModalVisible={createTicketApi.setError}
        content={errorMsg}
        type="fail"
      />
      <AppModal
        visible={sucessModal}
        setModalVisible={setSuccessModal}
        content={
            `تم انشاء التذكرة بنجاح`
        }
        type="success"
      />
      <TopBar  navigation={navigation}/>
    </AppBackground>
  )
}

const higth = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    backGround: {
        justifyContent: 'flex-start'
    },
    container: {
       marginTop: higth * 0.20,
       backgroundColor: '#E8EEF6',
       width: '90%',
       alignItems: 'center',
       padding: 10,
       borderRadius: 12
    },
    title: {
        fontFamily: "IBMPlexSansArabic-SemiBold",
        fontSize: 16,
        textAlign: 'center'
    },
    subTitle: {
        fontFamily: 'IBMPlexSansArabic-Medium',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 8
    }
})