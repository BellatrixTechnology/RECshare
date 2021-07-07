import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        backgroundColor: 'white'
    },
    headerView: {
        width: wp('20%'),
    },
    headTXTView: {
        paddingLeft: wp(2),
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginHorizontal: wp(4),
        marginVertical: hp(1)
    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(8),
    },
    inputView: {
        marginVertical: hp(2),
        paddingHorizontal: wp(2)
    },
    AddresInput: {
        alignSelf: 'center',
        width: wp(90),
        borderColor: '#bbb',
        borderWidth: wp(0.2),
        borderRadius: wp(1),
        marginTop: hp(0.5)
    },
    addressLabel: {
        fontSize: wp(4),
        fontFamily: fontFamily.SFUITextBold,
        // lineHeight: hp(18),
    },
    row: {
        marginVertical: hp(2),
        paddingHorizontal: wp(2),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        paddingHorizontal: wp(2),
        alignSelf: 'center',
        width: wp(40),
        borderColor: '#bbb',
        borderWidth: wp(0.2),
        borderRadius: wp(1),
        marginTop: hp(0.5)
    },
    signupView: {
        width: wp('90%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: hp(5)
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