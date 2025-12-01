import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import SeaSharedButton from './components/SeaSharedButton'
import SeaFullButton from './components/SeaFullButton'
 
const height = Dimensions.get('window').height;

export default function SeaShippingScreen({navigation}) {
  return (
    <AppBackground>
        <View style={styles.contaner} > 
            {/* <SearchBar/> */}
            <SeaSharedButton style={styles.firstIcon}  onPress={() => navigation.navigate("SeaFullScreen")} />
            <SeaFullButton  onPress={() => navigation.navigate("SeaSharedScreen")} />
        </View>
        <TopBar navigation={navigation} />
    </AppBackground>
  )
}

const styles = StyleSheet.create({
    contaner: {
        position: 'absolute',
        top: 125,
        width: '100%',
        alignItems: 'center'
     },
     firstIcon: {
       marginVertical: 25
     }
})