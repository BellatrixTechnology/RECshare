import React, { Fragment, useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Text
} from 'react-native';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, select } from '../../Redux/Actions/Auth';
import AsyncStorage from '@react-native-community/async-storage';
import { hp, wp } from '../../Global/Styles/Scalling';
import CountryPicker from 'react-native-country-picker-modal'
import Modal from 'react-native-modal'
import country from '../../Component/dummy'

const Address = (props) => {
  const [Address, setAddress] = useState('')
  const [optional, setOption] = useState('')
  const [state, setStates] = useState('')
  const [city, setCity] = useState('')
  const [isVisible, setisVisible] = useState(false)
  const [countrys, setCountrys] = useState('')
  const [isLoading, setloading] = useState(false)
  const [listcountry, setListCoutnry] = useState(country)

  async function adddata() {
    setloading(true);
    auth().onAuthStateChanged(async function (user) {
      if (user) {

        await firestore()
          .collection('User')
          .doc(user.uid)
          .set({
            Address: Address,
            OptionalAddress: optional,
            state: state,
            city: city,
            country: countrys,
          }, { merge: true })
          .then(async () => {
            setloading(false);
            props.navigation.navigate('Payment');

          }
          ).catch(e => {
            setloading(false);
          })
      }

    })
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <SafeAreaView backgroundColor="white" />

      <SafeAreaView style={styling.safeContainer}>
        <View style={styling.headerView}>
          <Icon.Button
            name="left"
            size={30}
            backgroundColor="white"
            color="black"
            onPress={() => {
              props.navigation.goBack();
            }}></Icon.Button>
        </View>
        <View style={styling.headTXTView}>
          <Text style={styling.headTXT}>Address</Text>
        </View>

        <View style={styling.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>

            <View style={styling.inputView}>
              <Text style={styling.addressLabel}>Address</Text>
              <TextInput
                style={styling.AddresInput}
                placeholder='Address'
                onChangeText={(val) => {
                  setAddress(val)
                }}
                value={Address}

              />
            </View>
            <View style={styling.inputView}>
              <Text style={styling.addressLabel}>Address (Optional)</Text>
              <TextInput
                style={styling.AddresInput}
                placeholder='Address (Optional)'
                onChangeText={(val) => {
                  setOption(val)
                }}
                value={optional}

              />
            </View>
            <View style={styling.row}>
              <View>
                <Text style={styling.addressLabel}>City</Text>

                <TextInput
                  style={styling.rowInput}
                  placeholder='City'
                  onChangeText={(val) => {
                    setCity(val)
                  }}
                  value={city}

                />
              </View>
              <View>
                <Text style={styling.addressLabel}>State</Text>

                <TextInput
                  style={styling.rowInput}
                  placeholder='State'
                  onChangeText={(val) => {
                    setStates(val)
                  }}
                  value={state}

                />
              </View>
            </View>
            <View style={styling.inputView}>
              <TouchableOpacity
                onPress={() => setisVisible(true)}
                style={[styling.AddresInput, { height: hp(6), paddingHorizontal: wp(2), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }]}
              >
                {/* <TouchableOpacity style={{ backgroundColor: 'red', paddingVertical: hp(2) }} onPress={() => setisVisible(true)}> */}
                <Text style={styling.addressLabel}>Select Country</Text>

                {/* </TouchableOpacity> */}
                {/* 
                <CountryPicker
                  withCountryNameButton={true}
                  filterProps={{ placeholder: 'Enter country/region name' }}
                  onSelect={(val) => {
                    setisVisible(false)
                    setCountry(val.name)
                  }}
                  visible={isVisible}
                /> */}
                <Text style={styling.addressLabel}>{countrys}</Text>
              </TouchableOpacity>
            </View>
            <View style={styling.signupView}>
              <TouchableOpacity
                style={styling.signupOpacity}
                onPress={() => {
                  if (country != '' && city != '' && Address != '' && state != '') {
                    adddata()
                  }
                  else {
                    ToastAndroid.show('Empty Field', ToastAndroid.LONG)
                  }
                }}>
                {!isLoading ? (
                  <Text style={styling.signupText}>Save</Text>
                ) : (
                  <ActivityIndicator size="large" color="white" />
                )}
              </TouchableOpacity>
            </View>
            <Modal isVisible={isVisible}
              backdropColor='white'
              backdropOpacity={1}
              onBackButtonPress={() => {
                setisVisible(false)

              }}
              onBackdropPress={() => {
                setisVisible(false)

              }}

            >
              <ScrollView style={{ width: wp(100), height: hp(100), paddingTop: hp(-2), marginTop: hp(-2) }}>
                <View style={{ width: wp(90), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Icon
                    name='close'
                    size={24}
                    color='grey'
                    onPress={() => { setCityVIs(false) }}
                  />
                  <TextInput
                    placeholder='Search Country......'
                    placeholderTextColor='black'
                    style={{ width: wp(80), color: 'black', backgroundColor: 'white', borderWidth: wp(0.2), borderColor: '#bbb', borderRadius: 5 }}
                    onChangeText={val => {
                      const newData = country.filter(item => {
                        const itemData = `${item.name.toUpperCase()}`;

                        const textData = val.toUpperCase();

                        return itemData.indexOf(textData) > -1;
                      });
                      setListCoutnry(newData)

                      if (val == '') setListCoutnry(country)
                    }}
                  />
                </View>
                <View>
                  {listcountry.map((item) => {
                    return (
                      <TouchableOpacity style={{ paddingVertical: hp(2), width: wp(90), borderBottomWidth: wp(0.2), borderBottomColor: '#bbb' }}
                        onPress={() => {
                          setCountrys(item.name)
                          setisVisible(false)
                          setListCoutnry(country)
                        }}
                      >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    )
                  }
                  )}
                </View>

              </ScrollView>
            </Modal>
          </ScrollView>
        </View>
      </SafeAreaView>

      <SafeAreaView style={{ backgroundColor: 'white' }} />
    </Fragment>
  );
};

export default Address;
