import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';

const ForgetPassword = () => {
    return (
        <SafeAreaView style={styles.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
            <View style={styles.headView}>
                <Icons.Button name="left" style={styles.IconButton} color='black' size={30}>

                </Icons.Button>

                <Text style={styles.headForget}>Forget Password</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.labelView}>
                    <Text style={styles.labeltxt}>Enter your email and will send you instruction on how to reset it</Text>
                </View>

                <View style={styles.inputView}>
                    <Input
                        label='Email'
                        placeholder='Email'
                    />
                </View>
                <View style={styles.sendView}>
                    <TouchableOpacity style={styles.sendOpacity}>
                        <Text style={styles.sendText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 20,

    },
    headView: {
        height: '12%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    IconButton: {
        backgroundColor: 'white',
        color: 'black'
    },


    inputView: {
        width: '90%',
        height: '10%',
    },
    sendView: {
        // flex: 1,
        // position: 'relative',
        width: '100%',
        height: '15%',

        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    sendOpacity: {
        // position: 'absolute',
        width: '85%',
        height: 55,
        // marginLeft: 32,
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
        fontWeight: "700",


    },
    headForget: {
        color: 'black',
        fontSize: 17,
        marginLeft: '20%',
        fontWeight: 'bold',
        fontFamily: 'SFUIText-Heavy',

    },
    labelView: {
        width: '60%',
        height: '12%',
    },
    labeltxt: {
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'SFUIText-Heavy',


    },
    sendText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        fontFamily: 'SFUIText-Heavy',


    },


})
export default ForgetPassword;