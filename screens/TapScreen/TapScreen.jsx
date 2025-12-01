import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen/HomeScreen';
import CustomBottomTabBar from '../../components/CustomBottomTabBar';
import NewsScreen from '../NewsScreen/NewsScreen';
import WalletScreen from '../WalletScreen/WalletScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import useNotifications from '../../hooks/useNotifications';


const Tab = createBottomTabNavigator();


export default function TapScreen() {
  useNotifications(); 
  
  return (
  
      <Tab.Navigator initialRouteName="Home" tabBar={props => <CustomBottomTabBar {...props} />}>
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }}  />
        <Tab.Screen name="News" component={NewsScreen}  options={{ headerShown: false }}  />
        <Tab.Screen name="Wallet" component={WalletScreen}  options={{ headerShown: false }}  />
        <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}  />
      </Tab.Navigator>
    
   
  )
}