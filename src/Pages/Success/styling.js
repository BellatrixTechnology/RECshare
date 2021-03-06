import { StyleSheet } from 'react-native'
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
        justifyContent: 'space-between',
        backgroundColor: '#F2F2F2'
    },
    headView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(3)
    },
    innerView: {
        width: wp('60%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    mainInnerContainer: {
        marginVertical: hp(2),
        width: wp('80%'),
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    avatarView: {
        height: wp('20%'),
        width: wp('20%'),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: wp(10)

    },
    LabelView: {
        height: hp('10%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    successTXT: {
        fontSize: fontSize.success.heading,
        fontFamily: fontFamily.SFUITextBold,
    },
    successLabel: {
        fontSize: fontSize.success.line,
        fontFamily: fontFamily.SFUIText,
        textAlign: 'center'
    },
    headTXT: {
        fontFamily: fontFamily.SFUITextBold,
        fontSize: fontSize.success.labels
    },
    labelTXT: {
        color: '#666666',
        fontSize: fontSize.success.line,
        fontFamily: fontFamily.SFUIText
    },
    labelTXT2: {
        color: 'black',
        fontSize: fontSize.success.line,
        fontFamily: fontFamily.SFUIText
    },
    signupView: {
        width: wp('85%'),
        justifyContent: 'center',
        alignSelf: 'center'
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

})