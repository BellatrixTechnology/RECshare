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
        backgroundColor: 'white'
    },
    headerView: {
        width: wp('20%'),
    },
    headTXTView: {
        width: wp('45%'),
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',
        marginHorizontal: wp(4),
        marginVertical: hp(1)
    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(8),
    },
    opacityView: {
        flexDirection: 'row',
        height: hp('10%'),
    },
    buttonOpacity: {
        width: wp('50%'),
        height: hp('8%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.3,
        borderRightWidth: 0.3,
        flexDirection: 'row'
    },
    cardContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: hp(2),
        alignItems: 'center',
    },
    cardView: {
        backgroundColor: 'black',
        width: wp('90%'),
        height: hp('25%'),
        borderRadius: 10,
        alignSelf: 'center'
    },
    inputView: {
        height: hp(10),
        paddingHorizontal: wp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5

    },

    cardTXT: {
        fontFamily: fontFamily.SFUITextSemiBold,
        fontSize: fontSize.Account.line,
    },
    valueTXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Account.line,
        color: '#8A8A8F'
    },
    signupView: {
        width: wp('90%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: hp(5)
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