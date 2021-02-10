import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',

    },

    headView: {
        height: hp('8%'),
        width: wp('100%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    mainContainer: {
        backgroundColor: 'white',
        height: hp('100%'),
        padding: 20,

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
        height: hp('6%'),
        width: wp('40%'),
        alignItems: 'center',
        backgroundColor: 'white',

    },
    headTXT: {
        fontSize: fontSize.Setting.heading,
        fontFamily: fontFamily.SFUITextBold
    },
    accountView: {
        height: hp('5%'),
        width: wp('20%'),
        alignItems: 'center'
    },
    optionView: {
        height: hp('5%'),
        width: wp('30%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    accountTXT: {
        fontSize: fontSize.Setting.labels,
        fontFamily: fontFamily.SFUITextHeavy,

    },
    passwrdView: {
        width: wp('10%'),
        height: hp('6%'),
        backgroundColor: '#4CD964',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerView: {
        width: wp('80%'),
        height: hp('8%'),
        flexDirection: 'row',
        alignItems: 'center'
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
        height: hp('38%'),
    },
    moreoptionView: {
        alignSelf: 'center',
        width: wp('85%'),
        height: hp('8%'),
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
