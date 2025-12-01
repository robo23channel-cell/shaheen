import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import TopBar from './components/TopBar'
import AppBackground from '../../components/AppBacKground'
import ProfileSvg from '../../assets/ProfileSvg.svg';
import EditLableSvg from '../../assets/EditLableSvg.svg';
import NavigatorElement from './components/NavigatorElement';
import LockSvg from '../../assets/LockSvg.svg'
import BiMessageAltError from '../../assets/BiMessageAltError.svg'
import BiWallet from '../../assets/BiWallet.svg'
import BiPhoneCall from '../../assets/BiPhoneCall.svg'
import HiOutlineLocationMarker from '../../assets/HiOutlineLocationMarker.svg'
import BsPersonX from '../../assets/BsPersonX.svg'
import AppButton from '../../components/AppBotton';
import CsSlide from '../../assets/CsSlide.svg'; 
import { TouchableOpacity } from 'react-native';
import Locations from '../../assets/Locations.svg'
import useAuth from '../../auth/useAuth';
import AccountAppModal from './components/AccountAppModal';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import userApi from '../../Api/user';
import AuthContext from '../../auth/context';


export default function ProfileScreen({navigation}) {
    ///
    const [isVisible, setIsVisible] = useState(false);
    const [isCsVisible, setIsCsVisible] = useState(false);
    const [alertNote, setAlertNote] = useState(false);
    const { user } = useContext(AuthContext);

    const auth = useAuth();

     const handleLogout = () => {
      console.log("DDD")
      auth.logOut();
    };
  
    const DissAbleUserApi = useApi(userApi.deactivateUser);

    const handleDissableUser = async () => {
      const res = await DissAbleUserApi.request()
      handleLogout();
    }


  return (
    <AppBackground>
      <ScrollView style={styles.container}>
      <ActivityIndicator visible={ DissAbleUserApi.loading} />

        <View  style={{ alignContent: 'center', justifyContent: 'center', alignSelf: 'center'}}>
          <ProfileSvg/>
          <Text style={styles.title}>{user?.name}</Text>
          <Text style={styles.email}>{user?.WhatsappPhone}</Text>
          <View style={{ alignSelf: 'center', margin: 5}}>
            <EditLableSvg/>
          </View>
        
     </View>
        <View style={styles.accountContainer}>
            <Text style={styles.subTitle}>الحساب</Text>
            <NavigatorElement title={"تعديل كلمة المرور"} SvgIcon={LockSvg} onPress={() => navigation.navigate("ChangePasswordScreen")} />
            <NavigatorElement title={"التنبيهات"} SvgIcon={BiMessageAltError} onPress={() => navigation.navigate("Notification")}  />
            <NavigatorElement title={"المحفطة"} SvgIcon={BiWallet}   onPress={() => navigation.navigate("WalletScreen")}  />
        </View>
        <View style={[styles.accountContainer, { marginTop: 2}]}>
            <Text style={[styles.subTitle, { }]}>عامة</Text>
            <NavigatorElement title={"خدمة العملاء"} SvgIcon={BiPhoneCall} onPress={() => setIsCsVisible(true)} />
            <NavigatorElement title={"عناوين الشركة"} SvgIcon={HiOutlineLocationMarker} onPress={() => setIsVisible(true)} />
            <NavigatorElement title={"تعطيل الحساب"} SvgIcon={BsPersonX} onPress={() => setAlertNote(!alertNote)} />
        </View>
        <View  style={{ alignSelf: 'center', paddingBottom: width * 0.25, marginTop: 25}}>
          <AppButton color={"#F4782B"} title={"تسجيل الخروج"}  fun={handleLogout} />
        </View>
      </ScrollView>
      { isCsVisible && <TouchableOpacity onPress={() => setIsCsVisible(false)}  >
        <CsSlide/>
      </TouchableOpacity>}
      { isVisible && <TouchableOpacity  onPress={() => setIsVisible(false)}  >
        <Locations/>
      </TouchableOpacity>}
      <AccountAppModal
          visible={alertNote}
          setModalVisible={setAlertNote}
          Action={handleDissableUser}
      />
      <TopBar navigation={navigation} />
    </AppBackground>
  )
}


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
   container: {
      marginTop: height * 0.135,
      width: '100%'
   },
   title: {
    marginTop: -10,
    fontSize: 22,
    fontFamily: 'SomarSans-ExtraBold',
    color: 'black',
    textAlign: 'center'
   },
   email: {
    fontSize: 11,
    fontFamily: 'SomarSans-Medium',
    color: 'black',
    textAlign: 'center'
   },
   accountContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5
   },
   subTitle: {
    fontSize: 16,
    fontFamily: 'SomarSans-ExtraBold',
    color: 'black',
    textAlign: 'right'
   }
})