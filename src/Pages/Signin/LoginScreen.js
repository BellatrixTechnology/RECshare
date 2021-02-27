import React, { Fragment, useState } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ScrollViewBase } from 'react-native';

const LoginScreen = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState('');
    const [passError, seterrPass] = useState('');
    const [nameError, seterrName] = useState('');

    const upload = () => {
        firebase.auth()
            .signInWithEmailAndPassword(Email, Password)
            .then((res) => {
                console.log(res)
                console.log('User logged-in successfully!')
                this.setState({
                    isLoading: false,
                    email: '',
                    password: ''
                })
                this.props.navigation.navigate('Dashboard')
            })
            .catch(error => this.setState({ errorMessage: error.message }))
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
                        />
                        <Input
                            placeholder='Password'
                            label='Password'
                            value={Password}
                            onChangeText={(Pass) => {
                                setPassword(Pass)
                            }}
                        />
                        <View style={styling.forgetView}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPassword')}>
                                <Text style={styling.opacityForgetTXT}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.signinView}>
                            <TouchableOpacity style={styling.signinOpacity} onPress={() => {
                                upload()
                                // , props.navigation.navigate('tabs')
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