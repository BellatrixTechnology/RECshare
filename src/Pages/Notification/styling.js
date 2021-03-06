import { StyleSheet } from 'react-native'
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: 'white'
    },
    headerView: {
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },

    headTXTView: {
        height: hp('7%'),
        width: wp('70%'),
        justifyContent: 'flex-start',
        // alignSelf: 'center',
        // alignItems: 'center',
        alignContent: 'flex-start',
        // backgroundColor: 'red'

    },
    headTXT: {
        fontSize: fontSize.Search.heading,
        fontFamily: fontFamily.SFUITextBold
    },
    innerView: {
        height: hp('58%'),
        marginTop: 10
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
        fontFamily: fontFamily.SFUIText,
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
        height: hp('8%')
    }
})