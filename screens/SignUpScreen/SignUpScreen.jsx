import { View, Text, ScrollView, Dimensions, TouchableOpacity, Alert, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import AppBackground from '../../components/AppBacKground'
import PersonalAccountOption from '../../assets/PersonalAccountOption.svg'
import PersonalAccountOptionNon from '../../assets/PersonalAccountOptionNon.svg'
import CompanyAccountOptionNon from '../../assets/CompanyAccountOptionNon.svg'
import CompanyAccountOption from '../../assets/CompanyAccountOption.svg'
import HiOutlineUser from '../../assets/HiOutlineUser.svg'
import MdOutlineMailOutline from '../../assets/MdOutlineMailOutline.svg'
import UserNameNote from '../../assets/UserNameNote.svg'
import lock from '../../assets/lock.svg'
import PassWordNote from '../../assets/PassWordNote.svg'
import UploadImageSvg from '../../assets/UploadImageSvg.svg'
import BsWhatsapp from '../../assets/BsWhatsapp.svg'
import AppPicker from './components/AppPicker'
import AppInput from './components/AppInput'
import CheckBox from './components/CheckBox'
import AppButton from '../../components/AppBotton'

import branchApi from '../../Api/branch'
import auth from '../../Api/auth'
import ActivityIndicator from '../../components/ActivityIndicator'
import AppModal from '../../components/AppModal'
import ImageComponent from './components/ImageComponent'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const tempItems = [{
    lable: "الفرع الرئيسي",
    value: "000"
}];

export default function SignUpScreen({ navigation }) {
    const signUpApi = useApi(auth.signUp);
    const getBranchApi = useApi(branchApi.getBranches);


     
  

    const [classTyle, setClassType] = useState(0);
    const [branch, setBranch] = useState();
    const [branchName, setBranchName] = useState();
    const [branches, setBranches] = useState(tempItems);
    const [fullName, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [watsNumber, setWatsNumber] = useState("");
    const [email, setEmail] = useState("");
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState();
    const [sgnCheck, setSgnCheck] = useState(false);
    const [shipCheck, setshipCheck] = useState(false);
    const [sucessModal, setSuccessModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handelSignup = async ( ) => {
        const schema = {
            fullName: fullName,
            userName: userName,
            email: email,
            BranchId: branch,
            password: password,
            confirmPassword: confirmPassword,
            whatsappPhone: watsNumber,
            userType: classTyle + 1, 
            images: [selectedImage] 
        }
        const responce = await signUpApi.request(schema);

         if (responce.ok) {
          setSuccessModal(responce.ok);
          setImageUris([]);
          resetForm({});
        }else {
            setErrorMsg(responce?.data?.message);
        }
      };

      
    useEffect(() => {
        const fetchData = async () => {
          const response = await getBranchApi.request();
          var temp = [];
           response.data.data.map((e) =>
            temp.push({ lable: e.name, value: e.id, status: true })
          );
          setBranches(temp);
          if (!response.ok) {
            setErrorMSG(response?.data?.message);
         //   setErrorModalVisible(true);
          }
        };
    
        fetchData();
      }, []);

 
        const handlePress = async (url) => {
          //const url = 'https://example.com';
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            await Linking.openURL(url);
          } else {
            console.warn("Don't know how to open URI: " + url);
          }
        };


      const getBranchName = () => {
           return branches?.filter( e => e.value == branch)[0]?.lable
      } 
    

  return (
    <AppBackground>
     <ActivityIndicator visible={getBranchApi.loading || signUpApi.loading} />
          <ScrollView style={styles.container}>
            <View  style={styles.scrollerContainer}>
            <View style={styles.titleContainer}>
                <Text  style={styles.title}>إنشاء حساب</Text>
            </View>
            <View style={{ marginTop: 20}}>
                <Text style={styles.subTitle}>فئة الحساب</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
                    <TouchableOpacity onPress={() => setClassType(1)} >
                        {classTyle == 1 ?  <CompanyAccountOption/> : <CompanyAccountOptionNon/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setClassType(0)}>
                        {classTyle == 0 ?  <PersonalAccountOption/> : <PersonalAccountOptionNon/>}
                    </TouchableOpacity>
                </View>

                 <View style={{ marginVertical: 8}}>
                        <AppPicker items={branches} plaaeHolder={branch ?  getBranchName() : "أختر الفرع"} setItem={setBranch} />
                </View>

                <View style={{ marginVertical: 8}}>
                        <AppInput placeholder={"أكتب الأسم هنا"} value={fullName} onChangeText={setName} IconComponent={HiOutlineUser} />
                </View>

                <View style={{ marginVertical: 8}}>
                        <AppInput placeholder={"رقم الهاتف المسجل في وتساب"} value={watsNumber} onChangeText={setWatsNumber} IconComponent={BsWhatsapp} />
                </View>

                <View style={{ marginVertical: 8}}>
                        <AppInput placeholder={"أكتب بريدك الالكتروني"} value={email} onChangeText={setEmail} IconComponent={MdOutlineMailOutline} />
                </View>

                <View style={{ marginVertical: 8}}>
                        <AppInput placeholder={"أسم المستخدم"} value={userName} onChangeText={setUserName} IconComponent={HiOutlineUser} />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', paddingTop: 10 }} onPress={() =>  Alert.alert("مثال اسم المستخدم","TestUserName")}>
                            <UserNameNote/>
                        </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 8}}>
                        <AppInput placeholder={"أدخل كلمة المرور"} value={password} onChangeText={setPassword} IconComponent={lock} isSecure={true} />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', paddingTop: 10 }}  onPress={() =>  Alert.alert("مثال لكلمة المرور","Test@123.")}>
                            <PassWordNote/>
                        </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 8}}>
                        <AppInput placeholder={"أعادة كلمة المرور"} value={confirmPassword} onChangeText={setConfirmPassword} IconComponent={lock} isSecure={true} />
                </View>

                {/* <TouchableOpacity onPress={} >
                    <UploadImageSvg/>
                </TouchableOpacity> */}
                <ImageComponent selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                {selectedImage && <View style={{ marginTop: 12, padding: 8, borderRadius: 12, backgroundColor: '#BEE3F8', width: 150, alignSelf: 'flex-end'}}>
                    <Text style={styles.label}>تم اختيار صورة بالفعل</Text>
                </View>}

                <View style={{ marginVertical: 10}}>
                        <CheckBox label={"يجب قرائة شروط التسجيل والموافقة عليها"} checked={sgnCheck} onChange={() =>setSgnCheck(!sgnCheck)}  />
                        <CheckBox label={"يجب قرائة محظورات الشحن والموافقة عليها"} checked={shipCheck} onChange={() =>setshipCheck(!shipCheck)}  />
                </View>
                <TouchableOpacity style={{  alignSelf: 'center'}} onPress={()=> handlePress('https://gw.ly/%D9%85%D9%88%D8%A7%D8%AF%20%D9%85%D8%AD%D8%B6%D9%88%D8%B1%D8%A9.pdf')}>
                    <Text style={styles.blueTitle}>قائمة المواد المحضورة</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{  alignSelf: 'center'}} onPress={()=> handlePress('https://gw.ly/%D8%B4%D8%B1%D9%88%D8%B7%20%D9%88%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B5%D9%8A%D9%86.pdf')}>
                    <Text style={styles.blueTitle}>شروط وسياسة الخدمة</Text>
                </TouchableOpacity>

                <AppButton color={"#F4782B"} title={"أنشاء حساب"}fun={handelSignup} />
                <TouchableOpacity style={{ marginVertical: 5, alignSelf: 'center'}} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.blueTitle}> لديك حساب ؟</Text>
                </TouchableOpacity>


            </View>
        </View>
       <AppModal
        visible={signUpApi.error}
        setModalVisible={signUpApi.setError}
        content={errorMsg}
        type="fail"
      />
      <AppModal
        visible={sucessModal}
        setModalVisible={setSuccessModal}
        content={
          "تم تسجيل حسابك بنجاح سيتم مراجعت بياناتك من قبل الفريق المختص وعند الموافقة عليها ستتمكن من تسجيل دخولك الى التطبيق"
        }
        type="success"
      />
       </ScrollView>

    </AppBackground>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: height * 0.1,
    },
    scrollerContainer: {
    alignSelf: 'center',
    width: '90%',
    paddingBottom: height * 0.12

    },
    titleContainer: {
        width: '100%'
    },
    title: {
        fontSize: 30,
        fontFamily: "SomarSans-Bold",
    },
    subTitle: {
        fontSize: 14,
        fontFamily: "SomarSans-Regular",     
    },
    blueTitle: {
        fontSize: 12,
        fontFamily: "SomarSans-Medium", 
        color: "#1557A9"  
    }, 
    label: {
        fontSize: 10,
        color: '#1A202C',
        fontFamily: 'SomarSans-Medium'
      }
})