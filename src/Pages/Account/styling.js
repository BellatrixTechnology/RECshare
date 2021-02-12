import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        height: hp(73),
        width: wp(100),
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,

    },
    mainHeaderView: {
        backgroundColor: '#F9F9F9'
    },
    headerView: {
        height: hp('8%'),
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9'

    },
    avatarView: {
        height: hp(15),
        width: wp(80),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#F9F9F9',
        // backgroundColor: 'red'
    },
    nameView: {
        width: wp('55%'),
        padding: 10,
    },


    nameTXT: {
        fontSize: fontSize.Account.tag,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: 45

    },
    emailTXT: {
        fontSize: fontSize.Account.txt,
        fontFamily: fontFamily.SFUIText,
        color: '#666666'
    },
    accountView: {
        height: hp(8),
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    accountOpacity: {
        backgroundColor: '#AA4AFF',
        width: wp('15%'),
        height: hp('3.5%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    creditTXT: {
        fontSize: fontSize.Account.txt,
        fontFamily: fontFamily.SFUIText,
        color: 'white'
    },
    accountlTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUITextSemiBold,
    },
    workOpacity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    workTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUIText,
        color: '#C8C7CC'
    },
    addressView: {
        width: wp(40),
        height: hp(8),
        justifyContent: 'center'
    },
    addressTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUITextBold,
    },
    inputView: {
        borderBottomWidth: 0.5,
        height: hp('10%')
    },
    addAdrsView: {
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    newAdrsTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUIText,
        color: '#FF2D55'
    },
    paymentView: {
        height: hp(12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.5
    },
    paymentInnerView: {
        height: hp(12),
        width: wp(70),
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentCardView: {
        backgroundColor: '#C8C7CC',
        height: hp(10),
        width: wp(20),
        borderRadius: 10

    },
    cardTXTView: {
        height: hp(10),
        width: wp(40),
        justifyContent: 'center',
        paddingLeft: 10
    },
    cardTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUITextSemiBold,

    },
    digitTXT: {
        fontSize: fontSize.Account.txt,
        fontFamily: fontFamily.SFUIText,


    }
})