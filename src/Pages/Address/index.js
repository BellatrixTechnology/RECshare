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


const Address = (props) => {
  const [Address, setAddress] = useState('')
  const [optional, setOption] = useState('')
  const [state, setStates] = useState('')
  const [city, setCity] = useState('')
  const [isVisible, setisVisible] = useState(false)
  const [country, setCountry] = useState('')
  const [isLoading, setloading] = useState(false)
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
            country: country,
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
              <View
                style={[styling.AddresInput, { height: hp(6), paddingHorizontal: wp(2), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }]}
              >

                <CountryPicker
                  withCountryNameButton={true}
                  filterProps={{ placeholder: 'Enter country/region name' }}
                  onSelect={(val) => {
                    setisVisible(false)
                    setCountry(val.name)
                  }}
                  visible={isVisible}
                />
                <Text style={styling.addressLabel}>{country}</Text>
              </View>
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
          </ScrollView>
        </View>
      </SafeAreaView>

      <SafeAreaView style={{ backgroundColor: 'white' }} />
    </Fragment>
  );
};

export default Address;
