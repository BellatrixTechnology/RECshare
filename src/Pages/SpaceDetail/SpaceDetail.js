import React, { useState, useEffect, Fragment, useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import { SliderBox } from "react-native-image-slider-box";
import { I18n } from '../../../i18n/I18n';
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styling } from './styling';
import { hp, wp } from '../../Global/Styles/Scalling';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal'
const SpaceDetail = ({ route }) => {
  const SpaceStation = route.params.Space;
  const props = route.params.props;
  const [isVisible, setIsVisble] = useState(true);
  const [usern, setuserName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [checked, setcheck] = useState(false);
  const [obj, setobj] = useState('');
  const [images, setImages] = useState('');
  const [token, settoken] = useState('');
  const mapRef = useRef(null);
  const [ameny, setAmeny] = useState(false)
  const [rew, setRew] = useState(false)
  const [imageStatus, setImageStatus] = useState(false)
  const [reg, setReg] = useState({
    latitude: 32.1738547,
    longitude: 74.223087,
  });
  useEffect(() => {
    get();
  }, []);
  async function get() {
    let tk = await AsyncStorage.getItem('token');
    settoken(tk);
    auth().onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.uid);
        const object = firestore().collection('Data').doc(SpaceStation);
        object.get().then((doc) => {
          if (doc.exists) {
            console.log('Document data:', doc.data());
            setobj(doc.data());
          } else {
            setobj('No Record Found');
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        });
      } else {
        return false;
      }
    });
  }
  const favourite = async () => {
    let alreadyLiked = liked(obj);
    if (alreadyLiked == true) {
      obj.isLikedBy = obj?.isLikedBy?.filter((like) => {
        return like != token;
      });
      await firestore().collection('Data').doc(obj.spaceid).set(obj);

      setobj(obj);
    } else {
      await obj.isLikedBy?.push(token);

      await firestore().collection('Data').doc(obj.spaceid).set(obj);
      setobj(obj);
    }
    get();
  };

  const liked = (item) => {
    if (item.isLikedBy == undefined) {
      return false;
    } else if (item.isLikedBy != undefined && item.isLikedBy.length == 0) {
      return false;
    } else if (item.isLikedBy.length > 0) {
      let myLikes = item.isLikedBy?.filter((like) => {
        return like === token;
      });
      if (myLikes.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView backgroundColor="white" />

      <SafeAreaView style={styling.safeContainer}>
        <View style={styling.headView}>
          <Icons
            name="left"
            style={styling.headIcon}
            color="black"
            size={28}
            onPress={() => {
              props.goBack();
            }}
          />
          <Text style={styling.headTXT}>{I18n.t('SpaceDetail')}</Text>

          <Icons.Button
            name="heart"
            style={styling.headIcon}
            color={obj?.isLikedBy?.includes(token) ? 'red' : 'grey'}
            size={28}
            onPress={() => {
              favourite();
            }}
          />
        </View>

        {obj == '' ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator color={'red'} size={'large'} />
          </View>
        ) : obj == 'No Record Found' ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No Record Found</Text>
          </View>
        ) : (
          <View style={styling.mainContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ padding: 2 }}>
              <View style={styling.imageMAinView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => { setImageStatus(true) }}
                    style={{
                      width: wp(30),
                      backgroundColor: '#C8C7CC',
                      borderRadius: 10,
                    }}>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { setImageStatus(true) }}
                  >
                    <Image style={styling.imageView} source={{ uri: obj.Image }} />

                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp(1),
                  }}>
                  <TouchableOpacity
                    onPress={() => { setImageStatus(true) }}
                    style={{
                      width: wp(30),
                      height: hp(20),
                      backgroundColor: '#C8C7CC',
                      borderRadius: 10,
                    }}></TouchableOpacity>
                  <View
                    style={{ height: hp(20), justifyContent: 'space-between' }}>
                    <TouchableOpacity
                      onPress={() => { setImageStatus(true) }}
                      style={{
                        width: wp(25),
                        height: hp(9),
                        backgroundColor: '#C8C7CC',
                        borderRadius: 10,
                      }}></TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => { setImageStatus(true) }}
                      style={{
                        width: wp(25),
                        height: hp(9),
                        backgroundColor: '#C8C7CC',
                        borderRadius: 10,
                      }}></TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => { setImageStatus(true) }}
                    style={{
                      width: wp(30),
                      height: hp(20),
                      backgroundColor: 'grey',
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: wp(5), color: 'white' }}>+4</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <Image style={styling.imageView} source={{uri: obj.Image}} /> */}
              <View style={styling.nameView}>
                <Text style={styling.labelTXT}>{obj.type}</Text>
                <Text style={styling.nameTXT}>{obj.Space}</Text>
                <Text style={styling.timeTXT}>${obj.credit}/hr</Text>
              </View>
              <View style={styling.dataView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="map-pin" size={10} />
                  <Text>
                    {'  '}
                    {obj.distance} miles {I18n.t('Away')}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Entypo name="user" size={10} />
                  <Text>
                    {'  '}
                    {obj.guest} {I18n.t('guest')}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Entypo name="retweet" size={13} />
                  <Text> 120 m2</Text>
                </View>
              </View>
              <View style={styling.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styling.userView}></View>
                  <View style={styling.statusView}>
                    <Text style={styling.labelTXT}>{I18n.t('Meethost')}</Text>

                    <Text style={styling.timeTXT}>{obj.Host}</Text>
                  </View>
                </View>
                <View style={styling.iconView}>
                  <Iconss
                    name="chatbubble-sharp"
                    color="white"
                    size={26}
                    onPress={() =>
                      props.navigate('Chat', {
                        props: props,
                        type: obj.type,
                        Title: obj.Space,
                        type: obj.type,
                        credit: obj.credit,
                        distance: obj.distance,
                        address: obj.Location,
                        images: obj.Image,
                        id: obj.spaceid,
                        host: obj.Host,
                      })
                    }
                  />
                </View>
              </View>

              <View style={styling.availheadView}>
                <Text style={styling.availTXT}>{I18n.t('Amenities')}</Text>
              </View>
              <View style={styling.amenityView}>
                <TouchableOpacity style={styling.amenOpacity}>
                  <Icons name="wifi" size={15} />
                  <Text style={styling.amenTXT}>{I18n.t('Wifi')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styling.amenOpacity}>
                  <Icon name="snowflake" size={15} />

                  <Text style={styling.amenTXT}>Air Conditioning</Text>
                </TouchableOpacity>
              </View>
              <View style={styling.amenityView}>
                <TouchableOpacity style={styling.amenOpacity}>
                  <Icon name="chalkboard" size={15} />
                  <Text style={styling.amenTXT}>{I18n.t('Whiteboard')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styling.amenOpacity}>
                  <Icons name="printer" size={15} />
                  <Text style={styling.amenTXT}>{I18n.t('PrinterS')}</Text>
                </TouchableOpacity>
              </View>
              <View style={styling.amenityView}>
                <TouchableOpacity style={styling.amenOpacity}>
                  <Icon name="tv" size={15} />
                  <Text style={styling.amenTXT}>{I18n.t('TvM')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styling.amenOpacity}>
                  <MaterialIcon name="kitchen" size={15} s />
                  <Text style={styling.amenTXT}>{I18n.t('Kitchen')}</Text>
                </TouchableOpacity>
              </View>
              {
                ameny && <>
                  <View style={styling.amenityView}>
                    <TouchableOpacity style={styling.amenOpacity}>
                      <Icons name="laptop" size={20} />
                      <Text style={styling.amenTXT}>Laptop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styling.amenOpacity}>
                      <MaterialIcon name="kitchen" size={15} s />
                      <Text style={styling.amenTXT}>Kitchen</Text>
                    </TouchableOpacity>
                  </View>

                </>
              }
              <TouchableOpacity style={styling.amenityMoreView} onPress={() => setAmeny(!ameny)}>
                {!ameny ? <>
                  <Icons name="pluscircleo" color="#666666" />
                  <Text style={styling.labelTXT}> 2 More Amenities</Text>
                </> :
                  <>
                    <Icons name="minuscircleo" color="#666666" />
                    <Text style={styling.labelTXT}> 2 Less Amenities</Text>
                  </>
                }
              </TouchableOpacity>
              <View style={styling.openMainView}>
                <View style={styling.availheadView}>
                  <Text style={styling.availTXT}>{I18n.t('openhour')}</Text>
                </View>

                <View style={styling.innerOpenView}>
                  <View style={styling.dayView}>
                    <View style={styling.innerDay1View}>
                      <Text style={styling.dayTXT}>{I18n.t('Monday')}:</Text>
                      <Text style={styling.hour1TXT}>{obj.monday}</Text>
                    </View>
                    <View style={styling.innerDayView}>
                      <Text style={styling.dayTXT}> {I18n.t('Firday')}: </Text>
                      <Text style={styling.hour1TXT}>{obj.Friday}</Text>
                    </View>
                  </View>
                  <View style={styling.dayView}>
                    <View style={styling.innerDay1View}>
                      <Text style={styling.dayTXT}>{I18n.t('Tuesday')}:</Text>
                      <Text style={styling.hour1TXT}>{obj.Tuesday}</Text>
                    </View>
                    <View style={styling.innerDayView}>
                      <Text style={styling.dayTXT}> {I18n.t('Saturday')}:</Text>
                      <Text style={styling.hour1TXT}>{obj.Saturday} </Text>
                    </View>
                  </View>
                  <View style={styling.dayView}>
                    <View style={styling.innerDay1View}>
                      <Text style={styling.dayTXT}>{I18n.t('Wednesday')}:</Text>
                      <Text style={styling.hour1TXT}>{obj.Wednesday}</Text>
                    </View>
                    <View style={styling.innerDayView}>
                      <Text style={styling.dayTXT}> {I18n.t('Sunday')}:</Text>
                      <Text style={styling.hour1TXT}>{obj.sunday}</Text>
                    </View>
                  </View>
                  <View style={styling.day2View}>
                    <View style={styling.innerDay1View}>
                      <Text style={styling.dayTXT}>{I18n.t('Thursday')}: </Text>
                      <Text style={styling.hour1TXT}>{obj.Thrusday}</Text>
                    </View>
                    <View style={styling.innerDayView}>
                      <Text style={styling.dayTXT}> </Text>
                      <Text style={styling.hour1TXT}></Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styling.availheadView}>
                <Text style={styling.availTXT}>{I18n.t('Description')}</Text>
              </View>
              <Text style={styling.hourTXT}>{obj.Descript}</Text>

              <View style={styling.mainSchdView}>
                <View style={styling.SchedueleCiew}>
                  <Text style={styling.availTXT}>{I18n.t('Schedule')}</Text>
                  <TouchableOpacity
                    style={styling.seeallView}
                    onPress={() => {
                      props.navigate('Scheduele', {
                        props: props,
                        type: obj.type,
                        Title: obj.Space,
                        type: obj.type,
                        credit: obj.credit,
                        distance: obj.distance,
                        address: obj.Location,
                        images: obj.Image,
                        id: obj.spaceid,
                        host: obj.Host,
                      });
                    }}>
                    <Text style={styling.amenTXT}>{I18n.t('See all')}</Text>
                    <Icons name="right" size={14} />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styling.timeView}>
                    <Text style={styling.timeSchduleTXT}>10:00 AM</Text>
                    <Text style={styling.availbleTXT}>Available</Text>
                  </View>
                  <View style={styling.timeView}>
                    <Text style={styling.timeSchduleTXT}>11:00 AM</Text>
                    <Text style={styling.availbleTXT}>Available</Text>
                  </View>
                </View>
              </View>
              <View style={styling.availheadView}>
                <Text style={styling.availTXT}>{I18n.t('Location')}</Text>
              </View>

              <View style={styling.adressView}>
                <Text style={styling.addressTXT}>{obj.Location}</Text>
              </View>

              <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styling.mapView}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                scrollEnabled={false}
                // rotateEnabled={false}
                region={{
                  latitude: obj.marker.latitude,
                  longitude: obj.marker.longitude,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05,
                }}>
                <Marker coordinate={obj.marker} />
                <MapViewDirections
                  origin={obj.marker}
                  destination={{ latitude: 33.6844, longitude: 73.0479 }}
                  apikey={'AIzaSyCGckavZNNNSk--4G5y-RZOvuQ4Ht5srVs'}
                />
              </MapView>

              {/* <View style={styling.mapView}>

                                </View> */}
              <View style={styling.availheadView}>
                <Text style={styling.availTXT}>{I18n.t('Reviews')}</Text>
              </View>
              <View style={styling.header2View}>
                <View style={styling.userView}></View>
                <View style={styling.statusView}>
                  <Text style={styling.revwTXT}>Sri Wedari Soekarno</Text>
                  <Text style={styling.ago}>15 minute ago</Text>
                </View>
              </View>
              <Text style={styling.hourTXT}>
                Mindspace Solution is the latest piece of the sharing economy,
                eliminating extra office space by giving it to freelancers
                looking for a more steady place to work.
              </Text>
              {
                rew &&
                <>
                  <View style={styling.header2View}>
                    <View style={styling.userView}></View>
                    <View style={styling.statusView}>
                      <Text style={styling.revwTXT}>Ransome Steve</Text>
                      <Text style={styling.ago}>15 minute ago</Text>
                    </View>
                  </View>
                  <Text style={styling.hourTXT}>
                    Mindspace Solution is the latest piece of the sharing economy,
                    eliminating extra office space by giving it to freelancers
                    looking for a more steady place to work.
                  </Text>
                </>
              }
              <TouchableOpacity style={styling.amenityMoreView} onPress={() => { setRew(!rew) }}>
                {
                  !rew ?
                    <>
                      <Icons name="pluscircleo" color="#666666" />
                      <Text style={styling.labelTXT}> 1 More Reviews</Text>
                    </> :
                    <>
                      <Icons name="minuscircleo" color="#666666" />
                      <Text style={styling.labelTXT}> 1 More Reviews</Text>
                    </>
                }
              </TouchableOpacity>
              <View style={styling.opacityView}>
                <TouchableOpacity
                  style={styling.OpacityLog}
                  onPress={() => {
                    props.navigate('Scheduele', {
                      props: props,
                      type: obj.type,
                      Title: obj.Space,
                      type: obj.type,
                      credit: obj.credit,
                      distance: obj.distance,
                      address: obj.Location,
                      images: obj.Image,
                      id: obj.spaceid,
                      host: obj.Host,
                    });
                  }}>
                  <Text style={styling.Opacitytxt}>{I18n.t('Book Now')}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
        <Modal isVisible={imageStatus} backdropColor='black' backdropOpacity={0.9}>
          <View style={{ backgroundColor: 'black', height: hp(90), paddingHorizontal: wp(4), borderRadius: 5, paddingBottom: hp(2) }}>
            <View style={{ paddingVertical: hp(2) }}>
              <Icons
                name='close'
                size={24}
                color='grey'
                onPress={() => { setImageStatus(false) }} />
            </View>
            <View style={{ flex: 1 }}>
              <SliderBox
                images={[
                  obj.Image,
                  "https://source.unsplash.com/1024x768/?nature",
                  "https://source.unsplash.com/1024x768/?water",
                  "https://source.unsplash.com/1024x768/?girl",
                  "https://source.unsplash.com/1024x768/?tree",
                ]
                }
                resizeMode='contain'
                sliderBoxHeight={hp(80)}
                parentWidth={wp(80)}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: 'white' }} />
    </Fragment>
  );
};

export default SpaceDetail;
