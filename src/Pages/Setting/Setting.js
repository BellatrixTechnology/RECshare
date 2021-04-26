import React, { useState, Fragment } from 'react';
import { View, Switch, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/Feather';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/Auth';
import { InputModal } from '../../Component/Modal/index'
import { I18n } from '../../../i18n/I18n';

const Setting = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const user = useSelector((state) => state.Auth.user);
    const [isVisible, setisVisible] = useState(false)
    const dispatch = useDispatch();
    const [Email, setEmail] = useState('')
    async function signout() {
        // auth()
        //     .signOut()
        //     .then(() => {
        dispatch(logout({}))
        AsyncStorage.removeItem('Login')
        AsyncStorage.removeItem('token')


        // })


    }
    async function changePass() {
        auth().onAuthStateChanged((user) => {
            if (user.email == Email) {
                auth().sendPasswordResetEmail(user.email).then(() => {
                    ToastAndroid.showWithGravity(
                        "Password Change Link Send to your Email",
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM
                    );
                })
            }
            else {
                ToastAndroid.showWithGravity(
                    "Enter Valid Email",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            }

        })
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
                            dispatch(logout({}))
                            AsyncStorage.removeItem('Login')
                            AsyncStorage.removeItem('token')

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
                            <View style={styling.moreoptionView}>
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

                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>{I18n.t('Languages')}</Text>
                                <TouchableOpacity style={styling.rightView}>
                                    <Text style={styling.labelTXT}>Emglish </Text>
                                    <Icons name='right' size={20} color='#C8C7CC' />
                                </TouchableOpacity>
                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>Linked Account</Text>
                                <TouchableOpacity style={styling.rightView}>
                                    <Text style={styling.labelTXT}>Facebook, Google</Text>
                                    <Icons name='right' size={20} color='#C8C7CC' />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
            <InputModal
                isVisible={isVisible}
                isAddress
                onBackButtonPress={() => setisVisible(false)}
                onBackdropPress={() => setisVisible(false)}
                onChange={(val) => { setEmail(val) }}
                onPressYes={() => {
                    changePass()
                    setisVisible(false)
                }}
            />
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Setting;