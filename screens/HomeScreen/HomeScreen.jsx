import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import WalletCard from './components/walletCard'
import UserInfoCard from './components/UserInfoCard'
import SeaIcon from './components/SeaIcon'
import AirIcon from './components/AirIcon'
import TrackIcon from './components/TrackIcon'
import ConstIcon from './components/ConstIcon'
import useApi from '../../hooks/useApi'
import useAuth from '../../auth/useAuth'
import balanceApi from '../../Api/balance'
import ActivityIndicator from '../../components/ActivityIndicator'
import AuthContext from "../../auth/context";




export default function HomeScreen({navigation }) {
  const { user } = useContext(AuthContext);
  const [balanceLy, setBalanceLy] = useState(0);
  const [balanceUsd, setBalanceUsd] = useState(0);

  const getBalanceApi = useApi(balanceApi.getAllData);


  const fetchBalanc = async () => {
try{
  if(!user.code) {
     setBalanceLy(0);
    setBalanceUsd(0);
    return ;
  }
   const response = await getBalanceApi.request(user.code);
 
 // console.log("responce: ", response.data.data);
  setBalanceLy(response?.data?.data?.balance?.balanceLYD);
  setBalanceUsd(response?.data?.data?.balance?.balanceUSD);

  if (!response.ok) {
    console.log("error: ",response?.data?.message);
  }

}catch(e){
  console.log(e)
}

  }

  useEffect(() => {
    fetchBalanc();
  }, []);

  return (
    <AppBackground style={styles.background} >
           {/* <ActivityIndicator visible={getBalanceApi.loading} /> */}

        <View  style={styles.container}>
            <UserInfoCard code={user.code ? user.code : user.WhatsappPhone}  name={user.name} navigation={navigation}  />
          
          <WalletCard style={{flex: 0}} lyAmount={balanceLy} usdAmount={balanceUsd}/>
          <View  style={{ flex: 1, marginTop: -95 }}>
              <View style={{ flexDirection: 'row'}}>
                <SeaIcon onPress={ () =>navigation.navigate("SeaScreen")} />
                <AirIcon onPress={ () => navigation.navigate("AirShippingScreen") } />
              </View>
              <View style={{ flexDirection: 'row'}}>
                <ConstIcon onPress={ () => navigation.navigate("CalculatorScreen") } />
                <TrackIcon onPress={ () => navigation.navigate("ShippingInfoScreen") } />
              </View> 
          </View>
        </View>
    </AppBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0
  },
  background: {
    // justifyContent: 'center',
  },

});