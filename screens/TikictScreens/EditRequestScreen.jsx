import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
import AppButton from '../../components/AppBotton'

export default function EditRequestScreen({navigation, route}) {
  const {orderId} = route.params

  return (
    <AppBackground>
      <View style={styles.container}>
        <AppButton color={"#1557A9"} title={"الشحنة لم يتم استلامها"} fun={() => navigation.navigate("AskTikcitScreen", { type: 0})} />
        <AppButton color={"#1557A9"} title={"تغيير وسيلة الشحن"} fun={() => navigation.navigate("EditRequestDetailsScreen", { type: 1, orderId: orderId})}  />
        <AppButton color={"#1557A9"} title={orderId.endsWith("AC") ? "خطأ في احتساب الوزن" : "خطأ في احتساب الحجم"} fun={() => navigation.navigate("EditRequestDetailsScreen", { type: 2, orderId: orderId})}  />
        <AppButton color={"#1557A9"} title={"طلب تصوير الشحنة"} fun={() => navigation.navigate("EditRequestDetailsScreen", { type: 3, orderId: orderId})}  />
        <AppButton color={"#1557A9"} title={"اخرى"} fun={() => navigation.navigate("EditRequestDetailsScreen", { type: 4, orderId: orderId})}  />
      </View>
      <TopBar  navigation={navigation}/>
    </AppBackground>
  )
}

const higth = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        marginTop: - higth * 0.15
    }
})