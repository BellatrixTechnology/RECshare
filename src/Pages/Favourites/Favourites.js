import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { hp, wp } from '../../Global/Styles/Scalling';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const Favourites = (props) => {
    const [Data, setData] = useState([])
    useEffect(() => {
        getFav()

    }, [])
    function getFav() {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                fav(user.uid)
            }
            else console.log('error')
        })
    }
    async function fav(uid) {
        const snapshot = await firestore().collection('Favourite').doc(uid).collection('Favourite').get();
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
        });
        setData([...list]);

    }

    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon name='left' size={30} onPress={() => props.navigation.goBack()} />
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

                    <FlatList
                        data={Data}
                        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styling.innerCardContainer}>
                                    <Image source={{ uri: item.Image }} style={styling.cardView} />
                                    <View style={styling.txtView} >
                                        <Text style={styling.cardheadTXT}>
                                            {item.Space}
                                        </Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <IconFont name='map-marker-alt' color='#666666' size={16} />
                                            <Text style={styling.cardheadLabel}>  {item.distance} mi away </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />


                </View>
            </View>

        </SafeAreaView >
    )
}

export default Favourites;