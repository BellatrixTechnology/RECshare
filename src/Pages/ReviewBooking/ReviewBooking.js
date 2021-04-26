import React, { Fragment, useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { I18n } from '../../../i18n/I18n';

const ReviewBooking = ({ route }) => {
    console.log(route.params.props)
    const Datee = route.params.data.Date
    const Time = route.params.data.Time
    const props = route.params.props;
    const Title = route.params.data.Title;
    const credit = route.params.data.credit;
    const type = route.params.data.type;
    const distance = route.params.data.distance;
    const address = route.params.data.address;
    const Image = route.params.data.Image;
    console.log(Image)
    async function SaveData() {
        console.log(auth)
        auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user)
                const id = firestore().collection('Booking').doc().id
                const userid = user.uid
                firestore().collection('Booking').doc(Title).collection('Bookings').doc(userid).set({
                    userid: userid,
                    name: user.displayName,
                    Space: Title,
                    Date: Datee,
                    Time: Time,
                    credit: credit,
                    type: type,
                    address: address,
                    Image: Image
                })
                firestore().collection('User').doc(userid).collection('Booking').doc(id).set({
                    userid: userid,
                    name: user.displayName,
                    Space: Title,
                    Date: Datee,
                    Time: Time,
                    credit: credit,
                    type: type,
                    address: address,
                    bookingid: id,
                    Image: Image
                })
                props.navigate('Success', {
                    name: user.displayName,
                    Title: Title,
                    Date: Datee,
                    Time: Time,
                    credit: credit,
                    type: type,
                    address: address,
                    props: props,
                    distance: distance,
                    bookID: id,
                })
            }
            else console.log('null')
        })

    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headerView}>
                    <Icon name='left' size={30} backgroundColor='white' color='black' onPress={() => { props.goBack() }} />
                </View>
                <View style={styling.headTXTView}>
                    <Text style={styling.headTXT}>{I18n.t('ReviewBooking')}</Text>
                </View>
                <View style={styling.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.cardView}>
                            <View style={styling.detailView}>
                                <Text style={styling.labelTXT}>{I18n.t('DateT')}</Text>
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
                                <Text style={styling.labelTXT}>{I18n.t('Workspace')}</Text>
                                <Text style={styling.mainTXT}>{Title}</Text>
                                <Text style={styling.lineTXT}>{type}</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Icon name='right' size={20} color='#666666' />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styling.cardView}>
                            <View style={styling.detailView}>
                                <Text style={styling.labelTXT}>{I18n.t('Address')}</Text>
                                <Text style={styling.mainTXT}>{address}</Text>
                                <Text style={styling.lineTXT}>{distance} mi {I18n.t('Away')}</Text>
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
                                    <Icon name='right' size={20} color='#666666' onPress={() => { props.navigate('Payment') }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styling.totalView}>
                            <View style={styling.totalLabelView}>
                                <Text style={styling.labelTXT}>{I18n.t('Price')}</Text>
                                <Text style={styling.mainTXT}>${credit}</Text>
                            </View>
                            <View style={styling.totalinnerView}>
                                <Text style={styling.lineTXT}>${credit}/{I18n.t('hour')}</Text>
                                <Text style={styling.rupeeTXT}>${credit}</Text>
                            </View>
                            <View style={styling.totalinnerView}>
                                <Text style={styling.lineTXT}>Total</Text>
                                <Text style={styling.lineTXT}>${credit}</Text>
                            </View>
                        </View>
                        <View style={styling.signupView}>
                            <TouchableOpacity style={styling.signupOpacity} onPress={() => {
                                SaveData()
                            }}>
                                <Text style={styling.signupText}>{I18n.t('Confirm')}</Text>
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