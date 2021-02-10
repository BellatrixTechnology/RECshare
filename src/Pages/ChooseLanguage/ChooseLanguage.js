import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { styling } from './styling';

const ChooseLanguage = () => {
    const [checked, setcheck] = useState(false)
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
                        <View style={styling.languageView}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}
                                color='#4CD964'

                            />

                            <Text style={styling.languageTXT} >English</Text>
                        </View>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />
                            <Text style={styling.languageTXT}>Chinese</Text>
                        </View>
                    </View>
                    <View style={styling.radioView}>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />

                            <Text style={styling.languageTXT} >Portuguese</Text>
                        </View>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />
                            <Text style={styling.languageTXT}>Spanish</Text>
                        </View>
                    </View>
                    <View style={styling.radioView}>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />

                            <Text style={styling.languageTXT} >Hindi</Text>
                        </View>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />
                            <Text style={styling.languageTXT}>Arabic</Text>
                        </View>
                    </View>
                    <View style={styling.radioView}>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />

                            <Text style={styling.languageTXT} >Russian</Text>
                        </View>
                        <View style={styling.languageView}>
                            <Checkbox
                                status={false ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck(true) }}

                            />
                            <Text style={styling.languageTXT}>Bulgarian</Text>
                        </View>
                    </View>


                </View>

                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity}>
                        <Text style={styling.signupText}>Select</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default ChooseLanguage;