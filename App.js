import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/Pages/Signin/LoginScreen'
import Signup from './src/Pages/Signup/Signup';

import ForgetPassword from './src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from './src/Pages/VerifyCode/VerifyCode';
import tabs from './src/Navigator/BottomTab';
import Route from './src/route';
const Stack = createStackNavigator();
import { Provider } from 'react-redux';
import store from './src/Redux/index';
console.disableYellowBox = true;


export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

