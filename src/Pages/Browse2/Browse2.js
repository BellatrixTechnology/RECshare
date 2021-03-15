import React, { Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import SearchableDropdown from 'react-native-searchable-dropdown';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

import { FlatList } from 'react-native';
import { wp, hp } from '../../Global/Styles/Scalling';
const Browse2 = ({ props }) => {
    useEffect(() => {
        get().then(() => list())

    }, [])

    const [data, setDAta] = useState([]);
    const [listData, setListData] = useState([]);
    const [search, setSearch] = useState();
    async function get() {

        const response = firestore().collection('Space');
        const snapshot = await response.get();
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
        });
        setDAta([...list]);

    }
    const list = () => {
        data.forEach(item => {
            let list = [...listData]
            list.push({
                Type: item.Space
            })
            setListData(list)
        })
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <SafeAreaView style={styling.safeContainer} >
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
                                {/* <Icon name='search1' size={18} style={{ color: 'white' }} /> */}
                                <TextInput
                                    placeholder='Type Space Station Name'
                                    style={{ height: hp(7), width: wp(80), borderWidth: wp(0.1), borderRadius: wp(2) }}
                                    onChangeText={(val) =>
                                        setSearch(val)
                                    }
                                    value={search}
                                />
                                <Icon name='search1' size={18} style={{ color: '#bbb' }} onPress={() => {
                                    props.navigation.navigate('SpaceDetail', {
                                        Space: search,
                                        props: props.navigation
                                    })
                                }} />

                            </View>

                        </View>
                        <View style={{ marginVertical: hp(3) }}>
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
                                    <TouchableOpacity style={styling.mainCardView} >
                                        <View style={styling.cardView}>
                                            <Icons name='building' color='white' size={50} />
                                        </View>
                                        <View style={styling.cardTXTView}>
                                            <Text style={styling.carHeading}>Private</Text>
                                            <Text style={styling.carLabel}>93 Spaces</Text>
                                        </View>
                                    </TouchableOpacity>
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
                        </View>
                        <View>
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

                                <FlatList
                                    data={data}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={styling.nearInnerView} >
                                                <ImageBackground style={styling.nearbyCard} source={{ uri: item.Image }} imageStyle={styling.nearbyCard} >
                                                    <Icon name='heart' size={20} color='red' />
                                                    <View style={styling.imageViewText}>
                                                        <Text style={{ color: 'white' }}>${item.credit}/hr</Text>
                                                    </View>
                                                </ImageBackground>
                                                <Text style={styling.CategoryTXT} >{item.Space}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icons name='map-marker-alt' color='#666666' size={15} />
                                                    <Text style={styling.carLabel}>  {item.distance} mi away {item.Guest} Guest</Text>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Browse2;