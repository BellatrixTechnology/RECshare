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
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
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
        height: hp('40%'),
        // width: wp('70%'),
    },
    availableView: {
        height: hp('5%'),
        justifyContent: 'flex-end'

    },
    TimeView: {
        height: hp('10%'),
        borderBottomWidth: 0.5
    },
    availableTXT: {
        fontSize: fontSize.Schedule.labels,
        fontFamily: fontFamily.SFUITextBold
    },
    TimeOpacity1: {
        backgroundColor: 'pink',
        margin: 10,
        height: 40,
        width: wp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#AA4AFF'

    },
    TimeOpacity: {
        margin: 10,
        height: 40,

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
        height: hp('8%'),
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
        // width: wp('90%'),
        height: hp('30%'),
        justifyContent: 'center',
    },
    signupOpacity: {
        width: wp('90%'),
        height: hp('7%'),
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