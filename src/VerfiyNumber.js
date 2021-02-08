import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';

const VerifyNumber = () => {
    return (
        <SafeAreaView style={styles.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={false} />

            <View style={styles.mainContainer}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>Verifying    your number</Text>
                </View>
                <View style={styles.headingView}>
                    <Text style={styles.labeltxt}>We’ve sent your verification code to +32 8304 5321</Text>
                </View>

                <View style={styles.codeView}>
                    <Input
                        label="Enter Code"
                        placeholder='Code'
                    />
                </View>

                <View style={styles.sendView}>
                    <TouchableOpacity style={styles.sendOpacity}>
                        <Text style={styles.sendText}>Send</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.resendView}>
                    <Text style={styles.labeltxt} >Resend Code</Text>
                    <Text style={styles.labelmint}>1:20 mint left</Text>
                </View>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        padding: 30,

    },
    headingView: {
        height: '15%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',

    },

    codeView: {
        width: '95%',
        height: '10%',
    },
    resendView: {
        width: '90%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center'
    },


    sendView: {

        width: '100%',
        height: '15%',

        justifyContent: 'flex-end',

    },
    sendOpacity: {

        width: '95%',
        height: 55,
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    label: {
        fontFamily: 'SFUIText-Heavy',
        fontSize: 40,
        fontWeight: "700",
        lineHeight: 47.5,


    },

    labelView: {
        width: '60%',
        height: '16%',
    },
    labeltxt: {
        fontFamily: 'SFUIText-Heavy',

        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center'

    },
    labelmint: {
        fontFamily: 'SFUIText-Heavy',

        fontSize: 17,
        fontWeight: '400',
        color: '#8A8A8F'
    },
    sendText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        // lineHeight: 22,

    },


})
export default VerifyNumber;