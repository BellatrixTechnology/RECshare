import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        height: hp('88%'),
        width: wp('100%'),
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,

    },
    headerView: {
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    avatarView: {
        height: hp('15%'),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameView: {
        width: wp('50%'),
        padding: 10
    },
    confirmOpacity: {
        backgroundColor: '#4CD964',
        width: wp('20%'),
        height: hp('3%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconView: {
        width: wp('18%'),
        height: hp('6%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    phoneView: {
        width: 30,
        borderColor: 'black',
        height: 30,
        borderRadius: 50,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    nameTXT: {
        fontSize: fontSize.BookingDetails.labels,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: 45

    },
    confirmTXT: {
        fontSize: fontSize.BookingDetails.txt,
        fontFamily: fontFamily.SFUIText,
        color: 'white'
    },
    innerView: {
        height: hp('15%'),
        padding: 10,
    },
    labelView: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    labelTXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.BookingDetails.txt,
        color: '#666666',
        lineHeight: 20
    },
    labelendTXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.BookingDetails.txt,
        color: '#666666',
        lineHeight: 20,
        marginLeft: 186
    },
    mainDayView: {
        flexDirection: 'row'
    },
    dayView: {
        height: hp('15%'),
        width: wp('30%'),
        marginRight: 5,
        paddingTop: 10
    },
    arrowView: {
        height: hp('15%'),
        width: wp('20%'),
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dayTXT: {
        fontSize: fontSize.BookingDetails.labels,
        fontFamily: fontFamily.SFUITextBold,

    },
    timeTXT: {
        lineHeight: 40,
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.BookingDetails.txt,
        color: '#666666'
    },
    cityView: {
        height: hp('15%'),
        width: wp('60%'),
        marginRight: 5,
        paddingTop: 10
    },
    mapIconView: {
        height: hp('10%'),
        width: wp('20%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C8C7CC',
        borderRadius: 8

    },
    signupView: {
        width: wp('90%'),
        height: hp('16%'),
        justifyContent: 'center',
    },
    signupOpacity: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#EFEFF4',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    signupText: {
        fontFamily: fontFamily.SFUITextHeavy,
        color: '#8A8A8F',
        fontSize: fontSize.Login.signinhead,
        lineHeight: 22,

    },
})