import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { styling } from './styling';
const Signup = () => {
    const [check, setcheck] = useState(false)
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={styling.mainContainer}>
                <View style={styling.innerContainer}>
                    <View style={styling.headerView}>

                        <View style={styling.welcomeView}>
                            <Text style={styling.welcomeLabel}>Welcome user</Text>
                        </View>
                        <View style={styling.signupHeader}>
                            <Text style={styling.siguplabel}>Sign up to join</Text>
                        </View>
                    </View>
                    <View style={styling.avatarView}>
                        <Avatar
                            rounded
                            showEditButton
                            size={86}
                            icon={{
                                name: 'user', type: IconTypes.AntDesign,
                            }}

                            editButton={{
                                name: 'pluscircle', type: IconTypes.AntDesign, color: '#4CD964', size: 30
                            }}

                        />
                    </View>
                </View>
                <View style={styling.formView}>
                    <Input
                        label='Name'
                        placeholder='Joe Doe'
                    />
                    <Input
                        label='Email'
                        placeholder='abc@gmail.com'
                    />
                    <Input
                        label="Password"
                        placeholder='Password'
                        value='0000000000'
                        secureTextEntry
                    />

                </View>
                <View style={styling.checkView}>
                    <Icons.Button name='check-circle' size={20}
                        onPress={() => {
                            if (check == false) {
                                setcheck(true)
                            }
                            else setcheck(false)
                        }}
                        color={check ? '#4CD964' : 'black'}
                        style={styling.iconCheckBox}
                    />
                    <Text style={styling.agreeTXT}>I agree to the</Text>
                    <TouchableOpacity>
                        <Text style={styling.termsTXT}> Terms and Condition</Text>

                    </TouchableOpacity>
                </View>
                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity}>
                        <Text style={styling.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styling.signinView}>
                    <Text style={styling.signinTXT}>Have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styling.opacitysigninTXT}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Signup;