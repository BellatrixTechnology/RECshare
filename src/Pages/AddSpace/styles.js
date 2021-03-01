import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        flex: 1,


    },
    headText: {
        fontSize: wp(5),
        alignSelf: 'center',
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(8),
    },
    inputView: {
        width: wp(90),
        alignSelf: 'center'
    },
    fieldView: {
        borderRadius: 10,
        padding: 10,
        marginVertical: hp(1)
    },
    hourView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dayView: {
        borderRadius: 10,
        padding: 10,
        marginHorizontal: hp(1),
        width: wp(25),
        height: hp(5),
        borderWidth: 0.5
    },
    desView: {
        borderRadius: 10,
        height: hp(10),
        padding: 10,
        marginVertical: hp(1)
    },
    timeView: {
        marginVertical: hp(1)
    },
    dayText: {
        fontSize: wp(4),
        fontFamily: fontFamily.SFUITextSemiBold
    },
    signupView: {
        width: wp('90%'),
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