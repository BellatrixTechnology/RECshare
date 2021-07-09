import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
        width: wp('100%'),
        // padding: 10,
        backgroundColor: 'white'
    },
    headerView: {
        backgroundColor: '#FF2D55',
        height: hp(35),
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    inputView: {
        marginVertical: hp(2),
        paddingHorizontal: wp(4)
    },
    AddresInput: {
        alignSelf: 'center',
        width: wp(90),
        borderColor: '#bbb',
        borderWidth: wp(0.2),
        borderRadius: wp(1),
        marginTop: hp(0.5)
    },
    addressLabel: {
        fontSize: wp(4),
        fontFamily: fontFamily.SFUITextBold,
        // lineHeight: hp(18),
    },
    signinView: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp('90%'),
        marginVertical: hp(3)
    },
    signupView: {
        width: wp('90%'),
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: hp(3)
    },
    signinOpacity: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    signinText: {
        fontFamily: fontFamily.SFUITextHeavy,
        color: 'white',
        fontSize: fontSize.Login.signinhead,
        lineHeight: 22,

    },
})