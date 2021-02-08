import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.safecontainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

            <View style={styles.container}>
                <View style={styles.innercontainer}>
                    <View style={styles.welcomeHeader}>
                        <Text style={styles.label}>Welcome </Text>
                        <Text style={styles.label}>back</Text>
                    </View>
                    <View style={styles.signinHeader}>
                        <Text style={styles.siginlabel}>Sign in to continue</Text>
                    </View>
                </View>
                <View style={styles.formView}>
                    <Input
                        placeholder='Email'
                        label='Email'
                    // inputContainerStyle={{ padding: 0 }}
                    />
                    <Input
                        placeholder='Password'
                        label='Password'
                    />
                    <View style={styles.forgetView}>
                        <TouchableOpacity>
                            <Text style={styles.opacitysignuphead}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signinView}>
                        <TouchableOpacity style={styles.signinOpacity}>
                            <Text style={styles.signinText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.signupView}>
                    <Text style={styles.opacitysignuphead}>Don't have an Account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.opacitysignup}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safecontainer: {
        flex: 1
    },
    container: {
        // flex: 1,
        backgroundColor: 'white',

        height: '100%',
        width: '100%',
        padding: 20,

    },
    innercontainer: {

        height: '30%',
        justifyContent: 'flex-end',
    },
    welcomeHeader: {
        height: '45%',
        width: '100%',
    },
    signinHeader: {
        height: '15%',
        width: '70%',
        alignSelf: 'flex-start',

    },
    formView: {
        width: '105%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    forgetView: {

        height: '10%',
        width: '32%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',

    },
    signinView: {

        width: '100%',
        height: '30%',

        justifyContent: 'center',

    },
    signinOpacity: {
        width: '95%',
        height: 55,
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    signupView: {
        // flex: 1,
        height: '18%',
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    label: {
        fontSize: 40,
        fontFamily: 'SFUIText-Heavy',
        fontWeight: "bold",
        lineHeight: 47.5,


    },
    siginlabel: {
        fontFamily: 'SFUIText-Heavy',
        color: '#666666',
        fontSize: 17
    },
    signinText: {
        fontFamily: 'SFUIText-Heavy',
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        // lineHeight: 22,

    },
    opacitysignup: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'SFUIText-Heavy',

    },
    opacitysignuphead:
    {
        color: 'black',
        fontWeight: '600',
        fontSize: 17,
        fontFamily: 'SFUIText-Heavy',

    }

})
export default LoginScreen;