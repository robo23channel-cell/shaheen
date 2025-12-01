import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // You can replace this with your own custom icons
import HomeIconSvg from '../assets/HomeIcon.svg';
import HomeIconSelectedSvg from '../assets/HomeIconSelected.svg';
import WalletIconSvg from '../assets/WalletIconSvg.svg';
import WalletIconSelected from '../assets/WalletIconSelected.svg';
import NewsIconSelected from '../assets/NewsIconSelected.svg';
import NewsIcon from '../assets/NewsIcon.svg';
import ProfileIconSelected from '../assets/ProfileIconSelected.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

     //   const iconName = getIconName(route.name, isFocused);

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <IconComponent routeName={route.name} isFocused={isFocused} />
            {/* <Text style={[styles.tabText, isFocused && styles.focusedTabText]}>
              {getTabLabel(route.name)}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Helper function to get the icon name based on the route name
const IconComponent = ({routeName, isFocused}) => {
    
  switch (routeName) {
    case 'Home':
      return isFocused ? <HomeIconSelectedSvg/> : <HomeIconSvg/>;
    case 'Wallet':
      return isFocused ? <WalletIconSelected/> : <WalletIconSvg/>;
    case 'News':
      return isFocused ? <NewsIconSelected/> : <NewsIcon/>;
    case 'Profile':
        return isFocused ? <ProfileIconSelected/> : <ProfileIcon/>;

    default:
      return  <></>;
  }
};

// Helper function to get the tab label based on the route name
const getTabLabel = (routeName) => {
  switch (routeName) {
    case 'Profile':
      return 'الحساب';
    case 'Wallet':
      return 'المحفظة';
    case 'Statistics':
      return 'إحصائيات';
    case 'Location':
      return 'الموقع';
    case 'Home':
      return 'الرئيسية';
    default:
      return 'غير معروف';
  }
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1557A9', // Use your preferred background color
    height: 70,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    bottom: 20,
    width: '90%',
    alignSelf: "center"
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  focusedTabText: {
    color: '#FF8300',
  },
});

export default CustomBottomTabBar;
