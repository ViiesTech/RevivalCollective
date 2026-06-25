import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * ChurchCard — reusable list card for any church / event item.
 *
 * Props:
 *  image        – local require() or uri source
 *  name         – church name (bold)
 *  description  – muted subtitle (2 lines max)
 *  onPress      – tap callback
 *  style        – optional outer style override
 */
const ChurchCard = ({ image, name, description, onPress, style }) => (
  <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.8}>
    <Image source={image} style={styles.img} resizeMode="cover" />
    <View style={styles.info}>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <Text style={styles.description} numberOfLines={2}>{description}</Text>
    </View>
    <Icon name="chevron-right" size={responsiveFontSize(2)} color={AppColors.textMuted} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.cardBg,
    borderRadius: responsiveHeight(1.2),
    padding: responsiveHeight(1.6),
    marginBottom: responsiveHeight(1.5),
    borderWidth: 0.5,
    borderColor: AppColors.cardBorder,
    gap: responsiveWidth(3),
  },
  img: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    borderRadius: responsiveHeight(0.9),
  },
  info: {
    flex: 1,
  },
  name: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
    marginBottom: responsiveHeight(0.35),
  },
  description: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.3),
  },
});

export default ChurchCard;
