import React, { useState, Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';


const Signup = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState('');
    const [passError, seterrPass] = useState('');
    const [nameError, seterrName] = useState('');



    const Signin = () => {
        auth()
            .createUserWithEmailAndPassword(Email, Password)
            .then(() => {
                props.navigation.navigate('VerfiyCode')
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
                        seterrEmail('invalid email')
                    }
                }

                console.error(error);
            });
    }

    // Handle the button press
    // async function signInWithPhoneNumber(phone) {
    //     const confirmation = await auth().signInWithPhoneNumber(phone);
    //     setConfirm(confirmation);
    //     console.log('hellowiorldncnakfjkdjf kaskasjdk ', confirmation)
    // }


    // Handle confirm code button press
    // async function confirmCode() {
    //     try {
    //         const credential = auth.PhoneAuthProvider.credential(
    //             confirm.verificationId,
    //             code,
    //         );
    //         let userData = await auth().currentUser.linkWithCredential(credential);
    //         setUser(userData.user);
    //     } catch (error) {
    //         if (error.code == 'auth/invalid-verification-code') {
    //             console.log('Invalid code.');
    //         } else {
    //             console.log('Account linking error');
    //         }
    //     }
    // }
    const checkField = () => {
        if (Email == '') { seterrEmail('Enter Email') }
        if (Password == '') { seterrPass('Enter Password') }
        if (Names == '') { seterrName('Enter Name') }

        if (Email != '' && Password != '' && Names != '') {
            Signin()

        }
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <SafeAreaView backgroundColor='white' />
            <SafeAreaView style={styling.safeContainer} >
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
                <ScrollView>

                    <View style={styling.mainContainer}>
                        <View style={styling.innerContainer}>
                            <View style={styling.headerView}>

                                <View style={styling.welcomeView}>
                                    <Text style={styling.welcomeLabel}>Welcome user</Text>
                                </View>
                                <View style={styling.signupHeader}>
                                    <Text style={styling.siguplabel}>Sign up to join</Text>
                                </View>
                            </View>
                            <View style={styling.avatarView}>
                                {/* <Avatar
                                rounded
                                showEditButton
                                size={86}
                                icon={{
                                    name: 'user', type: IconTypes.AntDesign,
                                }}

                                editButton={{
                                    name: 'pluscircle', type: IconTypes.AntDesign, color: '#4CD964', size: 30
                                }}

                            /> */}
                            </View>
                        </View>
                        <View style={styling.formView}>
                            <Input
                                label='Name'
                                placeholder='Joe Doe'
                                value={Names}
                                onChangeText={(val) => {
                                    setName(val)
                                }}
                                errorMessage={nameError}
                            />
                            <Input
                                label='Email'
                                placeholder='abc@gmail.com'
                                value={Email}
                                onChangeText={(Email) => {
                                    setEmail(Email)
                                }}
                                errorMessage={emailError}

                            />
                            <Input
                                label="Password"
                                placeholder='Password'
                                value='0000000000'
                                secureTextEntry
                                value={Password}
                                onChangeText={(Pass) => {
                                    setPassword(Pass)
                                }}
                                errorMessage={passError}

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
                                // 

                                // props.navigation.navigate('VerfiyCode')
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