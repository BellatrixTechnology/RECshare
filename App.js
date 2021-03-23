import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/Pages/Signin/LoginScreen'
import Signup from './src/Pages/Signup/Signup';

import ForgetPassword from './src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from './src/Pages/VerifyCode/VerifyCode';
import tabs from './src/Navigator/BottomTab';

const { Navigator, Screen } = createStackNavigator();

console.disableYellowBox = true;


const AuthStack = () => (
  <Navigator headerMode='none'>

    <Screen name="LoginScreen" component={LoginScreen} />
    <Screen name='Signup' component={Signup} />
    <Screen name='tabs' component={tabs} />
    <Screen name='VerfiyCode' component={VerfiyCode} />
    <Screen name='ForgetPassword' component={ForgetPassword} />


  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;