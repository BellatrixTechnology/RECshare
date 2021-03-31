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
const Setting = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    async function signout() {
        auth()
            .signOut()
            .then(() => {
                let obj = {
                    Email: '',
                    Password: '',
                    auth: false
                }
                AsyncStorage.setItem('Login', JSON.stringify(obj)).then(() => {
                    props.navigation.goBack()
                }).then(() => {
                    props.navigation.goBack()
                }).then(() => props.navigation.replace('LoginScreen'))
            }
            );
    }
    async function changePass() {
        auth().onAuthStateChanged((user) => {
            // console.log(user.email)
            auth().sendPasswordResetEmail(user.email).then(() => {
                ToastAndroid.showWithGravity(
                    "Password Change Link Send to your Email",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            })
        })
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView style={{ backgroundColor: 'white' }} />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headView}>
                    <Icons name="left" color='black' size={30}
                        onPress={() => props.navigation.navigate('LoginScreen')}
                    />
                </View>
                <View style={styling.headingView}>
                    <Text style={styling.headTXT}>Setting</Text>
                </View>
                <View style={styling.mainContainer}>
                    <View style={styling.accountView}>
                        <Text style={styling.accountTXT}>Account</Text>
                    </View>
                    <View style={styling.innerView}>
                        <View style={styling.passwrdView} >
                            <Icons name='lock1' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView} onPress={() => { changePass() }}>
                            <Text style={styling.detailHead}>Change Password</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>
                    <View style={styling.innerView}>
                        <View style={styling.notificationView} >
                            <Icon name='bell' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView}>
                            <Text style={styling.detailHead}>Notification</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>

                    <View style={styling.innerView}>
                        <View style={styling.privacyView} >
                            <Icon name='hand-stop-o' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView}>
                            <Text style={styling.detailHead}>Privacy Setting</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>

                    <View style={styling.innerView}>
                        <View style={styling.signoutView} >
                            <Iconss name='log-out' size={26} color='white' />
                        </View>
                        <TouchableOpacity style={styling.detailView} onPress={() => signout()}>
                            <Text style={styling.detailHead}>Sign Out</Text>
                            <Icons name='right' size={20} color='#C8C7CC' />
                        </TouchableOpacity>
                    </View>
                    <View style={styling.optionView}>
                        <Text style={styling.accountTXT}>More Option</Text>
                    </View>
                    <View style={styling.innerOptionView}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>NewsLetter</Text>
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
                                <Text style={styling.detailHead}>Text Message</Text>
                                <Switch
                                    trackColor="#C8C7CC"
                                    thumbColor="#C8C7CC"
                                    ios_backgroundColor="#3e3e3e"

                                />
                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>Phone Callr</Text>
                                <Switch
                                    trackColor="#C8C7CC"
                                    thumbColor="#C8C7CC"
                                    ios_backgroundColor="#3e3e3e"

                                />
                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>Currency</Text>

                                <TouchableOpacity style={styling.rightView}>
                                    <Text style={styling.labelTXT}>$-USD</Text>
                                    <Icons name='right' size={20} color='#C8C7CC' />
                                </TouchableOpacity>

                            </View>
                            <View style={styling.moreoptionView}>
                                <Text style={styling.detailHead}>Languages</Text>
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

            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Setting;