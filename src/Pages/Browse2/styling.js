import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements';
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        paddingTop: hp(2),
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        height: hp(100),
        width: wp(100),
        paddingHorizontal: wp(2),
        alignSelf: 'center',
        paddingVertical: hp(1),
        backgroundColor: 'white',
    },
    innerContainer: {
        alignSelf: 'center'
    },
    labelView: {
        justifyContent: 'center',
        width: wp('90%'),
    },
    labelTXT: {
        fontSize: fontSize.Browse2.heading,
        fontFamily: fontFamily.SFUITextHeavy
    },
    cityView: {
        width: wp('90%'),
        flexDirection: 'row'
    },
    cityTXT: {
        fontSize: fontSize.Browse2.heading,
        fontFamily: fontFamily.SFUITextHeavy,
        textDecorationLine: 'underline',
        color: '#FF2D55'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('90%'),
        borderRadius: 6,
        marginTop: hp(5),
        justifyContent: 'space-evenly'
    },
    searchableContainer: {
        // padding: wp(3),
        width: wp(80)
    },
    searchItemStyle: {
        padding: wp(1),
        marginTop: hp(1),
        backgroundColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: wp(0.3),
        borderRadius: hp(1),
        width: wp(80)
    },
    categoryView: {
        width: wp('90%'),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    innerDetailView: {
        marginVertical: hp(2),
        height: hp(70),
        width: wp(95),
        alignSelf: 'center'
    },
    maininnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('90%'),
        marginVertical: hp(1)
    },
    seeALLOpacity: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardContainer: {
        width: wp('100%'),
        paddingLeft: wp(3),
        flexDirection: 'row',
        alignSelf: 'center'

    },
    mainCardView: {
        width: wp('32%'),
        marginVertical: hp(1),
    },
    cardView: {
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
        marginRight: wp(2)
    },
    nearbyCard: {
        width: wp('80%'),
        height: hp('25%'),
        backgroundColor: '#C8C7CC',
        borderRadius: 13,
        alignItems: 'flex-end',
        padding: 10,
        justifyContent: 'space-between'
    },
    imageViewText: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(1),
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(2)
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
        color: '#8A8A8F',
    },

})