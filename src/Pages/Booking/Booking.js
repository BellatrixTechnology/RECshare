import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { hp, wp } from '../../Global/Styles/Scalling';
import Activebar from './Activebar';

const Tab = createMaterialTopTabNavigator();
function Active() {
    return (
        <View style={styling.searchbarView}>
            <Activebar />
        </View>
    );
}

function Complete() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Complete!</Text>
        </View>
    );
}
const Booking = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon name='search1' size={30} />
            </View>
            <View style={styling.headTXTView}>
                <Text style={styling.headTXT}> Booking</Text>
            </View>
            <View style={styling.mainContainer}>
                <NavigationContainer
                    independent={true}
                >
                    <Tab.Navigator
                        tabBarOptions={{
                            labelStyle: { fontSize: 15, fontFamily: 'SFUIText-Bold' },
                            style: {
                                width: wp('100%')
                            },
                            indicatorStyle: {
                                borderBottomColor: '#FF2D55',
                                borderBottomWidth: 2,
                            },
                        }}
                    >
                        <Tab.Screen name="Active" component={Active} />
                        <Tab.Screen name="Complete" component={Complete} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>

        </SafeAreaView >
    )
}

export default Booking;