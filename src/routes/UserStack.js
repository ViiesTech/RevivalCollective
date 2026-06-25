import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppColors } from '../config/Colors';
import { responsiveHeight } from '../globalFunctions/Resposive_Dimensions';
import BibleReading from '../screens/MainScreens/UserFlow/BibleReading';
import Music from '../screens/MainScreens/UserFlow/Music';
import Settings from '../screens/MainScreens/UserFlow/Settings';
import Home from '../screens/MainScreens/UserFlow/Home';
import PrayerWall from '../screens/MainScreens/UserFlow/PrayerWall';
import SVGXml from '../components/SvgIcon';
import { AppIcons } from '../config/Icons';
const Tab = createBottomTabNavigator();

// ── Tab icons (defined outside component to avoid unstable-nested-component lint) ──
const IconHome = ({ color }) => (
  <SVGXml icon={AppIcons.home} height={25} width={25} color={color} />
);
const IconEvangel = ({ color }) => (
  <SVGXml icon={AppIcons.speaker} height={35} width={35} color={color} />
);
const IconGospel = ({ color }) => (
  <SVGXml icon={AppIcons.book} height={50} width={40} color={color} />
);
const IconMusic = ({ color }) => (
  <SVGXml icon={AppIcons.music} height={30} width={30} color={color} />
);
const IconLocation = ({ color }) => (
  <SVGXml icon={AppIcons.settings} height={30} width={30} color={color} />
);

// ── Placeholder screens for the 4 remaining tabs ──────────────────────────────────
// const PlaceholderScreen = ({ label }) => (
//   <View style={placeholder.container}>
//     <Text style={placeholder.text}>{label}</Text>
//   </View>
// );

const TAB_BAR_STYLE = {
  backgroundColor: AppColors.white,
  borderTopColor: AppColors.dividerLine,
  borderTopWidth: 0.5,
  height: responsiveHeight(7.5),
};

const SCREEN_OPTIONS = {
  headerShown: false,
  tabBarActiveTintColor: AppColors.darkBg,
  tabBarInactiveTintColor: AppColors.gray,
  tabBarShowLabel: false,
  tabBarStyle: TAB_BAR_STYLE,
};

const UserStack = () => (
  <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
    <Tab.Screen
      name="HomeTab"
      component={Home}
      options={{ tabBarIcon: IconHome }}
    />
    <Tab.Screen
      name="PrayerWall"
      component={PrayerWall}
      options={{ tabBarIcon: IconEvangel }}
    />
    <Tab.Screen
      name="BibleReading"
      component={BibleReading}
      options={{ tabBarIcon: IconGospel }}
    />
    <Tab.Screen
      name="Music"
      component={Music}
      options={{ tabBarIcon: IconMusic }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{ tabBarIcon: IconLocation }}
    />
  </Tab.Navigator>
);

export default UserStack;
