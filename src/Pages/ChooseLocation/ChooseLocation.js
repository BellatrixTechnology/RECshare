import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import IconMap from 'react-native-vector-icons/MaterialIcons'
import { styling } from './styling';
const ChooseLocation = () => {
    const [check, setcheck] = useState(false)
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headView}>
                <Icons.Button name="left" style={styling.headIcon} color='black' size={30}>

                </Icons.Button>

                <Text style={styling.headForget}>Your location</Text>
            </View>
            <View style={styling.mainContainer}>

                <View style={styling.searchBar}>
                    <Icons name='search1' size={18} style={{ color: '#C8C7CC' }} />

                    <TextInput
                        placeholder='Enter Your Location'

                    />
                </View>
                <View style={styling.locationView}>
                    <Icon name='map-marker-alt' size={50} color='#FF2D55' />
                </View>
                <View style={styling.floatingButton}>
                    <IconMap name='gps-fixed' size={50} color='white' />
                </View>

            </View>
        </SafeAreaView >
    )
}

export default ChooseLocation;