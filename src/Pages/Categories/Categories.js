import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';

const Categories = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icons.Button name='left' backgroundColor='white' color='black' size={30} />


                <Icon.Button name='dots-three-horizontal' size={30} backgroundColor='white' color='black' />



            </View>
            <View style={styling.mainContainer}>
                <View style={styling.innerView}>
                    <Text style={styling.categoryTXT}>Categories</Text>

                </View>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>
                        <Text style={styling.headTXT}>Private</Text>
                        <Text style={styling.labelTXT}>400 WorkSpaces</Text>
                    </View>
                    <View style={styling.cardView}>
                        <Text style={styling.headTXT}>Meeting</Text>
                        <Text style={styling.labelTXT} >460 WorkSpaces</Text>

                    </View>
                </View>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>
                        <Text style={styling.headTXT}>Seminar</Text>
                        <Text style={styling.labelTXT}>490 WorkSpaces</Text>

                    </View>
                    <View style={styling.cardView}>
                        <Text style={styling.headTXT}>Offices</Text>
                        <Text style={styling.labelTXT}>490 WorkSpaces</Text>
                    </View>
                </View>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>
                        <Text style={styling.headTXT}>Event</Text>
                        <Text style={styling.labelTXT}>60 WorkSpaces</Text>

                    </View>
                    <View style={styling.cardView}>
                        <Text style={styling.headTXT}>Hot Text</Text>
                        <Text style={styling.labelTXT}>400 WorkSpaces</Text>

                    </View>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default Categories;