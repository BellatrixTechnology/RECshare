import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        height: hp(95),
        width: wp(100),
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        justifyContent: 'space-between',

    },
    innerContainer: {
        flexDirection: 'row', width: wp(100),
        justifyContent: 'space-between',
    },
    headerView: {
        // width: wp('90%'),
    },
    welcomeView: {
        marginHorizontal: wp(1)
    },
    signupHeader: {
        // width: wp('90%'),
        marginHorizontal: wp(1)
    },
    avatarView: {
        width: wp(25),
        height: wp(25),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        marginHorizontal: wp(10),
        marginVertical: hp(2),
        borderRadius: wp(50)

    },
    formView: {
        width: wp('90%'),
    },
    checkView: {
        flexDirection: 'row',
        width: wp('80%'),
        marginLeft: wp('2%'),
        alignItems: 'center',
        marginVertical: hp(1)

    },
    inputLabel: {
        color: 'grey',
        marginLeft: wp(2)
    },
    agreeTXT: {
        fontSize: fontSize.Signup.terms,
        fontFamily: fontFamily.SFUIText,
        fontWeight: '500',
        lineHeight: hp(6)
    },
    termsTXT: {
        fontSize: fontSize.Signup.terms,
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: '700',
        lineHeight: hp(6)

    },

    signupView: {
        width: wp('90%'),
        marginVertical: hp(1)
    },
    signupOpacity: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    signupText: {
        fontFamily: fontFamily.SFUITextHeavy,
        color: 'white',
        fontSize: fontSize.Login.signinhead,
        lineHeight: 22,

    },
    textInputStyle: {
        marginBottom: hp(0)
    },
    signinView: {
        width: wp('90%'),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    welcomeLabel: {
        fontSize: fontSize.Login.welcomeHead,
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: "bold",
        lineHeight: hp(8),
    },
    siguplabel: {
        fontFamily: fontFamily.SFUIText,
        color: '#666666',
        fontSize: fontSize.Login.signinhead
    },

    opacitysigninTXT: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: fontSize.Login.signinhead,
        fontFamily: fontFamily.SFUITextHeavy,

    },
    signinTXT:
    {
        color: 'black',
        fontSize: fontSize.Login.signinhead,
        fontFamily: fontFamily.SFUIText,

    }

})