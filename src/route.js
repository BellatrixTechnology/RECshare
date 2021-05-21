import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../src/Pages/Signin/LoginScreen';
import Signup from '../src/Pages/Signup/Signup';
import AsyncStorage from '@react-native-community/async-storage';
import ForgetPassword from '../src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from '../src/Pages/VerifyCode/VerifyCode';
import Tabs from '../src/Navigator/BottomTab';
import { useDispatch, useSelector } from 'react-redux';
import { login, select } from './Redux/Actions/Auth';
import { ActivityIndicator, View } from 'react-native';
import { switchLanguage } from '../i18n/I18n';
// import { select, deselect } from '../../Redux/Actions/Auth';

import ChooseLanguage from './Pages/ChooseLanguage/ChooseLanguage';
const Stack = createStackNavigator();

console.disableYellowBox = true;


export default function route() {
    const Lang = useSelector(state => state.Auth.Languages.Types)
    const [Load, setLoad] = useState(true)
    const isLogin = useSelector(state => state.Auth.isLogin)
    const dispatch = useDispatch();
    // const [data, setData] = useState(false)
    const [state, setState] = useState(0);
    // console.log('asda', props)
    useEffect(() => {
        get()
        // getLag()
    }, [])
    // const forceUpdate = () => setState(state + 1);
    // if (Lang) {
    //     switchLanguage(Lang)
    // }


    async function get() {
        try {
            let Login = await AsyncStorage.getItem('token');
            let Langauge = await AsyncStorage.getItem('Langauge');
            console.log(Login, '=====')
            if (Login) {
                dispatch(login({ userName: 'Email' }))
                // setLoad(false)
            }
            if (Langauge != '') {
                dispatch(select({ Types: Langauge }))
                switchLanguage(Langauge)
                setLoad(false)
            }
            else
                setLoad(false)
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
                        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
                        <Stack.Screen name='VerfiyCode' component={VerfiyCode} />
                        <Stack.Screen name='ChooseLanguage' component={ChooseLanguage} />


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

