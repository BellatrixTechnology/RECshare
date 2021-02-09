import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const Browse2 = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <ScrollView >

                <View style={styling.mainContainer}>
                    <View style={styling.innerContainer}>
                        <View style={styling.labelView}>
                            <Text style={styling.labelTXT}>Will you plan to work with in </Text>
                        </View>
                        <View style={styling.cityView}>
                            <Text style={styling.cityTXT}>San Francisco? </Text>
                            <Icons name='angle-down' size={30} color='#FF2D55' />
                        </View>
                        <View style={styling.searchBar}>
                            <Icon name='search1' size={18} style={{ color: '#C8C7CC' }} />

                            <TextInput
                                placeholder='Enter Your Location'

                            />
                        </View>
                    </View>
                    <View style={styling.categoryView}>
                        <View >
                            <Text style={styling.CategoryTXT}>Categories</Text>
                        </View >
                        <View>
                            <TouchableOpacity style={styling.seeALLOpacity} >
                                <Text style={styling.seeALLTXT}>See All</Text>
                                <Icon name='right' size={10} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styling.mainCardView}>
                                <View style={styling.cardView}>
                                    <Icons name='building' color='white' size={50} />
                                </View>
                                <View style={styling.cardTXTView}>
                                    <Text style={styling.carHeading}>Private</Text>
                                    <Text style={styling.carLabel}>93 Spaces</Text>
                                </View>
                            </View>
                            <View style={styling.mainCardView}>
                                <View style={styling.cardView1}>
                                    <Icons name='people-carry' color='white' size={50} />
                                </View>
                                <View style={styling.cardTXTView}>
                                    <Text style={styling.carHeading}>Meeting</Text>
                                    <Text style={styling.carLabel}>70 Spaces</Text>
                                </View>
                            </View>
                            <View style={styling.mainCardView}>
                                <View style={styling.cardView2}>
                                    <Icons name='chalkboard-teacher' color='white' size={50} />
                                </View>
                                <View style={styling.cardTXTView}>
                                    <Text style={styling.carHeading}>Seminar</Text>
                                    <Text style={styling.carLabel}>90 Spaces</Text>
                                </View>
                            </View>
                            <View style={styling.mainCardView}>
                                <View style={styling.cardView2}>
                                    <Icons name='building' color='white' size={50} />
                                </View>
                                <View style={styling.cardTXTView}>
                                    <Text style={styling.carHeading}>Seminar</Text>
                                    <Text style={styling.carLabel}>93 Spaces</Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    <View style={styling.maininnerContainer}>
                        <View>
                            <Text style={styling.CategoryTXT}>
                                Nearby Spaces
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styling.seeALLOpacity} >
                                <Text style={styling.seeALLTXT}>See All</Text>
                                <Icon name='right' size={10} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styling.cardContainer}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styling.nearInnerView}>
                                <View style={styling.nearbyCard}>
                                    <Icon name='heart' size={20} color='red' />

                                </View>
                                <Text style={styling.CategoryTXT} >Green Heritage Office</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icons name='map-marker-alt' color='#666666' size={15} />
                                    <Text style={styling.carLabel}>  0.31 mi away 12 Guest</Text>
                                </View>
                            </View>
                            <View style={styling.nearbyCard}>

                            </View>
                        </ScrollView>
                    </View>

                    {/* <View>
                        <TouchableOpacity>
                            <Text>

                            </Text>
                        </TouchableOpacity>
                    </View> */}

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Browse2;