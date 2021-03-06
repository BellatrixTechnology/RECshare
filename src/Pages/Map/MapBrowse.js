import React, { useState, Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import IconMap from 'react-native-vector-icons/MaterialIcons'
import { styling } from './styling';
const MapBrowse = ({ props }) => {
    const [check, setcheck] = useState(false)
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />

            <SafeAreaView style={{ backgroundColor: 'white' }} />

            <SafeAreaView style={styling.safeContainer} >

                <View style={styling.headView}>
                    <Icons.Button name="left" style={styling.headIcon} color='black' size={28} onPress={() => { props.navigation.navigate('LoginScreen') }}>

                    </Icons.Button>

                    <Icon name='filter' style={styling.headIcon} color='black' size={20} />
                </View>
                <View style={styling.mainContainer}>


                    <View style={styling.locationView}>
                        <Icon name='map-marker-alt' size={50} color='#FF2D55' />
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={{ justifyContent: 'flex-end' }}>
                        <View style={styling.floatingView}>

                            <View style={styling.floatingInnerView}>

                            </View>
                            <View style={styling.txtView} >
                                <Text style={styling.cardheadTXT}>
                                    Mindspace Solution
                        </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}> 0.48 mi away </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styling.floatingView}>

                            <View style={styling.floatingInnerView}>

                            </View>
                            <View style={styling.txtView} >
                                <Text style={styling.cardheadTXT}>
                                    Mindspace Solution
                        </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}>   0.48 mi away </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default MapBrowse;