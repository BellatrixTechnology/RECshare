import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp('100%'),
        width: hp('100%'),
        padding: 20,
        backgroundColor: 'white'
    },
    innerContainer: {

        height: hp('30%'),
        width: wp('90%'),
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    headerView: {
        width: wp('50%'),
        height: hp('20%'),
        justifyContent: 'flex-end'
    },
    welcomeView: {
        width: wp('40%'),
        height: hp('13%'),
    },

    signupHeader: {
        height: hp('5%'),
        width: wp('40%'),
        alignSelf: 'flex-start',

    },
    avatarView: {
        height: hp('20%'),
        width: wp('40%'),
        alignItems: 'center',
        // alignSelf: 'center',
        justifyContent: 'center',

    },
    formView: {
        width: wp('90%'),
        height: hp('38%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkView: {
        flexDirection: 'row',
        width: wp('80%'),
        alignItems: 'center',
        marginLeft: wp('2%')
    },
    iconCheckBox: {
        backgroundColor: 'white',
        width: 45

    },
    agreeTXT: {
        fontSize: fontSize.Signup.terms,
        fontFamily: fontFamily.SFUIText,
        fontWeight: '500'
    },
    termsTXT: {
        fontSize: fontSize.Signup.terms,
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: '700'
    },

    signupView: {
        width: wp('90%'),
        height: hp('10%'),
        justifyContent: 'center',
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
    signinView: {
        height: hp('8%'),
        width: wp('90%'),
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    welcomeLabel: {
        fontSize: fontSize.Login.welcomeHead,
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: "bold",
        lineHeight: 47.5,


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