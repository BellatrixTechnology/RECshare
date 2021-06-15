import React, { useState, Fragment, useEffect } from 'react';
import { View, Switch, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/Feather';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';
import { CurrntPassword } from '../../Component/Modal/index'
import { Picker } from '@react-native-picker/picker'
import { wp } from '../../Global/Styles/Scalling';
import { select, login, logout } from '../../Redux/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { I18n, switchLanguage } from '../../../i18n/I18n';
import firestore from '@react-native-firebase/firestore';
import Modal from "react-native-modal"
import { fontFamily } from '../../Global/Styles/font';

const Setting = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const user = useSelector((state) => state.Auth.user);
    const [isVisible, setisVisible] = useState(false)
    const dispatch = useDispatch();
    const [Email, setEmail] = useState('')
    const [lang, setLang] = useState('')
    const [confirmpass, setConfirm] = useState('')
    const [newpas, setNew] = useState('')
    const [Current, setCurrent] = useState('')
    const [isLogout, setisLogout] = useState(false)

    useEffect(() => {
        starter()
    }, []);
    const starter = async () => {
        let Langauge = await AsyncStorage.getItem('Langauge');
        if (Langauge) {
            setLang(Langauge)
        }
        else setLang(English)
    }
    async function changeLanguage(val) {
        switchLanguage(val)

        dispatch(select({ Types: val }))
        setLang(val)

        let token = await AsyncStorage.getItem('token')
        console.log(val)
        AsyncStorage.setItem('Langauge', val)

        await firestore().collection('User').doc(token).update({
            Language: val
        })
        // }
    }
    async function changePass() {
        console.log(newpas, confirmpass, Current)
        try {
            if (newpas === confirmpass) {
                reauthenticates(Current).then(() => {
                    var user = auth().currentUser;
                    user.updatePassword(newpas).then(() => {
                        ToastAndroid.show('Password Updated', ToastAndroid.LONG)
                    }).catch((error) => { console.log(error, 'asdasd'); });
                }).catch((error) => { ToastAndroid.show('The password is invalid', ToastAndroid.LONG) });
            }
            else {
                ToastAndroid.show('Password not matched', ToastAndroid.LONG)
            }
        } catch (error) {
            ToastAndroid.show('Invalid Password', ToastAndroid.LONG)
            console.log(error, '0000')
        }
    }
    const reauthenticates = (currentPassword) => {
        try {
            var user = auth().currentUser;
            var cred = auth.EmailAuthProvider.credential(
                user.email, currentPassword);
            return user.reauthenticateWithCredential(cred);
        } catch (error) {
            console.log(error, '0')
        }
    }
    const togleLogout = () => {
        setisLogout(!isLogout)
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView style={{ backgroundColor: 'white' }} />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headView}>
                    <Icons name="left" color='black' size={30}
                        onPress={() => props.navigation.goBack()}
                    />
                </View>
                <View style={styling.headingView}>
                    <Text style={styling.headTXT}>{I18n.t('Setting')}</Text>
                </View>
                <View style={styling.mainContainer}>
                    <View style={styling.accountView}>
                        <Text style={styling.accountTXT}>{I18n.t('Account')}</Text>
                    </View>
                    <View style={styling.innerView}>
                        <View style={styling.passwrdView} >
                            <Icons name='lock1' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView} onPress={() => {
                            setisVisible(true)
                        }}>
                            <Text style={styling.detailHead}>{I18n.t('ChangePassword')}</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>
                    <View style={styling.innerView}>
                        <View style={styling.notificationView} >
                            <Icon name='bell' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView}>
                            <Text style={styling.detailHead}>{I18n.t('Notfications')}</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>

                    <View style={styling.innerView}>
                        <View style={styling.privacyView} >
                            <Icon name='hand-stop-o' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView}>
                            <Text style={styling.detailHead}>{I18n.t('PrivacySetting')}</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>

                    <View style={styling.innerView}>
                        <View style={styling.signoutView} >
                            <Iconss name='log-out' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView} onPress={() => {
                            togleLogout()


                        }}>
                            <Text style={styling.detailHead}>{I18n.t('Signout')}</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>
                    <View style={styling.optionView}>
                        <Text style={styling.accountTXT}>{I18n.t('MoreOptiosn')}</Text>
                    </View>
                    <View style={styling.innerOptionView}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>{I18n.t('Newsletter')}</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#FF2D55" }}
                                    thumbColor={isEnabled ? "#E5E5E5" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => {
                                        setIsEnabled(true)
                                    }}
                                    value={isEnabled}
                                />
                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>{I18n.t('TextMsg')}</Text>
                                <Switch
                                    trackColor="#C8C7CC"
                                    thumbColor="#C8C7CC"
                                    ios_backgroundColor="#3e3e3e"

                                />
                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>{I18n.t('PhoneCalls')}</Text>
                                <Switch
                                    trackColor="#C8C7CC"
                                    thumbColor="#C8C7CC"
                                    ios_backgroundColor="#3e3e3e"

                                />
                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>{I18n.t('Currency')}</Text>

                                <TouchableOpacity style={styling.rightView}>
                                    <Text style={styling.labelTXT}>$-USD</Text>
                                    <Icons name='right' size={20} color='#C8C7CC' />
                                </TouchableOpacity>

                            </View> */}
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>{I18n.t('Languages')}</Text>
                                {/* <TouchableOpacity style={styling.rightView}> */}
                                {/* <Text style={styling.labelTXT}>{lang} </Text> */}
                                {/* <Icons name='right' size={20} color='#C8C7CC' /> */}

                                <Picker
                                    style={{ width: wp(40) }}
                                    selectedValue={lang}
                                    onValueChange={(val) => {
                                        console.log(val)
                                        changeLanguage(val)
                                    }}
                                >
                                    {/* <Picker.Item label={lang} value={lang} /> */}
                                    <Picker.Item label="English" value="en" />
                                    <Picker.Item label="Arabic" value="ara" />
                                    <Picker.Item label="Bulgarian" value="bg" />
                                    <Picker.Item label="Chinese" value="chi" />
                                    <Picker.Item label="Hindi" value="Hindi" />
                                    <Picker.Item label="Portuguese" value="Portuguese" />
                                    <Picker.Item label="Russian" value="Russian" />
                                    <Picker.Item label="Spanish" value="Spanish" />
                                </Picker>
                                {/* </TouchableOpacity> */}
                            </View>
                            {/* <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>Linked Account</Text>
                                <TouchableOpacity style={styling.rightView}>
                                    <Text style={styling.labelTXT}>Facebook, Google</Text>
                                    <Icons name='right' size={20} color='#C8C7CC' />
                                </TouchableOpacity> */}
                            {/* </View> */}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
            <CurrntPassword
                isVisible={isVisible}
                isAddress
                onBackButtonPress={() => setisVisible(false)}
                onBackdropPress={() => setisVisible(false)}
                onPressYes={() => {
                    changePass()
                    setisVisible(false)
                }}
                Currentvalue={Current}
                newvalue={newpas}
                confirmvalue={confirmpass}
                onChangeCurent={(val) => { setCurrent(val) }}
                onChangenew={(val) => { setNew(val) }}
                onChangeConfirm={(val) => { setConfirm(val) }}
            />
            <Modal
                isVisible={isLogout}
                onBackButtonPress={togleLogout}
                onBackdropPress={togleLogout}

            >
                <View style={{ width: '90%', backgroundColor: 'white', alignItems: 'center', alignSelf: 'center', paddingVertical: '10%', borderRadius: 12 }}>
                    <Text style={{ fontFamily: fontFamily.SFUITextBold, fontSize: 16 }}>Are you sure you want to logout?</Text>
                    <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginVertical: 10 }}>
                        {/* <LinearGradient style={{ width: '40%', paddingVertical: '5%', borderRadius: 10, alignItems: 'center' }} colors={Colors.gray} > */}

                        <TouchableOpacity style={{ width: '40%', paddingVertical: '5%', borderRadius: 10, alignItems: 'center', backgroundColor: 'red' }} onPress={() => {
                            auth().signOut()
                            dispatch(logout({}))
                            AsyncStorage.removeItem('Login')
                            AsyncStorage.removeItem('token')
                            togleLogout()
                        }}>
                            <Text style={{ fontFamily: fontFamily.SFUIText, fontSize: 18, color: 'white' }}>Yes</Text>
                        </TouchableOpacity>
                        {/* </LinearGradient> */}

                        <TouchableOpacity style={{ backgroundColor: 'grey', paddingHorizontal: '10%', paddingVertical: '5%', borderRadius: 10 }} onPress={() => {
                            togleLogout()
                        }}>
                            <Text style={{
                                fontFamily: fontFamily.SFUIText, fontSize: 18, color: 'white'
                            }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment >
    )
}

export default Setting;