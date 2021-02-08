import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/LoginScreen';
import ForgetPassword from './src/ForgetPassword';
import VerifyNumber from './src/VerfiyNumber';
import set_location from './src/set-location';
const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  <Navigator headerMode='none'>
    <Screen name="LoginScreen" component={LoginScreen} />

    <Screen name='ForgetPassword' component={ForgetPassword} />

    <Screen name='VerifyNumber' component={VerifyNumber} />

    <Screen name='setlocation' component={set_location} />

    {/* <Screen name='VerifyNumber' component={VerifyNumber} /> */}







  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;