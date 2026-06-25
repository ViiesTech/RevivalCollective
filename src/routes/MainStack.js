import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/MainScreens/UserFlow/Home';
import FindChurch from '../screens/MainScreens/UserFlow/FindChurch';
import FindEvents from '../screens/MainScreens/UserFlow/FindEvents';
import CreateEvent from '../screens/MainScreens/UserFlow/CreateEvent';
import ChurchDetails from '../screens/MainScreens/UserFlow/ChurchDetails';
import GospelToolkit from '../screens/MainScreens/UserFlow/GospelToolkit';
import ChooseApproach from '../screens/MainScreens/UserFlow/ChooseApproach';
import ClassicGospel from '../screens/MainScreens/UserFlow/ClassicGospel';
import BuildTestimony from '../screens/MainScreens/UserFlow/BuildTestimony';
import BuildStory from '../screens/MainScreens/UserFlow/BuildStory';
import ConversationCoach from '../screens/MainScreens/UserFlow/ConversationCoach';
import PracticeConversation from '../screens/MainScreens/UserFlow/PracticeConversation';
import CreateEvangelist from '../screens/MainScreens/UserFlow/CreateEvangelist';
import CreatePrayerHub from '../screens/MainScreens/UserFlow/CreatePrayerHub';
import CreateSOAP from '../screens/MainScreens/UserFlow/CreateSOAP';
import PrayerWall from '../screens/MainScreens/UserFlow/PrayerWall';
import CreateMinistryProfile from '../screens/MainScreens/UserFlow/CreateMinistryProfile';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="FindChurch" component={FindChurch} />
    <Stack.Screen name="FindEvents" component={FindEvents} />
    <Stack.Screen name="CreateEvent" component={CreateEvent} />
    <Stack.Screen name="ChurchDetails" component={ChurchDetails} />
    <Stack.Screen name="GospelToolkit" component={GospelToolkit} />
    <Stack.Screen name="ChooseApproach" component={ChooseApproach} />
    <Stack.Screen name="ClassicGospel" component={ClassicGospel} />
    <Stack.Screen name="BuildTestimony" component={BuildTestimony} />
    <Stack.Screen name="BuildStory" component={BuildStory} />
    <Stack.Screen name="ConversationCoach" component={ConversationCoach} />
    <Stack.Screen
      name="PracticeConversation"
      component={PracticeConversation}
    />
    <Stack.Screen name="CreateEvangelist" component={CreateEvangelist} />
    <Stack.Screen name="CreatePrayerHub" component={CreatePrayerHub} />
    <Stack.Screen name="CreateSOAP" component={CreateSOAP} />
    <Stack.Screen
      name="CreateMinistryProfile"
      component={CreateMinistryProfile}
    />
  </Stack.Navigator>
);
const PrayerStack = () => (
  <Stack.Navigator
    initialRouteName="PrayerWall"
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
  >
    <Stack.Screen name="PrayerWall" component={PrayerWall} />
    <Stack.Screen name="CreatePrayerHub" component={CreatePrayerHub} />
    <Stack.Screen
      name="CreateMinistryProfile"
      component={CreateMinistryProfile}
    />
  </Stack.Navigator>
);
const BottomStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PrayerWall" component={PrayerWall} />
    <Stack.Screen
      name="CreateMinistryProfile"
      component={CreateMinistryProfile}
    />
  </Stack.Navigator>
);

export { MainStack, PrayerStack };
