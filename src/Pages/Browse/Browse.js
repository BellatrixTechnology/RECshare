import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import { hp } from '../../Global/Styles/Scalling';
const Browse = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <ScrollView >
                <ImageBackground source={require('./assets/sample.jpg')} style={styling.innerContainer}>
                    <View style={styling.imageView}>
                        <Text style={styling.workspaceTEXT}> Find workspaces</Text>
                    </View>
                    <View style={styling.imageView2}>
                        <Text style={styling.workspaceLabel}>Book from thousands of unique work and meeting spaces</Text>
                    </View>
                    <TouchableOpacity style={styling.discoverOpacity}>
                        <Text style={styling.discoverTXT}>Discover workspaces</Text>
                        <Icon name='right' size={20} color='white' />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styling.mainContainer}>
                    <View style={styling.maininnerContainer}>
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
                            <View style={styling.cardView}>
                                <Text style={styling.cardTXT}>
                                    Private
                                </Text>
                                <Text style={styling.cardlabel}>
                                    348 workspaces
                                </Text>
                            </View>
                            <View style={styling.cardView}>
                                <Text style={styling.cardTXT}>
                                    Meeting
                                </Text>
                                <Text style={styling.cardlabel}>
                                    748 workspaces
                                </Text>
                            </View>
                            <View style={styling.cardView}>
                                <Text style={styling.cardTXT}>
                                    Meeting
                                </Text>
                                <Text style={styling.cardlabel}>
                                    748 workspaces
                                </Text>
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
                    <View style={styling.cardContainer2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styling.innerCardView} >
                                <View style={styling.cardView2}>
                                    <Icon name='heart' size={20} color='red' />

                                </View>
                                <View>
                                    <Text style={styling.card2headTXT}>
                                        Mid Space Solution
                                </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icons name='map-marker-alt' color='#666666' size={16} />
                                        <Text style={styling.card2headLabel}>  0.31 mi away </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styling.innerCardView} >
                                <View style={styling.cardView2}>
                                    <Icon name='heart' size={20} color='white' />

                                </View>
                                <Text>
                                    Quarto Space Solution
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icons name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.card2headLabel}>  0.31 mi away </Text>
                                </View>


                            </View>
                            <View style={styling.innerCardView} >
                                <View style={styling.cardView2}>
                                    <Icon name='heart' size={20} color='red' />

                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    <View style={styling.buttonOpacityView}>
                        <TouchableOpacity style={styling.mapOpacity}>
                            <Text>Map</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.filterOpacity}>
                            <Text>Filter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.cardContainer3}>
                        <View style={styling.cardView3}>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Browse;