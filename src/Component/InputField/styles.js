import { Platform, StyleSheet } from 'react-native';
import { wp, hp } from '../../Global/Styles/Scalling';

const styles = StyleSheet.create({
    inputView: {
        marginVertical: hp(0.85),
        width: wp(85),
        alignSelf: 'center'

    },
    inputLabel: {
        color: 'grey',
        // marginLeft: wp(4)
    },
    errorLabel: {
        fontSize: wp(3),
        color: 'red',
        marginLeft: wp(1),
        marginTop: hp(0.3)
    },
    fieldInput: {
        height: Platform.OS == 'ios' ? hp(6) : hp(7),
        borderBottomWidth: 0.5, borderColor: 'grey'
    },

});
export default styles;
