import React, { Fragment } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';
const Success = ({ route }) => {
    console.log(route)
    const Datee = route.params.Date
    const Time = route.params.Time
    const props = route.params.props;
    const Title = route.params.Title;
    const credit = route.params.credit;
    const type = route.params.type;
    const distance = route.params.distance;
    const address = route.params.address;
    const bookID = route.params.bookID
    const name = route.params.name;

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F2F2F2' translucent={false} />
            <SafeAreaView backgroundColor='white' />
            <SafeAreaView style={styling.safeContainer} >

                <View style={styling.mainContainer}>
                    <View style={styling.headView}>
                        <Icon name='checkcircle' size={20} color='#4CD964' size={40} />

                    </View>
                    <View style={styling.innerView}>
                        <Text style={styling.successTXT} >Success!</Text>
                        <Text style={styling.successLabel}>Thank you for choosing our service and trust our host to handle your workplace needs</Text>
                    </View>
                    <View style={styling.mainInnerContainer}>
                        <View style={styling.avatarView}>

                        </View>

                        <View style={styling.LabelView}>
                            <Text style={styling.headTXT}>
                                {name}
                            </Text>
                            <Text style={styling.labelTXT}>
                                {Title}
                            </Text>
                        </View>
                        <View style={styling.LabelView}>
                            <Text style={styling.headTXT}>
                                {Datee}
                            </Text>
                            <Text style={styling.labelTXT2}>
                                {Time}
                            </Text>
                        </View>
                        <View style={styling.LabelView}>
                            <Text style={styling.headTXT}>
                                {address}
                            </Text>
                            <Text style={styling.labelTXT2}>
                                {distance} mi away
                      </Text>
                        </View>

                    </View>
                    <View style={styling.signupView}>
                        <TouchableOpacity style={styling.signupOpacity} onPress={() => {
                            props.navigate('BookingDetails', {
                                name: name,
                                Title: Title,
                                Date: Datee,
                                Time: Time,
                                credit: credit,
                                type: type,
                                address: address,
                                props: props,
                                distance: distance,
                                bookID: bookID
                            })
                        }}>
                            <Text style={styling.signupText}>Check Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Success;