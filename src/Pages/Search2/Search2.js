import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsCancel from 'react-native-vector-icons/Entypo';

import { hp, wp } from '../../Global/Styles/Scalling';


const Search2 = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.mainContainer}>
                <View style={styling.searchContainer}>
                    <View style={styling.searchBar}>
                        <Icon name='search1' size={18} style={{ color: '#C8C7CC' }} />

                        <TextInput
                            placeholder='Enter Your Location'

                        />
                        <IconsCancel name='cross' size={18} style={{ color: '#C8C7CC', marginLeft: 130 }} />
                    </View>
                    <View style={styling.cancelView}>
                        <TouchableOpacity><Text style={styling.cancelTXT}>Cancel</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styling.innerView}>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <Text style={styling.cardheadTXT}>
                                    Mid Space Solution
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icons name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}>  0.31 mi away </Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <Text style={styling.cardheadTXT}>
                                    Quarto Workspace
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icons name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}>  1.23 mi away </Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <View style={styling.cardView}>

                        </View>
                        <View style={styling.cardTXTView}>

                            <View>
                                <Text style={styling.cardheadTXT}>
                                    Green Heritage Office
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icons name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}> 0.48 mi away </Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={styling.endView}>
                    <Text style={styling.recentLabel}>Recent</Text>

                </View>
                <View style={styling.endView}>
                    <Text style={styling.txtLabel}>Pacific Workplaces</Text>

                </View>
                <View style={styling.endView}>
                    <Text style={styling.txtLabel}>Flexible Office Space</Text>
                </View>
                <View style={styling.endView}>
                    <Text style={styling.txtLabel}>Pacific Workplaces Sunnyvale</Text>

                </View>


            </View>

        </SafeAreaView >
    )
}

export default Search2;