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
    nameTXT: {
        fontSize: fontSize.Chat.line,
        fontFamily: fontFamily.SFUITextSemiBold
    },
    statusTXT: {
        fontFamily: fontFamily.statusTXT,
        fontSize: fontSize.Chat.status,
        color: '#8C8C8C'

    },
});
export default styles;