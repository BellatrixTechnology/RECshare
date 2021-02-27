import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-evenly',
    },
    innerContainer: {
        width: wp('50%'),
    },
    welcomeHeader: {
        width: wp('40%'),

    },
    signinHeader: {
        width: wp('40%'),
        alignSelf: 'flex-start',

    },
    formView: {
        width: wp('90%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    forgetView: {

        width: wp('34%'),
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    signinView: {
        width: wp('90%'),
        height: hp('15%'),
        justifyContent: 'center',

    },
    signupView: {
        width: wp('90%'),
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    welcomeLabel: {
        fontSize: fontSize.Login.welcomeHead,
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: "bold",


    },


    siginlabel: {
        fontFamily: fontFamily.SFUIText,
        color: '#666666',
        fontSize: fontSize.Login.signinhead,
        lineHeight: hp(8),

    },

    opacityForgetTXT:
    {
        color: 'black',
        fontSize: fontSize.Login.signinhead,
        fontFamily: fontFamily.SFUIText,

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


    opacitysignupTXT: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: fontSize.Login.signinhead,
        fontFamily: fontFamily.SFUITextHeavy,

    },
    signupTXT:
    {
        color: 'black',

        fontSize: fontSize.Login.signinhead,
        fontFamily: fontFamily.SFUIText,

    }

})