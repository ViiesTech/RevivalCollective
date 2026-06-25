import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/AuthScreens/Splash';
import OnBoarding from '../screens/AuthScreens/OnBoarding';
import Login from '../screens/AuthScreens/Login';
import Register from '../screens/AuthScreens/Register';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import EnterOTP from '../screens/AuthScreens/EnterOTP';
import NewPassword from '../screens/AuthScreens/NewPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
  >
    <Stack.Screen name="Splash" component={Splash} options={{ animation: 'fade' }} />
    <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ animation: 'fade' }} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="EnterOTP" component={EnterOTP} />
    <Stack.Screen name="NewPassword" component={NewPassword} />
  </Stack.Navigator>
);

export default AuthStack;
