import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/Pages/Signin/LoginScreen'
import ForgetPassword from './src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from './src/Pages/VerifyCode/VerifyCode';
import set_location from './src/Pages/setLocations/set-location';
import Signup from './src/Pages/Signup/Signup';
import ChooseLocation from './src/Pages/ChooseLocation/ChooseLocation';
// import BottomTab from './src/Navigator/BottomTab';
import Browse from './src/Pages/Browse/Browse';
import Browse2 from './src/Pages/Browse2/Browse2';
import Browse3 from './src/Pages/Browse3/Browse3';
import Categories from './src/Pages/Categories/Categories';
const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  <Navigator headerMode='none'>
    <Screen name='VerfiyCode' component={VerfiyCode} />

    <Screen name='Categories' component={Categories} />

    <Screen name='Browse3' component={Browse3} />

    {/* <Screen name='BottomTab' component={BottomTab} /> */}
    <Screen name='ForgetPassword' component={ForgetPassword} />

    <Screen name="LoginScreen" component={LoginScreen} />


    <Screen name='setlocation' component={set_location} />

    <Screen name='Signup' component={Signup} />

    <Screen name='ChooseLocation' component={ChooseLocation} />

    <Screen name='Browse' component={Browse} />
    <Screen name='Browse2' component={Browse2} />






  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;