import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerView: {
        height: hp(10),
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    userView: {
        width: wp(20),
        alignItems: 'center'
    },
    statusView: {
        width: wp(40),
    },
    iconView: {
        width: wp(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        height: hp(86),
        width: wp(100),
        padding: 10
    },
    nameTXT: {
        fontSize: fontSize.Chat.line,
        fontFamily: fontFamily.SFUITextSemiBold
    },
    statusTXT: {
        fontFamily: fontFamily.statusTXT,
        fontSize: fontSize.Chat.status,
        color: '#8C8C8C'

    },
    keyboardView: {
        marginTop: hp(67),
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    inputView: {
        height: hp(5),
        width: wp(75),
        backgroundColor: '#EFEFF4',
        borderRadius: 10
    },
    chatView: {
        alignSelf: 'flex-end',
        padding: 5,
        backgroundColor: '#5AC8FA',
        width: wp(60),
        height: hp(10),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chatTXT: {
        fontSize: fontSize.Chat.line,
        textAlign: 'right',
        color: 'white'
    }

})