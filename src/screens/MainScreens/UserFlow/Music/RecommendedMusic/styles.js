import { StyleSheet } from 'react-native';

import { AppColors } from '../../../../../config/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  scroll: { backgroundColor: AppColors.darkBg },
  container: { paddingBottom: responsiveHeight(10) },
  sectionTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
    marginBottom: responsiveHeight(1.2),
  },
  featuredImage: {
    width: '100%',
    height: responsiveHeight(24),
    resizeMode: 'cover',
    borderRadius: responsiveHeight(0.8),
  },
  featuredMeta: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.2),
    marginTop: responsiveHeight(0.6),
  },
  featuredAuthor: {
    color: AppColors.textMuted,
    marginTop: responsiveHeight(0.4),
  },
  featuredBtn: {
    backgroundColor: AppColors.textWhite,
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(0.9),
    alignItems: 'center',
    marginTop: responsiveHeight(0.8),
  },
  featuredBtnText: { color: AppColors.darkBg, fontWeight: '600' },
  cardTitle: {
    color: AppColors.textWhite,
    fontWeight: '700',
    marginBottom: responsiveHeight(0.8),
  },
  mediaRow: { flexDirection: 'row', gap: responsiveWidth(3) },
  smallCard: { width: '48%',borderColor: AppColors.white, borderWidth: 1, borderRadius: responsiveHeight(0.8), padding: responsiveHeight(1) },
  smallImage: {
    width: '100%',
    height: responsiveHeight(16),
    borderRadius: responsiveHeight(0.8),
  },
  smallTitle: {
    color: AppColors.textWhite,
    marginTop: responsiveHeight(0.6),
    fontWeight: '600',
  },
  smallBtn: {
    backgroundColor: AppColors.textWhite,
    marginTop: responsiveHeight(0.6),
    paddingVertical: responsiveHeight(0.8),
    borderRadius: responsiveHeight(0.8),
    alignItems: 'center',
  },
  smallBtnText: { color: AppColors.darkBg, fontWeight: '600' },
  playOverlay: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [
      { translateX: -responsiveHeight(3) },
      { translateY: -responsiveHeight(3) },
    ],
    width: responsiveHeight(6),
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(3),
    backgroundColor: AppColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(0.6),
  },
  platformBtn: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: responsiveHeight(0.6),
    paddingHorizontal: responsiveWidth(1.8),
    borderRadius: responsiveHeight(0.6),
  },
  platformBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
  },
  mediaRowSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.2),
  },
  moreCard: {
    width: '48%',
  },
  moreImage: {
    width: '100%',
    height: responsiveHeight(12),
    borderRadius: responsiveHeight(0.6),
  },
  moreTitle: {
    color: AppColors.textWhite,
    marginTop: responsiveHeight(0.6),
    fontWeight: '600',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    backgroundColor: AppColors.white,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
  },
  searchInput: {
    flex: 1,
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.5),
    borderRadius: responsiveHeight(1),
    // paddingVertical: responsiveHeight(0.8),
  },
  searchIcon: {
    color: AppColors.darkBg,
    marginLeft: responsiveWidth(2),
  },
});
