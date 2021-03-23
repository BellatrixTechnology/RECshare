import React, { Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Matriel from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import SearchableDropdown from 'react-native-searchable-dropdown';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import { FlatList } from 'react-native';
import { wp, hp } from '../../Global/Styles/Scalling';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertModal from '../../Component/AlertModal/index'

const Browse2 = (props) => {

    const [status, setStatus] = useState('')
    const [data, setDAta] = useState([]);
    const [listData, setListData] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setfilter] = useState('');
    const [filterData, setFilterData] = useState('');
    const [isVisible, setisVisible] = useState(false)

    useEffect(() => {
        // get().then(() => list()).then(() => {
        //     filters()
        // })
        const unsubscribe = props.navigation.addListener('focus', () => {
            get().then(() => list()).then(() => {
                filters()
            })
        });
        return () => {
            unsubscribe;
        };
    }, []);
    async function get() {
        const snapshot = await firestore().collection('Space').get();
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
        });
        setDAta([...list]);

        if (filter == '') {
            console.log('asdasdasd')
            setFilterData([...list])
        }

    }
    async function filters() {
        try {
            let Filter = await AsyncStorage.getItem('Filter');
            let parsed1 = JSON.parse(Filter);
            setfilter(parsed1)
            if (parsed1 != '') {
                sortData(parsed1)
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    async function sortData(parsed1) {
        console.log(parsed1.Checked)
        let a = parsed1.Rating
        let end = parsed1.EPrice
        let start = parsed1.SPrice
        const list = [];
        if (parsed1.Rating != '') {
            if (parsed1.Checked == 'HighestFirst') {
                const snapshot = await firestore().collection('Space').where('Rating', '<=', a).orderBy('Rating', 'desc').get();
                snapshot.forEach((doc) => {
                    list.push(doc.data());
                });
                console.log(filterData)
                setFilterData([...list])
            }
            else if (parsed1.Checked == 'LowestFirst') {
                const snapshot = await firestore().collection('Space').where('Rating', '<=', a).orderBy('Rating', 'asc').get();
                snapshot.forEach((doc) => {
                    list.push(doc.data());
                });
                console.log(filterData)
                setFilterData([...list])
            }
        }
        else if (parsed1.SPrice != '' && parsed1.EPrice != '') {
            console.log('price')
            if (parsed1.Checked == 'Pricelowestfirst') {
                console.log(parsed1.Checked)

                const snapshot = await firestore().collection('Space').orderBy('credit', 'asc').get();
                snapshot.forEach((doc) => {
                    list.push(doc.data());
                });
                console.log(filterData)
                setFilterData([...list])
            }
            else if (parsed1.Checked == 'Pricehigestfirst') {
                const snapshot = await firestore().collection('Space').orderBy('credit', 'desc').get();
                snapshot.forEach((doc) => {
                    list.push(doc.data());
                });
                console.log(filterData)
                setFilterData([...list])
            }
        }
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
    const favourite = (item) => {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                firestore().collection('Favourite').doc(user.uid).collection('Favourite').add({
                    Space: item.Space,
                    credit: item.credit,
                    distance: item.distance,
                    Image: item.Image,
                    Guest: item.Guest,
                }).then(() => {
                    ToastAndroid.showWithGravity(
                        item.Space + " Added in Favourite",
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM
                    );
                })
            }
            else {
                console.log('null')
            }
        })
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView style={styling.safeContainer} >
                <ScrollView>
                    <View style={styling.mainContainer}>
                        <Text style={styling.labelTXT}>Will you plan to work with in </Text>
                        <View style={styling.cityView}>
                            <Text style={styling.cityTXT}>San Francisco? </Text>
                            <Icons name='angle-down' size={30} color='#FF2D55' />
                        </View>
                        <View style={styling.innerContainer}>
                            <View style={styling.searchBar}>
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

                        <View style={styling.innerDetailView}>

                            <View style={{}}>
                                <View style={styling.categoryView}>
                                    <View >
                                        <Text style={styling.CategoryTXT}>Categories</Text>
                                    </View >
                                    <View>
                                        <TouchableOpacity style={styling.seeALLOpacity} onPress={() => { props.navigation.navigate('Categories') }} >
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
                                            </View>
                                        </TouchableOpacity>
                                        <View style={styling.mainCardView}>
                                            <View style={styling.cardView1}>
                                                <Icons name='people-carry' color='white' size={50} />
                                            </View>
                                            <View style={styling.cardTXTView}>
                                                <Text style={styling.carHeading}>Meeting</Text>
                                            </View>
                                        </View>
                                        <View style={styling.mainCardView}>
                                            <View style={styling.cardView22}>
                                                <Icons name='chalkboard-teacher' color='white' size={50} />
                                            </View>
                                            <View style={styling.cardTXTView}>
                                                <Text style={styling.carHeading}>Seminar</Text>
                                            </View>
                                        </View>
                                        <View style={styling.mainCardView}>
                                            <View style={[styling.cardView22, { backgroundColor: '#FF9500' }]}>
                                                <Matriel name='office-building' color='white' size={60} />
                                            </View>
                                            <View style={styling.cardTXTView}>
                                                <Text style={styling.carHeading}>Office</Text>
                                            </View>
                                        </View>

                                    </ScrollView>
                                </View>
                            </View>
                            <View >
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
                                                    <ImageBackground style={styling.nearbyCard} source={{ uri: item.Image }} imageStyle={styling.nearbyCard}>
                                                        <Icon name='heart' size={20} color={status == item.Space ? 'red' : 'white'} onPress={() => {
                                                            setStatus(item.Space)
                                                            favourite(item)
                                                        }} />
                                                        <View style={styling.imageViewText}>
                                                            <Text style={{ color: 'white' }}>${item.credit}/hr</Text>
                                                        </View>
                                                    </ImageBackground>
                                                    <TouchableOpacity onPress={() => {
                                                        props.navigation.navigate('SpaceDetail', {
                                                            Space: item.Space,
                                                            props: props.navigation
                                                        })
                                                    }} >
                                                        <Text style={styling.CategoryTXT} >{item.Space}</Text>
                                                    </TouchableOpacity>

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
                        <View style={styling.buttonOpacityView}>
                            <TouchableOpacity style={styling.mapOpacity}>
                                <Entypo name='map' size={20} />
                                <Text> Map</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.filterOpacity} onPress={() => { props.navigation.navigate('Filter') }}>
                                <AntDesign name='filter' size={20} />
                                <Text> Filter</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.cardContainer22}>
                            <FlatList
                                data={filterData}
                                contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={styling.innerCardContainer22} onPress={() => {
                                            props.navigation.navigate('SpaceDetail', {
                                                Space: item.Space,
                                                props: props.navigation
                                            })
                                        }}>
                                            <Image source={{ uri: item.Image }} style={styling.cardView2} />
                                            <View style={styling.txtView} >
                                                <Text style={styling.cardheadTXT}>
                                                    {item.Space}
                                                </Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <IconFont name='map-marker-alt' color='#666666' size={16} />
                                                    <Text style={styling.cardheadLabels}>  {item.distance} mi away </Text>
                                                </View>
                                                {
                                                    item.Rating == 5 && <Text style={[styling.cardheadLabel, { color: '#FF9500' }]}>★★★★★</Text> || item.Rating == 4 && <Text style={[styling.cardheadLabel, { color: '#FF9500' }]}>★★★★</Text> || item.Rating == 3 && <Text style={[styling.cardheadLabel, { color: '#FF9500' }]}>★★★</Text> || item.Rating == 2 && <Text style={[styling.cardheadLabel, { color: '#FF9500' }]}>★★</Text> || item.Rating && <Text style={[styling.cardheadLabel, { color: '#FF9500' }]}>★</Text>
                                                }
                                            </View>
                                        </TouchableOpacity>

                                    )
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
                <AlertModal
                    isVisible={isVisible}
                />
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Browse2;