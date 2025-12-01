import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import StartUpScreen from './screens/StartUpScreen/StartUpScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import OnBoardingScreen from './screens/OnBoarding/OnBoardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 

import { useCallback, useEffect, useState } from 'react';
import LoadingStartUpScreen from './screens/StartUpScreen/LoadingStartUpScreen';
import CustomBottomTabBar from './components/CustomBottomTabBar';
import TapScreen from './screens/TapScreen/TapScreen';
import NotificationScreen from './screens/NotificationScreen/NotificationScreen';
import NewsDetailsScreen from './screens/NewsScreen/NewsDetailsScreen';
import SeaShippingScreen from './screens/SeaShippingScreen/SeaShippingScreen';
import SeaFullShippingDetailsScreen from './screens/SeaShippingScreen/SeaFullShippingDetailsScreen';
import SeaShippingDetailsScreen from './screens/SeaShippingScreen/SeaShippingDetailsScreen';
import SeaFullShipingScreem from './screens/SeaShippingScreen/SeaFullShipingScreem';
import AddInvoiceScreen from './screens/AddInvoiceScreen/AddInvoiceScreen';
import SeaSharedScreen from './screens/SeaShippingScreen/SeaSharedScreen';
import AirShippingScreen from './screens/AirShippingScreen/AirShippingScreen';
import CalculatorScreen from './screens/CalculatorScreen/CalculatorScreen';
import ChangePasswordScreen from './screens/ProfileScreen/ChangePasswordScreen';
import WalletScreen from './screens/WalletScreen/WalletScreen';
import AirShippingScreenDetails from './screens/AirShippingScreen/AirShippingScreenDetails';
import GalaryPage from './screens/AirShippingScreen/components/GalaryPage';
import EditRequestScreen from './screens/TikictScreens/EditRequestScreen';
import EditRequestDetailsScreen from './screens/TikictScreens/EditRequestDetails';
import AskTikcitScreen from './screens/TikictScreens/AskTikcitScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import authStorage from './auth/storage';
import AuthContext from './auth/context';
import ShippingInfoScreen from './screens/ShippingInfoScreen/ShippingInfoScreen';
import SeaPrices from './screens/ShippingInfoScreen/SeaPrices';
import AirPrices from './screens/ShippingInfoScreen/AirPrices';
import IwanScreen from './screens/ShippingInfoScreen/IwanScreen';
import WareHouseScreen from './screens/ShippingInfoScreen/WareHouseScreen';
import TrackingScreen from './screens/TrackingScreen/TrackingScreen';



export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  
  const prepareApp = async () => {
    try {
      // Prevent splash screen from hiding automatically
      await SplashScreen.preventAutoHideAsync();
  
      // Perform any async tasks, like loading user data
      await restoreUser();
    } catch (error) {
      console.warn(error);
    } finally {
      // Signal that the app is ready and hide the splash screen
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };
  const [fontsLoaded] = useFonts({
    'IBMPlexSansArabic-Regular': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf'),
    'IBMPlexSansArabic-Bold': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Bold.ttf'),
    'IBMPlexSansArabic-ExtraLight': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-ExtraLight.ttf'),
    'IBMPlexSansArabic-Light': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Light.ttf'),
    'IBMPlexSansArabic-Medium': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Medium.ttf'),
    'IBMPlexSansArabic-SemiBold': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.ttf'),
    'IBMPlexSansArabic-Thin': require('./assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Thin.ttf'),
    'SomarSans-Regular': require("./assets/fonts/Somar_Sans/SomarSans-Regular.ttf"),
    'SomarSans-Medium': require("./assets/fonts/Somar_Sans/SomarSans-Medium.ttf"),
    'SomarSans-Bold': require("./assets/fonts/Somar_Sans/SomarSans-Bold.ttf"),
    'SomarSans-SemiBold': require("./assets/fonts/Somar_Sans/SomarSans-SemiBold.ttf"),
    'SomarSans-ExtraBold': require("./assets/fonts/Somar_Sans/SomarSans-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  useEffect(() => {
    prepareApp();

    if (fontsLoaded) {
      onLayoutRootView(); // Once fonts are loaded, trigger hiding the splash screen
    }
  }, [fontsLoaded, onLayoutRootView]);

  if (!fontsLoaded) {
   return <LoadingStartUpScreen/> // You can render a loading indicator here while the splash screen is up
  }

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeScreen = () =>(
    <Stack.Navigator initialRouteName="TapScreen">
    <Stack.Screen name="TapScreen" component={TapScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="SeaScreen" component={SeaShippingScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="SeaFullScreen" component={SeaFullShipingScreem} options={{ headerShown: false }}  />
    <Stack.Screen name="SeaShippingDetailsScreen" component={SeaShippingDetailsScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="AddInvoiceScreen" component={AddInvoiceScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="SeaSharedScreen" component={SeaSharedScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="WalletScreen" component={WalletScreen}  options={{ headerShown: false }}   />
    <Stack.Screen name="AirShippingScreen" component={AirShippingScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="AirShippingScreenDetails" component={AirShippingScreenDetails} options={{ headerShown: false }}  />
    <Stack.Screen name="GalaryPage" component={GalaryPage} options={{ headerShown: false }}  />
    <Stack.Screen name="EditRequestScreen" component={EditRequestScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="EditRequestDetailsScreen" component={EditRequestDetailsScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="AskTikcitScreen" component={AskTikcitScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="SeaFullShippingDetailsScreen" component={SeaFullShippingDetailsScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="ShippingInfoScreen" component={ShippingInfoScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="SeaPrices" component={SeaPrices} options={{ headerShown: false }}  />
    <Stack.Screen name="AirPrices" component={AirPrices} options={{ headerShown: false }}  />
    <Stack.Screen name="IwanScreen" component={IwanScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="WareHouseScreen" component={WareHouseScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="TrackingScreen" component={TrackingScreen} options={{ headerShown: false }}  />
  </Stack.Navigator>
  )


  const AuthScreen = () => (
    <Stack.Navigator initialRouteName="OnBoardingScreen">
    <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="StartUpScreen" component={StartUpScreen} options={{ headerShown: false }}  />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}  />
  </Stack.Navigator>
  )
  



  // useEffect(() => {
  //   prepareApp();
  // }, []);

  if (!isReady) {
    return null; // Keep the splash screen visible
  }


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
            { user  ? <HomeScreen/> : <AuthScreen/>}
       </NavigationContainer> 
    </AuthContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


{/* <Stack.Navigator initialRouteName="Home">
<Stack.Screen name="StartUp" component={StartUpScreen} options={{ headerShown: false }}  />
<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
<Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
</Stack.Navigator> */}