import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        padding: 20,
        backgroundColor: '#C8C7CC'
    },
    headView: {
        height: hp('8%'),
        width: wp('100%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#C8C7CC',

    },
    headIcon: {
        backgroundColor: '#C8C7CC',
        color: 'black'
    },
    headForget: {
        color: 'black',
        fontSize: fontSize.headTitle,
        marginLeft: wp('18%'),
        fontFamily: fontFamily.SFUITextHeavy,
        fontWeight: '700',
        lineHeight: 20,
    },
    searchBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('90%'),
        borderRadius: 10,
        paddingLeft: 10
    },
    locationView: {
        width: wp('90%'),
        height: hp('65%'),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',

    },
    floatingButton: {
        height: hp('10%'),
        width: wp('18%'),
        borderRadius: 500,
        backgroundColor: '#FF2D55',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'

    }
})