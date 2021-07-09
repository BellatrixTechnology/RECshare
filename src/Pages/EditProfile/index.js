
import React, { useState, useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import { styling } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { hp, wp } from '../../Global/Styles/Scalling';
import { ImageBackground } from 'react-native';
import { fontFamily } from '../../Global/Styles/font';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage'
import { ToastAndroid } from 'react-native';
const EditProfile = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')
    const [buttonStatus, setButtonStatus] = useState(false)
    let regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    useEffect(() => {
        getDate()
    }, [])
    const getDate = async () => {
        setLoading(true)
        let token = await AsyncStorage.getItem('token')
        console.log(token);
        await firestore().collection('User').doc(token).get().then(doc => {
            console.log(doc.data(), '=-=-=');
            setName(doc.data().displayName)
            setNumber(doc.data().phone)
            setEmail(doc.data().email)
            setImg(doc.data().imageLink)
            setData(doc.data())
            setLoading(false)
        })
    }
    const selectImage = () => {
        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
        }).then((image) => {
            setImg(image.path)
        });
    };
    const saveImage = async (uri, path) => {

        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const ref = storage().ref(path);
            const task = ref.put(blob);
            return new Promise((resolve, reject) => {
                task.on(
                    'state_changed',
                    (taskSnapshot) => {
                        console.log(
                            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
                        );
                    },
                    (err) => {
                        reject(err);
                    },
                    async () => {
                        const url = await task.snapshot.ref.getDownloadURL();
                        resolve(url);
                        return url;
                    },
                );
            });
        } catch (err) {
            console.log('uploadImage error: ' + err);
        }
    }
    const saveData = async () => {
        setButtonStatus(true)
        let token = await AsyncStorage.getItem('token')
        console.log(img);
        console.log(regex.test(img));
        if (regex.test(img)) {

            await firestore()
                .collection('User')
                .doc(token)
                .set({
                    displayName: name,
                    phone: number,
                    imageLink: img
                }, { merge: true })

            auth().onAuthStateChanged(async (user) => {
                if (user) {

                    user.updateProfile({
                        displayName: name,
                    });
                }
                ToastAndroid.show('Profile Updated', ToastAndroid.LONG)

            })


            setButtonStatus(false)
        }
        else {

            const refID = await firestore().collection('User').doc().id;

            let path = await saveImage(img, 'ProfileImage/' + refID);
            await AsyncStorage.setItem('ImageLink', path);

            await firestore()
                .collection('User')
                .doc(token)
                .set({
                    displayName: name,
                    phone: number,
                    imageLink: path
                }, { merge: true })
            auth().onAuthStateChanged(async (user) => {
                if (user) {

                    user.updateProfile({
                        displayName: name,
                    });
                }
                ToastAndroid.show('Profile Updated', ToastAndroid.LONG)

            })
            setButtonStatus(false)
        }

    }
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF2D55" translucent={false} />
            <View style={styling.mainContainer}>
                <ScrollView>

                    {
                        loading ?
                            <ActivityIndicator size={'large'} color='#FF2D55' />
                            :
                            <>
                                <View style={styling.headerView}>

                                    <Icon name='left' size={26} onPress={() => props.navigation.goBack()} />
                                    <View style={{ width: wp(80), paddingVertical: hp(5), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>
                                        <TouchableOpacity onPress={() => {
                                            selectImage();
                                        }}>


                                            <ImageBackground
                                                style={{ width: wp(25), height: wp(25), borderRadius: 100, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}
                                                source={{ uri: img }}
                                                // resizeMode='contain'
                                                imageStyle={{ width: wp(25), height: wp(25), borderRadius: 100, }}

                                            >
                                                {img != '' ? <Text style={{ color: 'white' }}>Change Image</Text> : <Text style={{ color: 'white' }}>Upload Image</Text>}
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <View style={{ paddingVertical: hp(2), alignItems: 'center', alignSelf: 'center' }}>
                                            <Text style={{ color: 'white', fontFamily: fontFamily.SFUIText }}>Name: {name} </Text>
                                            <Text style={{ color: 'white', fontFamily: fontFamily.SFUIText }}>Phone# {number} </Text>
                                            <Text style={{ color: 'white', fontFamily: fontFamily.SFUIText }}>Email: {email} </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingVertical: hp(2) }}>
                                    <View style={styling.inputView}>
                                        <Text style={styling.addressLabel}>Name</Text>
                                        <TextInput
                                            style={styling.AddresInput}
                                            placeholder='Name'
                                            // defaultValue={name}
                                            onChangeText={(val) => {
                                                setName(val)
                                            }}
                                            value={name}

                                        />
                                    </View>
                                    <View style={styling.inputView}>
                                        <Text style={styling.addressLabel}>Phone #</Text>
                                        <TextInput
                                            style={styling.AddresInput}
                                            placeholder='Phone'
                                            onChangeText={(val) => {
                                                setNumber(val)
                                            }}
                                            value={number}
                                            keyboardType='number-pad'
                                        />
                                    </View>
                                    <View style={styling.signinView}>
                                        <TouchableOpacity style={styling.signinOpacity} onPress={() => {
                                            saveData()
                                        }}>
                                            {
                                                !buttonStatus ?
                                                    <Text style={styling.signinText}>Save</Text> :
                                                    <ActivityIndicator size='small' color='white' />
                                            }


                                        </TouchableOpacity>
                                    </View>
                                    <View style={styling.signinView}>
                                        <TouchableOpacity style={styling.signinOpacity} onPress={() => {
                                            props.navigation.navigate('EditAddress', { data: data })
                                        }}>
                                            <Text style={styling.signinText}>Update Address</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                    }
                </ScrollView>

            </View>
            {/* <View style={styling.headTXTView}>

            </View> */}


        </SafeAreaView >
    )
}

export default EditProfile;