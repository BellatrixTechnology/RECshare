import React, { useState, Fragment, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ScrollView, ToastAndroid, ImageBackground } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import auth from '@react-native-firebase/auth';
// import PhoneInput from 'react-native-phone-input';
import { wp, hp } from '../../Global/Styles/Scalling';
import InputF from '../../Component/InputField/index';
import AsyncStorage from '@react-native-community/async-storage';
import PhoneInput from "react-native-phone-number-input";
import ImagePicker from 'react-native-image-crop-picker';

import { I18n } from '../../../i18n/I18n';
import firestore from "@react-native-firebase/firestore"
const Signup = (props) => {
    const [Names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [check, setcheck] = useState(false)
    const [emailError, seterrEmail] = useState(false);
    const [passError, seterrPass] = useState(false);
    const [nameError, seterrName] = useState(false);
    const [phoneError, seterrPhone] = useState(false);
    const [data, setData] = useState([])
    const [ImagePath, setImage] = useState('');

    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {
        get()
    }, [])
    async function get() {
        let temp = []
        const Snapshot = await firestore().collection('User').get()
        Snapshot.forEach((doc) => {
            if (doc.exists) {
                temp.push(doc.data());
            }
        });
        setData(temp)
    }
    const Signin = () => {
        // var temp = false;
        let temp = data.filter(item => {
            return (item?.email === Email || item?.phone === phone)
        })
        if (temp.length > 0) {
            console.log("asdasd")
            ToastAndroid.show('Email or Phone already registered', ToastAndroid.LONG)

        }
        else {
            props.navigation.navigate('VerfiyCode', { Phone: phone, props: props, Email: Email, Password: Password, Names: Names, ImagePath: ImagePath })
        }

    }
    const checkField = () => {
        if (Email == '') { seterrEmail('Enter Email') }
        if (Password == '') { seterrPass('Enter Password') }
        if (Names == '') { seterrName('Enter Name') }
        if (phone == '') { seterrPhone("true") }
        if (Email != '' && Password != '' && Names != '' && phone != '') {
            if (check) {
                Signin()
            }
            else {
                ToastAndroid.show('Accept Terms and Condition First', ToastAndroid.LONG)

            }
        }
    }
    const selectImage = () => {

        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
        }).then(image => {
            setImage({ uri: image.path, width: image.width, height: image.height, mime: image.mime });

        });
    }
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <SafeAreaView backgroundColor='white' />
            <SafeAreaView style={styling.safeContainer} >
                <ScrollView>

                    <View style={styling.mainContainer}>

                        <View style={styling.innerContainer}>
                            <View style={styling.headerView}>

                                <View style={styling.welcomeView}>
                                    <Text style={styling.welcomeLabel}>{I18n.t('Welcome')} </Text>
                                    <Text style={styling.welcomeLabel}>{I18n.t('User')} </Text>
                                </View>
                                <View style={styling.signupHeader}>
                                    <Text style={styling.siguplabel}>{I18n.t('SignupContinure')}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => { selectImage() }}>
                                <ImageBackground style={styling.avatarView}
                                    imageStyle={{
                                        borderRadius: hp(10)
                                    }}
                                    source={ImagePath}

                                >
                                    <Icons name='camera' size={wp(6)} color='white' />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.formView}>
                            <InputF
                                label={I18n.t('Name')}
                                placeholder={I18n.t('Name')}
                                onChange={(val) => {
                                    setName(val)
                                    if (val == '') {
                                        seterrName(true)
                                    }
                                    else seterrName(false)
                                }}
                                value={Names}
                                errName={nameError}
                            />

                            <InputF
                                label={I18n.t('Email')}
                                placeholder='abc@gmail.com'
                                onChange={(val) => {
                                    setEmail(val)
                                    {
                                        reg.test(val.trim()) ? seterrEmail(false) : seterrEmail(true)
                                    }
                                }}
                                value={Email}
                                key
                                errorEmail={emailError}
                                keyboardTyp={'email-address'}

                            />
                            <Text style={styling.inputLabel}>Phone Number</Text>

                            <PhoneInput
                                defaultCode="US"
                                containerStyle={{
                                    width: wp(85), height: hp(10), borderBottomWidth: 0.5,
                                    borderColor: 'grey'
                                    , alignSelf: 'center', backgroundColor: 'white',
                                }}
                                textContainerStyle={{ backgroundColor: 'white', color: 'black', padding: '-12%', margin: 0 }}
                                // onChangeText={(val) => }
                                onChangeFormattedText={(val) => { setPhone(val) }}
                            />
                            {phoneError && <Text style={{
                                color: 'red',
                                marginTop: hp(0.3),
                                fontSize: wp(3), marginHorizontal: wp(4)
                            }}>Enter Valid Number</Text>}
                            <InputF
                                label={I18n.t('Password')}
                                placeholder={I18n.t('Password')}
                                onChange={(val) => {
                                    setPassword(val)
                                    if (val == '') {
                                        seterrPass(true)
                                    }
                                    else seterrPass(false)
                                }}
                                value={Password}
                                errName={passError}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity style={styling.checkView} onPress={() => {

                            if (check == false) {
                                setcheck(true)
                            }
                            else setcheck(false)

                        }}>
                            <Icons name='check-circle' size={20}

                                color={check ? '#4CD964' : 'black'}
                            />
                            <Text style={styling.agreeTXT}>  {I18n.t('agreeto')}</Text>
                            <View>
                                <Text style={styling.termsTXT}> {I18n.t('termscondition')}</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={styling.signupView}>
                            <TouchableOpacity style={styling.signupOpacity} onPress={() => {
                                checkField()
                            }}>
                                <Text style={styling.signupText}>{I18n.t('SignUp')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.signinView}>
                            <Text style={styling.signinTXT}>{I18n.t('HaveAccount')} </Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('LoginScreen') }}>
                                <Text style={styling.opacitysigninTXT}>{I18n.t('SignIn')}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Signup;