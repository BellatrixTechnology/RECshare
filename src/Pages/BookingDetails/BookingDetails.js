import React, { Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/Entypo';

import Avatar, { IconTypes, Sizes } from 'rn-avatar';

const BookingDetails = (props) => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headerView}>
                    <Icons.Button name='left' backgroundColor='white' color='black' size={30} onPress={() => { props.navigation.navigate('Success') }} />


                    <Iconss.Button name='dots-three-horizontal' size={30} backgroundColor='white' color='black' />



                </View>
                <View style={styling.mainContainer}>
                    <View style={styling.avatarView}>
                        <Avatar
                            rounded
                            size={80}
                            icon={{
                                name: 'user', type: IconTypes.AntDesign,
                            }} />
                        <View style={styling.nameView}>
                            <Text style={styling.nameTXT}>Barbara Michelle</Text>
                            <TouchableOpacity style={styling.confirmOpacity}>
                                <Text style={styling.confirmTXT}>Confirmed</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.iconView}>
                            <TouchableOpacity style={styling.phoneView}>
                                <Icon name='phone' color='#FF2D55' />
                            </TouchableOpacity>


                            <TouchableOpacity style={styling.phoneView}>
                                <Icon name='comment' color='#FF2D55' />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styling.innerView}>
                        <View style={styling.labelView}>
                            <Text style={styling.labelTXT}>Start</Text>
                            <Text style={styling.labelendTXT}>End</Text>

                        </View>
                        <View style={styling.mainDayView}>
                            <View style={styling.dayView}>

                                <Text style={styling.dayTXT}>Monday,</Text>
                                <Text style={styling.dayTXT}>Oct 24, 2018</Text>
                                <Text style={styling.timeTXT}>08:00 AM</Text>
                            </View>
                            <View style={styling.arrowView}>
                                <Text>4h 0m</Text>
                                <Icon name='long-arrow-right' size={28} color='#C8C7CC' />

                            </View>
                            <View style={styling.dayView}>
                                <Text style={styling.dayTXT}>Monday,</Text>
                                <Text style={styling.dayTXT}>Oct 24, 2018</Text>
                                <Text style={styling.timeTXT}>08:00 AM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styling.innerView}>

                        <View style={styling.mainDayView}>
                            <View style={styling.cityView}>

                                <Text style={styling.timeTXT}>Address</Text>
                                <Text style={styling.dayTXT}>San Francisco, California</Text>
                                <Text style={styling.timeTXT}>0.31 mi away</Text>
                            </View>

                            <View style={styling.mapIconView}>
                                <Icon name='map-marker' size={30} color='#FF2D55' />
                            </View>
                        </View>
                    </View>
                    <View style={styling.innerView}>

                        <View style={styling.cityView}>

                            <Text style={styling.timeTXT}>Price</Text>
                            <Text style={styling.dayTXT}>Total price $60</Text>
                            <Text style={styling.timeTXT}>for 4h 0m </Text>


                        </View>
                    </View>
                    <View style={styling.innerView}>

                        <View style={styling.cityView}>
                            <Text style={styling.timeTXT}>Reminder</Text>
                            <Text style={styling.dayTXT}>30 minutes before</Text>
                            <Text style={styling.timeTXT}>30 minutes before</Text>

                        </View>
                    </View>

                    <View style={styling.signupView}>
                        <TouchableOpacity style={styling.signupOpacity} onPress={() => { props.navigation.navigate('Filter') }}>
                            <Text style={styling.signupText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default BookingDetails;