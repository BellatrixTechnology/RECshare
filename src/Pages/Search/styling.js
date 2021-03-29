import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements';
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
        backgroundColor: 'white',
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
    },
    headerView: {
        width: wp('20%'),
        justifyContent: 'flex-end',
        paddingHorizontal: wp(2)
    },
    headTXTView: {
        width: wp('43%'),
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(10)
    },
    searchbarView: {
        width: wp('100%'),
        height: hp('70%')
    },
    inputView: {
        width: wp('90%'),
    },
    inputField: {
        marginTop: hp(-4)
    },
    findView: {
        width: wp('90%'),
        justifyContent: 'center',
    },
    findOpacity: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#FF2D55',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    findText: {
        fontFamily: fontFamily.SFUITextHeavy,
        color: 'white',
        fontSize: fontSize.Login.signinhead,
        lineHeight: 22,

    },

})