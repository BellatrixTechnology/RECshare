import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
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
        color: 'black',
        paddingHorizontal: wp(2)
    },
    resetTXT: {
        fontSize: fontSize.Chat.labels,
        color: '#666666'

    },
    filterTXT: {
        fontSize: fontSize.Chat.heading,
        fontFamily: fontFamily.SFUITextBold
    },
    availheadView: {
        width: wp(60),
        height: hp(5),
        justifyContent: 'flex-end',
    },
    availTXT: {
        fontSize: fontSize.Account.labels,
        fontFamily: fontFamily.SFUITextSemiBold,
    },
    availTodayView: {
        borderBottomWidth: 0.5,
        height: hp(7),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    availTodayTXT: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Account.labels
    },
    anyTXT: {
        color: '#8A8A8F',
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Account.labels
    },
    amenityView: {
        flexDirection: 'row',
        height: hp(8),
        width: wp(85),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    amenOpacity: {
        height: hp(7),
        width: wp(40),
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5
    },
    amenTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUIText,
    },
    starView: {
        width: wp(90),
        height: hp(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    starOpacity: {
        width: wp(15),
        height: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        flexDirection: 'row',
    },
    starOpacity1: {
        width: wp(15),
        height: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: wp(5),
        borderBottomLeftRadius: wp(5),
        borderWidth: 0.5,
        flexDirection: 'row'

    },

    starOpacity2: {
        width: wp(15),
        height: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: wp(5),
        borderBottomRightRadius: wp(5),
        borderWidth: 0.5,
        flexDirection: 'row'

    },
    opacityView: {
        height: hp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    OpacityLog: {
        height: hp('8%'),
        width: wp('90%'),
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center'
    },
    Opacitytxt: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.Space.line,
        color: 'white'
    },
    inputStyle: {
        width: wp(40),
        backgroundColor: 'red'

    }
})