import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { hp, wp } from '../../Global/Styles/Scalling';

const Search = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <View style={styling.mainContainer}>
                <View style={styling.inputView}>
                    <Input
                        leftIcon={
                            <Icon name='map-marker' size={15} color='#C8C7CC' />
                        }
                        value='Riverside, Chicago'
                        placeholder='City'
                    />
                    <Input
                        leftIcon={
                            <Icon name='calendar' size={15} color='#C8C7CC' />
                        }
                        placeholder='Date'
                    />
                    <Input
                        leftIcon={
                            <Icon name='clock-o' size={15} color='#C8C7CC' />
                        }

                        placeholder='Time'
                    />
                    <Input

                        leftIcon={
                            <Icons name='door-open' size={15} color='#C8C7CC' />
                        }

                        placeholder='Category'


                    />


                </View>
                <View style={styling.findView}>
                    <TouchableOpacity style={styling.findOpacity}>
                        <Text style={styling.findText}>Find Workspaces</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </SafeAreaView >
    )
}

export default Search;