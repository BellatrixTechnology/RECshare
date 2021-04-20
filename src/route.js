import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../src/Pages/Signin/LoginScreen';
import Signup from '../src/Pages/Signup/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgetPassword from '../src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from '../src/Pages/VerifyCode/VerifyCode';
import Tabs from '../src/Navigator/BottomTab';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Redux/Actions/Auth';
import { ActivityIndicator, View } from 'react-native';
const Stack = createStackNavigator();

console.disableYellowBox = true;


export default function route(props) {
    const [Load, setLoad] = useState(true)
    const isLogin = useSelector(state => state.Auth.isLogin)
    const dispatch = useDispatch();
    // const [data, setData] = useState(false)
    // console.log('asda', props)
    useEffect(() => {
        get()

    }, [])
    async function get() {

        try {
            let Login = await AsyncStorage.getItem('token');
            if (Login) {
                setLoad(false)
                dispatch(login({ userName: 'Email' }))

            }
            else {
                setLoad(false)
            }


        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        (!Load ?
            <NavigationContainer independent={true}>
                {!isLogin ?
                    (<Stack.Navigator headerMode='none'>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name='Signup' component={Signup} />
                        <Stack.Screen name='VerfiyCode' component={VerfiyCode} />
                        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
                    </Stack.Navigator>)
                    :
                    (
                        // <Tabs />
                        <Stack.Navigator initialRouteName='Tabs' headerMode='none'>
                            <Stack.Screen name='HomeScreen' component={Tabs} />

                        </Stack.Navigator>
                    )
                }
            </NavigationContainer> :
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator color={'red'} size={'large'} />
            </View>

        )
    )
}

