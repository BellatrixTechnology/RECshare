import React, { useState, Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Switch, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Ionicons';


import { styling } from './styling';
const SpaceDetail = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [checked, setcheck] = useState(false)

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <SafeAreaView backgroundColor='white' />

            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headView}>
                    <Icons.Button name="left" style={styling.headIcon} color='black' size={28} onPress={() => { props.navigation.navigate('ChooseLanguage') }}>

                    </Icons.Button>
                    <Text style={styling.headTXT}>Space Details</Text>

                    <Icons.Button name='heart' style={styling.headIcon} color='black' size={28}></Icons.Button>
                </View>
                <View style={styling.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 5 }}>
                        <View style={styling.imageView}>

                        </View>

                        <View style={styling.nameView}>
                            <Text style={styling.labelTXT}>Meeting</Text>
                            <Text style={styling.nameTXT}>Mindspace Solution</Text>
                            <Text style={styling.timeTXT}>$48/hr</Text>
                        </View>
                        <View style={styling.dataView}>
                            <Text>7 miles away</Text>
                            <Text>12 guest</Text>
                            <Text>120 m2</Text>
                        </View>
                        <View style={styling.headerView}>
                            <View style={styling.userView}>
                                <Icon name='user-circle' size={40} color='#C8C7CC' />

                            </View>
                            <View style={styling.statusView}>
                                <Text style={styling.labelTXT}>Meet the host</Text>

                                <Text style={styling.timeTXT}>Irene Lacoste</Text>
                            </View>
                            <View style={styling.iconView}>
                                <Iconss name='chatbubble-sharp' color='white' size={26} />
                            </View>

                        </View>

                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>Amenities</Text>
                        </View>
                        <View style={styling.amenityView}>
                            <TouchableOpacity style={styling.amenOpacity}>
                                <Text style={styling.amenTXT}>Air Conditioning</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.amenOpacity}>
                                <Text style={styling.amenTXT}>Kitchen</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.amenityView}>
                            <TouchableOpacity style={styling.amenOpacity}>
                                <Text style={styling.amenTXT}>High Speed WiFi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.amenOpacity}>
                                <Text style={styling.amenTXT}>Personal Lockers</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.amenityView}>
                            <TouchableOpacity style={styling.amenOpacity}>
                                <Text style={styling.amenTXT}>Printer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styling.amenOpacity}>
                                <Text style={styling.amenTXT}>Visual Equipment</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.amenityMoreView}>
                            <Icons name='pluscircleo' color='#666666' />
                            <Text style={styling.labelTXT}>   7 More Amenities</Text>
                        </View>
                        <View style={styling.openMainView}>
                            <View style={styling.availheadView}>
                                <Text style={styling.availTXT}>Open Hour</Text>
                            </View>

                            <View style={styling.innerOpenView}>
                                <View style={styling.dayView}>
                                    <View style={styling.innerDay1View}>
                                        <Text style={styling.dayTXT}>Monday:</Text>
                                        <Text style={styling.hour1TXT}>8 AM-8 PM </Text>
                                    </View>
                                    <View style={styling.innerDayView}>
                                        <Text style={styling.dayTXT}>Friday: </Text>
                                        <Text style={styling.hour1TXT}>8 AM-8 PM </Text>
                                    </View>

                                </View>
                                <View style={styling.dayView}>
                                    <View style={styling.innerDay1View}>
                                        <Text style={styling.dayTXT}>Tuesday:</Text>
                                        <Text style={styling.hour1TXT}>8 AM-8PM </Text>
                                    </View>
                                    <View style={styling.innerDayView}>
                                        <Text style={styling.dayTXT}>Saturday:</Text>
                                        <Text style={styling.hour1TXT}>Closed </Text>
                                    </View>

                                </View>
                                <View style={styling.dayView}>
                                    <View style={styling.innerDay1View}>
                                        <Text style={styling.dayTXT}>Wednesday:</Text>
                                        <Text style={styling.hour1TXT}>8 AM-8 PM </Text>
                                    </View>
                                    <View style={styling.innerDayView}>
                                        <Text style={styling.dayTXT}>Sunday:</Text>
                                        <Text style={styling.hour1TXT}>Closed </Text>
                                    </View>

                                </View>
                                <View style={styling.day2View}>
                                    <View style={styling.innerDay1View}>
                                        <Text style={styling.dayTXT}>Thursday: </Text>
                                        <Text style={styling.hour1TXT}>8 AM-8 PM </Text>
                                    </View>
                                    <View style={styling.innerDayView}>
                                        <Text style={styling.dayTXT}> </Text>
                                        <Text style={styling.hour1TXT}></Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>Description</Text>
                        </View>
                        <Text style={styling.hourTXT}>This locations central proximity to all of the major companies, nonprofit organizations, and Federal agencies in the area make it ideal for those business executives on the  </Text>

                        <View style={styling.mainSchdView}>
                            <View style={styling.SchedueleCiew}>
                                <Text style={styling.availTXT}>Scheduel</Text>
                                <View style={styling.seeallView}>
                                    <Text style={styling.amenTXT}>See All</Text>
                                    <Icons name='right' size={14} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <View style={styling.timeView}>
                                    <Text style={styling.timeSchduleTXT}>07:30 AM</Text>
                                    <Text style={styling.availbleTXT}>Available</Text>
                                </View>
                                <View style={styling.timeView}>
                                    <Text style={styling.timeSchduleTXT}>08:30 AM</Text>
                                    <Text style={styling.availbleTXT}>Available</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>Location</Text>
                        </View>

                        <View style={styling.adressView}>
                            <Text style={styling.addressTXT}>43 Bourke Street, Newbridge NSW 837
Raffles Place, Boat Band M83</Text>
                        </View>



                        <View style={styling.mapView}>

                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>Reviews</Text>
                        </View>
                        <View style={styling.header2View}>
                            <View style={styling.userView}>
                                <Icon name='user-circle' size={40} color='#C8C7CC' />

                            </View>
                            <View style={styling.statusView}>
                                <Text style={styling.revwTXT}>Sri Wedari Soekarno</Text>
                            </View>
                        </View>
                        <Text style={styling.hourTXT}>Mindspace Solution is the latest piece of the sharing economy, eliminating extra office space by giving it to freelancers looking for a more steady place to work.</Text>
                        <View style={styling.amenityMoreView}>
                            <Icons name='pluscircleo' color='#666666' />
                            <Text style={styling.labelTXT}>   7 More Amenities</Text>
                        </View>
                        <View style={styling.opacityView}>
                            <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                                props.navigation.navigate('ReviewBooking')
                            }}>
                                <Text style={styling.Opacitytxt}>Book Now</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment>
    )
}

export default SpaceDetail;