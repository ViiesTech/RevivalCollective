import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * ChurchInfoCard — reusable card showing church / event details.
 *
 * Props:
 *  name            – church / event name
 *  date            – date string
 *  address         – address string
 *  description     – body text
 *  primaryBtnLabel – label for the main CTA button (default: 'Visit This Church')
 *  onPrimaryPress  – called when the CTA button is tapped
 *  onSharePress    – called when the share icon is tapped
 *  onBookmarkPress – called when the bookmark icon is tapped
 *  onMessagePress  – called when "Send Message" footer btn is tapped
 *  onFollowPress   – called when "Follow this Church" footer btn is tapped
 *  style           – optional extra style for the outer container
 */
const ChurchInfoCard = ({
  name,
  date,
  address,
  description,
  primaryBtnLabel = 'Visit This Church',
  followBtnLabel = 'Follow this Church',
  onPrimaryPress,
  onSharePress,
  onBookmarkPress,
  onMessagePress,
  onFollowPress,
  style,
}) => (
  <View style={[styles.card, style]}>
    {/* Header: name + action icons */}
    <View style={styles.cardHeader}>
      <Text style={styles.churchName}>{name}</Text>
      <View style={styles.cardActions}>
        <TouchableOpacity
          onPress={onSharePress}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Icon name="share-2" size={18} color={AppColors.textWhite} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onBookmarkPress}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Icon name="bookmark" size={18} color={AppColors.textWhite} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Date */}
    {!!date && (
      <View style={styles.metaRow}>
        <Icon name="calendar" size={13} color={AppColors.textWhite} />
        <Text style={styles.metaText}>{date}</Text>
      </View>
    )}

    {/* Address */}
    {!!address && (
      <View style={styles.metaRow}>
        <Icon name="map-pin" size={13} color={AppColors.textWhite} />
        <Text style={styles.metaText}>{address}</Text>
      </View>
    )}

    {/* Description */}
    {!!description && (
      <Text style={styles.description}>{description}</Text>
    )}

    {/* Primary CTA button */}
    <TouchableOpacity
      style={styles.primaryBtn}
      onPress={onPrimaryPress}
      activeOpacity={0.85}
    >
      <Text style={styles.primaryBtnText}>{primaryBtnLabel}</Text>
    </TouchableOpacity>

    {/* Footer actions */}
    <View style={styles.cardFooter}>
      <TouchableOpacity style={styles.cardFooterBtn} onPress={onMessagePress}>
        <Icon name="mail" size={14} color={AppColors.textWhite} />
        <Text style={styles.cardFooterText}>Send Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardFooterBtn} onPress={onFollowPress}>
        <Icon name="plus" size={14} color={AppColors.textWhite} />
        <Text style={styles.cardFooterText}>{followBtnLabel}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: responsiveHeight(3),
    backgroundColor: AppColors.darkBg,
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1.2),
    padding: responsiveWidth(4),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.2),
  },
  churchName: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
    flex: 1,
    marginRight: responsiveWidth(3),
  },
  cardActions: {
    flexDirection: 'row',
    gap: responsiveWidth(3.5),
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
    marginBottom: responsiveHeight(0.7),
  },
  metaText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.45),
    flex: 1,
  },
  description: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2.1),
    marginBottom: responsiveHeight(1.8),
    marginTop: responsiveHeight(0.5),
  },
  primaryBtn: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(0.8),
    paddingVertical: responsiveHeight(1.8),
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  primaryBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: responsiveHeight(0.5),
  },
  cardFooterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1.5),
  },
  cardFooterText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.4),
  },
});

export default ChurchInfoCard;
