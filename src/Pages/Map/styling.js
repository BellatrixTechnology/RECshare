import { StyleSheet } from 'react-native'
import { fontFamily, fontSize } from '../../Global/Styles/font';
import { hp, wp } from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#C8C7CC'

    },
    container: {
        ...StyleSheet.absoluteFillObject,
        // height: hp(100),
        // width: wp(100),
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // padding: 20,
        marginBottom: hp(5)

    },
    map: {
        height: hp(96),
        width: wp(100),
        ...StyleSheet.absoluteFillObject,
    },

    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        paddingHorizontal: wp(3),
        paddingBottom: hp(1),
        backgroundColor: '#C8C7CC',
    },
    headView: {
        width: wp('95%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#C8C7CC',
    },
    headIcon: {
        backgroundColor: '#C8C7CC',
        color: 'black'
    },
    locationView: {
        width: wp('90%'),
        height: hp('55%'),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',

    },
    floatingView: {
        // marginRight: 10,
        height: hp('15%'),
        width: wp('65%'),
        // borderRadius: 500,
        backgroundColor: '#FF2D55',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute'
    },
    floatingInnerView: {
        // paddingHorizontal: wp(2),
        // paddingVertical: hp(2)
        height: hp('12%'),
        width: wp('20%'),
        // // backgroundColor: '#C8C7CC',
        borderRadius: 10

    },
    txtView: {
        marginLeft: 10,
        height: hp('12%'),
        width: wp('40%'),
        justifyContent: 'center'
    },
    cardheadTXT: {
        fontSize: fontSize.Map.labels,
        fontFamily: fontFamily.SFUITextBold
    },
    cardheadLabel: {
        fontSize: fontSize.Map.line,
        fontFamily: fontFamily.SFUIText,
        color: '#666666'
    },
    imageMarkerContainer: {

        borderRadius: 100,
        // backgroundColor: 'pink',
        padding: 3
    },
})
// import { StyleSheet } from 'react-native';
// import { fontFamily, fontSize } from '../../Global/Styles/font';
// import { hp, wp } from '../../Global/Styles/Scalling';


// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         height: hp(100),
//         width: wp(100),
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,

//     },
//     map: {
//         height: hp(96),
//         width: wp(100),
//         ...StyleSheet.absoluteFillObject,
//     },

// });
// export default styles;