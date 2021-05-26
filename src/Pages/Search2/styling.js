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
        backgroundColor: 'white',
        padding: 20
    },
    searchContainer: {
        width: wp('90%'),
        height: hp('7%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBar: {
        marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('75%'),
        height: hp('7%'),
        borderRadius: 6,
        paddingLeft: 10,
        backgroundColor: '#EFEFF4'
    },
    cancelView: {
        // height: hp('8%'),
        // width: wp('15'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelTXT: {
        color: '#666666',
        fontSize: 17,
        fontFamily: fontFamily.SFUIText
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
    endView: {
        height: hp('5%'),
        width: wp('80%'),
        alignSelf: 'center'
    },
    cardheadTXT: {
        fontSize: fontSize.Search2.labels,
        fontFamily: fontFamily.SFUIText,
        fontWeight: '500'
    },
    cardheadLabel: {
        fontSize: fontSize.Search2.line,
        fontFamily: fontFamily.SFUIText,
        fontWeight: '500'
    },
    recentLabel: {
        fontSize: fontSize.Search2.heading,
        fontFamily: fontFamily.SFUITextBold,
    },
    txtLabel: {
        fontSize: fontSize.Search2.heading,
        fontFamily: fontFamily.SFUIText,
    }
})