import React, { Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';


const Payment = (props) => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headerView}>
                    <Icon.Button name='left' size={30} backgroundColor='white' color='black' onPress={() => { props.navigation.navigate('Filter') }} ></Icon.Button>
                </View>
                <View style={styling.headTXTView}>
                    <Text style={styling.headTXT}>Payment</Text>
                </View>
                <View style={styling.mainContainer}>


                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>

                    </View>

                    <View style={styling.inputView}>
                        <Text style={styling.cardTXT}> Card Number</Text>
                        <TextInput
                            style={styling.valueTXT}
                            value='0909090990956'
                        />

                    </View>
                    <View style={styling.inputView}>
                        <Text style={styling.cardTXT}>Card Holder</Text>
                        <TextInput
                            style={styling.valueTXT}
                            value='Alpha   '
                        />

                    </View>
                    <View style={styling.inputView}>
                        <Text style={styling.cardTXT}>Expires</Text>
                        <TextInput
                            style={styling.valueTXT}

                            value='2-22'
                        />
                        <Text style={styling.cardTXT}>CVC</Text>
                        <TextInput
                            style={styling.valueTXT}

                            value='2-22  '
                        />

                    </View>
                    <View style={styling.signupView}>
                        <TouchableOpacity style={styling.signupOpacity}
                            onPress={() => {
                                props.navigation.navigate('Chat')
                            }} >
                            <Text style={styling.signupText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Payment;