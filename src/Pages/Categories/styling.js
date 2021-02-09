import { StyleSheet } from 'react-native'
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
        backgroundColor: 'white'

    },
    headerView: {
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'

    },
    innerView: {
        height: hp('10%'),
        width: wp('98%'),
    },
    cardContainer: {
        width: wp('90%'),
        height: hp('30%'),
        flexDirection: 'row',
        marginBottom: 10

    },
    cardView: {
        backgroundColor: '#C8C7CC',
        marginRight: 10,
        width: wp('42%'),
        height: hp('30%'),
        borderRadius: 10,
        justifyContent: 'flex-end',
        padding: 10
    },
    categoryTXT: {
        fontSize: fontSize.Browse3.heading,
        fontFamily: fontFamily.SFUITextHeavy
    },
    headTXT: {
        fontSize: fontSize.Browse3.labels,
        fontFamily: fontFamily.SFUIText,
        color: 'white'
    },
    labelTXT: {
        fontSize: fontSize.Browse3.line,
        fontFamily: fontFamily.SFUIText,
        color: 'white'

    }


})