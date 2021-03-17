import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        height: hp('90%'),
        width: wp('100%'),
        paddingHorizontal: wp(2),
        paddingBottom: hp(2),
        alignItems: 'center',
        backgroundColor: 'white'

    },
    headerView: {
        width: wp('100%'),
        flexDirection: 'row',
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    mainCardView: {
        width: wp(100),
        alignItems: 'center'
    },
    innerView: {
        width: wp('90%'),
        alignSelf: 'center',
        justifyContent: 'center'

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
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        paddingBottom: hp(2),
        paddingTop: hp(8)
    },
    categoryTXT: {
        fontSize: fontSize.Browse3.heading,
        fontFamily: fontFamily.SFUITextHeavy,
        lineHeight: hp(8)
    },
    iconsStyles: {
        alignSelf: 'center',
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