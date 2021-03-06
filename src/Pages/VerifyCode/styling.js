import { StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '../../Global/Styles/font';

import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp(95),
        width: wp(100),
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        backgroundColor: 'white'

    },
    headingView: {
        // width: wp('60%'),
        justifyContent: 'center',
        marginVertical: hp(2),
        marginHorizontal: wp(4)
    },
    headingTEXT: {
        fontFamily: fontFamily.SFUITextHeavy,
        fontSize: fontSize.VerifyCode.heading,
        fontWeight: "700",
        lineHeight: hp(8),
    },
    headingLabelView: {
        width: wp('80%'),
        marginVertical: hp(2),
        marginHorizontal: wp(4)

    },
    headingLabelTEXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.VerifyCode.labels,
        fontWeight: '400',
        lineHeight: hp(3),

    },
    codeView: {
        marginVertical: hp(2)
    },
    verifyView: {
        width: wp('85%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: hp(4)

    },
    verifyOpacity: {

        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    resendView: {
        width: wp('80%'),
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
