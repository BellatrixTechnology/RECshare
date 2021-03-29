import React, { useState, useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';

const Favourites = (props) => {
    const [Data, setData] = useState([])
    const [Uid, setUid] = useState('')
    useEffect(() => {
        getFav()
    }, [])

    function getFav() {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                fav(user.uid)
                setUid(user.uid)
            }
            else console.log('error')
        })
    }

    async function fav(uid) {
        const snapshot = await firestore().collection('User').doc(uid).collection('Favourite').get();
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
            console.log(doc.data())
        });
        setData([...list]);
    }
    async function sorting() {
        console.log('hello')

        const snapshot = await firestore().collection('User').doc(Uid).collection('Favourite').orderBy('Space', 'asc').get();
        console.log(snapshot)
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
            <ScrollView>
                <View style={styling.mainContainer}>
                    <View style={styling.opacityView}>
                        <TouchableOpacity style={styling.buttonOpacity} onPress={() => { sorting() }}>
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
                            numColumns={2}
                            data={Data}
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
            </ScrollView>
        </SafeAreaView >
    )
}

export default Favourites;