import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements';
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp(89),
        width: wp(100),
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: 'white'
    },
    headView: {
        paddingRight: 20,
        height: hp('8%'),
        width: wp('100%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',

    },
    headIcon: {
        backgroundColor: 'white',
        color: 'black'
    },
    headTXT: {
        fontSize: fontSize.Space.tag,
        fontFamily: fontFamily.SFUITextBold
    },
    imageView: {
        height: hp('30'),
        backgroundColor: '#C8C7CC'
    },
    labelTXT: {
        fontSize: fontSize.Space.line,
        fontFamily: fontFamily.SFUIText,
        color: '#666666'
    },
    nameTXT: {
        fontSize: fontSize.Space.heading,
        fontFamily: fontFamily.SFUITextBold

    },
    timeTXT: {
        fontSize: fontSize.Space.tag,
        fontFamily: fontFamily.SFUITextBold
    },
    nameView: {
        height: hp(15),
        justifyContent: 'center'
    },
    dataView: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hostView: {
        marginTop: hp(3),
        height: hp(10),
        backgroundColor: '#F9F9F9',
        flexDirection: 'row',
        borderRadius: 10
    },
    statusView: {
        width: wp(40),
    },
    headerView: {
        height: hp(10),
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    iconView: {
        width: wp(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userView: {
        width: wp(20),
        alignItems: 'center'
    },
    availheadView: {
        width: wp(40),
        height: hp(5),
        justifyContent: 'flex-end',
    },
    availTXT: {
        fontSize: fontSize.Account.labels,
        fontFamily: fontFamily.SFUITextSemiBold,
    },
    amenityView: {
        flexDirection: 'row',
        height: hp(8),
        width: wp(85),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-evenly'
    },
    amenOpacity: {
        height: hp(7),
        width: wp(40),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amenTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUIText,
    },
    dayView: {
        height: hp(6),
        // backgroundColor: '#F9F9F9',
        borderRadius: 10,
        flexDirection: 'row',
        borderRadius: 10,
        width: wp(90),
        justifyContent: 'center',
    },
    innerDayView: {
        paddingLeft: 5,
        borderWidth: 0.5,
        width: wp(42),
        backgroundColor: '#F9F9F9',
        flexDirection: 'row',
        alignItems: 'center',

    },
    hourTXT: {
        fontSize: fontSize.Account.txt,
        fontFamily: fontFamily.SFUIText,
        textAlign: 'justify'
    },
    dayTXT: {
        fontSize: fontSize.Account.txt,
        fontFamily: fontFamily.SFUIText,
        color: '#666666',

    },
    adressView: {
        height: hp(5),
        justifyContent: 'center'
    },
    addressTXT: {
        fontSize: fontSize.Space.line,
        fontFamily: fontFamily.SFUIText,

    },
    mapView: {
        height: hp(20),
        backgroundColor: '#666666'
    },
    revwTXT: {
        fontSize: fontSize.Space.line,
        fontFamily: fontFamily.SFUITextSemiBold
    },
    opacityView: {
        height: hp(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    OpacityLog: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    Opacitytxt: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.Space.line,
        color: 'white'
    },
})