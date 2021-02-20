import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome'
import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { styling } from './styling';

const ChooseLanguage = (props) => {
    const [checked, setcheck] = useState(false);
    const [English, setEnglish] = useState(false);
    const [Chinese, setChinese] = useState(false);
    const [Portuguese, setPortuguese] = useState(false);
    const [Spanish, setSpanish] = useState(false);
    const [Hindi, setHindi] = useState(false);
    const [Arabic, setArabic] = useState(false);
    const [Russian, setRussian] = useState(false);
    const [Bulgarian, setBulgarian] = useState(false);







    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
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
                    <Text style={styling.greetingTXT}>Hi, Rachael </Text>
                    <Text style={styling.greetingLabel}>Please select your preferred language to facilitate communication</Text>
                </View>

                <View style={styling.radiomainView}>
                    <View style={styling.radioView}>

                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!English) {
                                setEnglish(true)
                                setArabic(false)
                                setBulgarian(false)
                                setChinese(false)
                                setHindi(false)
                                setRussian(false)
                                setPortuguese(false)
                                setSpanish(false)
                            }
                            else setEnglish(false)
                        }}>
                            {
                                English != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> English</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Chinese) {
                                setEnglish(false)
                                setArabic(false)
                                setBulgarian(false)
                                setChinese(true)
                                setHindi(false)
                                setRussian(false)
                                setPortuguese(false)
                                setSpanish(false)

                            }
                            else setChinese(false)
                        }}>
                            {
                                Chinese != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Chinese</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styling.radioView}>

                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Portuguese) {
                                setEnglish(false)
                                setArabic(false)
                                setBulgarian(false)
                                setChinese(false)
                                setHindi(false)
                                setRussian(false)
                                setPortuguese(true)
                                setSpanish(false)

                            }
                            else setPortuguese(false)
                        }}>
                            {
                                Portuguese != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Portuguese</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Spanish) {
                                setEnglish(false)
                                setArabic(false)
                                setBulgarian(false)
                                setChinese(false)
                                setHindi(false)
                                setRussian(false)
                                setPortuguese(false)
                                setSpanish(true)
                            }
                            else setSpanish(false)
                        }}>
                            {
                                Spanish != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Spanish</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.radioView}>
                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Hindi) {
                                setEnglish(false)
                                setArabic(false)
                                setBulgarian(false)
                                setChinese(false)
                                setHindi(true)
                                setRussian(false)
                                setPortuguese(false)
                                setSpanish(false)

                            }
                            else setHindi(false)
                        }}>
                            {
                                Hindi != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Hindi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Arabic) {
                                setEnglish(false)
                                setArabic(true)
                                setBulgarian(false)
                                setChinese(false)
                                setHindi(false)
                                setRussian(false)
                                setPortuguese(false)
                                setSpanish(false)
                            }
                            else setArabic(false)
                        }}>
                            {
                                Arabic != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Arabic</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.radioView}>
                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Russian) {
                                setEnglish(false)
                                setArabic(false)
                                setBulgarian(false)
                                setChinese(false)
                                setHindi(false)
                                setRussian(true)
                                setPortuguese(false)
                                setSpanish(false)
                            }
                            else setRussian(false)
                        }}>
                            {
                                Russian != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Russian</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.languageView} onPress={() => {
                            if (!Bulgarian) {
                                setEnglish(false)
                                setArabic(false)
                                setBulgarian(true)
                                setChinese(false)
                                setHindi(false)
                                setRussian(false)
                                setPortuguese(false)
                                setSpanish(false)
                            }
                            else setBulgarian(false)
                        }}>
                            {
                                Bulgarian != false ? <Icons name='check-circle' size={20} color='green' /> : <Icon name='circle' size={20} />
                            }
                            <Text style={styling.languageTXT}> Bulgarian</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity} onPress={() => {
                        props.navigation.navigate('SpaceDetail')
                    }} >
                        <Text style={styling.signupText}>Select</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default ChooseLanguage;