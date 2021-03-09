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
import { set } from 'react-native-reanimated';
const Browse2 = ({ props }) => {
    useEffect(() => {
        get()

    }, [])
    const [imagess, setImages] = useState('');
    const [name, setName] = useState('');
    const [guest, setGuest] = useState('');
    const [distance, setDistance] = useState('');
    async function get() {

        const response = firestore().collection('Space');
        const data = await response.get();
        // const data = firestore().collection('Space').get()
        console.log(data.docs)
        data.docs.forEach(item => {
            console.log(item.data())
            setName(item.data().Space)
            setGuest(item.data().Guest)
            setDistance(item.data().distance)
            setImages(item.data().Image)
            // let newId = [...id];

            // newId.push({
            //     SpaceName: item.data().Space,
            //     Guest: item.data().Guest,
            //     Distance: item.data().distance,
            //     Iamge: item.data().Image

            // })
            // setId(newId)
            // console.log(id)
        })


        //     .get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         setId(doc.data())

        //         // newId.push({
        //         //     SpaceName: doc.id,
        //         //     Guest: guest,
        //         //     Distance: distance,
        //         //     Iamge: img

        //         // })
        //         // setId(newId)
        //         console.log(id)

        //     })
        // });

        // object.get().then((doc) => {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // })

        // let imageRef = storage().ref('/Images/Midway station/' + '0');
        // imageRef
        //     .getDownloadURL()
        //     .then((url) => {
        //         //from url you can fetched the uploaded image easily
        //         console.log(url)
        //         setImages(url)

        //     })
        //     .catch((e) => console.log('getting downloadURL of image error => ', e));

        //  else {
        //     return false
        // }

    }


    console.log(imagess)
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
                                <Icon name='search1' size={18} style={{ color: '#C8C7CC' }} />
                                <TextInput
                                    placeholder='Enter Your Location'
                                />

                                {/* <SearchableDropdown
                                    // itemStyle={{
                                    //     padding: 10,
                                    //     marginTop: 2,
                                    //     backgroundColor: '#ddd',
                                    //     borderColor: '#bbb',
                                    //     borderWidth: 1,
                                    //     borderRadius: 5,
                                    // }}
                                    itemTextStyle={{ color: '#222' }}
                                    itemsContainerStyle={{ maxHeight: 140 }}
                                    items={items}
                                /> */}

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
                                <TouchableOpacity style={styling.mainCardView} onPress={() => props.navigation.navigate('SpaceDetail')}>
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
                                <View style={styling.nearInnerView} >
                                    <ImageBackground style={styling.nearbyCard} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/rec-shape.appspot.com/o/Images%2FMidway%20station%2F0?alt=media&token=8dd58cd5-c7fd-403f-895f-04c1608bdc2e' }} imageStyle={styling.nearbyCard} >
                                        <Icon name='heart' size={20} color='red' />

                                    </ImageBackground>
                                    <Text style={styling.CategoryTXT} >{name}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icons name='map-marker-alt' color='#666666' size={15} />
                                        <Text style={styling.carLabel}>  0.31 mi away 12 Guest</Text>
                                    </View>
                                </View>
                                <View style={styling.nearbyCard}>

                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Browse2;