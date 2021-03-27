import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainContainer: {
        height: hp(88),
        width: wp(100),
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        justifyContent: 'space-between',
        backgroundColor: 'white',

    },
    headerView: {
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    profileView: {
        width: wp(15),
        height: wp(15),
        backgroundColor: 'grey',
        borderRadius: wp(10),
    },
    avatarView: {
        width: wp(90),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    phoneView: {
        width: wp(10),
        borderColor: 'black',
        height: wp(10),
        borderRadius: wp(10),
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp(1)

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
        width: wp(90),
        alignSelf: 'center'
    },
    labelView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(60),
        marginHorizontal: wp(2),
        justifyContent: 'space-between'

    },
    labelTXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.BookingDetails.txt,
        color: '#666666',
        lineHeight: hp(5)
    },
    labelendTXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.BookingDetails.txt,
        color: '#666666',
        lineHeight: hp(5),
    },
    mainDayView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp(90),
    },
    dayView: {
        height: hp('15%'),
        width: wp('30%'),
        marginHorizontal: wp(2)
    },
    arrowView: {
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
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.BookingDetails.txt,
        color: '#666666',
        lineHeight: wp(6)
    },
    cityView: {
        marginHorizontal: wp(2),
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
        justifyContent: 'center',
        alignSelf: 'center'
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