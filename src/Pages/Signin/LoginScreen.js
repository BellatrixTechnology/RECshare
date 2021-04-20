import React, { Fragment, useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import InputF from '../../Component/InputField/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
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
    const user = useSelector((state) => state.Auth.user);
    const dispatch = useDispatch();
    console.log('asda', props)
    // useEffect(() => {
    //     const unsubscribe = props.navigation.addListener('focus', () => {
    //         get()
    //     });
    //     return () => {
    //         unsubscribe;
    //     };
    // }, [])
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
            .signInWithEmailAndPassword(Email, Password).then((user) => {
                let obj = {
                    Email: Email,
                    Password: Password,
                    auth: true
                }
                AsyncStorage.setItem('Login', JSON.stringify(obj))
                AsyncStorage.setItem('token', JSON.stringify(user.user.uid))
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
                                <Text style={styling.welcomeLabel}>Welcome</Text>
                                <Text style={styling.welcomeLabel}>back</Text>
                            </View>
                            <View style={styling.signinHeader}>
                                <Text style={styling.siginlabel}>Sign in to continue</Text>
                            </View>
                        </View>
                        <View style={styling.formView}>
                            <InputF
                                label='Email'
                                placeholder='Email'
                                onChange={(val) => {
                                    setEmail(val)
                                    console.log(val)
                                    {
                                        reg.test(val) ? seterrEmail(false) : seterrEmail(true)
                                    }
                                }}
                                value={Email}
                                errorEmail={emailError}
                            />
                            <InputF
                                label='Password'
                                placeholder='Password'
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
                                    <Text style={styling.opacityForgetTXT}>Forget Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styling.signinView}>
                                <TouchableOpacity style={styling.signinOpacity} onPress={() => {
                                    checkDetails()

                                }}>
                                    {!activity ? <Text style={styling.signinText}>Sign Up</Text> : <ActivityIndicator size='large' color="white" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styling.signupView}>
                            <Text style={styling.signupTXT}>Don't have an Account? </Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Signup') }}>
                                <Text style={styling.opacitysignupTXT}>Sign Up</Text>
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