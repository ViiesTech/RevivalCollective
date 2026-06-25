import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../config/Colors';
import { AppImages } from '../config/Images';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * MainHeader — top header used on Home, GospelToolkit and any screen
 * that needs the app-level header (profile ring, bell, menu).
 *
 * Props:
 *  onMenuPress   – callback for hamburger tap (opens DrawerMenu)
 *  userName      – display name shown below profile pic
 */
const MainHeader = ({ onMenuPress, userName = 'Jason' }) => (
  <View style={styles.header}>
    {/* Left — notification bell */}
    <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
      <Icon name="bell" size={responsiveFontSize(2.4)} color={AppColors.textWhite} />
    </TouchableOpacity>

    {/* Centre — gold-ringed profile + greeting */}
    <View style={styles.centre}>
      <View style={styles.profileRing}>
        <Image source={AppImages.profile} style={styles.profileImg} />
      </View>
      <Text style={styles.greeting}>Hello, {userName}</Text>
    </View>

    {/* Right — drawer trigger */}
    <TouchableOpacity
      style={styles.iconBtn}
      onPress={onMenuPress}
      activeOpacity={0.7}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
      <Icon name="menu" size={responsiveFontSize(2.4)} color={AppColors.textWhite} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.5),
    backgroundColor: AppColors.darkBg,
  },
  iconBtn: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  centre: {
    alignItems: 'center',
  },
  profileRing: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(6.5),
    borderWidth: 2.5,
    borderColor: AppColors.accentGold,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: responsiveWidth(6.5),
  },
  greeting: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    marginTop: responsiveHeight(0.4),
  },
});

export default MainHeader;
