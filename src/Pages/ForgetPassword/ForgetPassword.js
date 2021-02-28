import React, { useState } from 'react';
import { View, ToastAndroid, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';

const ForgetPassword = (props) => {
    const [Email, setEmail] = useState('');

    const [emailError, seterrEmail] = useState('');

    const check = () => {
        if (Email == '') { seterrEmail('Enter Email') }
        if (Email != '') {
            upload()
        }
    }
    const upload = () => {
        auth().sendPasswordResetEmail(Email)
        ToastAndroid.show(
            "Check your email",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
        props.navigation.navigate('LoginScreen')
    }
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={false} />
            <View style={styling.headView}>
                <Icons.Button name="left" style={styling.headIcon} color='black' size={30} onPress={() => props.navigation.navigate('LoginScreen')}>

                </Icons.Button>

                <Text style={styling.headForget}>Forget Password</Text>
            </View>
            <View style={styling.mainContainer}>
                <View style={styling.labelView}>
                    <Text style={styling.labeltxt}>Enter your email and will send you instruction on how to reset it</Text>
                </View>

                <View style={styling.inputView}>
                    <Input
                        label='Email'
                        placeholder='Email'
                        value={Email}
                        onChangeText={(Email) => {
                            setEmail(Email)
                        }}
                        errorMessage={emailError}

                    />
                </View>
                <View style={styling.sendView}>
                    <TouchableOpacity style={styling.sendOpacity} onPress={() => check()}>
                        <Text style={styling.sendText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgetPassword;