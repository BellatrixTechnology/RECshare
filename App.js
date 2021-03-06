import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/Pages/Signin/LoginScreen'
import ForgetPassword from './src/Pages/ForgetPassword/ForgetPassword';
import VerfiyCode from './src/Pages/VerifyCode/VerifyCode';
import set_location from './src/Pages/setLocations/set-location';
import Signup from './src/Pages/Signup/Signup';
import ChooseLocation from './src/Pages/ChooseLocation/ChooseLocation';
import Browse from './src/Pages/Browse/Browse';
import Browse2 from './src/Pages/Browse2/Browse2';
import Browse3 from './src/Pages/Browse3/Browse3';
import Categories from './src/Pages/Categories/Categories';
import Search from './src/Pages/Search/Search';
import Search2 from './src/Pages/Search2/Search2';
import ChooseLanguage from './src/Pages/ChooseLanguage/ChooseLanguage';
import MapBrowse from './src/Pages/Map/MapBrowse';
import Success from './src/Pages/Success/Success';
import Favourites from './src/Pages/Favourites/Favourites';
import Notification from './src/Pages/Notification/Notification';
import Booking from './src/Pages/Booking/Booking';
import Setting from './src/Pages/Setting/Setting';
import Schedule from './src/Pages/Schedule/Schedule';
import ReviewBooking from './src/Pages/ReviewBooking/ReviewBooking';
import BookingDetails from './src/Pages/BookingDetails/BookingDetails';
import Account from './src/Pages/Account/Account';
import Chat from './src/Pages/Chat/Chat';
import Filter from './src/Pages/Filter/Filter';
import SpaceDetail from './src/Pages/SpaceDetail/SpaceDetail';
import tabs from './src/Navigator/BottomTab';
import Payment from './src/Pages/Payment/Payment';
import AddSpace from './src/Pages/AddSpace/AddSpace';
const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  <Navigator headerMode='none'>

    <Screen name="LoginScreen" component={LoginScreen} />

    <Screen name='Signup' component={Signup} />

    <Screen name='Payment' component={Payment} />

    <Screen name='SpaceDetail' component={SpaceDetail} />

    <Screen name='Filter' component={Filter} />
    <Screen name='Chat' component={Chat} />
    <Screen name='Account' component={Account} />
    <Screen name='Search' component={Search} />

    <Screen name='Search2' component={Search2} />

    <Screen name='Map' component={MapBrowse} />

    <Screen name='Success' component={Success} />

    <Screen name='Favourites' component={Favourites} />

    <Screen name='Notification' component={Notification} />

    <Screen name='Booking' component={Booking} />

    <Screen name='Setting' component={Setting} />

    <Screen name='ChooseLanguage' component={ChooseLanguage} />


    <Screen name='ReviewBooking' component={ReviewBooking} />

    <Screen name='BookingDetails' component={BookingDetails} />

    <Screen name='Browse2' component={Browse2} />

    <Screen name='Scheduele' component={Schedule} />

    <Screen name='Categories' component={Categories} />
    <Screen name='VerfiyCode' component={VerfiyCode} />


    <Screen name='Browse3' component={Browse3} />
    <Screen name='ForgetPassword' component={ForgetPassword} />
    <Screen name='setlocation' component={set_location} />

    <Screen name='ChooseLocation' component={ChooseLocation} />

    <Screen name='Browse' component={Browse} />
    <Screen name='tabs' component={tabs} />
    <Screen name='AddSpace' component={AddSpace} />

  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;