import React, { Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ToastAndroid, ActivityIndicator } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import InputF from '../../Component/InputField/index';
import AsyncStorage from '@react-native-community/async-storage';
import CountDown from 'react-native-countdown-component';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import { I18n } from '../../../i18n/I18n';

const VerifyCode = ({ route }) => {
    const phone = route.params.Phone;
    const props = route.params.props;
    const email = route.params.Email;
    const Password = route.params.Password
    const Names = route.params.Names
    const [isloading, setisloading] = useState(false)
    console.log(route.params.props)
    const isLogin = useSelector(state => state.Auth.isLogin)
    const dispatch = useDispatch();

    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [disabled, setdisabled] = useState(true)
    const [id, setID] = useState(60 + 20)
    useEffect(() => {
        signInWithPhoneNumber()

    }, [])
    async function signInWithPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        console.log(confirmation)
        setConfirm(confirmation);
    }
    async function confirmCode() {
        try {
            // console.log(confirm.confirm(code))
            const credentials = auth.PhoneAuthProvider.credential(confirm.verificationId, code)
            console.log(credentials)
            // await confirm.confirm(code).then(async () => {
            let obj = {
                Email: email,
                Password: Password,
                auth: true
            }
            await auth().createUserWithEmailAndPassword(email, Password)
                .then((userCredentials) => {

                    userCredentials.user.updateProfile({
                        displayName: Names,

                    })
                    // AsyncStorage.setItem('token', userCredentials.user.uid)
                    // AsyncStorage.setItem('Login', JSON.stringify(obj))
                    // props.navigation.navigate('ChooseLanguage', { login: userCredentials.user.uid })
                }).then(async () => {
                    await firestore().collection('User').doc(userData.user.uid).set({
                        email: email,
                        phone: phone
                    })
                    let userData = await auth().currentUser.linkWithCredential(credentials)
                    AsyncStorage.setItem('token', userData.user.uid)
                    AsyncStorage.setItem('Login', JSON.stringify(obj))
                    setisloading(false)
                    props.navigation.navigate('ChooseLanguage', { login: userData.user.uid })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        {
                            ToastAndroid.show(error.code, ToastAndroid.LONG)
                            setisloading(false)

                        }
                    }
                    else if (error.code === 'auth/invalid-email') {
                        {
                            ToastAndroid.show(error.code, ToastAndroid.LONG)
                            setisloading(false)

                        }
                    }
                    else {
                        ToastAndroid.show(error, ToastAndroid.LONG)
                        setisloading(false)
                    }
                })

        }
        catch (error) {
            console.log(error);
            ToastAndroid.show("Invalid code.!", ToastAndroid.LONG);
            setisloading(false)

        }
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.mainContainer}>
                    <View style={styling.headingView}>
                        <Text style={styling.headingTEXT}>{I18n.t('Verifying')} </Text>
                        <Text style={styling.headingTEXT}>{I18n.t('yourNumber')} </Text>
                    </View>
                    <View style={styling.headingLabelView}>
                        <Text style={styling.headingLabelTEXT}>{I18n.t('Weverificationcode')} {phone}</Text>
                    </View>

                    <View style={styling.codeView}>
                        <InputF
                            label={I18n.t('EnterCode')}
                            placeholder='Code'
                            value={code}
                            onChange={text => setCode(text)}
                        />
                    </View>

                    <View style={styling.verifyView}>
                        <TouchableOpacity style={styling.verifyOpacity} disabled={isloading} onPress={() => {
                            setisloading(true)

                            confirmCode()
                        }}>
                            {!isloading ? <Text style={styling.verifyText}>{I18n.t('Verfiy')}</Text> :
                                <ActivityIndicator size='small' color='white' />}
                        </TouchableOpacity>
                    </View>
                    <View style={styling.resendView}>
                        <TouchableOpacity disabled={disabled} onPress={() => {
                            signInWithPhoneNumber()
                            setdisabled(true)
                            setID(60 + 10)
                        }}>

                            <Text style={styling.resentTxt} >{I18n.t('ResendCode')}</Text>

                        </TouchableOpacity>

                        <View>
                            <CountDown
                                id
                                until={Number(id)}
                                onFinish={() => setdisabled(false)}
                                onPress={() => alert()}
                                size={20}
                                timeToShow={['M', 'S']}
                                timeLabels={{ m: null, s: null }}
                                digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF2D55' }}

                            />
                        </View>
                    </View>

                </View>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default VerifyCode;