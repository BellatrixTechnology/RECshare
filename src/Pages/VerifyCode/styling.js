import { StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '../../Global/Styles/font';

import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
        padding: 30,

    },
    headingView: {
        width: wp('60%'),
        height: hp('16%'),
        justifyContent: 'center',
    },
    headingTEXT: {
        fontFamily: fontFamily.SFUITextHeavy,
        fontSize: fontSize.VerifyCode.heading,
        fontWeight: "700",
        lineHeight: 47.5,
    },
    headingLabelView: {
        height: hp('6%'),
        width: wp('80%'),

    },
    headingLabelTEXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.VerifyCode.labels,
        fontWeight: '400',

    },
    codeView: {
        width: wp('86%'),
        height: hp('10%'),
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    verifyView: {
        width: wp('80%'),
        height: hp('15%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center'

    },
    verifyOpacity: {

        width: wp('80%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    resendView: {
        width: wp('70%'),
        height: hp('8%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
    },

    mintTxt: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.VerifyCode.labels,
        color: '#8A8A8F'
    },
    resentTxt: {
        color: 'black',
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.VerifyCode.labels,
        // lineHeight: 22,

    },
    verifyText: {
        color: 'white',
        fontFamily: fontFamily.SFUITextHeavy,
        fontSize: fontSize.VerifyCode.labels,
        fontWeight: '700'

    },


})
