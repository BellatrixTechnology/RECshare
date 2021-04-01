import React from 'react';
import { View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/Ionicons';

const Chat = (props) => {

    return (
        <SafeAreaView style={styling.flexContainer}>
            <ScrollView>
                <View style={styling.headerView}>
                    <Icons.Button name='left' size={26} backgroundColor='white' color='black' onPress={props.navigation.navigate('Payment')}></Icons.Button>
                    <View style={styling.userView}>
                        <Icon name='user-circle' size={40} color='#C8C7CC' />

                    </View>
                    <View style={styling.statusView}>
                        <Text style={styling.nameTXT}>Barbara Michelle</Text>
                        <Text style={styling.statusTXT}>Active Now</Text>
                    </View>
                    <View style={styling.iconView}>
                        <Icon.Button name='phone' backgroundColor='white' color='black' />
                        <Icon.Button name='video-camera' backgroundColor='white' color='black' />
                    </View>

                </View>
                <View style={styling.mainContainer}>
                    <View style={styling.chatView}>
                        <Text style={styling.chatTXT}>
                            Hi Barbara, can you help me find a room for a meeting next Monday at your place?
                        </Text>
                    </View>

                    <View style={styling.keyboardView}>
                        <Icons name='pluscircle' size={24} color='#FF2D55' />
                        <View style={styling.inputView}>
                            <TextInput placeholder='Write Comment' />
                        </View>
                        <Iconss name='send-sharp' size={24} color='#FF2D55' />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default Chat;