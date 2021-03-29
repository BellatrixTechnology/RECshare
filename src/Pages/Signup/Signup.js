import React, { useState, Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import PhoneInput from 'react-native-phone-input';
import { wp, hp } from '../../Global/Styles/Scalling';
import InputF from '../../Component/InputField/index';

const Signup = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState(false);
    const [passError, seterrPass] = useState(false);
    const [nameError, seterrName] = useState(false);
    const [phoneError, seterrPhone] = useState(false);
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const Signin = () => {
        auth()
            .createUserWithEmailAndPassword(Email, Password)
            .then((userCredentials) => {
                userCredentials.user.updateProfile({
                    displayName: Names,

                })
                props.navigation.navigate('VerfiyCode', { Phone: phone, props: props, Email: Email, Password: Password })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    {
                        seterrEmail('Email already registered')
                        seterrName('')
                        seterrPass('')
                    }
                }
                if (error.code === 'auth/invalid-email') {
                    {
                        seterrEmail('Enter valid email')
                    }
                }
                console.error(error);
            });
    }
    const checkField = () => {
        if (Email == '') { seterrEmail('Enter Email') }
        if (Password == '') { seterrPass('Enter Password') }
        if (Names == '') { seterrName('Enter Name') }
        if (phone == '') { seterrPhone('true') }
        if (Email != '' && Password != '' && Names != '' && phone != '') {
            Signin()
        }
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />
            <SafeAreaView style={styling.safeContainer} >
                <ScrollView>

                    <View style={styling.mainContainer}>

                        <View style={styling.innerContainer}>
                            <View style={styling.headerView}>

                                <View style={styling.welcomeView}>
                                    <Text style={styling.welcomeLabel}>Welcome </Text>
                                    <Text style={styling.welcomeLabel}>user</Text>
                                </View>
                                <View style={styling.signupHeader}>
                                    <Text style={styling.siguplabel}>Sign up to join</Text>
                                </View>
                            </View>
                            <View style={styling.avatarView}>
                            </View>
                        </View>
                        <View style={styling.formView}>
                            <InputF
                                label='Name'
                                placeholder='Joe Doe'
                                onChange={(val) => {
                                    setName(val)
                                    console.log(val)
                                    if (val == '') {
                                        seterrName(true)
                                    }
                                    else seterrName(false)
                                }}
                                value={Names}
                                errName={nameError}
                            />

                            <InputF
                                label='Email'
                                placeholder='abc@gmail.com'
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
                            <Text style={styling.inputLabel}>Phone Number</Text>

                            <PhoneInput
                                style={{
                                    width: wp(85), height: hp(8), borderBottomWidth: 0.5, borderColor: 'grey'
                                    , alignSelf: 'center'
                                }}
                                onChangePhoneNumber={(val) => setPhone(val)}
                            />
                            {phoneError && <Text style={{
                                color: 'red',
                                marginTop: hp(0.3),
                                fontSize: wp(3), marginHorizontal: wp(4)
                            }}>Enter Valid Number</Text>}
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
                        </View>
                        <View style={styling.checkView}>
                            <Icons name='check-circle' size={20}
                                onPress={() => {
                                    if (check == false) {
                                        setcheck(true)
                                    }
                                    else setcheck(false)
                                }}
                                color={check ? '#4CD964' : 'black'}
                            />
                            <Text style={styling.agreeTXT}>  I agree to the</Text>
                            <TouchableOpacity>
                                <Text style={styling.termsTXT}> Terms and Condition</Text>

                            </TouchableOpacity>
                        </View>
                        <View style={styling.signupView}>
                            <TouchableOpacity style={styling.signupOpacity} onPress={() => {
                                checkField()
                            }}>
                                <Text style={styling.signupText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.signinView}>
                            <Text style={styling.signinTXT}>Have an account? </Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('LoginScreen') }}>
                                <Text style={styling.opacitysigninTXT}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Signup;