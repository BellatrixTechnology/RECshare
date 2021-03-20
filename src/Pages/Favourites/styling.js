import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
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
        width: wp('50%'),
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
    opacityView: {
        flexDirection: 'row',
        height: hp('10%'),
    },
    buttonOpacity: {
        width: wp('50%'),
        height: hp('8%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.3,
        borderRightWidth: 0.3,
        flexDirection: 'row'
    },
    cardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    cardView: {
        backgroundColor: '#C8C7CC',
        marginHorizontal: wp(1),
        width: wp('45%'),
        height: hp('20%'),
        borderRadius: 10,
        // justifyContent: 'flex-end',
        // padding: 10
    },
    innerCardContainer: {
        marginBottom: hp(2)
    },
    cardheadTXT: {
        fontSize: fontSize.Account.labels,
        fontFamily: fontFamily.SFUITextBold,
    }
})