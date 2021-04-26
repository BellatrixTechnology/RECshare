import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome'
import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { styling } from './styling';
import { select, deselect } from '../../Redux/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { I18n, switchLanguage } from '../../../i18n/I18n';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ChooseLanguage = (props) => {
    const [checked, setcheck] = useState('en');
    const [English, setEnglish] = useState(false);
    const [Chinese, setChinese] = useState(false);
    const [Portuguese, setPortuguese] = useState(false);
    const [Spanish, setSpanish] = useState(false);
    const [Hindi, setHindi] = useState(false);
    const [Arabic, setArabic] = useState(false);
    const [Russian, setRussian] = useState(false);
    const [Bulgarian, setBulgarian] = useState(false);
    const dispatch = useDispatch();

    function selection() {
        console.log(checked, '++++++')
        AsyncStorage.setItem('Langauge', JSON.stringify(checked))

        dispatch(select({ Types: checked }))

        props.navigation.navigate('LoginScreen')
    }
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
            <View style={styling.mainContainer}>

                <View style={styling.avatarView}>
                    <Avatar
                        rounded
                        size={86}
                        icon={{
                            name: 'user', type: IconTypes.AntDesign,
                        }}
                    />
                </View>
                <View style={styling.innerContainer}>
                    <Text style={styling.greetingTXT}>Hi, Rachael {I18n.t('Welcome')} </Text>
                    <Text style={styling.greetingLabel}>Please select your preferred language to facilitate communication</Text>
                </View>

                <View style={styling.radiomainView}>
                    <View style={styling.radioView}>

                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('en')
                            dispatch(select({ Types: 'english' }))

                        }}>
                            {
                                checked == 'en' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> English</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            setcheck('chi')
                            dispatch(select({ Types: 'chi' }))

                        }}>
                            {
                                checked == 'chi' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Chinese</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styling.radioView}>

                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('Portuguese')
                        }}>
                            {
                                checked == 'Portuguese' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Portuguese</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('Spanish')
                        }}>
                            {
                                checked == 'Spanish' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Spanish</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.radioView}>
                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('Hindi')
                        }}>
                            {
                                checked == 'Hindi' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Hindi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('ara')
                            dispatch(select({ Types: 'ara' }))
                        }}>
                            {
                                checked == 'ara' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Arabic</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.radioView}>
                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('Russian')
                            dispatch(select({ Types: 'ara' }))
                        }}>
                            {
                                checked == 'Russian' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Russian</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.languageView} onPress={() => {

                            setcheck('bg')
                            dispatch(select({ Types: 'bg' }))
                        }}>
                            {
                                checked == 'bg' ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Bulgarian</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity} onPress={() => {
                        selection()
                    }} >
                        <Text style={styling.signupText}>Select</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default ChooseLanguage;