
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
        fontFamily: 'Nunito-Bold',

    },
    loginModalContainer: {
        backgroundColor: 'white',
        width: wp(40),
        alignSelf: 'center',
        borderRadius: wp(5),
        alignItems: 'center',
        paddingVertical: hp(6)
    }
})
export default styles