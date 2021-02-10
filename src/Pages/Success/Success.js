import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/AntDesign';
import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { styling } from './styling';
const Success = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F2F2F2" translucent={false} />

            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <Icon name='checkcircle' size={20} color='#4CD964' size={40} />

                </View>
                <View style={styling.innerView}>
                    <Text style={styling.successTXT} >Success!</Text>
                    <Text style={styling.successLabel}>Thank you for choosing our service and trust our host to handle your workplace needs</Text>
                </View>
                <View style={styling.mainInnerContainer}>
                    <View style={styling.avatarView}>
                        <Avatar
                            rounded
                            size={65}
                            icon={{
                                name: 'user', type: IconTypes.AntDesign,
                            }}

                        />
                    </View>

                    <View style={styling.LabelView}>
                        <Text style={styling.headTXT}>
                            Kristina Clark
                        </Text>
                        <Text style={styling.labelTXT}>
                            Green Heritage Office
                      </Text>
                    </View>
                    <View style={styling.LabelView}>
                        <Text style={styling.headTXT}>
                            Monday, October 24
                        </Text>
                        <Text style={styling.labelTXT2}>
                            10:00 AM - 11:00 AM
                      </Text>
                    </View>
                    <View style={styling.LabelView}>
                        <Text style={styling.headTXT}>
                            San Francisco, California
                        </Text>
                        <Text style={styling.labelTXT2}>
                            0.31 mi away
                      </Text>
                    </View>

                </View>
                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity}>
                        <Text style={styling.signupText}>Check Details</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default Success;