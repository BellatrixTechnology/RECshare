import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fontFamily, fontSize} from '../../Global/Styles/font';
import {hp, wp} from '../../Global/Styles/Scalling';

export const styling = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    width: wp(100),
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  headView: {
    paddingHorizontal: wp(2),
    width: wp('100%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  headIcon: {
    backgroundColor: 'white',
    color: 'black',
  },
  headTXT: {
    fontSize: fontSize.Space.tag,
    fontFamily: fontFamily.SFUITextBold,
  },
  imageView: {
    height: hp(10),
    width: wp(55),
    paddingLeft: wp(2),
    borderRadius: 10,
    // backgroundColor: '#C8C7CC'
    // alignSelf: 'center',
  },
  labelTXT: {
    fontSize: fontSize.Space.line,
    fontFamily: fontFamily.SFUIText,
    color: '#666666',
  },
  nameTXT: {
    fontSize: fontSize.Space.heading,
    fontFamily: fontFamily.SFUITextBold,
  },
  timeTXT: {
    fontSize: fontSize.Space.tag,
    fontFamily: fontFamily.SFUITextBold,
  },
  timeSchduleTXT: {
    fontSize: fontSize.Space.labels,
    fontFamily: fontFamily.SFUITextBold,
    color: 'white',
  },
  availbleTXT: {
    fontSize: fontSize.Space.line,
    fontFamily: fontFamily.SFUITextBold,
    color: 'white',
  },
  nameView: {
    height: hp(15),
    justifyContent: 'center',
  },
  dataView: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hostView: {
    marginTop: hp(3),
    height: hp(10),
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    borderRadius: 10,
  },
  statusView: {
    marginHorizontal: wp(4),
  },
  headerView: {
    height: hp(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    marginTop: hp(2),
    paddingVertical: hp(1),
    // width: wp()
  },
  header2View: {
    height: hp(10),
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
    marginTop: 10,
  },
  iconView: {
    width: wp(10),
    height: wp(10),
    backgroundColor: '#FF2D55',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  userView: {
    // width: wp(20),
    alignItems: 'center',
    width: wp(10),
    height: wp(10),
    backgroundColor: 'grey',
    borderRadius: 100,
  },
  availheadView: {
    width: wp(40),
    height: hp(5),
    justifyContent: 'flex-end',
  },
  availTXT: {
    fontSize: fontSize.Account.labels,
    fontFamily: fontFamily.SFUITextBold,
  },
  amenityView: {
    marginTop: hp(2),
    flexDirection: 'row',
    height: hp(4),
    width: wp(85),
    alignItems: 'center',
    // alignSelf: 'center',
    // justifyContent: 'space-evenly'
  },
  amenityMoreView: {
    marginTop: hp(2),
    flexDirection: 'row',
    height: hp(4),
    width: wp(85),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  amenOpacity: {
    // height: hp(4),
    paddingHorizontal: wp(2),
    width: wp(40),
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: ,
    flexDirection: 'row',
  },
  amenTXT: {
    paddingHorizontal: wp(2),
    fontSize: fontSize.Account.line,
    fontFamily: fontFamily.SFUIText,
  },
  dayView: {
    flexDirection: 'row',
    width: wp(84),
    height: hp(5),
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  day2View: {
    flexDirection: 'row',
    width: wp(84),
    height: hp(5),
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerDayView: {
    height: hp(5),
    borderRadius: 4,
    width: wp(42),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainSchdView: {
    height: hp(15),
    marginTop: hp(2),
    justifyContent: 'space-evenly',
  },
  SchedueleCiew: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeallView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeView: {
    height: hp(8),
    width: wp(40),
    borderRadius: 10,
    backgroundColor: '#AA4AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDay1View: {
    height: hp(5),
    // borderRadius: 4,
    // borderRightWidth: 0.2,
    width: wp(42),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hourTXT: {
    fontSize: fontSize.Account.txt,
    fontFamily: fontFamily.SFUIText,
    textAlign: 'justify',
  },
  hour1TXT: {
    fontSize: fontSize.Account.line,
    fontFamily: fontFamily.SFUITextSemiBold,
    textAlign: 'justify',
  },
  dayTXT: {
    fontSize: fontSize.Account.line,
    fontFamily: fontFamily.SFUIText,
    color: '#666666',
  },
  adressView: {
    height: hp(5),
    justifyContent: 'center',
  },
  addressTXT: {
    fontSize: fontSize.Space.line,
    fontFamily: fontFamily.SFUIText,
  },
  mapView: {
    height: hp(20),
    backgroundColor: '#666666',
  },
  revwTXT: {
    fontSize: fontSize.Space.line,
    fontFamily: fontFamily.SFUITextSemiBold,
  },
  ago: {
    fontSize: fontSize.Space.status,
    fontFamily: fontFamily.SFUIText,
    color: 'grey',
  },
  opacityView: {
    marginBottom: hp(3),
    height: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: (5)
  },
  OpacityLog: {
    width: wp('85%'),
    height: hp('8%'),
    borderRadius: 8,
    backgroundColor: '#FF2D55',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Opacitytxt: {
    fontFamily: 'SFUIText-Bold',
    fontSize: fontSize.Space.line,
    color: 'white',
  },
  openMainView: {
    height: hp(25),
    // width: wp(90),
    marginBottom: hp(2),
  },
  innerOpenView: {
    marginTop: hp(1),
    marginBottom: hp(2),
    height: hp(21),
    backgroundColor: '#EFEFF4',
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  imageMAinView: {
    width: wp(90),
    // height: 10,
    paddingRight: wp(2),
    // alignItems: 'center',
  },
});
