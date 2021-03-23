import React, { Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';



const ReviewBooking = ({ route }) => {
    console.log(route)
    const Datee = route.params.data.Date
    const Time = route.params.data.Time

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headerView}>
                    <Icon.Button name='left' size={30} backgroundColor='white' color='black' onPress={() => { props.navigation.navigate('SpaceDetail') }}></Icon.Button>
                </View>
                <View style={styling.headTXTView}>
                    <Text style={styling.headTXT}>Review Booking</Text>
                </View>
                <View style={styling.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.cardView}>
                            <View style={styling.detailView}>
                                <Text style={styling.labelTXT}>Date & Time</Text>
                                <Text style={styling.mainTXT}>{Datee}</Text>
                                <Text style={styling.lineTXT}>{Time}</Text>
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
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default ReviewBooking;