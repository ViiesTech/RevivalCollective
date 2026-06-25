import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import Profile from '../screens/MainScreens/UserFlow/Profile';
import EditProfile from '../screens/MainScreens/UserFlow/EditProfile';
import Instructions from '../screens/MainScreens/UserFlow/Instructions';
import RecommendedMusic from '../screens/MainScreens/UserFlow/Music/RecommendedMusic';
import CreateMinistryProfile from '../screens/MainScreens/UserFlow/CreateMinistryProfile';
import PrayerWall from '../screens/MainScreens/UserFlow/PrayerWall';
import CreatePrayerHub from '../screens/MainScreens/UserFlow/CreatePrayerHub';
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
import CreateSOAP from '../screens/MainScreens/UserFlow/CreateSOAP';
import ChatList from '../screens/MainScreens/UserFlow/ChatList';
import ChatDetail from '../screens/MainScreens/UserFlow/ChatDetail';
import AddPost from '../screens/MainScreens/UserFlow/AddPost';

const Root = createNativeStackNavigator();

/**
 * Root navigator — two sibling screens:
 *   'Auth'  = AuthStack (Splash → OnBoarding → Login → …)
 *   'Main'  = UserStack (BottomTabs → MainStack)
 *
 * After successful login call:
 *   navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }))
 */
const AppStack = () => (
  <Root.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
    <Root.Screen name="FindChurch" component={FindChurch} />
    <Root.Screen name="FindEvents" component={FindEvents} />
    <Root.Screen name="CreateEvent" component={CreateEvent} />
    <Root.Screen name="ChurchDetails" component={ChurchDetails} />
    <Root.Screen name="GospelToolkit" component={GospelToolkit} />
    <Root.Screen name="ChooseApproach" component={ChooseApproach} />
    <Root.Screen name="ClassicGospel" component={ClassicGospel} />
    <Root.Screen name="BuildTestimony" component={BuildTestimony} />
    <Root.Screen name="BuildStory" component={BuildStory} />
    <Root.Screen name="ConversationCoach" component={ConversationCoach} />
    <Root.Screen name="PracticeConversation" component={PracticeConversation} />
    <Root.Screen name="CreateEvangelist" component={CreateEvangelist} />
    <Root.Screen name="CreatePrayerHub" component={CreatePrayerHub} />
    <Root.Screen name="CreateSOAP" component={CreateSOAP} />
    <Root.Screen name="ChatList" component={ChatList} />
    <Root.Screen name="ChatDetail" component={ChatDetail} />
    <Root.Screen name="AddPost" component={AddPost} />
    <Root.Screen
      name="CreateMinistryProfile"
      component={CreateMinistryProfile}
    />
    <Root.Screen name="Profile" component={Profile} />
    <Root.Screen name="EditProfile" component={EditProfile} />
    <Root.Screen name="Instructions" component={Instructions} />
    <Root.Screen name="RecommendedMusic" component={RecommendedMusic} />
    <Root.Screen name="PrayerWall" component={PrayerWall} />
  </Root.Navigator>
);
const Routes = () => (
  <Root.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
    <Root.Screen name="Auth" component={AuthStack} />
    <Root.Screen name="Main" component={UserStack} />
    <Root.Screen name="AppStack" component={AppStack} />
    
  </Root.Navigator>
);

export default Routes;
