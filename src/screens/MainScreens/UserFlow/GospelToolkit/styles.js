import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: responsiveHeight(3),
  },

  // ── Title row ───────────────────────────────────────────
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(3),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(2),
  },
  backBtn: {
    paddingTop: 3,
  },
  titleTextWrap: {
    flex: 1,
  },
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    lineHeight: responsiveFontSize(3),
  },
  pageSubtitle: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.45),
    marginTop: responsiveHeight(0.3),
    lineHeight: responsiveFontSize(2.1),
  },
});
