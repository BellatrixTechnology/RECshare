import React, { Fragment, useState } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import InputF from '../../Component/InputField/index';

const LoginScreen = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState(false);
    const [passError, seterrPass] = useState(false);

    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const upload = () => {
        auth()
            .signInWithEmailAndPassword(Email, Password)
            .then((res) => {
                console.log(res)
                console.log('User logged-in successfully!')
                props.navigation.navigate('tabs')
            })
            .catch(error => {
                seterrEmail('Enter Vaild Email')
                seterrPass('Enter Valid Password')
            })
    }
    const checkDetails = () => {
        if (Email == '') { seterrEmail('Enter Email') }
        if (Password == '') { seterrPass('Enter Password') }
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
                                        reg.test(Email) ? seterrEmail(false) : seterrEmail(true)
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
                                    <Text style={styling.signinText}>Sign In</Text>
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