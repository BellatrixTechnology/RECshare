
import { StyleSheet } from 'react-native';
import { hp, wp } from '../../Global/Styles/Scalling';

const styles = StyleSheet.create({
    alertModalContainer: {
        backgroundColor: 'white',
        width: wp(70),
        alignSelf: 'center',
        borderRadius: wp(5),
        alignItems: 'center',
        paddingVertical: hp(2)
    },
    IconView: {
        marginVertical: hp(1)
    },
    headingText: {
        fontSize: wp(5),
        lineHeight: hp(6),
    },
    loginModalContainer: {
        backgroundColor: 'white',
        width: wp(40),
        alignSelf: 'center',
        borderRadius: wp(5),
        alignItems: 'center',
        paddingVertical: hp(6)
    },
    alertModalCancelContainer: {
        backgroundColor: 'white',
        width: wp(70),
        borderRadius: wp(5),
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    cancelContainer: {
        width: wp(70),
        marginVertical: hp(2),
        justifyContent: 'center',
        paddingHorizontal: wp(5),
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: wp(5)
    },
    mainOpacityView: {
        flexDirection: 'row',
        width: wp(60),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noButton: {
        marginTop: hp(2),
        borderRadius: wp(3.5),
        paddingVertical: hp(2),
        width: wp(26),
        backgroundColor: 'white',
    },
    yesButton: {
        marginTop: hp(2),
        borderRadius: wp(3.5),
        paddingVertical: hp(2),
        width: wp(26),
        backgroundColor: 'red',
    },


    noText: {
        textAlign: 'center',
        fontSize: wp(5),
        color: 'red'
    },
    yesText: {
        textAlign: 'center',
        fontSize: wp(5),
        color: 'white'
    },

})
export default styles