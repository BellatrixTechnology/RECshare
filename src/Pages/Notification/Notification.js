import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { hp, wp } from '../../Global/Styles/Scalling';


const Notification = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon name='filter' size={25} />
                <Icons name='dots-three-horizontal' size={25} />
            </View>

            <View style={styling.mainContainer}>
                <View style={styling.headTXTView}>
                    <Text style={styling.headTXT} >Notification</Text>
                </View>
                <View style={styling.innerView}>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <View style={styling.labelView}>
                                    <Text style={styling.cardheadTXT}>Mid Space Solution</Text>
                                    <Text style={styling.cardheadLabel}>Your Booking has been Approved</Text>
                                </View>
                                <Text style={styling.cardmintLabel}>34 minutes ago</Text>

                            </View>

                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <View style={styling.labelView}>
                                    <Text style={styling.cardheadTXT}>Quarto Workspace</Text>
                                    <Text style={styling.cardheadLabel}>Your Booking is notApproved</Text>
                                </View>
                                <Text style={styling.cardmintLabel}>50 minutes ago</Text>

                            </View>

                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <View style={styling.labelView}>
                                    <Text style={styling.cardheadTXT}>Green Heritage Office</Text>
                                    <Text style={styling.cardheadLabel}>Your Booking has been Approved</Text>
                                </View>
                                <Text style={styling.cardmintLabel}>34 minutes ago</Text>

                            </View>

                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <View style={styling.labelView}>
                                    <Text style={styling.cardheadTXT}>Pacific Workplaces</Text>
                                    <Text style={styling.cardheadLabel}>Your Booking has been Approved</Text>
                                </View>
                                <Text style={styling.cardmintLabel}>1 hour ago</Text>

                            </View>

                        </View>
                    </View>

                </View>


            </View>

        </SafeAreaView >
    )
}

export default Notification;