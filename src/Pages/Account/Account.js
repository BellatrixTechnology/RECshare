import React, { Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Entypo';
import { fontFamily, fontSize } from '../../Global/Styles/font';

import Avatar, { IconTypes, Sizes } from 'rn-avatar';
import { hp, wp } from '../../Global/Styles/Scalling';

const Account = ({ props }) => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />

            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.mainHeaderView}>

                    <View style={styling.headerView}>
                        <Icons.Button name='setting' backgroundColor='#F9F9F9' color='black' size={25}
                            onPress={() => {
                                props.navigation.navigate('Setting')
                            }} />


                        <Iconss.Button name='dots-three-horizontal' size={25} backgroundColor='#F9F9F9' color='black' ></Iconss.Button>

                    </View>
                    <View style={styling.avatarView}>
                        <Avatar
                            rounded
                            size={60}
                            icon={{
                                name: 'user', type: IconTypes.AntDesign,
                            }} />
                        <View style={styling.nameView}>
                            <Text style={styling.nameTXT}>Rachael Barbara</Text>

                            <Text style={styling.emailTXT}>barbara@mail.com</Text>
                        </View>
                    </View>

                </View>
                <View style={styling.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.accountView}>
                            <Text style={styling.accountlTXT}>Account Credits</Text>
                            <TouchableOpacity style={styling.accountOpacity}>
                                <Text style={styling.creditTXT}>$0.00</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styling.accountView}>
                            <Text style={styling.accountlTXT}>Favourite</Text>
                            <TouchableOpacity style={styling.workOpacity} onPress={() => props.navigation.navigate('Favourites')} >
                                <Text style={styling.workTXT} >workspaces</Text>
                                <Icons name='right' size={16} color='#C8C7CC' />
                            </TouchableOpacity>
                        </View>
                        <View style={styling.accountView}>
                            <Text style={styling.accountlTXT}>Add Space</Text>
                            <TouchableOpacity style={styling.workOpacity} onPress={() => { props.navigation.navigate('AddSpace') }} >
                                <Text style={styling.workTXT} >workspaces</Text>
                                <Icons name='right' size={16} color='#C8C7CC' />
                            </TouchableOpacity>
                        </View>
                        <View style={styling.addressView}>
                            <Text style={styling.addressTXT}>Address</Text>
                        </View>
                        <View style={styling.inputView}>
                            <Input
                                label='Home'
                                value='43 Bourke Street, Newbridge NSW 837 R…'
                                rightIcon={
                                    <Icons name='right' size={16} color='#C8C7CC' />
                                }
                                inputContainerStyle={{ borderBottomWidth: 0, width: wp(88), height: hp(4), marginBottom: hp(-3) }}
                                inputStyle={{ fontSize: 15, fontFamily: fontFamily.SFUIText }}
                            />
                        </View>
                        <View style={styling.addAdrsView}>
                            <Text style={styling.newAdrsTXT}>Add new address</Text>
                            <Icons name='pluscircle' size={24} color='#FF2D55' />
                        </View>

                        <View style={styling.addressView}>
                            <Text style={styling.addressTXT}>Payment Cards</Text>
                        </View>

                        <View style={styling.paymentView}>
                            <View style={styling.paymentInnerView}>
                                <View style={styling.paymentCardView}>

                                </View>
                                <View style={styling.cardTXTView}>
                                    <Text style={styling.cardTXT}>Main card</Text>
                                    <Text style={styling.digitTXT}>9432 **** **** ****</Text>

                                </View>
                            </View>

                            <Icons name='right' size={16} color='#C8C7CC' />

                        </View>
                        <View style={styling.paymentView}>
                            <View style={styling.paymentInnerView}>
                                <View style={styling.paymentCardView}>

                                </View>
                                <View style={styling.cardTXTView}>
                                    <Text style={styling.cardTXT}>Oscar card</Text>
                                    <Text style={styling.digitTXT}>**** 34</Text>

                                </View>
                            </View>

                            <Icons name='right' size={16} color='#C8C7CC' />

                        </View>

                        <View style={styling.addAdrsView}>
                            <Text style={styling.newAdrsTXT}>Add new card</Text>
                            <Icons name='pluscircle' size={24} color='#FF2D55' />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default Account;