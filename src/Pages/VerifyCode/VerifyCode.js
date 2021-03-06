import React, { Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import InputF from '../../Component/InputField/index';
const VerifyCode = ({ route }) => {
    const phone = route.params.Phone;
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    useEffect(() => {
        signInWithPhoneNumber()

    }, [])

    async function signInWithPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        setConfirm(confirmation);
    }
    async function confirmCode() {
        try {
            await confirm.confirm(code).then(() => {
                props.navigation.navigate('ChooseLanguage')
                console.log(code)
            })

        } catch (error) {
            console.log('Invalid code.');
            ToastAndroid.show("Invalid code.!", ToastAndroid.LONG);
        }
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.mainContainer}>
                    <View style={styling.headingView}>
                        <Text style={styling.headingTEXT}>Verifying </Text>
                        <Text style={styling.headingTEXT}>your number</Text>
                    </View>
                    <View style={styling.headingLabelView}>
                        <Text style={styling.headingLabelTEXT}>We’ve sent your verification code to {phone}</Text>
                    </View>

                    <View style={styling.codeView}>
                        <InputF
                            label="Enter Code"
                            placeholder='Code'
                            value={code}
                            onChange={text => setCode(text)}
                        />
                    </View>

                    <View style={styling.verifyView}>
                        <TouchableOpacity style={styling.verifyOpacity} onPress={() => { confirmCode() }}>
                            <Text style={styling.verifyText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.resendView}>
                        <TouchableOpacity onPress={() => {
                            signInWithPhoneNumber()

                        }}>
                            <Text style={styling.resentTxt} >Resend Code</Text>
                        </TouchableOpacity>

                        <Text style={styling.mintTxt}>1:20 mint left</Text>
                    </View>

                </View>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default VerifyCode;