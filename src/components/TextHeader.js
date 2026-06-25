import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../config/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../globalFunctions/Resposive_Dimensions';
const TextHeader = ({ title, subTitle,noPadding }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, noPadding && { paddingHorizontal: 0 }]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        style={styles.backBtn}
      >
        <Icon name="arrow-left" size={20} color={AppColors.textWhite} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.headerTitle}>{title}</Text>
        {subTitle && <Text style={styles.pageSubtitle}>{subTitle}</Text>}
      </View>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: responsiveWidth(4.5),
    gap: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    backgroundColor: AppColors.darkBg,
  },
  backBtn: {
    top: responsiveHeight(-0.2),
  },
  headerTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    lineHeight: responsiveHeight(1.9),
  },
  pageSubtitle: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.5),
  },
});
