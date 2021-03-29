import React, { Fragment, useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { wp } from '../../Global/Styles/Scalling';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Payment = (props) => {
    const [CardNo, setCardNo] = useState('')
    const [holder, setHolder] = useState('')
    const [expire, setExpire] = useState('')
    const [cvc, setcvc] = useState('')

    async function adddata() {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                const id = firestore().collection('User').doc().id

                firestore().collection('User').doc(user.uid).collection('Payment').doc(id).set({
                    CardNo: CardNo,
                    holder: holder,
                    expire: expire,
                    cvc: cvc,
                    id: id
                }).then(() => {
                    props.navigation.goBack()
                })
            }
            else console.log('error')
        })
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >

                <View style={styling.headerView}>
                    <Icon.Button name='left' size={30} backgroundColor='white' color='black' onPress={() => { props.navigation.goBack() }} ></Icon.Button>
                </View>
                <View style={styling.headTXTView}>
                    <Text style={styling.headTXT}>Payment</Text>
                </View>

                <View style={styling.mainContainer}>
                    <ScrollView>

                        <View style={styling.cardContainer}>
                            <View style={styling.cardView}>
                                <View style={[styling.inputView, { borderBottomWidth: 0, width: wp(80) }]}>
                                    <Text style={[styling.cardTXT, { color: 'white' }]}> Card Number</Text>
                                    <Text style={[styling.valueTXT, { color: 'white' }]}>   {CardNo}</Text>
                                </View>
                                <View style={[styling.inputView, { borderBottomWidth: 0, width: wp(80) }]}>
                                    <Text style={[styling.cardTXT, { color: 'white' }]}>Card Holder</Text>
                                    <Text style={[styling.valueTXT, { color: 'white' }]}>   {CardNo}</Text>
                                </View>
                                <View style={[styling.inputView, { borderBottomWidth: 0, width: wp(80) }]}>
                                    <Text style={[styling.cardTXT, { color: 'white' }]}>Expires</Text>
                                    <Text style={[styling.valueTXT, { color: 'white' }]}>   {CardNo}</Text>
                                    <Text style={[styling.cardTXT, { color: 'white' }]}>CVC</Text>
                                    <Text style={[styling.valueTXT, { color: 'white' }]}>   {CardNo}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styling.inputView}>
                            <Text style={styling.cardTXT}> Card Number</Text>
                            <TextInput
                                style={styling.valueTXT}
                                placeholder='0909090990956'
                                maxLength={16}
                                keyboardType='number-pad'
                                onChangeText={(val) => {
                                    setCardNo(val)
                                }}
                                value={CardNo}
                            />

                        </View>
                        <View style={styling.inputView}>
                            <Text style={styling.cardTXT}>Card Holder</Text>
                            <TextInput
                                style={styling.valueTXT}
                                placeholder='Alpha'
                                onChangeText={(val) => {
                                    setHolder(val)
                                }}
                                value={holder}
                            />

                        </View>
                        <View style={styling.inputView}>
                            <Text style={styling.cardTXT}>Expires</Text>
                            <TextInput
                                style={[styling.valueTXT, { width: wp(20) }]}
                                placeholder='02-22'
                                maxLength={5}
                                keyboardType='number-pad'
                                onChangeText={(val) => {
                                    setExpire(val)
                                }}
                                value={expire}
                            />
                            <Text style={styling.cardTXT}>CVC</Text>
                            <TextInput
                                style={styling.valueTXT}
                                placeholder='222'
                                maxLength={3}
                                keyboardType='number-pad'
                                onChangeText={(val) => {
                                    setcvc(val)
                                }}
                                value={cvc}
                            />

                        </View>
                        <View style={styling.signupView}>
                            <TouchableOpacity style={styling.signupOpacity}
                                onPress={() => {
                                    if (CardNo.length == 16 && expire.length == 5 && holder != '' && cvc.length == 3) {
                                        adddata()
                                    }
                                }} >
                                <Text style={styling.signupText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>

            </SafeAreaView >

            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Payment;