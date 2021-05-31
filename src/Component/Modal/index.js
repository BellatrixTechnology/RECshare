import React from 'react';
import { TextInput } from 'react-native';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { hp, wp } from '../../Global/Styles/Scalling';
import { fontFamily, fontSize } from '../../Global/Styles/font';


const Loading = ({ isVisible, }) => {
    return (<Modal isVisible={isVisible}
        backdropOpacity={0.70}
    >
        <View style={styles.loginModalContainer}>
            <ActivityIndicator size='large' />
        </View>
    </Modal>)
};
const AlertCancel = ({ isVisible, onBackdropPress, onBackButtonPress, onPressYes, onPressNo }) => {
    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress} onBackButtonPress={onBackButtonPress} backdropOpacity={0.70}>
        <View style={styles.alertModalCancelContainer}>
            <View style={styles.cancelContainer}>
                <Text style={styles.headingText}>Are you sure?</Text>
                <View style={styles.mainOpacityView}>
                    <TouchableOpacity onPress={onPressNo}
                        style={styles.noButton} >
                        <Text style={styles.noText}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressYes}
                        style={styles.yesButton}>
                        <Text style={styles.yesText}>Yes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal >)
};

const InputModal = ({ isVisible, onBackdropPress, onBackButtonPress, onPressYes, onPressNo, value, onChange, isAddress }) => {
    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress} onBackButtonPress={onBackButtonPress} backdropOpacity={0.70}>
        <View style={{ width: wp(90), height: hp(30), backgroundColor: 'white', borderRadius: wp(5), justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', marginTop: hp(2) }}>
                {!isAddress && <Text style={styles.noText}>Address</Text>}
                {isAddress && <Text style={styles.noText}>Enter your email</Text>}

                <TextInput
                    multiline={true}
                    value={value}
                    onChangeText={onChange}
                    inputStyle={{ fontSize: 15, fontFamily: fontFamily.SFUIText }}
                    style={{ borderWidth: wp(0.2), borderColor: 'black', width: wp(80), height: hp(6), marginTop: hp(2), borderRadius: wp(2), alignSelf: 'center' }}
                />
                <TouchableOpacity onPress={onPressYes}
                    style={styles.yesButton}>
                    <Text style={styles.yesText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal >)
};
const CurrntPassword = ({ isVisible, onBackdropPress, onBackButtonPress, onPressYes, onPressNo, Currentvalue,newvalue,confirmvalue, onChangeCurent,onChangenew,onChangeConfirm, isAddress }) => {
    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress} onBackButtonPress={onBackButtonPress} backdropOpacity={0.70}>
        <View style={{ width: wp(90), paddingVertical:hp(2), backgroundColor: 'white', borderRadius: wp(5), justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', marginTop: hp(2) }}>
                <TextInput
                    placeholder='Current Password'
                    value={Currentvalue}
                    onChangeText={onChangeCurent}
                    inputStyle={{ fontSize: 15, fontFamily: fontFamily.SFUIText }}
                    style={{ borderWidth: wp(0.2), borderColor: 'black', width: wp(80), height: hp(6), marginTop: hp(2), borderRadius: wp(2), alignSelf: 'center' }}
                />
                 <TextInput
                    placeholder='New Password'
                    value={newvalue}
                    secureTextEntry ={true}
                    onChangeText={onChangenew}
                    inputStyle={{ fontSize: 15, fontFamily: fontFamily.SFUIText }}
                    style={{ borderWidth: wp(0.2), borderColor: 'black', width: wp(80), height: hp(6), marginTop: hp(2), borderRadius: wp(2), alignSelf: 'center' }}
                />   
                 <TextInput
                    placeholder='Confirm Password'
                    value={confirmvalue}
                    secureTextEntry ={true}
                    onChangeText={onChangeConfirm}
                    inputStyle={{ fontSize: 15, fontFamily: fontFamily.SFUIText }}
                    style={{ borderWidth: wp(0.2), borderColor: 'black', width: wp(80), height: hp(6), marginTop: hp(2), borderRadius: wp(2), alignSelf: 'center' }}
                />
                <TouchableOpacity onPress={onPressYes}
                    style={styles.yesButton}>
                    <Text style={styles.yesText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal >)
};
export { Loading, AlertCancel, InputModal,CurrntPassword }