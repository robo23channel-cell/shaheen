import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import AppBackground from '../../components/AppBacKground'
import FinancialDetails from './components/FinancialDetails'
import FinancialMovement from './components/FinancialMovement'
import ActivityIndicator from '../../components/ActivityIndicator'
import useApi from '../../hooks/useApi'
import balanceApi from '../../Api/balance'
import AuthContext from '../../auth/context'


const higth = Dimensions.get('screen').height

export default function WalletScreen({navigation}) {
  const [balanceLy, setBalanceLy] = useState(0);
  const [balanceUsd, setBalanceUsd] = useState(0);
  const [data, setData] = useState([]);
  const [page, setpage] = useState(2);

  const { user } = useContext(AuthContext);

  const getBalanceApi = useApi(balanceApi.getAllData);
  const getBalanceMovementsApi = useApi(balanceApi.getMovements);

  const fetchData = async () => {
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
      setData(response.data.data.movements); 

    
      if (!response.ok) {
        console.log("error: ",response?.data?.message);
      }
    
    }catch(e){
      console.log(e)
    }
    
  }

  

  useEffect(() => {
      fetchData();
      
  }, []);

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 500;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <AppBackground>
      <ActivityIndicator visible={getBalanceApi.loading || getBalanceMovementsApi.loading} />
      <ScrollView 
       onScroll={async ({ nativeEvent }) => {
        console.log(data.length >= 25, " : ", isCloseToBottom(nativeEvent))
        if (isCloseToBottom(nativeEvent) ) {
          if (getBalanceApi.loading) return;
          const req = await getBalanceMovementsApi.request({
            page: page,
            postPerPage: 25,
            code: user.code
          });
          //if (!req.ok) return;
          // setData([...data, ...req.data.data]);
          setData([...data, ...req.data.data])
          setpage(page + 1);
          console.log([...data, ...req.data.data])
        }
      }}
      scrollEventThrottle={100}

    >

      
    
       <View style={{ marginTop: higth * 0.18}}>
        <FinancialDetails UsdAmount={balanceUsd} lyAmount={balanceLy} />
       </View>

       <View  style={{ marginTop: 30}}>
          <FinancialMovement data={data} />
        </View>


        
      </ScrollView>
       <TopBar navigation={navigation}/>
    </AppBackground>
  )
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: 'red',
      alignSelf: 'center'
      
  }
})



// onScroll={async ({ nativeEvent }) => {
//   console.log(data.length >= 20, " : ", isCloseToBottom(nativeEvent))
//   if (isCloseToBottom(nativeEvent) && data.length >= 20) {
//     if (getBalanceMovementsApi.loading) return;
//     const req = await getBalanceMovementsApi.request({
//       page: page,
//       postPerPage: 10,
//       code: user.code,
//     });
//     if (!req.ok) return;
//     setData([...data, ...req.data.data]);
//     setpage(page + 1);
//   }
// }}
// scrollEventThrottle={200}