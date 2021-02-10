import React from 'react';
import { View, Switch, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Activebar = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <View style={styling.mainContainer}>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>

                    </View>
                    <View style={styling.cardTXTView}>

                        <View>
                            <View style={styling.labelView}>
                                <Text style={styling.cardheadTXT}>Green Heritage Office</Text>
                                <Text style={styling.cardheadTXT}>100$</Text>
                            </View>
                            <View style={styling.innerTXT}>
                                <Text style={styling.cardheadLabel}>Meeting Room</Text>

                            </View>

                            <Text style={styling.cardmintLabel}>4 Feb 2019 - 09:00 PM</Text>

                        </View>

                    </View>
                </View>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>

                    </View>
                    <View style={styling.cardTXTView}>

                        <View>
                            <View style={styling.labelView}>
                                <Text style={styling.cardheadTXT}>Midspace Solution</Text>
                                <Text style={styling.cardheadTXT}>$50</Text>
                            </View>
                            <View style={styling.innerTXT}>
                                <Text style={styling.cardheadLabel}>Private Office</Text>

                            </View>

                            <Text style={styling.cardmintLabel}>4 Feb 2019 - 09:00 PM</Text>

                        </View>

                    </View>
                </View>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>

                    </View>
                    <View style={styling.cardTXTView}>

                        <View>
                            <View style={styling.labelView}>
                                <Text style={styling.cardheadTXT}>Pacific Work Place</Text>
                                <Text style={styling.cardheadTXT}>$100</Text>
                            </View>
                            <View style={styling.innerTXT}>
                                <Text style={styling.cardheadLabel}>Seminar Room</Text>

                            </View>

                            <Text style={styling.cardmintLabel}>4 Feb 2019 - 09:00 PM</Text>

                        </View>

                    </View>
                </View>
                <View style={styling.cardContainer}>
                    <View style={styling.cardView}>

                    </View>
                    <View style={styling.cardTXTView}>

                        <View>
                            <View style={styling.labelView}>
                                <Text style={styling.cardheadTXT}>Flexible Office Space</Text>
                                <Text style={styling.cardheadTXT}>$39</Text>
                            </View>
                            <View style={styling.innerTXT}>
                                <Text style={styling.cardheadLabel}>Event Room</Text>

                            </View>

                            <Text style={styling.cardmintLabel}>4 Feb 2019 - 09:00 PM</Text>

                        </View>

                    </View>
                </View>

            </View>

        </SafeAreaView >
    )
}

export default Activebar;