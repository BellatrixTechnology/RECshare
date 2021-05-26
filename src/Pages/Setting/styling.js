import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',

    },

    headView: {
        width: wp('100%'),
        backgroundColor: 'white',
        paddingHorizontal: wp(2)
    },
    mainContainer: {
        height: hp('100%'),
        paddingHorizontal: wp(3),
        // paddingBottom: hp(1),

    },
    labelView: {
        width: wp('80%'),
        height: hp('12%'),

    },

    headIcon: {
        backgroundColor: 'white',
        color: 'black'
    },
    headingView: {
        width: wp('60%'),
        marginHorizontal: wp(3)
        // alignItems: 'center',

    },
    headTXT: {
        fontSize: fontSize.Setting.heading,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(8)
    },


    accountTXT: {
        fontSize: fontSize.Setting.labels,
        fontFamily: fontFamily.SFUITextHeavy,
        lineHeight: hp(6),
        marginHorizontal: hp(2)
    },
    passwrdView: {
        width: wp('10%'),
        backgroundColor: '#4CD964',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: hp(1)
    },
    innerView: {
        width: wp('90%'),
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(1),
        alignSelf: 'center'

    },
    detailView: {
        marginLeft: 10,
        width: wp('75%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 0.2
    },
    notificationView: {

        width: wp('10%'),
        height: hp('6%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    passwrdView: {
        width: wp('10%'),
        height: hp('6%'),
        backgroundColor: '#4CD964',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    privacyView: {
        width: wp('10%'),
        height: hp('6%'),
        backgroundColor: '#FF9500',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signoutView: {
        width: wp('10%'),
        height: hp('6%'),
        backgroundColor: '#AA4AFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailHead: {
        fontSize: fontSize.Setting.labels,
        fontFamily: fontFamily.SFUIText
    },
    innerOptionView: {
        // height: hp('35%'),
        marginBottom: hp(5)
    },
    moreoptionView: {
        alignSelf: 'center',
        width: wp('85%'),
        marginVertical: hp(1),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelTXT: {
        color: '#8A8A8F',
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Setting.line
    }
})
