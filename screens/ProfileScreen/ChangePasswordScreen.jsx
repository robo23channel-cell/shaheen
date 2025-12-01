import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import { StyleSheet } from 'react-native'
import TopBarChange from './components/TopBarChange'
import AppInput from './components/AppInput'
import lock from '../../assets/lock.svg'; 
import TagInfoSvg from '../../assets/TagInfoSvg.svg'; 
import WatsSvg from '../../assets/WatsSvg.svg'; 
import AppButton from '../../components/AppBotton'
import SlideUpComponent from './components/SlideUpComponent'
import AppModal from '../../components/AppModal'
import ActivityIndicator from '../../components/ActivityIndicator'
import useApi from '../../hooks/useApi'
import userApi from '../../Api/user'
import AuthContext from '../../auth/context'

export default function ChangePasswordScreen({ navigation }) {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [cNewPass, setCNewPass] = useState("");
    const [sucessModal, setSuccessModal] = useState(false);
    const [errorMsg, setErrorMessage] = useState(""); 
    const { user } = useContext(AuthContext);

    const passwordApi = useApi(userApi.changePassWord);

    const changePass = async() => {
          const res = await passwordApi.request(oldPass, newPass, user.uid);

          if(response.ok) setSuccessModal(true);
          if (!response.ok) {
            setErrorMessage(response?.data?.message);
           }
    }

  return (
    <AppBackground>
      <View style={styles.container}>
      <ActivityIndicator visible={ passwordApi.loading} />

        <AppInput onChangeText={setOldPass} placeholder={"ادخل كلمة المرور القديمة"} value={oldPass} IconComponent={lock} style={{ marginVertical: 10}} />
        <AppInput onChangeText={setNewPass} placeholder={"ادخل كلمة المرور الجديدة"} value={newPass} IconComponent={lock} style={{ marginVertical: 10}} />
        <AppInput onChangeText={setCNewPass} placeholder={"ادخل كلمة المرور الجديدة"} value={cNewPass} IconComponent={lock} style={{ marginVertical: 10}} />
        <View style={{ alignSelf: 'flex-end', marginRight: 22, marginVertical: 10}} >
            <TagInfoSvg/>
        </View>
        <AppInput  placeholder={"ادخل رقم هاتفك"}  IconComponent={WatsSvg} style={{ marginVertical: 10}} />
        <AppModal
        visible={passwordApi.error}
        setModalVisible={passwordApi.setError}
        content={errorMsg}
        type="fail"
      />
      <AppModal
        visible={sucessModal}
        setModalVisible={setSuccessModal}
        content={
          `تم تغيير كلمة المرور بنجاح`
         }
        type="success"
      />
      </View>
        <AppButton title={"تغيير"} color={"#F4782B"}  style={{ alignSelf: 'center', position: 'absolute', bottom: height * 0.05}} fun={changePass} />

      <TopBarChange navigation={navigation} />
    </AppBackground>
  )
}


const width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
        container: {
            marginTop: - width * 0.35,
            width: '100%',
            
        }
})