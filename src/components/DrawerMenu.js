import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';
import { useNavigation } from '@react-navigation/native';

// bold: true → larger weight (featured actions); false → regular nav items
const MENU_ITEMS = [
  {
    id: '1',
    label: 'Create ministry profile',
    bold: true,
    navigateTo: 'CreateMinistryProfile',
  },
  {
    id: '2',
    label: 'Create prayer Hub',
    bold: true,
    navigateTo: 'CreatePrayerHub',
  },
  {
    id: '3',
    label: 'Create evangelism event',
    bold: true,
    navigateTo: 'CreateEvent',
  },
  { id: '4', label: 'Evangelism map', bold: false, navigateTo: 'FindEvents' },
  { id: '5', label: 'Ask revival', bold: false, navigateTo: 'CreatePrayerHub' },
  { id: '6', label: 'Settings', bold: false, navigateTo: 'Main' },
  { id: '7', label: 'Logout', bold: false, navigateTo: 'Auth' },
];

/**
 * DrawerMenu — left-side slide-in drawer powered by react-native-modal.
 *
 * Props:
 *  visible     – whether the drawer is shown
 *  onClose     – called when backdrop or back button pressed
 *  onItemPress – ({ id, label }) callback when a menu item is tapped
 *  userName    – name shown in the profile section
 */
const DrawerMenu = ({ visible,setModalVisible, onClose, onItemPress }) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      animationInTiming={600}
      animationOutTiming={600}
      backdropOpacity={0.55}
      style={styles.modal}
    >
      <View style={styles.drawer}>
        {MENU_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, index < 3 && styles.menuItemFeatured]}
            onPress={() => {
              setModalVisible(false); // close drawer on item press
              item.id === '6'
                ? navigation.navigate('Main', { screen: 'Settings' })
                : navigation.navigate(item.id === '7' ? 'Auth' : 'AppStack', {
                    screen: item.navigateTo,
                  }); // TEMP: all items navigate to CreateEvent for now
            }}
            activeOpacity={0.7}
          >
            <Text style={[styles.menuLabel, item.bold && styles.menuLabelBold]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-start', // drawer anchors to the LEFT edge
    flexDirection: 'row',
  },
  drawer: {
    width: responsiveWidth(65),
    height: '100%',
    backgroundColor: AppColors.white,
    paddingTop: responsiveHeight(9),
    paddingHorizontal: responsiveWidth(6),
    paddingBottom: responsiveHeight(5),
  },
  // Featured action items (first 3)
  menuItemFeatured: {
    paddingVertical: responsiveHeight(1.6),
  },
  menuItem: {
    paddingVertical: responsiveHeight(1.4),
  },
  menuLabel: {
    color: AppColors.black,
    fontSize: responsiveFontSize(1.85),
  },
  menuLabelBold: {
    fontSize: responsiveFontSize(2.05),
    fontWeight: '700',
  },
});

export default DrawerMenu;
