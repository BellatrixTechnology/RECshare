import React, { Component, useEffect, useState } from 'react';
import { View, StatusBar, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Browse from '../Pages/Browse2/Browse2';
import Bookings from '../Pages/Booking/Booking';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import set_location from '../Pages/setLocations/set-location';
import ChooseLocation from '../Pages/ChooseLocation/ChooseLocation';
import ChooseLanguage from '../Pages/ChooseLanguage/ChooseLanguage';
import LoginScreen from '../Pages/Signin/LoginScreen';
import Categories from '../Pages/Categories/Categories';
import Search from '../Pages/Search/Search';
import Search2 from '../Pages/Search2/Search2';
import MapBrowse from '../Pages/Map/MapBrowse';
import Success from '../Pages/Success/Success';
import Favourites from '../Pages/Favourites/Favourites';
import Notification from '../Pages/Notification/Notification';
import Setting from '../Pages/Setting/Setting';
import Schedule from '../Pages/Schedule/Schedule';
import ReviewBooking from '../Pages/ReviewBooking/ReviewBooking';
import BookingDetails from '../Pages/BookingDetails/BookingDetails';
import Account from '../Pages/Account/Account';
import Chat from '../Pages/Chat/index';
import Filter from '../Pages/Filter/Filter';
import SpaceDetail from '../Pages/SpaceDetail/SpaceDetail';
import Payment from '../Pages/Payment/Payment';
import AddSpace from '../Pages/AddSpace/AddSpace';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import SpaceList from '../Pages/SpaceList.js/SpaceList';
import EditProfile from '../Pages/EditProfile';
import EditAddress from '../Pages/EditAddress';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
let img;

export default function BottomTabBar(props) {
  const [img, setimg] = useState('');

  useEffect(() => {
    get();
  }, []);
  async function get() {
    let tk = await AsyncStorage.getItem('token');
    await firestore()
      .collection('User')
      .doc(tk)
      .get()
      .then(async (doc) => {
        console.log(doc.data().imageLink);
        setimg(doc.data().imageLink);
        if (doc.data().imageLink && doc.data().imageLink != '') {
          await AsyncStorage.setItem('ImageLink', doc.data().imageLink);
        }
      });
  }
  function HomeScreen(props) {
    return (
      <Tab.Navigator
        tabBarOptions={{
          iconStyle: { color: 'rgb(17,129,176)' },
          activeTintColor: '#FF2D55',
        }}
        initialRouteName={Browse}>
        <Tab.Screen
          name="Browse"
          component={Browse}
          options={{
            // tabBarColor: '#6bfaf3',
            tabBarIcon: ({ color }) => (
              <Icon name="search1" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen name="Booking" component={Bookings}
          options={{
            // tabBarColor: '#6bfaf3',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="script-text-outline" color={color} size={22} />
            ),
          }}
        />
        {/* <Tab.Screen name="Map" component={MapBrowse}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: ({ color }) => (
                            <Icons name="map-pin" color={color} size={22} />
                        ),
                    }}
                /> */}
        {/* <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            // tabBarColor: '#6bfaf3',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bell" color={color} size={22} />
            ),
          }}
        /> */}

        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            // tabBarColor: '#6bfaf3',
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 25, height: 25, borderRadius: 100 }}
                source={img ? { uri: img } : require('./placeholderimg.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={HomeScreen} headerMode={null}>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Search2" component={Search2} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Map" component={MapBrowse} />
        <Stack.Screen name="Booking" component={Bookings} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ReviewBooking" component={ReviewBooking} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
        <Stack.Screen name="SpaceDetail" component={SpaceDetail} />
        <Stack.Screen name="Scheduele" component={Schedule} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="setlocation" component={set_location} />
        <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="AddSpace" component={AddSpace} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name='SpaceList' component={SpaceList} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='EditAddress' component={EditAddress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
