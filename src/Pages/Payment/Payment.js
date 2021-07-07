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
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { wp } from '../../Global/Styles/Scalling';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, select } from '../../Redux/Actions/Auth';
import AsyncStorage from '@react-native-community/async-storage';

const Payment = (props) => {
  const [CardNo, setCardNo] = useState('');
  const [holder, setHolder] = useState('');
  const [expire, setExpire] = useState('');
  const [cvc, setcvc] = useState('');
  const [isLaoding, setloading] = useState(false);
  const isLogin = useSelector((state) => state.Auth.isLogin);
  const dispatch = useDispatch();

  console.log(isLogin);

  async function adddata() {
    setloading(true);
    auth().onAuthStateChanged(async function (user) {
      if (user) {
        let data = [];
        await firestore()
          .collection('User')
          .doc(user.uid)
          .collection('Payment')
          .get()
          .then(async (doc) => {
            doc.forEach((item) => {
              if (item.data().CardNo == CardNo) {
                data.push(item.data());
              }
            });
          });
        if (data[0]?.CardNo === CardNo) {
          setloading(false);

          ToastAndroid.show('Already Exist', ToastAndroid.LONG);
        } else {
          const id = firestore().collection('User').doc().id;

          await firestore()
            .collection('User')
            .doc(user.uid)
            .collection('Payment')
            .doc(id)
            .set({
              CardNo: CardNo.slice(0, -1),
              holder: holder,
              expire: expire.slice(0, -1),
              cvc: cvc,
              id: id,
            })
            .then(async () => {
              setloading(false);
              if (isLogin) {
                props.navigation.goBack();
              } else {
                let tok = await AsyncStorage.getItem('token');
                dispatch(login({ userName: tok }));
              }
            });
        }
      } else {
        console.log('error');
        setloading(false);
      }
    });
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
          <Text style={styling.headTXT}>Payment</Text>
        </View>

        <View style={styling.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styling.cardContainer}>
              <View style={styling.cardView}>
                <View
                  style={[
                    styling.inputView,
                    { borderBottomWidth: 0, width: wp(80) },
                  ]}>
                  <Text style={[styling.cardTXT, { color: 'white' }]}>
                    {' '}
                    Card Number
                  </Text>
                  <Text style={[styling.valueTXT, { color: 'white' }]}>
                    {' '}
                    {CardNo.slice(0, -1)}
                  </Text>
                </View>
                <View
                  style={[
                    styling.inputView,
                    { borderBottomWidth: 0, width: wp(80) },
                  ]}>
                  <Text style={[styling.cardTXT, { color: 'white' }]}>
                    Card Holder
                  </Text>
                  <Text style={[styling.valueTXT, { color: 'white' }]}>
                    {' '}
                    {holder}
                  </Text>
                </View>
                <View
                  style={[
                    styling.inputView,
                    { borderBottomWidth: 0, width: wp(80) },
                  ]}>
                  <Text style={[styling.cardTXT, { color: 'white' }]}>
                    Expires
                  </Text>
                  <Text style={[styling.valueTXT, { color: 'white' }]}>
                    {' '}
                    {expire.slice(0, -1)}
                  </Text>
                  <Text style={[styling.cardTXT, { color: 'white' }]}>CVC</Text>
                  <Text style={[styling.valueTXT, { color: 'white' }]}>
                    {' '}
                    {cvc}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styling.inputView}>
              <Text style={styling.cardTXT}> Card Number</Text>
              <TextInput
                style={styling.cardvalueTXT}
                textAlign={'center'}
                placeholder="0909090990956"
                maxLength={19}
                keyboardType="number-pad"
                onChangeText={(value) => {
                  setCardNo(value.replace(/\W/gi, '').replace(/(.{4})/g, '$1-'));
                }}
                value={CardNo}
              />
            </View>
            <View style={styling.inputView}>
              <Text style={styling.cardTXT}>Card Holder</Text>
              <TextInput
                style={styling.valueTXT}
                placeholder="Alpha"
                onChangeText={(val) => {
                  setHolder(val);
                }}
                value={holder}
              />
            </View>
            <View style={styling.inputView}>
              <Text style={styling.cardTXT}>Expires</Text>
              <TextInput
                style={[styling.valueTXT, { width: wp(20) }]}
                placeholder="02-22"
                maxLength={5}
                keyboardType="number-pad"
                onChangeText={(value) => {
                  setExpire(value.replace(/\W/gi, '').replace(/(.{2})/g, '$1-'));
                  // setExpire(val);
                }}
                value={expire}
              />
              <Text style={styling.cardTXT}>CVC</Text>
              <TextInput
                style={styling.valueTXT}
                placeholder="222"
                maxLength={3}
                keyboardType="number-pad"
                onChangeText={(val) => {
                  setcvc(val);
                }}
                value={cvc}
              />
            </View>
            <View style={styling.signupView}>
              <TouchableOpacity
                style={styling.signupOpacity}
                disabled={isLaoding}
                onPress={() => {
                  if (
                    CardNo != '' &&
                    expire != '' &&
                    holder != '' &&
                    cvc.length == 3
                  ) {
                    adddata();
                  } else {
                    ToastAndroid.show('Field is Empty', ToastAndroid.LONG);
                  }
                }}>
                {!isLaoding ? (
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

export default Payment;
