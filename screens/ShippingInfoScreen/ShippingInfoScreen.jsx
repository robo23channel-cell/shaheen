import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
import SingleElement from './components/SingleElement'
import Name from '../../assets/Name.svg';
import AirCodeSvg from '../../assets/AirCodeSvg.svg';
import SeaCodeSvg from '../../assets/SeaCodeSvg.svg';
import BulidSvg from '../../assets/BiBuildings.svg';
import AirIconMSvg from '../../assets/AirIconMSvg.svg';
import SeaMIconSvg from '../../assets/SeaMIconSvg.svg';
import SwiftIconSvg from '../../assets/SwiftIconSvg.svg';
import SEaShip from '../../assets/SEaShip.svg';
import AuthContext from '../../auth/context'
import CopyTextComponent from './components/CopyTextComponent'
import { TouchableOpacity } from 'react-native'


const height = Dimensions.get('screen').height;


const NameIcon = ({name}) => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}}>{name}</Text>
        <View style={{ paddingLeft: 8}}>
          <Name/>
        </View>
    </View>
);

const BuildIcon = ({name}) => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}}>{name}</Text>
        <View style={{ paddingLeft: 8}}>
          <BulidSvg/>
        </View>
    </View>
)


const PriceIcon = ({ name, type}) => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{ fontSize: 16, color: '#1557A9', fontFamily: 'IBMPlexSansArabic-SemiBold'}}>{name}</Text>
    <View style={{ paddingLeft: 8}}>
       { type == 1 && <AirIconMSvg/>}
       { type == 2 && <SeaMIconSvg/>}
       { type == 3 && <SwiftIconSvg/>}
    </View>
</View>
)


const Lablebutton = ({ lable, onPress}) => (
    <TouchableOpacity 
    style={{
        flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF2EA", // Light peach background color
    borderRadius: 5, // Rounded edges
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5
    }}
    onPress={onPress}>
        <Text
            style={{
                fontSize: 16,
                color: "#0056b3", // Blue text color
                fontFamily:  'IBMPlexSansArabic-SemiBold',
              }}
        >{lable}</Text>
    </TouchableOpacity>
)


export default function ShippingInfoScreen({ navigation }) {
    const { user } = useContext(AuthContext);


  return (
    <AppBackground>
        <ScrollView style={styles.container}>
           <SingleElement Lside={() =><CopyTextComponent text={user.code ? user.code : user.WhatsappPhone} />} Rside={() => <NameIcon name={user.name} />} />

           <View style={styles.contentContainer}>
              <View style={{ padding: 5}}>
                    <Text style={styles.title}>معلومات الشحن</Text>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
                <AirCodeSvg/>
                <View style={{ marginVertical: 10}}>
                     <CopyTextComponent text={`SH-${user?.code}/TIP/AIRSHIPPING`} />
                </View>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
                <SEaShip/>
                <View style={{ marginVertical: 10}}>
                     <CopyTextComponent text={`SH-${user?.code}/TIP/SEASHIPPING`} /> 
                </View>
              </View>

           </View>


           <View style={styles.contentContainer}>
              <View style={{ padding: 5}}>
                    <Text style={styles.title}>العناوين</Text>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
               
                <View style={{ marginVertical: 0}}>
                      <SingleElement Lside={() =><Lablebutton lable={"عرض العنوان"} onPress={() => navigation.navigate("WareHouseScreen", { name: "مخزن فوشان"})} />} Rside={() => <BuildIcon name={"مخزن فوشان"} />} />
                </View>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
                 
                <View style={{ marginVertical: 0}}>
                <SingleElement Lside={() =><Lablebutton lable={"عرض العنوان"} onPress={() => navigation.navigate("WareHouseScreen", { name: "مخزن أيو"})} />} Rside={() => <BuildIcon name={"مخزن أيو"} />} />

                </View>
              </View>

           </View>


           <View style={styles.contentContainer}>
              <View style={{ padding: 5}}>
                    <Text style={styles.title}>الأسعار</Text>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
               
                <View style={{ marginVertical: 0}}>
                      <SingleElement Lside={() =><Lablebutton lable={"عرض الأسعار"} onPress={() => navigation.navigate("AirPrices")} />} Rside={() => <PriceIcon name={"الشحن الجوي"} type={1}/>} />
                </View>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
                 
                <View style={{ marginVertical: 0}}>
                <SingleElement Lside={() =><Lablebutton lable={"عرض الأسعار"} onPress={() => navigation.navigate("SeaPrices")} />} Rside={() => <PriceIcon name={"الشحن البحري"} type={2}/>} />

                </View>
              </View>

              <View style={{ paddingVertical: 5, borderTopWidth: 1, borderColor: '#FEF2EA', width: '105%', alignItems: 'center'}}>
                 
                 <View style={{ marginVertical: 0}}>
                 <SingleElement Lside={() =><Lablebutton lable={"عرض الأسعار"} onPress={() => navigation.navigate("IwanScreen")}  />} Rside={() =><PriceIcon name={"الحوالات المالية"} type={3}/>} />
 
                 </View>
               </View>

           </View>


<View
    style={{ paddingVertical: height * 0.1}}
/>


        </ScrollView>
        <TopBar navigation={navigation}/>
    </AppBackground>
       
  )
}



const styles = StyleSheet.create({
    container: {
            flex: 1,
            paddingTop: height * 0.16,
            alignSelf: 'center',
    },
    contentContainer: {
        backgroundColor: '#ffff',
        marginVertical: 10,
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        alignSelf: 'center'
    }, 
    title: {
        fontSize: 21,
         color: '#1557A9',
          fontFamily: 'IBMPlexSansArabic-Bold'
    }
})