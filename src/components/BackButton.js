import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';
import { useCustomNavigation } from '../globalFunctions/Resposive_Dimensions';

const BackButton = ({ onPress, style }) => {
  const { goBack } = useCustomNavigation();

  return (
    <TouchableOpacity
      onPress={onPress || goBack}
      style={[styles.btn, style]}
      activeOpacity={0.8}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <Icon
        name="chevron-left"
        size={responsiveFontSize(2.7)}
        color={AppColors.black}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveHeight(5),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackButton;

