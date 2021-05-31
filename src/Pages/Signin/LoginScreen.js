import React, { Fragment, useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import InputF from '../../Component/InputField/index';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { select, login } from '../../Redux/Actions/Auth';
import { I18n, switchLanguage } from '../../../i18n/I18n';
// import { login } from '../../Redux/Actions/Auth';
const LoginScreen = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState(false);
    const [passError, seterrPass] = useState(false);
    const [activity, setactivity] = useState(false)
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [data, setData] = useState(false)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     const unsubscribe = props.navigation.addListener('focus', () => {
    //         get()
    //     });
    //     return () => {
    //         unsubscribe;
    //     };
    // }, [])
    // function get() {
    //     switchLanguage(lg)

    // }
    // async function get() {
    //     try {
    //         let Login = await AsyncStorage.getItem('Login');
    //         let parsed1 = JSON.parse(Login);
    //         setData(parsed1.auth)
    //         console.log(parsed1)
    //         if (parsed1.auth) {
    //             props.navigation.navigate('HomeScreen')
    //         }
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    const upload = () => {
        auth()
            .signInWithEmailAndPassword(Email, Password).then(async (user) => {
                let obj = {
                    Email: Email,
                    Password: Password,
                    auth: true
                }
                let temp
                await firestore().collection('User').doc(user.user.uid).get().then(function (doc) {
                    doc.data()
                    temp = doc.data()
                })
                let lang = temp.Language
                AsyncStorage.setItem('Langauge', lang)
                switchLanguage(lang)
                dispatch(select({ Types: lang }))

                AsyncStorage.setItem('Login', JSON.stringify(obj))
                AsyncStorage.setItem('token', user.user.uid)
            })
            .then((res) => {
                console.log(res)
                setactivity(false)
                dispatch(login({ userName: Email }))
            })
            .catch(error => {
                console.log(error)
                seterrEmail('Enter Vaild Email')
                setactivity(false)
                seterrPass('Enter Valid Password')
            })
    }
    const checkDetails = () => {
        setactivity(true)
        if (Email == '') {
            seterrEmail('Enter Email')
            setactivity(false)
        }
        if (Password == '') {
            seterrPass('Enter Password')
            setactivity(false)

        }
        if (Email != '' && Password != '') {
            upload()
        }
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white'
            />
            <SafeAreaView style={styling.safeContainer} >
                <ScrollView>

                    <View style={styling.mainContainer}>
                        <View style={styling.innerContainer}>
                            <View style={styling.welcomeHeader}>
                                <Text style={styling.welcomeLabel}>{I18n.t('Welcome')}</Text>
                                <Text style={styling.welcomeLabel}>{I18n.t('back')}</Text>
                            </View>
                            <View style={styling.signinHeader}>
                                <Text style={styling.siginlabel}>{I18n.t('SigninContinue')}</Text>
                            </View>
                        </View>
                        <View style={styling.formView}>
                            <InputF
                                label={I18n.t('Email')}
                                placeholder={I18n.t('Email')}
                                onChange={(val) => {
                                    setEmail(val)
                                    console.log(val.trim())
                                    {
                                        reg.test(val.trim()) ? seterrEmail(false) : seterrEmail(true)
                                    }
                                }}
                                value={Email}
                                errorEmail={emailError}
                            />
                            <InputF
                                label={I18n.t('Password')}
                                placeholder={I18n.t('Password')}
                                onChange={(val) => {
                                    setPassword(val)
                                    console.log(val)
                                    if (val == '') {
                                        seterrPass(true)
                                    }
                                    else seterrPass(false)
                                }}
                                value={Password}
                                errName={passError}
                                secureTextEntry

                            />
                            <View style={styling.forgetView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPassword')}>
                                    <Text style={styling.opacityForgetTXT}>{I18n.t('ForgotPassword')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styling.signinView}>
                                <TouchableOpacity style={styling.signinOpacity} onPress={() => {
                                    checkDetails()

                                }}>
                                    {!activity ? <Text style={styling.signinText}>{I18n.t('SignIn')}</Text> : <ActivityIndicator size='large' color="white" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styling.signupView}>
                            <Text style={styling.signupTXT}>{I18n.t('Donthaveanaccount?')} </Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Signup') }}>
                                <Text style={styling.opacitysignupTXT}>{I18n.t('SignUp')}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default LoginScreen;