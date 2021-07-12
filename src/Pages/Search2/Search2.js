import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, FlatList, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsCancel from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore'
import { hp } from '../../Global/Styles/Scalling';

const Search2 = (props) => {
    const [data, setDAta] = useState([]);
    const [search, setSearch] = useState([])
    const [temp, settemp] = useState([])
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            get()
        });
        return () => {
            unsubscribe;
        };
    }, [])
    async function get() {
        const snapshot = await firestore().collection('Space').get();
        const list = [];
        snapshot.forEach((doc) => {
            list.push(doc.data());
        });
        setDAta([...list]);
        settemp([...list])
    }
    function searchInput(text) {
        console.log(text)
        const newData = data.filter(item => {
            const itemData = `${item.Space.toUpperCase()}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        setDAta(newData)

        if (text == '') setDAta(temp)
    }
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.mainContainer}>
                <View style={{ paddingVertical: hp(1) }}>
                    <Icon
                        name="left"
                        backgroundColor="white"
                        color="black"
                        size={26}
                        onPress={() => props.navigation.goBack()}
                    />
                </View>
                <View style={styling.searchContainer}>
                    <View style={styling.searchBar}>
                        <Icon name='search1' size={18} style={{ color: '#C8C7CC' }} />
                        <TextInput
                            placeholder='Search'
                            value={search}
                            onChangeText={(text) => {
                                setSearch(text)
                                searchInput(text)
                            }}
                        />
                        {/* <IconsCancel name='cross' onPress={() => { setSearch(''), setDAta(temp) }} size={18} style={{ color: '#C8C7CC', marginLeft: 130 }} /> */}
                    </View>
                    <View style={styling.cancelView}>
                        <TouchableOpacity onPress={() => { setDAta(temp), setSearch('') }}><Text style={styling.cancelTXT} >Cancel</Text></TouchableOpacity>
                    </View>
                </View>

                {/* <View style={styling.innerView}> */}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styling.cardContainer} onPress={() => {
                                props.navigation.navigate('SpaceDetail', {
                                    Space: item.spaceid,
                                    props: props.navigation
                                })
                            }}>
                                <Image style={styling.cardView}
                                    source={{ uri: item.Image }} />
                                <View style={styling.cardTXTView}>
                                    <View>
                                        <Text style={styling.cardheadTXT}>
                                            {item.Space}
                                        </Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icons name='map-marker-alt' color='#666666' size={16} />
                                            <Text style={styling.cardheadLabel}>  {item.distance} mi away </Text>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                {/* </View> */}
            </View>

        </SafeAreaView >
    )
}

export default Search2;