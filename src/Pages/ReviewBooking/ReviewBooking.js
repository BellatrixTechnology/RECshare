import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { hp, wp } from '../../Global/Styles/Scalling';


const ReviewBooking = (props) => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon name='left' size={30} />
            </View>
            <View style={styling.headTXTView}>
                <Text style={styling.headTXT}>Review Booking</Text>
            </View>
            <View style={styling.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styling.cardView}>
                        <View style={styling.detailView}>
                            <Text style={styling.labelTXT}>Date & Time</Text>
                            <Text style={styling.mainTXT}>Monday, October 24</Text>
                            <Text style={styling.lineTXT}>10:00 AM - 11:00 AM</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name='right' size={20} color='#666666' />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styling.cardView}>
                        <View style={styling.detailView}>
                            <Text style={styling.labelTXT}>Workspace</Text>
                            <Text style={styling.mainTXT}>Green Heritage Office</Text>
                            <Text style={styling.lineTXT}>Private Office</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name='right' size={20} color='#666666' />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styling.cardView}>
                        <View style={styling.detailView}>
                            <Text style={styling.labelTXT}>Address</Text>
                            <Text style={styling.mainTXT}>San Francisco, California</Text>
                            <Text style={styling.lineTXT}>0.31 mi away</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name='right' size={20} color='#666666' />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styling.cardView}>
                        <View style={styling.appleView}>
                            <View style={styling.applePayView}>
                                <Icon name='apple1' />
                                <Text style={styling.mainTXT}> Pay</Text>
                            </View>
                            <Text style={styling.appleTXT}>Apple Pay</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name='right' size={20} color='#666666' />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styling.totalView}>
                        <View style={styling.totalLabelView}>
                            <Text style={styling.labelTXT}>Price</Text>
                            <Text style={styling.mainTXT}>$60</Text>
                        </View>
                        <View style={styling.totalinnerView}>
                            <Text style={styling.lineTXT}>$60/hour</Text>
                            <Text style={styling.rupeeTXT}>$60</Text>
                        </View>
                        <View style={styling.totalinnerView}>
                            <Text style={styling.lineTXT}>Total</Text>
                            <Text style={styling.lineTXT}>$60</Text>
                        </View>
                    </View>
                    <View style={styling.signupView}>
                        <TouchableOpacity style={styling.signupOpacity} onPress={() => props.navigation.navigate('Scheduele')}>
                            <Text style={styling.signupText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>

        </SafeAreaView >
    )
}

export default ReviewBooking;