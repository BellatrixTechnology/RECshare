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
        padding: 10,
        backgroundColor: 'white'
    },
    headerView: {
        height: hp('7%'),
        width: wp('100%'),
        justifyContent: 'flex-end',
        padding: 5,
    },
    headTXTView: {
        height: hp('7%'),
        width: wp('43%'),
        justifyContent: 'flex-start',
        // alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        // backgroundColor: 'red'

    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold
    },
    searchbarView: {
        width: wp('100%'),
        height: hp('70%')
    },
    inputView: {
        width: wp('90%'),
        height: hp('45%'),
    },
    findView: {
        width: wp('90%'),
        height: hp('40%'),
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