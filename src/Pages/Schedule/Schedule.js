import React, { Fragment, useState } from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import { I18n } from '../../../i18n/I18n';
import { ToastAndroid } from 'react-native';

const Schedule = ({ route }) => {
    console.log(route.params)
    const props = route.params.props;
    const Title = route.params.Title;
    const credit = route.params.credit;
    const type = route.params.type;
    const distance = route.params.distance;
    const address = route.params.address;
    const Image = route.params.images;
    const host = route.params.host
    const spaceid = route.params.id
    const Time = [
        { Slot: '10:00 AM' }, { Slot: '11:00 AM' }, { Slot: '12:00 AM' }, { Slot: '01:00 PM' }, { Slot: '02:00 PM' }, { Slot: '03:00 PM' }, { Slot: '04:00 PM' }, { Slot: '05:00 PM' }, { Slot: '06:00 PM' }, { Slot: '07:00 PM' }, { Slot: '08:00 PM' }, { Slot: ' 09:00 PM' }, { Slot: '10:00 PM' }, { Slot: '11:00 PM' },
    ]
    const Duration = [
        { Slot: '15 mint' }, { Slot: '30 mint' }, { Slot: '45 mint' }, { Slot: '1 hour' }, { Slot: '1.30 hour' }, { Slot: '2 hour' }
    ]
    const [status, setStatus] = useState('')
    const [statusd, setStatusd] = useState('')

    const [Datee, setDate] = useState('')
    const [EndTime, setEnd] = useState('')
    console.log(status)
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <SafeAreaView backgroundColor='white' />
            <SafeAreaView style={styling.safeContainer} >
                <ScrollView>
                    <View style={styling.headerView}>
                        <TouchableOpacity onPress={() => { props.goBack() }}>
                            <Text style={styling.headerTXT}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.mainContainer}>
                        <View style={styling.calendarView}>
                            <CalendarPicker
                                scrollable={false}
                                horizontal={true}
                                onDateChange={(val) => setDate(val.format('dddd, MMMM DD YYYY'))}
                            />
                        </View>
                        <View style={styling.availableView}>
                            <Text style={styling.availableTXT}>{I18n.t('AvailableTime')}</Text>
                        </View>
                        <View style={styling.TimeView}>
                            <FlatList
                                data={Time}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={status == item.Slot ? styling.TimeOpacity1 : styling.TimeOpacity}
                                            onPress={() => {
                                                setStatus(item.Slot)

                                            }}>
                                            <Text style={status == item.Slot ? styling.TimeTXTselect : styling.TimeTXT}>{item.Slot}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />

                        </View>
                        <View style={styling.availableView}>
                            <Text style={styling.availableTXT}>Select Duration</Text>
                        </View>
                        <View style={styling.TimeView}>
                            <FlatList
                                data={Duration}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={statusd == item.Slot ? styling.TimeOpacity1 : styling.TimeOpacity}
                                            onPress={() => {
                                                setStatusd(item.Slot)

                                            }}>
                                            <Text style={statusd == item.Slot ? styling.TimeTXTselect : styling.TimeTXT}>{item.Slot}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />

                        </View>
                        <View style={styling.availableView}>
                            <Text style={styling.availableTXT}>{I18n.t('Reminder')}</Text>
                        </View>
                        <View style={styling.reminderView}>
                            <Text style={styling.reminderHead}>{I18n.t('Selectalert')}</Text>

                            <View style={styling.reminderinnerView}>
                                <Text style={styling.reminderLabel}>30 Minute before </Text>
                                <Icon name='right' color='#8A8A8F' size={14} />
                            </View>
                        </View>
                        <View style={styling.signupView}>
                            <TouchableOpacity style={styling.signupOpacity}
                                onPress={() => {
                                    if (Datee != '' && status != '') {
                                        props.navigate('ReviewBooking', {
                                            data: {
                                                Time: status,
                                                Date: Datee,
                                                Title: Title,
                                                credit: credit,
                                                type: type,
                                                distance: distance,
                                                address: address,
                                                Image: Image,
                                                id: spaceid,
                                                host: host,
                                                Duration: statusd
                                            },
                                            props: props
                                        })
                                    }
                                    else {
                                        ToastAndroid.show('Please Select Date and Time', ToastAndroid.LONG)
                                    }
                                }}
                            >
                                <Text style={styling.signupText}>{I18n.t('Next')}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Schedule;