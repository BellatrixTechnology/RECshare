import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';

const VerifyNumber = () => {
    return (
        <SafeAreaView style={styles.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={false} />

            <View style={styles.containerView}>

                <View style={styles.headerView}>
                    <Icons name='map-marker-alt' size={70} color='#FF2D55' />
                </View>

                <View style={styles.greetingView}>
                    <Text style={styles.greetingLabel}>Hello, nice to meet you!</Text>
                </View>
                <View style={styles.labelView}>
                    <Text style={styles.labeltxt}>Set your location to start find workspace around you</Text>
                </View>

                <View style={styles.sendOpacityView}>
                    <TouchableOpacity style={styles.sendOpacity}>
                        <Text style={styles.sendopacityText}>Send</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.notetxtView}>
                    <Text style={styles.labeltxtnote} >We only access your location while you are using this incredible app</Text>
                </View>
                <View style={styles.loctionView}>
                    <TouchableOpacity >
                        <Text style={styles.opacitysignup}>or set your location manually</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    containerView: {

        backgroundColor: 'white',

        height: '100%',
        width: '100%',
        padding: 30,


    },
    headerView: {
        height: '30%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
    },

    notetxtView: {
        width: '80%',
        height: '10%',
        flexDirection: 'row',
        // alignSelf: 'center',
        alignItems: 'center'
    },
    sendOpacityView: {
        // flex: 1,
        // position: 'relative',
        width: '100%',
        height: '10%',
        // padding: 10,
        // alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
        // alignSelf: 'flex-end',
        // alignContent: 'flex-end',
        // marginBottom: 10
    },
    sendOpacity: {
        // position: 'absolute',
        width: '100%',
        height: 55,
        // marginLeft: 32,
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    loctionView: {
        // flex: 1,
        height: '10%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',

    },
    greetingLabel: {
        fontSize: 40,
        fontWeight: "700",
        lineHeight: 47.5,

        fontFamily: 'SFUIText-Heavy',

    },

    labelView: {
        width: '80%',
        height: '10%',
    },
    labeltxt: {
        fontSize: 17,
        fontWeight: '400',
        color: '#666666',
        fontFamily: 'SFUIText-Heavy',


    },
    labeltxtnote: {
        fontSize: 13,
        fontWeight: '400',
        color: '#666666',
        fontFamily: 'SFUIText-Heavy',

    },

    sendopacityText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'SFUIText-Heavy',

    },
    opacitysignup: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'SFUIText-Heavy',

        // lineHeight: 22,
    },


})
export default VerifyNumber;