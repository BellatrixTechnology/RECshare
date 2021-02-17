import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { hp, wp } from '../../Global/Styles/Scalling';
import Seachbar from './SeachBar'

const Tab = createMaterialTopTabNavigator();
function Searchbar() {
    return (
        <View style={styling.searchbarView}>
            <Seachbar />
        </View>
    );
}

function Recentbar() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Recent!</Text>
        </View>
    );
}
const Search = ({ props }) => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon.Button name='left' size={30} color='black' backgroundColor={'white'} onPress={() => { props.navigation.navigate('LoginScreen') }}></Icon.Button>
            </View>
            <View style={styling.headTXTView}>
                <Text style={styling.headTXT}> Discover</Text>
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
                        <Tab.Screen name="Search" component={Searchbar} />
                        <Tab.Screen name="Recent" component={Recentbar} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>

        </SafeAreaView >
    )
}

export default Search;