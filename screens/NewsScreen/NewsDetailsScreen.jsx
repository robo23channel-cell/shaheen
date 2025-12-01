import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import TopBar from './components/TopBar'
import TitleCard from './components/TitleCard';
import ShippingCompanyNotification from './components/ShippingCompanyNotification';
import Content from './components/Content';


const height = Dimensions.get('window').height; 

export default function NewsDetailsScreen({navigation, route}) {
  const { data } = route.params; 

  return (
    <View> 
       
      <View  style={styles.container}>
        <ScrollView style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <Image
          source={{ uri: data?.path }} // Replace with your actual image URL
          style={styles.cover}
          />
        
        <View style={styles.scroll}>
            <TitleCard title={data?.title} />
            <ShippingCompanyNotification date={data?.createdOn}/>
            <Content text={data?.descraption} />
           
         
        </View>

          </ScrollView>

        <View>

        </View>

     
      </View>
      <TopBar onDetails={true}  navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        //position: 'absolute',
        //top: 60,
        height: '100%',
        width: '100%',
      //  backgroundColor: 'red',
        
      },
      cover: {
        height: height * 0.45,
        width: "100%",
      },
      fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      scroll: {
        width: "100%",
        height: "100%",
        marginTop: -30,
        backgroundColor: 'white',
     //   position: 'absolute',
     //   top: height * 0.40,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        paddingBottom: 30
      }
    
})