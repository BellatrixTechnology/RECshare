import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        padding: 10,
        backgroundColor: 'white'
    },
    headerView: {
        height: hp('7%'),
        width: wp('100%'),
        justifyContent: 'flex-end',
        padding: 5,
    },
    headTXTView: {
        height: hp('7%'),
        width: wp('45%'),
        justifyContent: 'flex-start',
        // alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        // backgroundColor: 'red'

    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold
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
        height: hp('30%'),
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    cardView: {
        backgroundColor: 'black',
        width: wp('90%'),
        height: hp('30%'),
        borderRadius: 10,
        alignSelf: 'center'
        // justifyContent: 'flex-end',
        // padding: 10
    },
    inputView: {
        height: hp(10),
        padding: 15,
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
        height: hp('20%'),
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

})