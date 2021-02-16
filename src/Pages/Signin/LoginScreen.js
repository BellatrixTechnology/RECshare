import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
const LoginScreen = (props) => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

            <View style={styling.mainContainer}>
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
                    />
                    <Input
                        placeholder='Password'
                        label='Password'
                    />
                    <View style={styling.forgetView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPassword')}>
                            <Text style={styling.opacityForgetTXT}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.signinView}>
                        <TouchableOpacity style={styling.signinOpacity} onPress={() => { props.navigation.navigate('tabs') }}>
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
        </SafeAreaView>
    )
}

export default LoginScreen;