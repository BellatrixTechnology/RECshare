import React, { Fragment } from 'react';
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
const Booking = (props) => {
    console.log(props)
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headerView}>
                    <Icon name='search1' size={26} onPress={() => props.navigation.navigate('Search2')} />
                </View>
                <View style={styling.headTXTView}>

                    <Text style={styling.headTXT}> Booking</Text>
                </View>
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

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Booking;