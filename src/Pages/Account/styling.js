import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        height: hp(70),
        width: wp(100),
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),

    },
    mainHeaderView: {
        backgroundColor: '#F9F9F9'
    },
    headerView: {
        marginTop: hp(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9'

    },
    avatarView: {
        width: wp(80),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#F9F9F9',
        // backgroundColor: 'red'
    },
    nameView: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(3)
    },


    nameTXT: {
        fontSize: fontSize.Account.tag,
        fontFamily: fontFamily.SFUITextBold,
        lineHeight: hp(6)

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
        justifyContent: 'space-between',
        borderColor: 'grey',
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
        lineHeight: hp(10)
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
        justifyContent: 'center',
        marginVertical: hp(1)
    },
    addressTXT: {
        fontSize: fontSize.Account.line,
        fontFamily: fontFamily.SFUITextBold,
    },
    inputView: {
        borderBottomWidth: 0.5,
    },
    addAdrsView: {
        marginVertical: hp(1),
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.5
    },
    paymentInnerView: {
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
        width: wp(40),
        justifyContent: 'center',
        paddingHorizontal: wp(2)
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