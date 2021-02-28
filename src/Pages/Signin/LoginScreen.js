import React, { Fragment, useState } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const LoginScreen = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState('');
    const [passError, seterrPass] = useState('');
    const [nameError, seterrName] = useState('');

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
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <SafeAreaView backgroundColor='white'
            />
            <SafeAreaView style={styling.safeContainer} >
                <ScrollView contentContainerStyle={styling.mainContainer}>

                    <View style={styling.innerContainer}>
                        <View style={styling.welcomeHeader}>
                            <Text style={styling.welcomeLabel}>Welcome back</Text>
                        </View>
                        <View style={styling.signinHeader}>
                            <Text style={styling.siginlabel}>Sign in to continue</Text>
                        </View>
                    </View>
                    <View style={styling.formView}>
                        <Input
                            placeholder='Email'
                            label='Email'
                            value={Email}
                            onChangeText={(Email) => {
                                setEmail(Email)
                            }}
                            errorMessage={emailError}

                        />
                        <Input
                            placeholder='Password'
                            label='Password'
                            value={Password}
                            onChangeText={(Pass) => {
                                setPassword(Pass)
                            }}
                            errorMessage={passError}

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
                </ScrollView>

            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default LoginScreen;