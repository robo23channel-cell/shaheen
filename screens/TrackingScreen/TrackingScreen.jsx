import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../components/AppBacKground'
import TopBar from './components/TopBar'
import TripCard from './components/TripCard'
import ArrivalCard from './components/ArrivalCard'
import ActivityIndicator from '../../components/ActivityIndicator'
import useApi from '../../hooks/useApi'
import PkgsBulks from '../../Api/PkgsBulks'


const higth = Dimensions.get('screen').height; 

export default function TrackingScreen({navigation, route}) {
  const {bulk, orderId} = route.params;
  const [data, setData] = useState()

  const getApi = useApi(PkgsBulks.trackOrder);

  const fetchData = async () => {
     try{
        const res = await getApi.request(orderId);

        if(res.ok){
          setData(res.data.data);
          console.log("505:",res.data.data)
        }

     }catch(e){
      console.log(e);
     }
  }


  const fetchLocation = (location, data) => {
    console.log("dataaa:", data[0]?.date)
        if(location == 1 ) return (
          <View>
                <ArrivalCard isActive={false} type={5} />
                <ArrivalCard isActive={false} type={4} />
                <ArrivalCard isActive={false} type={3} />
                <ArrivalCard isActive={false} type={2} />
                <ArrivalCard date={data[0]?.date} isActive={true} type={1} />
          </View>
        )

        if(location == 2 ) return (
          <View>
                <ArrivalCard isActive={false} type={5} />
                <ArrivalCard isActive={false} type={4} />
                <ArrivalCard isActive={false} type={3} />
                <ArrivalCard date={data[1]?.date} isActive={true} type={2} />
                <ArrivalCard date={data[0]?.date} isActive={true} type={1} />
          </View>
        )

        if(location == 3 ) return (
          <View>
                <ArrivalCard isActive={false} type={5} />
                <ArrivalCard isActive={false} type={4} />
                <ArrivalCard date={data[2]?.date} isActive={true} type={3} />
                <ArrivalCard date={data[1]?.date} isActive={true} type={2} />
                <ArrivalCard date={data[0]?.date} isActive={true} type={1} />
          </View>
        )

        if(location == 4 ) return (
          <View>
                <ArrivalCard isActive={false} type={5} />
                <ArrivalCard date={data[3]?.date} isActive={true} type={4} />
                <ArrivalCard date={data[2]?.date} isActive={true} type={3} />
                <ArrivalCard date={data[1]?.date} isActive={true} type={2} />
                <ArrivalCard date={data[0]?.date} isActive={true} type={1} />
          </View>
        )

        if(location == 5 ) return (
          <View>
                <ArrivalCard date={data[4]?.date} isActive={true} type={5} />
                <ArrivalCard date={data[3]?.date} isActive={true} type={4} />
                <ArrivalCard date={data[2]?.date} isActive={true} type={3} />
                <ArrivalCard date={data[1]?.date} isActive={true} type={2} />
                <ArrivalCard date={data[0]?.date} isActive={true} type={1} />
          </View>
        )
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppBackground>
      <ActivityIndicator visible={getApi.loading} />
       <ScrollView style={styles.container}>
        {
              data ? <View>
                { data.map((e,i) => (
                  <View key={i}>
                    <TripCard code={e?.bulkPckgNum}/>
              <View style={{paddingVertical: 10}}>
                 {fetchLocation(e?.prograssDetails?.length, e?.prograssDetails)}
      
              </View> 
                  </View>
                ))}
           
              </View>
              : 
              <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text>لا توجد بيانات تتبع للشحنة</Text>
              </View>
        }
       </ScrollView>
       <TopBar navigation={navigation}/>
    </AppBackground>
  )
}


const styles = StyleSheet.create({
    container: {
          marginTop: higth * 0.15,
          width: '100%',
          higth: higth
    }
})