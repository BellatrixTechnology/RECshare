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
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        backgroundColor: 'white'
    },
    headerView: {
        height: hp('8%'),
        width: wp('100%'),
        justifyContent: 'center',
        padding: 10
    },
    headerTXT: {
        color: '#666666',
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Schedule.labels
    },
    calendarView: {
        // width: wp('70%'),
    },

    TimeView: {
        borderBottomWidth: 0.5,
        paddingVertical: hp(1)
    },
    availableTXT: {
        fontSize: fontSize.Schedule.labels,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(8)
    },
    TimeOpacity1: {
        backgroundColor: 'pink',
        height: hp(4),
        width: wp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#AA4AFF',
        marginVertical: hp(1),
        marginHorizontal: wp(1)

    },
    TimeOpacity: {
        height: hp(4),
        marginVertical: hp(1),
        marginHorizontal: wp(1),
        width: wp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#AA4AFF'
    },
    TimeTXTselect: {
        fontSize: fontSize.Schedule.txt,
        color: 'white',
        fontFamily: fontFamily.SFUIText

    },
    TimeTXT: {
        fontSize: fontSize.Schedule.txt,
        color: '#AA4AFF',
        fontFamily: fontFamily.SFUIText

    },
    reminderView: {
        paddingVertical: hp(2),
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reminderinnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    reminderHead: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Schedule.line
    },
    reminderLabel: {
        color: '#8A8A8F',
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Schedule.line
    },
    signupView: {
        marginVertical: hp(1)
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