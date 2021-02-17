import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
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
        alignItems: 'center',
        height: hp('100%'),
        padding: 20,

    },
    labelView: {
        width: wp('80%'),
        height: hp('12%'),

    },
    inputView: {
        width: wp('85%'),
        height: hp('12%'),

    },
    sendView: {
        width: wp('90%'),
        height: hp('12%'),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    headIcon: {
        backgroundColor: 'white',
        color: 'black'
    },
    headForget: {
        color: 'black',
        fontSize: fontSize.headTitle,
        marginLeft: wp('18%'),
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: '700',
        lineHeight: 20,
    },
    labeltxt: {
        fontSize: fontSize.headTitle,
        textAlign: 'center',
        fontFamily: fontFamily.SFUIText,
        lineHeight: 22

    },
    sendOpacity: {
        width: wp('82%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },



    label: {
        fontSize: 40,
        fontWeight: "700",


    },



    sendText: {
        color: 'white',
        fontWeight: '600',
        fontSize: fontSize.headTitle,
        fontFamily: fontFamily.SFUIText,


    },


})
