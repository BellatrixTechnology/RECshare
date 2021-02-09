import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';
// import   {}
const ForgetPassword = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
            <View style={styling.headView}>
                <Icons.Button name="left" style={styling.headIcon} color='black' size={30}>

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
                    />
                </View>
                <View style={styling.sendView}>
                    <TouchableOpacity style={styling.sendOpacity}>
                        <Text style={styling.sendText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgetPassword;