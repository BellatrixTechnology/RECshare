import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#C8C7CC'

    },
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        padding: 20,
        backgroundColor: '#C8C7CC'
    },
    headView: {
        height: hp('8%'),
        width: wp('95%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#C8C7CC',
        padding: 10
    },
    headIcon: {
        backgroundColor: '#C8C7CC',
        color: 'black'
    },
    locationView: {
        width: wp('90%'),
        height: hp('60%'),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',

    },
    floatingView: {
        marginRight: 10,
        height: hp('15%'),
        width: wp('65%'),
        // borderRadius: 500,
        backgroundColor: '#FF2D55',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    floatingInnerView: {
        height: hp('12%'),
        width: wp('20%'),
        backgroundColor: '#C8C7CC',
        borderRadius: 10

    },
    txtView: {
        marginLeft: 10,
        height: hp('12%'),
        width: wp('40%'),
        justifyContent: 'center'
    },
    cardheadTXT: {
        fontSize: fontSize.Map.labels,
        fontFamily: fontFamily.SFUITextBold
    },
    cardheadLabel: {
        fontSize: fontSize.Map.line,
        fontFamily: fontFamily.SFUIText,
        color: '#666666'
    }
})