import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { styling } from './styling';
const VerifyNumber = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={false} />

            <View style={styling.containerView}>

                <View style={styling.headerView}>
                    <Icons name='map-marker-alt' size={70} color='#FF2D55' />
                </View>

                <View style={styling.greetingView}>
                    <Text style={styling.greetingTXT}>Hello, nice to meet you!</Text>
                </View>
                <View style={styling.locationNoteView}>
                    <Text style={styling.locationNoteTXT}>Set your location to start find workspace around you</Text>
                </View>

                <View style={styling.sendOpacityView}>
                    <TouchableOpacity style={styling.sendOpacity}>
                        <Text style={styling.sendopacityText}>Send</Text>
                    </TouchableOpacity>
                </View>
                <View style={styling.noteView}>
                    <Text style={styling.noteTXT} >We only access your location while you are using this incredible app</Text>
                </View>
                <View style={styling.setloctionView}>
                    <TouchableOpacity >
                        <Text style={styling.setloctionTXT}>or set your location manually</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default VerifyNumber;