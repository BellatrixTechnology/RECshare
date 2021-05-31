import React, { Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, FlatList, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Entypo';
import { fontFamily, fontSize } from '../../Global/Styles/font';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { InputModal } from '../../Component/Modal/index'
import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { hp, wp } from '../../Global/Styles/Scalling';
import AsyncStorage from '@react-native-community/async-storage';
import { I18n } from '../../../i18n/I18n';

const Account = (props) => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Pay, setPay] = useState('')
    const [isVisible, setisVisible] = useState(false)
    const [temp, setTemp] = useState('');
    const [Address, setAddress] = useState([])
            const [token, setToken] = useState('')

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getPeyment()
        });
        return () => {
            unsubscribe;
        };
    }, [])
    async function addAddress(a) {
        auth().onAuthStateChanged(async (user) => {
            if (user) {
                const id = await firestore().collection('User').doc().id
                console.log(id)
                await firestore().collection('User').doc(user.uid).collection('address').doc(id).set({
                    address: a,
                    id:id
                })
            }
        })

        getPeyment()
    }
    async function deleteadd(item){
        console.log('hello')
        await firestore().collection('User').doc(token).collection('address').doc(item.id).delete()
                getAddress()
        ToastAndroid.show('Address Deleted', ToastAndroid.LONG)
    }
    async function getAddress(){
                         let tk = await AsyncStorage.getItem('token')

                    const Snapshot = await firestore().collection('User').doc(tk).collection('address').get()
                    const ader = [];
                    Snapshot.forEach((doc) => {
                        if (doc.exists) {
                            ader.push(doc.data());
                        } else {
                            console.log('No document found!');
                        }
                    });
                    setAddress([...ader]);
                
    }
    async function getPeyment() {
                let tk = await AsyncStorage.getItem('token')
        setToken(tk)
        auth().onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user)
                setName(user.displayName)
                setEmail(user.email)
                const Snapshot = await firestore().collection('User').doc(user.uid).collection('Payment').get()
                const list = [];

                Snapshot.forEach((doc) => {
                    if (doc.exists) {
                        list.push(doc.data());
                    } else {
                        console.log('No document found!');
                    }
                });
                setPay([...list]);
               getAddress()
            }
        })
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />

            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.mainHeaderView}>

                    <View style={styling.headerView}>
                        <Icons name='setting' backgroundColor='#F9F9F9' color='black' size={25}
                            onPress={() => {
                                props.navigation.navigate('Setting')
                            }} />


                        {/* <Iconss name='dots-three-horizontal' size={25} backgroundColor='#F9F9F9' color='black' /> */}

                    </View>
                    <View style={styling.avatarView}>
                        <Avatar
                            rounded
                            size={60}
                            icon={{
                                name: 'user', type: IconTypes.AntDesign,
                            }} />
                        <View style={styling.nameView}>
                            <Text style={styling.nameTXT}>{Name}</Text>

                            <Text style={styling.emailTXT}>{email}</Text>
                        </View>
                    </View>

                </View>
                <View style={styling.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.accountView}>
                            <Text style={styling.accountlTXT}>{I18n.t('AccountCredits')}</Text>
                            <TouchableOpacity style={styling.accountOpacity}>
                                <Text style={styling.creditTXT}>$0.00</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styling.accountView} onPress={() => props.navigation.navigate('Favourites')}>
                            <Text style={styling.accountlTXT}>{I18n.t('Favourties')}</Text>
                            <View style={styling.workOpacity}  >
                                {/* <Text style={styling.workTXT} >{I18n.t('Address')}</Text> */}
                                <Icons name='right' size={16} color='#C8C7CC' />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.accountView}  onPress={() => { props.navigation.navigate('AddSpace') }}>
                            <Text style={styling.accountlTXT}>Add Space</Text>
                            <View style={styling.workOpacity} >
                                {/* <Text style={styling.workTXT} >{I18n.t('Address')}</Text> */}
                                <Icons name='right' size={16} color='#C8C7CC' />
                            </View>
                        </TouchableOpacity>
                        <View style={styling.addressView}>
                            <Text style={styling.addressTXT}>{I18n.t('Address')}</Text>
                        </View>
                        <View>
                            <FlatList
                                data={Address}
                                renderItem={({ item, index }) => {
                                    return (

                                        <View style={styling.inputView}>
                                            <Input
                                                label={I18n.t('home')}
                                                editable={false}
                                                value={item.address}
                                                inputContainerStyle={{ borderBottomWidth: 0, width: wp(70), height: hp(4), marginBottom: hp(-3) }}
                                                inputStyle={{ fontSize: 15, fontFamily: fontFamily.SFUIText }}
                                            />
                                            <Icons name='delete' size={18} color='red' onPress={()=>{
                                                        deleteadd(item)
                                                    }} />
                                        </View>

                                    )
                                }}
                            />
                        </View>
                        <TouchableOpacity style={styling.addAdrsView} onPress={() => setisVisible(true)}>
                            <Text style={styling.newAdrsTXT}>{I18n.t('AddAdres')}</Text>
                            <Icons name='pluscircle' size={24} color='#FF2D55' />
                        </TouchableOpacity>

                        <View style={styling.addressView}>
                            <Text style={styling.addressTXT}>{I18n.t('PaymentCards')}</Text>
                        </View>
                        <FlatList
                            data={Pay}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styling.paymentView}>
                                        <View style={styling.paymentInnerView}>

                                            <View style={styling.cardTXTView}>
                                                <Text style={styling.cardTXT}>{item.holder}</Text>
                                                <Text style={styling.digitTXT}>{item.CardNo}</Text>

                                            </View>
                                        </View>

 <Icons name='delete' size={18} color='red' onPress={async()=>{
                                                        await firestore().collection('User').doc(token).collection('Payment').doc(item.id).delete()
                getPeyment()
        ToastAndroid.show('Card Deleted', ToastAndroid.LONG)
                                                    }} />
                                    </View>
                                )
                            }}
                        />



                        <View style={styling.addAdrsView}>
                            <Text style={styling.newAdrsTXT}>{I18n.t('AddnewCard')}</Text>
                            <Icons name='pluscircle' size={24} color='#FF2D55' onPress={() => { props.navigation.navigate('Payment') }} />
                        </View>
                    </ScrollView>
                </View>
                <InputModal
                    isVisible={isVisible}
                    onBackButtonPress={() => setisVisible(false)}
                    onBackdropPress={() => setisVisible(false)}
                    onChange={(val) => { setTemp(val) }}
                    onPressYes={(val) => {
                        // let a = [...Address]
                        // a.push(temp)
                        // setAddress(a)
                        setTemp('')
                        setisVisible(false)
                        addAddress(temp)
                    }}
                />
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Account;