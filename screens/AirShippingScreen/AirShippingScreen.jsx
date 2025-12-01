import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
 import TopBar from './components/TopBar'
import AppBackground from '../../components/AppBacKground'
import SearchBar from './components/SearchBar'
import AddInvoiceButton from './components/AddInvoiceButton'
import SubjectLableSvg from '../../assets/SubjectLableSvg.svg'
 import CargoElement from './components/CargoElement'
 import ChinaTapSvg from '../../assets/ChinaTapSvg.svg'; 
 import ActiveChinaTapSvg from '../../assets/ActiveChinaTapSvg.svg'; 
 import TurkyTabSvg from '../../assets/TurkyTabSvg.svg'
 import ActiveTurkyTabSvg from '../../assets/ActiveTurkyTabSvg.svg'; 
 import USATapSvg from '../../assets/USATapSvg.svg';
 import ActiveUSATapSvg from '../../assets/ActiveUSATapSvg.svg';
 import UAETabSvg from '../../assets/UAETabSvg.svg';
 import ActiveUAETabSvg from '../../assets/ActiveUAETabSvg.svg';
 import SuadiSvg from '../../assets/SuadiSvg.svg';
 import ActiveSuadiSvg from '../../assets/ActiveSuadiSvg.svg';
 import AirShipmentsApi from '../../Api/AirShipments'
import transLateContries from '../../helpers/transLateContries'
import AuthContext from '../../auth/context'
import ActivityIndicator from '../../components/ActivityIndicator'
import AppModal from '../../components/AppModal'

 const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height; 
const [CHINA, TURKY, UAE, USA, KSI] = ["CHINA", "TURKY", "UAE", "USA", "KSI"]


function extractNumber(input) {
  // Use regex to replace all non-digit characters with an empty string
  return input.replace(/\D/g, '');
}



export default function AirShippingScreen({navigation}) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [noResultError,setNoResultError] = useState(false);
    const [activeCountry, setActiveCountry] = useState(CHINA)
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [page, setpage] = useState(2);
    const getAirShipmentsApi = useApi(AirShipmentsApi.gteShipments);
    const getShipmentPerPage = useApi(AirShipmentsApi.getShipmentsPerPage);
    const filterApi = useApi(AirShipmentsApi.AdvancFilter);

    const { translateConstToEnum } = transLateContries;
  
    const fetchData = async () => {

      const res = await getAirShipmentsApi.request(
        translateConstToEnum(activeCountry)
      );
       if (res.ok) setData(res.data.data);
    };

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
      const paddingToBottom = 500;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    };

    const handleFilter = async (val) => {
      const res = await filterApi.request(
        extractNumber(val)
      );
  
      if (res.ok) setData(res.data.data);

     }
    
    
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

    useEffect( () => {
      fetchData();
    }, [activeCountry])
  
  return (
 
    <AppBackground style={styles.backGround} >
           <ActivityIndicator visible={getAirShipmentsApi.loading || getShipmentPerPage.loading || filterApi.loading} />

    <ScrollView 
      style={isKeyboardVisible? { ... styles.contaner, paddingTop: 150, paddingBottom:0}: styles.contaner}
      onScroll={async ({ nativeEvent }) => {
        console.log(data.length >= 20, " : ", isCloseToBottom(nativeEvent))
        if (isCloseToBottom(nativeEvent) && data.length >= 20) {
          if (getAirShipmentsApi.loading) return;
          const req = await getShipmentPerPage.request({
            page: page,
            postPerPage: 25,
            country: translateConstToEnum(activeCountry),
          });
          if (!req.ok) return;
          setData([...data, ...req.data.data]);
          setpage(page + 1);
        }
      }}
      scrollEventThrottle={400}

    >
        <View style={styles.mainContainer} >

        <SearchBar  onSearch={handleFilter} />
        <AddInvoiceButton onPressI={() => navigation.navigate("AddInvoiceScreen",  { type: 1, endpoint: "AirCargoInvoice" })}  onPressT={() => navigation.navigate("AskTikcitScreen")} />

            <ScrollView        horizontal 
      showsHorizontalScrollIndicator={false} style={styles.TapsContainer} >
                <TouchableOpacity onPress={() => setActiveCountry(CHINA)}  style={styles.Tap} >
                         { activeCountry == CHINA ? <ActiveChinaTapSvg/> : <ChinaTapSvg/> }
                </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveCountry(UAE)} style={styles.Tap} >
                         { activeCountry == UAE ? <ActiveUAETabSvg/> : <UAETabSvg/> }
                </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveCountry(USA)} style={styles.Tap} >
                         { activeCountry == USA ? <ActiveUSATapSvg/> : <USATapSvg/> }
                </TouchableOpacity>
               <TouchableOpacity onPress={() => setActiveCountry(TURKY)} style={styles.Tap} >
                         { activeCountry == TURKY ? <ActiveTurkyTabSvg/> : <TurkyTabSvg/> }
                </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveCountry(KSI)} style={styles.Tap} >
                         { activeCountry == KSI ? <ActiveSuadiSvg/> : <SuadiSvg/> }
                </TouchableOpacity>
            </ScrollView>
        <View>
          <SubjectLableSvg/>
        </View>
        <View style={styles.elementsContainer}>
            {
              data.map((e, i) => (
                <CargoElement key={i} onPress={() => navigation.navigate("AirShippingScreenDetails", { orderId: e.id})} onPressIcon={() => navigation.navigate("EditRequestScreen", { orderId: e.orderNumber + "AC"})}  data={e} />
              ))
            }
          
        </View>
        </View>
        <View style={{paddingVertical: height *0.1}} />

    </ScrollView>
    <AppModal
        visible={noResultError}
        setModalVisible={setNoResultError}
        content={"لا يوجد طلب بهذه البيانات"}
        type="fail"
      />  
      <TopBar    navigation={navigation} />

    </AppBackground>

  )
}


const styles = StyleSheet.create({
    contaner: {
       // position: 'absolute',
        paddingTop: 120,
        paddingBottom: 500,
        //  backgroundColor: 'red',
         width: width,
         height: '100%'
          //alignItems: 'center',
        
     },
     elementsContainer: {
    
      },
      mainContainer: {
        width: width  ,
        alignItems: 'center'
      },
      backGround: {
        
      },
      TapsContainer: {
            flexDirection: 'row',
            width: '95%'
           // alignItems: 'center',
           // justifyContent: 'space-evenly',

      },
      Tap: {
        marginVertical: 0,
        marginBottom: 15,
        marginHorizontal: 5
      },
      safeView: {
        flex: 1,
        
      }
})