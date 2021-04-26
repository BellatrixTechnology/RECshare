import React, { Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import InputF from '../../Component/InputField/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CountDown from 'react-native-countdown-component';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import { I18n } from '../../../i18n/I18n';

const VerifyCode = ({ route }) => {
    const phone = route.params.Phone;
    const props = route.params.props;
    const email = route.params.Email;
    const Password = route.params.Password
    const uid = route.params.uid
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
            await confirm.confirm(code).then(async () => {
                let obj = {
                    Email: email,
                    Password: Password,
                    auth: true
                }
                auth()
                    .signInWithEmailAndPassword(email, Password)
                AsyncStorage.setItem('Login', JSON.stringify(obj))
                let Login = await AsyncStorage.getItem('token');

                dispatch(login({ userName: Login }))


            })

        }
        catch (error) {
            console.log(error);
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
                        <TouchableOpacity style={styling.verifyOpacity} onPress={() => { confirmCode() }}>
                            <Text style={styling.verifyText}>{I18n.t('Verfiy')}</Text>
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