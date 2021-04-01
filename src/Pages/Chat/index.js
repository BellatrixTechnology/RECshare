import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, Text } from 'react-native';
import styles from './styles';
import { GiftedChat, Send, Bubble, Time } from 'react-native-gifted-chat'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/Ionicons';
export default function Chat(props) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi, how are you?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    return (
        <Fragment>
            <StatusBar barStyle={'dark-content'} backgroundColor='white' />
            <SafeAreaView
                style={(styles.container, { backgroundColor: 'white' })}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <Icons.Button name='left' size={26} backgroundColor='white' color='black' ></Icons.Button>
                    <View style={styles.userView}>
                        <Icon name='user-circle' size={40} color='#C8C7CC' />

                    </View>
                    <View style={styles.statusView}>
                        <Text style={styles.nameTXT}>Barbara Michelle</Text>
                        <Text style={styles.statusTXT}>Active Now</Text>
                    </View>
                    <View style={styles.iconView}>
                        <Icon.Button name='phone' backgroundColor='white' color='black' />
                        <Icon.Button name='video-camera' backgroundColor='white' color='black' />
                    </View>

                </View>
                <View style={styles.mainViewContainer}>
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                        placeholder='Write a message'
                        renderAvatar={() => null}
                        renderSend={(props) => {
                            return (
                                <Send
                                    {...props}
                                    containerStyle={{
                                        height: 50,
                                        width: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FontAwesome name='send' size={20} color='#ee737f' />

                                </Send>
                            )
                        }}
                        alwaysShowSend={true}
                        renderBubble={(props) => {
                            return (
                                <Bubble
                                    {...props}
                                    wrapperStyle={{
                                        left: styles.bubbleLeft,
                                        right: styles.bubbleRight
                                    }}
                                />

                            );
                        }}
                        renderTime={(props) => {
                            return (
                                <Time
                                    {...props}

                                />
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    );
}