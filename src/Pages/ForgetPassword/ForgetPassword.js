import React, { useState } from 'react';
import { View, ToastAndroid, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import { I18n } from '../../../i18n/I18n';

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

                <Text style={styling.headForget}>{I18n.t('ForgotPassword')}</Text>
            </View>
            <View style={styling.mainContainer}>
                <View style={styling.labelView}>
                    <Text style={styling.labeltxt}>{I18n.t('Enteryouremailandwillsendyouintruction')}</Text>
                </View>

                <View style={styling.inputView}>
                    <Input
                        label={I18n.t('Email')}
                        placeholder={I18n.t('Email')}
                        value={Email}
                        onChangeText={(Email) => {
                            setEmail(Email)
                        }}
                        errorMessage={emailError}

                    />
                </View>
                <View style={styling.sendView}>
                    <TouchableOpacity style={styling.sendOpacity} onPress={() => check()}>
                        <Text style={styling.sendText}>{I18n.t('Send')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgetPassword;