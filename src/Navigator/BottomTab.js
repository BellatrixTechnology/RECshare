import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                iconStyle: { color: "rgb(17,129,176)" },
                activeTintColor: 'rgb(17,129,176)',
            }}
        >
            <Tab.Screen name="Browse" component={HomeScreen} />
            <Tab.Screen name="Booking" component={SettingsScreen} />
            <Tab.Screen name="Connect" component={SettingsScreen} />
            <Tab.Screen name="Notification" component={SettingsScreen} />
            <Tab.Screen name="Account" component={SettingsScreen} />


        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    );
}
