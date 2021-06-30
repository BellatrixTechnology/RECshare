import React, {useState, useRef, Fragment, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {Text, Input, colors} from 'react-native-elements';
import Iconss from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';
import {styling} from './styling';
import {hp, wp} from '../../Global/Styles/Scalling';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {ActivityIndicator} from 'react-native-paper';
import {Icon} from 'react-native-elements';

const MapBrowse = (props) => {
  // const [checks, setcheck] = useState(false)
  const mapRef = useRef(null);
  const [isloaded, setisloaded] = useState(true);

  const [reg, setReg] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      get();
    });
    return () => {
      unsubscribe;
    };
  }, []);
  async function get() {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setReg({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    });
    const snapshot = await firestore().collection('Data').get();
    const list = [];
    snapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setData([...list]);
    setisloaded(false);
  }
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />

      <SafeAreaView style={{backgroundColor: 'white'}} />

      <SafeAreaView style={styling.safeContainer}>
        <View style={styling.container}>
          <View style={styling.headerView}></View>
          {isloaded ? (
            <ActivityIndicator size="small" color="red" />
          ) : (
            <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE}
              style={styling.map}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followsUserLocation={true}
              region={{
                latitude: reg.latitude,
                longitude: reg.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}>
              {data.map((elements, index) => (
                <Marker
                  coordinate={elements?.marker}
                  key={index}
                  title={elements?.Space}
                  description={'Space Center'}
                  onPress={() =>
                    props.navigation.navigate('SpaceDetail', {
                      Space: elements.spaceid,
                      props: props.navigation,
                    })
                  }></Marker>
              ))}
            </MapView>
          )}

          <View
            style={{
              // position: 'absolute',
              width: wp(100),
              paddingVertical: hp(1),
              justifyContent: 'space-between',
              // flexDirection: 'column',
              height: hp(100),
            }}>
            <View>
              <AntDesign
                name="left"
                backgroundColor="white"
                color="black"
                size={30}
                onPress={() => props.navigation.goBack()}
              />
            </View>
            <View style={{paddingVertical: hp(10)}}>
              <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        width: wp(70),
                        // height: '20%',
                        elevation: 3,
                        marginHorizontal: wp(3),
                        paddingVertical: hp(2),
                        flexDirection: 'row',
                        borderRadius: 10,
                        justifyContent: 'space-evenly',
                      }}
                      onPress={() =>
                        props.navigation.navigate('SpaceDetail', {
                          Space: item.spaceid,
                          props: props.navigation,
                        })
                      }>
                      <Image
                        style={styling.floatingInnerView}
                        source={{uri: item.Image}}
                      />
                      <View style={styling.txtView}>
                        <Text style={styling.cardheadTXT}>{item.Space}</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Iconss
                            name="map-marker-alt"
                            color="#666666"
                            size={16}
                          />
                          <Text style={styling.cardheadLabel}>
                            {' '}
                            {item.distance} mi away{' '}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
        {/* <View style={styling.headView}>
                    <Icons.Button name="left" style={styling.headIcon} color='black' size={28} onPress={() => { props.navigation.navigate('LoginScreen') }}>

                    </Icons.Button>

                    <Icon name='filter' style={styling.headIcon} color='black' size={20} />
                </View>
                <View style={styling.mainContainer}>


                    <View style={styling.locationView}>
                        <Icon name='map-marker-alt' size={50} color='#FF2D55' />
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={{ justifyContent: 'flex-end' }}>
                        <View style={styling.floatingView}>

                            <View style={styling.floatingInnerView}>

                            </View>
                            <View style={styling.txtView} >
                                <Text style={styling.cardheadTXT}>
                                    Mindspace Solution
                        </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}> 0.48 mi away </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styling.floatingView}>

                            <View style={styling.floatingInnerView}>

                            </View>
                            <View style={styling.txtView} >
                                <Text style={styling.cardheadTXT}>
                                    Mindspace Solution
                        </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='map-marker-alt' color='#666666' size={16} />
                                    <Text style={styling.cardheadLabel}>   0.48 mi away </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View> */}
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: 'white'}} />
    </Fragment>
  );
};

export default MapBrowse;
