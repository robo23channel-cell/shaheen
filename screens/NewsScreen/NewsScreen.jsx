import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
 import NewsElement from './components/NewsElement'
import ActivityIndicator from '../../components/ActivityIndicator'
import useApi from '../../hooks/useApi'
import news from '../../Api/news'



const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function NewsScreen({navigation}) {
  const [data, setData] = useState([]);
  const getNewsApi = useApi(news.gteNew);

  const fetchData = async () => {
      const res = await getNewsApi.request();
      console.log(res.data)
      if (res.ok) setData(res.data.data);

  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <AppBackground>
      <TopBar navigation={navigation} />
      <ActivityIndicator visible={getNewsApi.loading } />

      <ScrollView style={styles.contaner} >
        <View style={{ alignItems: 'center', alignSelf: 'center', width: '100%'}}>
           {data.map( (e, i) =>    <NewsElement key={i} path={e?.path} header={e?.title} date={e?.date?.split("T")[0]} onPress={() => navigation.navigate("NewsDetails", { data: e})} />)}
        </View>
       
 
      </ScrollView>
    </AppBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    top: 125,
    height: '100%',
    width: '100%'
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
})