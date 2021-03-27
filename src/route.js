import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../src/Pages/Signin/LoginScreen';
import Signup from '../src/Pages/Signup/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgetPassword from '../src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from '../src/Pages/VerifyCode/VerifyCode';
import tabs from '../src/Navigator/BottomTab';
import ChooseLanguage from '../src/Pages/ChooseLanguage/ChooseLanguage';

const Stack = createStackNavigator();

console.disableYellowBox = true;


export default function route(props) {
    const [data, setData] = useState(false)

    useEffect(() => {
        get()

    }, [])
    async function get() {
        try {
            let Login = await AsyncStorage.getItem('Login');
            let parsed1 = JSON.parse(Login);
            setData(parsed1.auth)
            console.log(parsed1)
            if (parsed1.auth) {
                console.log('true')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <NavigationContainer>
            {!data ?
                (<Stack.Navigator headerMode='none'>
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name='Signup' component={Signup} />
                    <Stack.Screen name='VerfiyCode' component={VerfiyCode} />
                    <Stack.Screen name='ChooseLanguage' component={ChooseLanguage} />
                    <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
                </Stack.Navigator>)
                :
                (
                    <Stack.Navigator initialRouteName='tabs' headerMode='none'>
                        <Stack.Screen name='tabs' component={tabs} />
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    )
}

