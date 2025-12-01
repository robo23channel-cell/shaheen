import { View, Text, StyleSheet, Dimensions, ScrollView, Platform, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import AppBackground from '../../components/AppBacKground'
import NotificationElement from './components/NotificationElement'
import useApi from '../../hooks/useApi'
import NotificationApi from '../../Api/Notofocations'; 
import ActivityIndicator from '../../components/ActivityIndicator'


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function NotificationScreen({ navigation }) {
  const [page, setpage] = useState(1);
  const [data, setData] = useState([]);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const getNotificationApi = useApi(NotificationApi.geterPage);

  const fetchData = async () => {

    try{

      const res = await getNotificationApi.request({
        page: page,
        postPerPage: 25 
      });
 
     if (res.ok) setData(res.data.data);
 
     //console.log(res.data.data); 
    } catch(e){ console.log(e)}
  }

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 200;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };



  useEffect( () => {
    fetchData();

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


  return (
    <AppBackground>
        <ActivityIndicator visible={getNotificationApi.loading } />
        <ScrollView 
      style={isKeyboardVisible? { ... styles.contaner, paddingTop: 150, paddingBottom:0}: styles.contaner}
      onScroll={async ({ nativeEvent }) => {
        console.log(data.length >= 25, " : ", isCloseToBottom(nativeEvent))
        if (isCloseToBottom(nativeEvent) ) {
          if (getNotificationApi.loading) return;
          const req = await getNotificationApi.request({
            page: page,
            postPerPage: 25,
          });
          
          if (!req.ok) return;
          setData([...data, ...req.data.data]);
          setpage(page + 1);
        }
      }}
      scrollEventThrottle={100}

    >
      <View style={{alignSelf: 'center'}}>
        { data?.map( (e,i) => <NotificationElement key={i} title={"النظام"} discription={e.msg} onPress={e.shipmentType == 1 ? () => navigation.navigate("AirShippingScreenDetails", { orderId: e.orderId}) : () => navigation.navigate("SeaShippingDetailsScreen", { orderId: e.orderId}) } />)}
 
      </View>
   
        </ScrollView>
      <TopBar  navigation={navigation} />
    </AppBackground>
  )
}

const styles = StyleSheet.create({
    elementContainer: {
        position: 'absolute',
        top: height *0.18
    },
    contaner: {
      // position: 'absolute',
       paddingTop: 120,
       paddingBottom: 500,
       //  backgroundColor: 'red',
        width: width,
        height: '100%',
         //alignItems: 'center',
       
    },
    container: {
        alignItems: 'center',
        position: 'absolute',
        top: 125,
        height: '100%',
        width: '100%'
      }
})