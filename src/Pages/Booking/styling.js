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
        height: hp(100),
        width: wp(100),
        backgroundColor: 'white'
    },
    headerView: {
        width: wp('95%'),
        alignItems: 'flex-end',
    },
    headTXTView: {
        width: wp('43%'),
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold
    },

    cardContainer: {
        height: hp('18%'),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardView: {
        height: hp('15%'),
        width: wp('25%'),
        backgroundColor: '#C8C7CC',
        borderRadius: 20,
        marginRight: 5,
    },
    cardTXTView: {
        height: hp('15%'),
        width: wp('60%'),
        borderRadius: 20,
        justifyContent: 'center',
        padding: 10,
        borderBottomWidth: 0.5
    },
    cardheadTXT: {
        fontSize: fontSize.Search2.labels,
        fontFamily: fontFamily.SFUITextBold,
        fontWeight: '500'
    },
    cardheadLabel: {
        fontSize: fontSize.Search2.line,
        fontFamily: fontFamily.SFUITextBold,
        fontWeight: '500'
    },
    cardmintLabel: {
        fontSize: fontSize.Search2.line,
        fontFamily: fontFamily.SFUIText,
        color: '#8C8C8C'
    },
    labelView: {
        height: hp('4%'),
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerTXT: {
        height: hp('4%'),
    }
})