import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
const VerifyCode = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={false} />

            <View style={styling.mainContainer}>
                <View style={styling.headingView}>
                    <Text style={styling.headingTEXT}>Verifying           your number</Text>
                </View>
                <View style={styling.headingLabelView}>
                    <Text style={styling.headingLabelTEXT}>We’ve sent your verification code to +32 8304 5321</Text>
                </View>

                <View style={styling.codeView}>
                    <Input
                        label="Enter Code"
                        placeholder='Code'
                    />
                </View>

                <View style={styling.verifyView}>
                    <TouchableOpacity style={styling.verifyOpacity}>
                        <Text style={styling.verifyText}>Verify</Text>
                    </TouchableOpacity>
                </View>
                <View style={styling.resendView}>
                    <TouchableOpacity>
                        <Text style={styling.resentTxt} >Resend Code</Text>
                    </TouchableOpacity>

                    <Text style={styling.mintTxt}>1:20 mint left</Text>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default VerifyCode;