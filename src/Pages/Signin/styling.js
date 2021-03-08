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
        justifyContent: 'center',
    },
    innerContainer: {
        width: wp('50%'),
    },
    welcomeHeader: {
        marginHorizontal: wp(3)
    },
    signinHeader: {
        width: wp('40%'),
        marginHorizontal: wp(3)

    },
    formView: {
        width: wp('90%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center"

    },
    forgetView: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: wp(3)
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
        lineHeight: hp(10)

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