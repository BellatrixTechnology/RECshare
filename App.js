import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/Pages/Signin/LoginScreen'
import Signup from './src/Pages/Signup/Signup';

import ForgetPassword from './src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from './src/Pages/VerifyCode/VerifyCode';
import tabs from './src/Navigator/BottomTab';
import route from './src/route';
const Stack = createStackNavigator();

console.disableYellowBox = true;


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='route' component={route} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

