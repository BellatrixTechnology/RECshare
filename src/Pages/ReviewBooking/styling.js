import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },

    headerView: {
        width: wp('20%'),
        paddingHorizontal: wp(2)
    },
    headTXTView: {
        marginHorizontal: wp(5)

    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        justifyContent: 'space-between',
    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold
    },
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.5,
    },
    detailView: {
        justifyContent: 'center',
    },
    labelTXT: {
        color: '#666666',
        fontSize: fontSize.ReviewBooking.txt,
        fontFamily: fontFamily.SFUIText
    },
    mainTXT: {
        fontSize: fontSize.ReviewBooking.labels,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(10)
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
        marginRight: wp(2)
    },
    totalView: {
        padding: 10,

    },
    totalLabelView: {
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