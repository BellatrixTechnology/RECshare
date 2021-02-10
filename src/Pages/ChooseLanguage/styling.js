import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp('100%'),
        width: hp('100%'),
        padding: 20,
        backgroundColor: 'white'
    },


    avatarView: {
        height: hp('20%'),
        width: wp('90%'),
        justifyContent: 'flex-end'

    },


    innerContainer: {
        height: hp('18%'),
        width: wp('90%'),
        justifyContent: 'center'
    },
    radiomainView: {
        height: hp('30%'),
        width: wp('90%'),
    },
    radioView: {
        flexDirection: 'row',
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    languageView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    languageTXT: {
        fontSize: fontSize.Language.txt,
        fontFamily: fontFamily.SFUIText
    },
    greetingTXT: {
        fontFamily: fontFamily.SFUITextHeavy,
        fontSize: fontSize.Language.heading
    },
    greetingLabel: {
        fontFamily: fontFamily.SFUIText,
        fontSize: fontSize.Language.labels,
        textAlign: 'justify',
        color: '#666666'
    },
    signupView: {
        width: wp('90%'),
        height: hp('30%'),
        justifyContent: 'center',
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
        fontFamily: fontFamily.SFUIText,
        color: 'white',
        fontSize: fontSize.Language.labels,
        lineHeight: 22,

    },
})