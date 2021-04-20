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
        flex: 1,
        paddingRight: wp(2),
        // alignSelf: 'center',
        backgroundColor: 'white',
    },
    innerContainer: {
        alignSelf: 'center'
    },
    labelView: {
        marginTop: hp(5),
        width: wp('90%'),
        height: hp(8),
    },
    labelTXT: {
        fontSize: fontSize.Browse2.heading,
        fontFamily: fontFamily.SFUITextHeavy,
        paddingHorizontal: wp(2),
    },
    cityView: {
        width: wp('90%'),
        flexDirection: 'row',
        paddingHorizontal: wp(2),
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
        marginTop: hp(2),
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
        alignSelf: 'center',
    },
    innerDetailView: {
        marginVertical: hp(1),
        height: hp(60),
        width: wp(95),
        alignSelf: 'center',
    },
    maininnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('90%'),
        marginVertical: hp(1),
        alignSelf: 'center',
    },
    seeALLOpacity: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardContainer: {
        width: wp('95%'),
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
    cardView22: {
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
    cardheadLabels: {
        fontFamily: fontFamily.SFUITextHeavy
    },
    cardheadLabel: {
        fontSize: fontSize.Browse.labels
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
    buttonOpacityView: {
        width: wp('90%'),
        height: hp('7%'),
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center',

    },
    mapOpacity: {
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: '#F9F9F9',
        // marginRight: 1,
        borderRightWidth: 0.5,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 1
    },
    filterOpacity: {
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: '#F9F9F9',
        marginRight: 0.5,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 1
    },
    cardContainer22: {
        marginVertical: hp(4),
        marginLeft: wp(3),
        alignItems: 'center',
        flexWrap: 'wrap',
        alignSelf: 'center'
    },
    cardView2: {
        backgroundColor: '#C8C7CC',
        width: wp('42%'),
        height: hp('20%'),
        borderRadius: 10,
    },
    innerCardContainer22: {
        marginBottom: hp(2),
        marginHorizontal: hp(1)
    },
    cardheadTXT: {
        fontSize: fontSize.Account.labels,
        fontFamily: fontFamily.SFUITextBold,
    }
})