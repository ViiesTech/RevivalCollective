import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from './Button';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * ToolkitCard — reusable card for the Gospel Toolkit screen.
 *
 * Props:
 *  category    – small label shown beside the icon (e.g. "Map", "Gospel")
 *  icon        – Feather icon name
 *  title       – bold heading
 *  description – body text
 *  btnLabel    – CTA button text
 *  onPress     – called when the button is tapped
 */
const ToolkitCard = ({
  category,
  icon,
  title,
  description,
  btnLabel,
  onPress,
}) => (
  <View style={styles.card}>
    {/* Top row: icon box + [category + title] vertically */}
    <View style={styles.cardTop}>
      <View style={styles.iconBox}>
        <Icon name={icon} size={17} color={AppColors.darkBg} />
      </View>
      <View style={styles.titleBlock}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>

    {/* Description */}
    <Text style={styles.description}>{description}</Text>

    {/* CTA button */}
    <Button
      title={btnLabel}
      onPress={onPress}
      variant="primary"
      size={1.65}
      style={styles.btn}
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1.4),
    padding: responsiveWidth(4.5),
    marginBottom: responsiveHeight(1.8),
    backgroundColor: AppColors.darkBg,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    marginBottom: responsiveHeight(1.2),
  },
  iconBox: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(5.5),
    backgroundColor: AppColors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock: {
    flex: 1,
  },
  category: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.5),
  },
  title: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    lineHeight: responsiveFontSize(2.8),
  },
  description: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.55),
    lineHeight: responsiveFontSize(2.3),
    marginBottom: responsiveHeight(1.6),
  },
  btn: {
    borderRadius: responsiveHeight(0.7),
    paddingVertical: responsiveHeight(0.8),
  },
});

export default ToolkitCard;
