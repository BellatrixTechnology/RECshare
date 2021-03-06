import React, { Fragment, useState, useEffect } from 'react';
import { View, Switch, StatusBar, TouchableOpacity, Image, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const Activebar = ({ props }) => {
    const [data, setdata] = useState('')
    const [isloading, setisLaoding] = useState(true)
    const [status, setStatuts] = useState(false)
    useEffect(() => {

        const unsubscribe = props.navigation.addListener('focus', () => {
            authytt()
        });
        return () => {
            unsubscribe;
        };
    }, []);
    function authytt() {
        setisLaoding(true)
        auth().onAuthStateChanged((user) => {
            if (user) {
                get(user.uid)
            }
        })
    }

    async function get(id) {
        const Snapshot = await firestore().collection('User').doc(id).collection('Booking').get()
        const list = [];
        Snapshot.forEach((doc) => {
            if (doc.exists) {
                list.push(doc.data());
            } else {
                console.log('dasd')
                setStatuts(true)
                setisLaoding(false)

            }
        });
        setisLaoding(false)
        setdata([...list]);
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView style={styling.safeContainer} >
                {isloading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator color={'red'} size={'large'} />
                </View> :
                    <View style={styling.mainContainer}>
                        {
                            data.length != 0 ?
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
                                :
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styling.cardheadTXT}>No Active Booking Found</Text>
                                </View>
                        }

                    </View>
                }
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>

    )
}

export default Activebar;