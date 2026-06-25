import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';
import SvgIcon from './SvgIcon';
/**
 * BorderedCard
 * Props:
 *  iconName - Feather icon name
 *  title    - title text (optional)
 *  children - optional content inside card
 *  onPress  - optional press handler
 */
const BorderedCard = ({ iconName, title, children, onPress, style, useImage, imageSource }) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.card, style]}
    >
      {iconName ? <Icon name={iconName} size={28} color={AppColors.textWhite} style={styles.icon} /> : useImage ? <Image source={imageSource} style={styles.icon} /> : null}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  icon: {
    marginBottom: responsiveHeight(1.2),
  },
  title: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    marginBottom: responsiveHeight(1.2),
  },
});

export default BorderedCard;
