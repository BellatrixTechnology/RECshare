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
        height: hp('22%'),
    },
    labelView: {
        justifyContent: 'center',
        width: wp('90%'),
        height: hp('10%'),
        // backgroundColor: 'blue'
    },
    labelTXT: {
        fontSize: fontSize.Browse2.heading,
        fontFamily: fontFamily.SFUITextHeavy
    },
    cityView: {
        width: wp('90%'),
        height: hp('5%'),
        flexDirection: 'row'
    },
    cityTXT: {
        fontSize: fontSize.Browse2.heading,
        fontFamily: fontFamily.SFUITextHeavy,
        textDecorationLine: 'underline',
        color: '#FF2D55'
    },
    searchBar: {
        marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: 6,
        paddingLeft: 10,
    },

    categoryView: {
        marginTop: 20,
        width: wp('90%'),
        height: hp('5%'),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between',
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
    mainCardView: {
        width: wp('32%'),
        height: hp('26%'),
    },
    cardView: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#AA4AFF',
        width: wp('30%'),
        height: hp('16%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cardView1: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#4CD964',
        width: wp('30%'),
        height: hp('16%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cardView2: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#5AC8FA',
        width: wp('30%'),
        height: hp('16%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    nearInnerView: {
        marginRight: 10
    },
    nearbyCard: {
        width: wp('80%'),
        height: hp('25%'),
        backgroundColor: '#C8C7CC',
        borderRadius: 13,
        alignItems: 'flex-end',
        padding: 10
    },
    cardTXTView: {
        height: hp('6%'),
        width: wp('28%'),
        justifyContent: 'center',
        alignSelf: 'center',
    },

    mapOpacity: {
        width: wp('45%'),
        height: hp('8%'),
        backgroundColor: '#F9F9F9',
        marginRight: 1,
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


    carHeading: {
        fontSize: fontSize.Browse2.txt,
        color: 'black',
        fontFamily: fontFamily.SFUITextHeavy
    },

    CategoryTXT: {
        fontSize: fontSize.Browse.labels,
        fontFamily: fontFamily.SFUITextHeavy

    },
    seeALLTXT: {
        fontSize: fontSize.Browse.txt,
        fontFamily: fontFamily.SFUIText

    },
    carLabel: {
        fontSize: fontSize.Browse.txt,
        fontFamily: fontFamily.SFUIText,
        color: '#8A8A8F'
    },

})