import React , { useState}from 'react';
import { View, StyleSheet, Dimensions, Text, Touchable } from 'react-native';
import AppBackground from '../../components/AppBacKground';
import ShaheenLogo from "../../assets/ShaheenLogo.svg";
import AppButton from '../../components/AppBotton';
import colors from '../../config/colors';
import AppInput from '../../components/AppInput';
import user from '../../assets/Icons/user.svg'
import passwordIcon from '../../assets/Icons/password.svg'
import ActivityIndicator from '../../components/ActivityIndicator';
import authApi from "../../Api/auth";
import AppModal from '../../components/AppModal';
import useAuth from "../../auth/useAuth";
import useApi from "../../hooks/useApi";
import { TouchableOpacity } from 'react-native';



export default function StartUpScreen({ navigation }) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const signInApi = useApi(authApi.signIn);
    const auth = useAuth();
    // const navigation = useNavigation();
  
    const handleLogin = async () => {
      const result = await signInApi.request({
        userName,
        password,
        rememberMe: true,
      });
  
      if (result.ok) {
        auth.logIn(result.data?.data?.token);
      }
    };
  

  const handleIconPress = () => {
    console.log('Icon pressed');
  };

  return (
    <AppBackground style={styles.background}>
      <ActivityIndicator visible={signInApi.loading} />
      <AppModal
        visible={signInApi.error}
        setModalVisible={signInApi.setError}
        content={"هناك مشكلة باسم المستخدم او كلمة المرور"}
        type="fail"
      />
      <ShaheenLogo 
        width={Dimensions.get('window').width * 0.5} 
        height={Dimensions.get('window').height * 0.5} 
        style={styles.logo} 
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.header}>أدخل بياناتك لتسجيل الدخول </Text>
        <AppInput   
        value={userName}
        onChangeText={setUserName}
        placeholder="اكتب اسم المستخدم "
        IconComponent={user} 
        onIconPress={handleIconPress}/> 
        <AppInput   
        value={password}
        password
        onChangeText={setPassword}
        placeholder="كلمة المرور"
        IconComponent={passwordIcon} 
        IsSecure={true}
        onIconPress={handleIconPress}/> 
        <AppButton title='تسجيل الدخول' color={colors.orange} fun={handleLogin} />
         <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.blueTitle}>ليس لديك حساب ؟</Text>
         </TouchableOpacity>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    //  top: Dimensions.get('window').height * 0.1, 
    marginBottom: Dimensions.get('window').height * 0.08, 
  },
  buttonContainer: {
    //position: 'absolute',
    bottom: Dimensions.get('window').height * 0.15, 
    width: '100%',
    alignItems: 'center',
  },
  header:{
    textAlign:"right"
  },
  blueTitle: {
    fontSize: 12,
    fontFamily: "SomarSans-Medium", 
    color: "#1557A9"  
}
});
