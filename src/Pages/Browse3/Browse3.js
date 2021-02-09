import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import IconSearch from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Browse3 = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icons name='map-marker-alt' color='red' size={18} />
                <View style={styling.headerinnerView}>
                    <Text style={styling.cityLabel}>Your location</Text>
                    <Text style={styling.cityTXT}> San Francisco, California</Text>
                </View>
                <View style={styling.headerIconView}>
                    <Icon.Button name='map' size={22} backgroundColor='white' color='black' />

                </View>

            </View>
            <View style={styling.mainContainer}>
                <View style={styling.searchBar}>
                    <IconSearch name='search1' size={18} style={{ color: '#C8C7CC' }} />

                    <TextInput
                        placeholder='Enter Your Location'

                    />
                </View>
                <View style={styling.allOpacityView}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styling.privateOpacity}>
                            <Text style={styling.opacityTXT}>Private OFfice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.meetingOpacity}>
                            <Text style={styling.opacityTXT}>Meeting Room</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.eventOpacity}>
                            <Text style={styling.opacityTXT}>
                                Event Space
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.privateOpacity}>
                            <Text style={styling.opacityTXT}>
                                Event Space
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>

        </SafeAreaView >
    )
}

export default Browse3;