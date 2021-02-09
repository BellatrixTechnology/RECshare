import { StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '../../Global/Styles/font';

import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    containerView: {
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
        padding: 30,

    },
    headerView: {
        height: hp('25%'),
        width: hp('40%'),
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    greetingView: {
        width: wp('65%'),
        height: hp('13%'),
    },
    locationNoteView: {
        width: wp('70%'),
        height: hp('6%'),
    },


    sendOpacityView: {
        width: wp('85%'),
        height: hp('15%'),
        alignContent: 'center',
        justifyContent: 'center',

    },
    sendOpacity: {
        width: wp('80%'),
        height: hp('8%'),
        // marginLeft: 32,
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noteView: {
        width: wp('70%'),
        height: hp('5%'),
        flexDirection: 'row',
        alignItems: 'center',

    },
    setloctionView: {
        height: hp('10%'),
        width: wp('70%'),
        alignItems: 'center',
        flexDirection: 'row',

    },
    greetingTXT: {
        fontSize: fontSize.setLocation.heading,
        fontWeight: "700",
        lineHeight: 47.5,
        fontFamily: fontFamily.SFUITextHeavy,
    },
    locationNoteTXT: {
        fontSize: fontSize.setLocation.labels,
        color: '#666666',
        fontFamily: fontFamily.SFUIText,


    },
    noteTXT: {
        fontSize: fontSize.setLocation.note,
        color: '#666666',
        fontFamily: fontFamily.SFUITextHeavy,

    },

    sendopacityText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: fontSize.setLocation.labels,
        fontFamily: fontFamily.SFUITextHeavy,

    },
    setloctionTXT: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: fontSize.setLocation.labels,
        fontFamily: fontFamily.SFUITextHeavy,

    },


})