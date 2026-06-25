import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors } from '../config/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../globalFunctions/Resposive_Dimensions';
import DrawerMenu from './DrawerMenu';
import { useNavigation } from '@react-navigation/native';
import SVGXml from './SvgIcon';
import { AppIcons } from '../config/Icons';

/**
 * FeedHeader — top bar for the social-feed Home screen.
 * Manages the DrawerMenu internally — no need to add DrawerMenu in each screen.
 *
 * ┌─────────────────────────────────────────────────────┐
 * │  ≡  ⊕          ◯ (user)         🔍  ∇  ✈          │
 * └─────────────────────────────────────────────────────┘
 *
 * Props:
 *  onPlusPress   – called when the plus (⊕) is tapped
 *  onSearchPress – called when the search icon is tapped
 *  onFilterPress – called when the filter icon is tapped
 *  onSendPress   – called when the send/paper-plane icon is tapped
 *  onAvatarPress – called when the centre avatar circle is tapped
 */
const FeedHeader = ({ onPlusPress, onAvatarPress, noPadding }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.header, noPadding && styles.headerNoPadding]}>
        {/* Left — hamburger + plus */}
        <View style={styles.side}>
          <TouchableOpacity
            onPress={() => setDrawerVisible(true)}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SVGXml
              icon={AppIcons.menu}
              height={responsiveFontSize(2.6)}
              width={responsiveFontSize(2.6)}
              color={AppColors.textWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('AppStack', { screen: 'FindEvents' })}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SVGXml
              icon={AppIcons.plus}
              height={responsiveFontSize(2.6)}
              width={responsiveFontSize(2.6)}
              color={AppColors.textWhite}
            />
          </TouchableOpacity>
        </View>

        {/* Centre — ghost user circle */}
        <TouchableOpacity
          style={styles.userCircle}
          onPress={() => navigation.navigate('AppStack', { screen: 'Profile' })}
          activeOpacity={0.7}
        >
          <SVGXml
            icon={AppIcons.userProfile}
            height={responsiveFontSize(2.6)}
            width={responsiveFontSize(2.6)}
          />
        </TouchableOpacity>

        {/* Right — search + filter + send */}
        <View style={styles.sideRight}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppStack', { screen: 'FindChurch' })
            }
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SVGXml
              icon={AppIcons.search}
              height={responsiveFontSize(2.6)}
              width={responsiveFontSize(2.6)}
              color={AppColors.textWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppStack', { screen: 'ChatList' })}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SVGXml
              icon={AppIcons.sendDm}
              height={responsiveFontSize(2.6)}
              width={responsiveFontSize(2.6)}
              color={AppColors.textWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppStack', { screen: 'PrayerWall' })
            }
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SVGXml
              icon={AppIcons.prayer}
              height={responsiveFontSize(2.6)}
              width={responsiveFontSize(2.6)}
              color={AppColors.textWhite}
            />
          </TouchableOpacity>
        </View>
      </View>

      <DrawerMenu
        visible={drawerVisible}
        setModalVisible={setDrawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4.5),
    paddingBottom: responsiveHeight(1.5),
    backgroundColor: AppColors.darkBg,
  },
  headerNoPadding: {
    paddingHorizontal: 0,
  },
  side: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3.5),
  },
  sideRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: responsiveWidth(3.5),
  },
  userCircle: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    justifyContent: 'center',
  },
});

export default FeedHeader;
