import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements';
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        padding: 20,
    },
    headerView: {
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white'

    },
    headerinnerView: {
        width: wp('60%'),
        marginLeft: 10,
        justifyContent: 'center',
    },
    headerIconView: {
        width: wp('30%'),
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    },
    searchBar: {
        marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: 6,
        paddingLeft: 10,
        elevation: 10
    },
    allOpacityView: {
        flexDirection: 'row',
        width: wp('90%'),
        height: hp('10%'),
        alignItems: 'center',
    },
    privateOpacity: {
        backgroundColor: '#AA4AFF',
        borderRadius: 10,
        width: wp('30%'),
        height: hp('4%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    meetingOpacity: {
        backgroundColor: '#4CD964',
        borderRadius: 10,
        width: wp('30%'),
        height: hp('4%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    eventOpacity: {
        backgroundColor: '#5AC8FA',
        borderRadius: 10,
        width: wp('30%'),
        height: hp('4%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },

    opacityTXT: {
        color: 'white',
        fontSize: fontSize.Browse3.txt,
        fontFamily: fontFamily.SFUIText
    },
    cityLabel: {
        fontSize: fontSize.Browse3.line,
        fontFamily: fontFamily.SFUIText,
        color: '#666666'
    },
    cityTXT: {
        fontSize: fontSize.Browse3.labels,
        fontFamily: fontFamily.SFUITextHeavy,
        // color: '#666666'
    }

})