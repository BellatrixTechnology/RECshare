import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Switch, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import IconMap from 'react-native-vector-icons/MaterialIcons'
import { Checkbox } from 'react-native-paper';

import { styling } from './styling';
const Filter = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [checked, setcheck] = useState(false)

    return (
        <SafeAreaView style={styling.safeContainer} >
            <View style={styling.headView}>
                <Icons.Button name="left" style={styling.headIcon} color='black' size={30}>

                </Icons.Button>

                <Text style={styling.resetTXT}> Reset</Text>
            </View>
            <View style={styling.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styling.filterTXT}>Filter</Text>
                    <View style={styling.availheadView}>
                        <Text style={styling.availTXT}>Availabilty</Text>
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Available Today</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={isEnabled ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setIsEnabled(true)
                            }}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styling.availheadView}>
                        <Text style={styling.availTXT}>Sort Option</Text>
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Popularity</Text>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}
                            color='#4CD964'

                        />
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Star Rating (Highest First)</Text>
                        <Checkbox
                            status={false ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}

                        />
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Star Rating (Lowest First)</Text>
                        <Checkbox
                            status={false ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}

                        />
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Best Reviewed First</Text>
                        <Checkbox
                            status={false ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}

                        />
                    </View>

                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Most Reviewed First</Text>
                        <Checkbox
                            status={false ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}

                        />
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Price (lowest first)</Text>
                        <Checkbox
                            status={false ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}

                        />
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Price (higest first)</Text>
                        <Checkbox
                            status={false ? 'checked' : 'unchecked'}
                            onPress={() => { setcheck(true) }}

                        />
                    </View>
                    <View style={styling.availheadView}>
                        <Text style={styling.availTXT}>More Option</Text>
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Capacity</Text>
                        <Text style={styling.anyTXT}>Any</Text>
                    </View>
                    <View style={styling.availTodayView}>
                        <Text style={styling.availTodayTXT}>Space Size (sq ft)</Text>
                        <Text style={styling.anyTXT}>Any</Text>
                    </View>
                    <View style={styling.availheadView}>
                        <Text style={styling.availTXT}>Amenities</Text>
                    </View>
                    <View style={styling.amenityView}>
                        <TouchableOpacity style={styling.amenOpacity}>
                            <Text style={styling.amenTXT}>Wifi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.amenOpacity}>
                            <Text style={styling.amenTXT}>Projector</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.amenityView}>
                        <TouchableOpacity style={styling.amenOpacity}>
                            <Text style={styling.amenTXT}>White Board</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.amenOpacity}>
                            <Text style={styling.amenTXT}>Printer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styling.amenityView}>
                        <TouchableOpacity style={styling.amenOpacity}>
                            <Text style={styling.amenTXT}>TV/Monitor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.amenOpacity}>
                            <Text style={styling.amenTXT}>Kitchen</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={styling.availheadView}>
                        <Text style={styling.availTXT}>Price Range</Text>
                    </View> */}
                    <View style={styling.availheadView}>
                        <Text style={styling.availTXT}>Star Range</Text>
                    </View>
                    <View style={styling.starView}>
                        <TouchableOpacity style={styling.starOpacity1}>
                            <Text style={styling.amenTXT}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.starOpacity}>
                            <Text style={styling.amenTXT}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.starOpacity}>
                            <Text style={styling.amenTXT}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.starOpacity}>
                            <Text style={styling.amenTXT}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.starOpacity2}>
                            <Text style={styling.amenTXT}>5</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styling.opacityView}>
                        <TouchableOpacity style={styling.OpacityLog}>
                            <Text style={styling.Opacitytxt}>Filter</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>

        </SafeAreaView >
    )
}

export default Filter;