import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements';
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        padding: 20,
    },
    innerContainer: {
        height: hp('40%'),
        width: wp('100%'),
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'

    },
    imageView: {
        width: wp('70%'),
        height: hp('7%'),
    },

    imageView2: {
        width: wp('60%'),
        height: hp('6%')
    },
    discoverOpacity: {
        width: wp('45%'),
        height: hp('5%'),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#AA4AFF',
        justifyContent: 'space-around'
    },
    maininnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('90%'),
        height: hp('5%'),

    },
    seeALLOpacity: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardContainer: {
        width: wp('90%'),
        height: hp('30%'),
        flexDirection: 'row',
    },
    cardView: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#C8C7CC',
        width: wp('35%'),
        height: hp('25%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10
    },
    cardContainer2: {
        width: wp('90%'),
        height: hp('35%'),
        flexDirection: 'row',

    },
    cardView2: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#C8C7CC',
        width: wp('40%'),
        height: hp('20%'),
        borderRadius: 20,
        alignItems: 'flex-end',
        padding: 10
    },
    innerCardView: {
        marginTop: 10,
        marginRight: 5,
        // backgroundColor: '#C8C7CC',
        width: wp('40%'),
        height: hp('30%'),
        borderRadius: 20,

    },
    cardTXTView: {
        height: hp('6%'),
        width: wp('30%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOpacityView: {
        width: wp('90%'),
        height: hp('8%'),
        flexDirection: 'row',
        borderRadius: 10
    },
    mapOpacity: {
        width: wp('45%'),
        height: hp('8%'),
        backgroundColor: '#F9F9F9',
        // marginRight: 1,
        borderRightWidth: 0.5,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterOpacity: {
        width: wp('45%'),
        height: hp('8%'),
        backgroundColor: '#F9F9F9',
        marginRight: 0.5,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer3: {
        width: wp('90%'),
        height: hp('30%'),
        flexDirection: 'row',
    },
    cardView3: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#C8C7CC',
        width: wp('90%'),
        height: hp('10%'),
        borderRadius: 20,

    },
    discoverTXT: {
        fontSize: fontSize.Browse.labels,
        color: 'white',
        fontFamily: fontFamily.SFUIText
    },
    workspaceTEXT: {
        fontSize: fontSize.Browse.heading,
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: '700',
        textAlign: 'center'
    },
    workspaceLabel: {
        fontSize: fontSize.Browse.labels,
        fontFamily: fontFamily.SFUIText,
        textAlign: 'center'
    },
    CategoryTXT: {
        fontSize: fontSize.Browse.labels,
        fontFamily: fontFamily.SFUITextHeavy

    },
    seeALLTXT: {
        fontSize: fontSize.Browse.txt,
        fontFamily: fontFamily.SFUIText

    },
    cardTXT: {
        fontSize: fontSize.Browse.labels,
        fontFamily: fontFamily.SFUITextHeavy,
        color: 'white'
    },
    cardlabel: {
        fontSize: fontSize.Browse.txt,
        fontFamily: fontFamily.SFUIText,
        color: 'white'

    },
    card2headTXT: {
        fontSize: fontSize.Browse.line,
        fontFamily: fontFamily.SFUITextHeavy,

    },
    card2headLabel: {
        fontSize: fontSize.Browse.txt,
        fontFamily: fontFamily.SFUIText,
    }
})