import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {styling} from './styling';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Matriel from 'react-native-vector-icons/MaterialCommunityIcons';
import MatrielIcon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {I18n} from '../../../i18n/I18n';

const Categories = (props) => {
  const [Private, setPrivate] = useState(0);
  const [Metting, setMetting] = useState(0);
  const [Seminer, setSeminer] = useState(0);
  const [Office, setOffice] = useState(0);
  const [Event, setEvent] = useState(0);
  const [HotDesk, setHotDesk] = useState(0);
  const [countPrivate, setCountPrivate] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const privates = await firestore().collection('Private').get();
    setPrivate(privates.size);

    const meeting = await firestore().collection('Meeting').get();
    setMetting(meeting.size);
    const seminar = await firestore().collection('Seminar').get();
    setSeminer(seminar.size);
    const office = await firestore().collection('Offices').get();
    setOffice(office.size);
    const events = await firestore().collection('Event').get();
    setEvent(events.size);
    const desk = await firestore().collection('Hot Desk').get();
    setHotDesk(desk.size);
  }
  return (
    <SafeAreaView style={styling.safeContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={false}
      />
      <View>
        <AntDesign
          name="left"
          backgroundColor="white"
          color="black"
          size={30}
          onPress={() => props.navigation.goBack()}
        />
        {/* <Entypo name='dots-three-horizontal' size={30} backgroundColor='white' color='black' /> */}
      </View>
      <View style={styling.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styling.innerView}>
            <Text style={styling.categoryTXT}>{I18n.t('Categories')}</Text>
          </View>
          <View style={styling.mainCardView}>
            <View style={styling.cardContainer}>
              <View
                style={[
                  styling.cardView,
                  {
                    backgroundColor: '#AA4AFF',
                  },
                ]}>
                <View style={styling.iconsStyles}>
                  <FontAwesome name="building" color="white" size={70} />
                </View>
                <View>
                  <Text style={styling.headTXT}>{I18n.t('Private')}</Text>
                  <Text style={styling.labelTXT}>
                    {Private} {I18n.t('Workspace')}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styling.cardView,
                  {
                    backgroundColor: '#4CD964',
                  },
                ]}>
                <View style={styling.iconsStyles}>
                  <Matriel name="account-group" color="white" size={70} />
                </View>
                <View>
                  <Text style={styling.headTXT}>{I18n.t('Meeting')}</Text>
                  <Text style={styling.labelTXT}>
                    {Metting} {I18n.t('Workspace')}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styling.cardContainer}>
              <View
                style={[
                  styling.cardView,
                  {
                    backgroundColor: '#5AC8FA',
                  },
                ]}>
                <View style={styling.iconsStyles}>
                  <FontAwesome
                    name="chalkboard-teacher"
                    color="white"
                    size={70}
                  />
                </View>
                <View>
                  <Text style={styling.headTXT}>{I18n.t('Seminar')}</Text>
                  <Text style={styling.labelTXT}>
                    {Seminer} {I18n.t('Workspace')}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styling.cardView,
                  {
                    backgroundColor: '#FF9500',
                  },
                ]}>
                <View style={styling.iconsStyles}>
                  <Matriel name="office-building" color="white" size={80} />
                </View>
                <View>
                  <Text style={styling.headTXT}>{I18n.t('Office')}</Text>
                  <Text style={styling.labelTXT}>
                    {Office} {I18n.t('Workspace')}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styling.cardContainer}>
              <View style={[styling.cardView, {backgroundColor: '#ff6680'}]}>
                <View style={styling.iconsStyles}>
                  <MatrielIcon name="event" color="white" size={80} />
                </View>
                <View>
                  <Text style={styling.headTXT}>{I18n.t('Event')}</Text>
                  <Text style={styling.labelTXT}>
                    {Event} {I18n.t('Workspace')}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styling.cardView,
                  {
                    backgroundColor: '#df9fdf',
                  },
                ]}>
                <View style={styling.iconsStyles}>
                  <Matriel name="table-large" color="white" size={80} />
                </View>
                <View>
                  <Text style={styling.headTXT}>{I18n.t('Hot Desk')}</Text>
                  <Text style={styling.labelTXT}>
                    {HotDesk} {I18n.t('Workspace')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
