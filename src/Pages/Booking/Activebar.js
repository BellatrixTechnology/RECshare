import React, { Fragment, useState, useEffect } from 'react';
import { View, Switch, StatusBar, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const Activebar = ({ props }) => {
    const [data, setdata] = useState('')
    useEffect(() => {

        const unsubscribe = props.navigation.addListener('focus', () => {
            authytt()
        });
        return () => {
            unsubscribe;
        };
    }, []);
    function authytt() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                get(user.uid)
            }
        })
    }

    async function get(id) {
        console.log(id)
        const Snapshot = await firestore().collection('User').doc(id).collection('Booking').get()
        const list = [];

        console.log(Snapshot)
        Snapshot.forEach((doc) => {
            if (doc.exists) {
                list.push(doc.data());

            } else {
                console.log('No document found!');
            }
        });
        setdata([...list]);
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView style={styling.safeContainer} >

                <View style={styling.mainContainer}>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styling.cardContainer}>
                                    <Image style={styling.cardView} source={{ uri: item.Image }} />
                                    <View style={styling.cardTXTView}>

                                        <View>
                                            <View style={styling.labelView}>
                                                <Text style={styling.cardheadTXT}>{item.Space}</Text>
                                                <Text style={styling.cardheadTXT}>{item.credit}$</Text>
                                            </View>
                                            <View style={styling.innerTXT}>
                                                <Text style={styling.cardheadLabel}>{item.type}</Text>

                                            </View>

                                            <Text style={styling.cardmintLabel}>{item.Date} {item.Time}</Text>

                                        </View>

                                    </View>
                                </View>
                            )
                        }}
                    />

                </View>

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>

    )
}

export default Activebar;