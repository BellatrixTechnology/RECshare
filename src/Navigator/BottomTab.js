import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Browse2 from '../Pages/Browse2/Browse2';
import Bookings from '../Pages/Booking/Booking';
import Search from '../Pages/Search/Search';
import Categories from '../Pages/Categories/Categories';
import Account from '../Pages/Account/Account';
import MapBrowse from '../Pages/Map/MapBrowse';




const Tab = createBottomTabNavigator();


export default function App(props) {
    function Browse() {
        return (
            <Browse2 />
        );
    }

    function Booking() {
        return (
            <Bookings />
        );
    }
    function Connect() {
        return (
            <Search props={props} />
        );
    }
    function cate() {

        return (
            <Account props={props} />
        );
    }
    function Notification() {
        return (
            <MapBrowse />
        );
    }
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                tabBarOptions={{
                    iconStyle: { color: "rgb(17,129,176)" },
                    activeTintColor: 'rgb(17,129,176)',
                }}
            >
                <Tab.Screen name="Browse" component={Browse} />
                <Tab.Screen name="Booking" component={Booking} />
                <Tab.Screen name="Discover" component={Connect} />
                <Tab.Screen name="Map" component={Notification} />
                <Tab.Screen name="Account" component={cate} />


            </Tab.Navigator>
        </NavigationContainer>
    );
}
