import React, { Fragment } from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import CalendarPicker from 'react-native-calendar-picker';


const Schedule = (props) => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headerView}>
                    <TouchableOpacity>
                        <Text style={styling.headerTXT}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styling.mainContainer}>
                    <View style={styling.calendarView}>
                        <CalendarPicker
                            scrollable={false}
                            horizontal={true}


                        />
                    </View>
                    <View style={styling.availableView}>
                        <Text style={styling.availableTXT}>Available Time</Text>
                    </View>
                    <View style={styling.TimeView}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styling.TimeOpacity1}>
                                <Text style={styling.TimeTXTselect}>10:00 AM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.TimeOpacity}>
                                <Text style={styling.TimeTXT}>11:00 AM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.TimeOpacity}>
                                <Text style={styling.TimeTXT}>01:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.TimeOpacity}>
                                <Text style={styling.TimeTXT}>02:00 PM</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styling.availableView}>
                        <Text style={styling.availableTXT}>Reminder</Text>
                    </View>
                    <View style={styling.reminderView}>
                        <Text style={styling.reminderHead}>Select alert</Text>

                        <View style={styling.reminderinnerView}>
                            <Text style={styling.reminderLabel}>30 Minute before </Text>
                            <Icon name='right' color='#8A8A8F' size={14} />
                        </View>
                    </View>
                    <View style={styling.signupView}>
                        <TouchableOpacity style={styling.signupOpacity}
                            onPress={() => {
                                props.navigation.navigate('Success')
                            }}
                        >
                            <Text style={styling.signupText}>Next</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Schedule;