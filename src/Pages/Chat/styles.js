import { StyleSheet, Platform } from 'react-native';
import { hp, wp } from '../../Global/Styles/Scalling';
import { fontFamily, fontSize } from '../../Global/Styles/font';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainViewContainer: {
        flex: 1,

    },
    bubbleLeft: {
        backgroundColor: 'lightgray',
        marginBottom: hp(2),
    },
    bubbleRight: {
        backgroundColor: '#ee737f',
        marginBottom: hp(2),
        marginHorizontal: wp(2)
    },
    headerView: {
        height: hp(10),
        paddingLeft: wp(3),
        alignItems: 'center',
        flexDirection: 'row',
        // padding: 5
    },
    userView: {
        width: wp(24),
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
    nameTXT: {
        fontSize: fontSize.Chat.line,
        fontFamily: fontFamily.SFUITextSemiBold
    },
    statusTXT: {
        fontFamily: fontFamily.statusTXT,
        fontSize: fontSize.Chat.status,
        color: '#8C8C8C'

    },
    mainChatView: {
        marginHorizontal: wp(2),
        paddingHorizontal: wp(2),
        paddingVertical: hp(2),
        alignItems: 'flex-end',
        alignSelf: 'flex-end',

    },
    innerChatView: {
        backgroundColor: '#5AC8FA',
        paddingVertical: hp(2),
        paddingHorizontal: wp(2),
        borderRadius: wp(2),

    },
    leftinnerChatView: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(2),
        borderRadius: wp(2),
        backgroundColor: '#EFEFF4',

    },
    textMsg: {
        textAlign: 'left',
        fontSize: hp(2),
        color: 'black',
        fontFamily: 'SFUIText-Medium',
    },
    RightextMsg: {
        textAlign: 'right',
        fontSize: hp(2),
        color: 'white',
        fontFamily: 'SFUIText-Medium',

    },
    time: {
        // textAlign: 'right',
        fontSize: hp(1.6),
        color: 'grey'
    },
    leftChatView: {
        marginHorizontal: wp(2),
        paddingHorizontal: wp(2),
        paddingVertical: hp(2),
        alignItems: 'flex-start',
        alignSelf: 'flex-start',

    },
    inputStyles: {
        borderRadius: wp(5),
        paddingHorizontal: wp(3),
        width: wp(80),
        backgroundColor: '#EFEFF4'

    },
    inputView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: wp(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(2)
    }
});
export default styles;