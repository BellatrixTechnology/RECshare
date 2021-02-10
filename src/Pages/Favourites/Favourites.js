import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { hp, wp } from '../../Global/Styles/Scalling';


const Favourites = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon name='left' size={30} />
            </View>
            <View style={styling.headTXTView}>
                <Text style={styling.headTXT}>Favourites</Text>
            </View>
            <View style={styling.mainContainer}>
                <View style={styling.opacityView}>
                    <TouchableOpacity style={styling.buttonOpacity}>
                        <Icons name='swap-vertical-outline' size={20} />
                        <Text> Sort</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styling.buttonOpacity}>
                        <Icon name='filter' style={styling.headIcon} color='black' size={20} />
                        <Text >Filter</Text>
                    </TouchableOpacity>
                </View>

                <View style={styling.cardContainer}>
                    <View >
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.txtView} >
                            <Text style={styling.cardheadTXT}>
                                Mindspace Solution
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconFont name='map-marker-alt' color='#666666' size={16} />
                                <Text style={styling.cardheadLabel}>   0.48 mi away </Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.txtView} >
                            <Text style={styling.cardheadTXT}>
                                Quarto Workspace
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconFont name='map-marker-alt' color='#666666' size={16} />
                                <Text style={styling.cardheadLabel}>   0.48 mi away </Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styling.cardContainer}>
                    <View >
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.txtView} >
                            <Text style={styling.cardheadTXT}>
                                Mindspace Solution
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconFont name='map-marker-alt' color='#666666' size={16} />
                                <Text style={styling.cardheadLabel}>   0.48 mi away </Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.txtView} >
                            <Text style={styling.cardheadTXT}>
                                Quarto Workspace
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconFont name='map-marker-alt' color='#666666' size={16} />
                                <Text style={styling.cardheadLabel}>   0.48 mi away </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView >
    )
}

export default Favourites;