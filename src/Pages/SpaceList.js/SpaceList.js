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
import AsyncStorage from '@react-native-community/async-storage';
import { hp, wp } from '../../Global/Styles/Scalling';
import { ActivityIndicator } from 'react-native-paper';

const SpaceList = (props) => {
    const [Data, setData] = useState([])
    const [Uid, setUid] = useState('')
    const [load, setload] = useState(false)

    useEffect(() => {
        catGet()
    }, [])

    async function catGet() {
        setload(true)

        if (props.route.params.type != 'SeeAll') {
            const snapshot = await firestore()
                .collection('Data')
                .where('type', '==', props.route.params.type)
                .get();
            const list = [];
            snapshot.forEach((doc) => {
                list.push(doc.data());
            });
            setData([...list]);
            setload(false)
        }
        else {
            const list = [];
            const snapshot = await firestore().collection('Data').get();

            snapshot.forEach((doc) => {
                if (doc.exists) {
                    list.push(doc.data());
                } else {
                    console.log('No document found!');
                }
            });
            setData([...list]);
            setload(false)

        }
    }



    async function fav(uid) {
        const snapshot = await firestore().collection('Data').get();
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
            console.log(doc.data())
        });
        let temp = list.filter(item => {
            return item?.isLikedBy?.includes(uid)
        })
        setData(temp);
    }
    async function sorting() {

        const snapshot = await firestore().collection('Data').orderBy('Space', 'asc').get();

        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
        });

        let temp = list.filter(item => {
            return item?.isLikedBy?.includes(Uid)
        })
        setData(temp);

    }
    async function filters() {

        const snapshot = await firestore().collection('Data').orderBy('Rating', 'desc').get();
        console.log(snapshot)
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
        });
        let temp = list.filter(item => {
            return item?.isLikedBy?.includes(Uid)
        })
        setData(temp);
    }
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.headerView}>
                <Icon name='left' size={30} onPress={() => props.navigation.goBack()} />
            </View>
            <View style={styling.headTXTView}>
                <Text style={styling.headTXT}>Space</Text>
            </View>
            <ScrollView>
                <View style={styling.mainContainer}>
                    {load ? <ActivityIndicator color='red' size='large' /> :
                        Data.length == 0 ?
                            <View style={{ alignItems: 'center' }}>
                                <Text>NO RECORD FOUND</Text>
                            </View> :
                            <View style={styling.cardContainer}>

                                <FlatList
                                    numColumns={2}
                                    data={Data}
                                    renderItem={({ item }) => {
                                        console.log(item)
                                        return (
                                            <View style={styling.innerCardContainer}>
                                                <Image source={{ uri: item.Image }} style={styling.cardView} />
                                                <View style={{ paddingHorizontal: wp(2) }} >
                                                    <Text style={styling.cardheadTXT}>
                                                        {item.Space}
                                                    </Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <IconFont name='map-marker-alt' color='#666666' size={16} />
                                                        <Text style={styling.cardheadLabel}>  {item.distance} mi away </Text>
                                                    </View>
                                                </View>
                                                {
                                                    item.Rating == 5 && <Text style={[styling.cardheadLabel, { color: '#FF9500', paddingHorizontal: wp(2) }]}>★★★★★</Text> || item.Rating == 4 && <Text style={[styling.cardheadLabel, { color: '#FF9500', paddingHorizontal: wp(2) }]}>★★★★</Text> || item.Rating == 3 && <Text style={[styling.cardheadLabel, { color: '#FF9500', paddingHorizontal: wp(2) }]}>★★★</Text> || item.Rating == 2 && <Text style={[styling.cardheadLabel, { color: '#FF9500', paddingHorizontal: wp(2) }]}>★★</Text> || item.Rating && <Text style={[styling.cardheadLabel, { color: '#FF9500', paddingHorizontal: wp(2) }]}>★</Text>
                                                }
                                            </View>
                                        )
                                    }}
                                />

                            </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default SpaceList;