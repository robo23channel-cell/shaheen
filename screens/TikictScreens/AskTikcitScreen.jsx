import { View, Text, StyleSheet, Dimensions, Keyboard, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBarAsk'
import AppInput from './components/AppInput';
import { TouchableOpacity } from 'react-native';
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
import AppButton from '../../components/AppBotton';
import AppModal from '../../components/AppModal';
import ActivityIndicator from '../../components/ActivityIndicator';
import TicketApi from '../../Api/Ticket';
import useApi from '../../hooks/useApi';
import AuthContext from "../../auth/context";
import * as ImagePicker from 'expo-image-picker';



const width = Dimensions.get('screen').width;
const higth = Dimensions.get('screen').higth;


export default function AskTikcitScreen({ navigation }) {
    const [storage, setStorage] = useState(0);
    const [hasCode, setHasCode] = useState(false);
    const [sucessModal, setSuccessModal] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [date, setDate] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const { user } = useContext(AuthContext);
    const [code, setCode] = useState("");
    const [note, setNote] = useState("")



    const createTicketApi = useApi(TicketApi.createTicket); 


    const handleCreate = async () => {
        const schema = {
            subject: "الاستعلام عن شحنة",
            description: `رقم التتبع: ${code}`+ "\n" + `المخزن: ${storage == 0 ? "أيوا" : "فوشان"}`+ "\n" + `التاريخ : ${date}` + "\n" + `هل تمت كتابة الكود: ${hasCode ? "نعم" : "لا"}` + "\n" + `ملاحظات: ${note}` ,
            customerId: user.uid,
            ticketType: 1,
            ticketState: 1,
            images:  [selectedImage] 
        }
        const response = await createTicketApi.request(schema);
        
        if(response.ok) setSuccessModal(true);
        if (!response.ok) {
            console.log(response?.data?.message)
           // setErrorMsg(response?.data?.message);
         }
      };

    useEffect( () => {
  
        const keyboardDidShowListener = Keyboard.addListener(
          Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
          () => setKeyboardVisible(true)
        );
    
        const keyboardDidHideListener = Keyboard.addListener(
          Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
          () => setKeyboardVisible(false)
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
  
      }, []);
  

      const pickImage = async () => {
        // Request permission
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permission Denied',
            'We need permission to access your photo library to upload an image.'
          );
          return;
        }
    
        // Launch the image library
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
          allowsEditing: true, // Allow user to crop/edit the image
          quality: 1, // Image quality (1 = best)
        });
    
        if (!result.canceled) {
          setSelectedImage({ uri: result.assets[0].uri }); // Get the image URI
        }
      };


  return (
    <AppBackground>
      <View >
      <ActivityIndicator visible={createTicketApi.loading} />

            <View style={isKeyboardVisible ? {...styles.container, paddingTop: 250, paddingBottom:0} : styles.container}>
                <Text style={styles.title}  >الشحنة لم يتم استلامها</Text>
    
                <AppInput value={code} onChangeText={setCode} placeholder={"اضافة رقم التتبع"} />

                <View  style={{ flexDirection: 'row', width: '96%', justifyContent:'space-between', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => setStorage(0)}>
                        { storage == 0 ? <IwaActive/> : <IwaNonActive/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStorage(1)}>
                    { storage == 1 ? <FushanActive/> : <FushanNonActive/>}
                    </TouchableOpacity>
                </View>
                
                 <View style={{ width: width * 0.9, paddingVertical: 5, marginVertical: 5}} >
                    <CustomDatePicker setDateChange={setDate}/>
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

                <TouchableOpacity onPress={pickImage} style={{ alignSelf: 'center', marginVertical: 20}}>
                    <UploadSection/>
                </TouchableOpacity>

                <AppInput value={note} onChangeText={setNote} placeholder={"اضافة اي ملاحظة مهمة"}style={{ marginTop: 0}} />

                <AppButton color={"#F4782B"} title={"ارسال"} style={{ width: width * 0.8, alignSelf: 'center'}} fun={handleCreate} />

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
                </View> 
                

        </View>

      <TopBar navigation={navigation} />
      
    </AppBackground>
  )
}


const styles = StyleSheet.create({
    backGround: {
        justifyContent: 'flex-start'
    },
    container: {
      // marginTop: higth * 0.20,
       backgroundColor: '#E8EEF6',
       width: '90%',
       alignItems: 'center',
       padding: 10,
       paddingBottom: 0,
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