import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
        height: hp('82%'),
        width: wp('100%'),
        padding: 20,
        backgroundColor: 'white'
    },
    headerView: {
        height: hp('7%'),
        width: wp('20%'),
        justifyContent: 'flex-end',
        padding: 5,
    },
    headTXTView: {
        height: hp('7%'),
        width: wp('70%'),
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',
        // backgroundColor: 'red'

    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold
    },
    cardView: {
        height: hp('15%'),
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.5
    },
    detailView: {
        justifyContent: 'center',
        width: wp('60%'),
    },
    labelTXT: {
        color: '#666666',
        fontSize: fontSize.ReviewBooking.txt,
        fontFamily: fontFamily.SFUIText
    },
    mainTXT: {
        fontSize: fontSize.ReviewBooking.labels,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: 50
    },
    lineTXT: {
        fontSize: fontSize.ReviewBooking.txt,
        fontFamily: fontFamily.SFUITextBold
    },
    appleTXT: {
        fontSize: fontSize.ReviewBooking.txt,
        fontFamily: fontFamily.SFUIText,
        color: 'black'
    },
    appleView: {
        width: wp('50%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    applePayView: {
        flexDirection: 'row',
        width: wp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10
    },
    totalView: {
        height: hp('18%'),
        padding: 10,
    },
    totalLabelView: {
        height: hp('8%')
    },
    totalinnerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    rupeeTXT: {
        fontSize: fontSize.ReviewBooking.txt,
        fontFamily: fontFamily.SFUIText
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
})