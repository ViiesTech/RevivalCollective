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
    paddingBottom: responsiveHeight(2),
  },

  // ── Title row ────────────────────────────────────────────
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(2.5),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(0.5),
  },
  backBtn: {
    paddingTop: 3,
  },
  titleTextWrap: {
    flex: 1,
  },
  headerTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  headerSubtitle: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.3),
    lineHeight: responsiveFontSize(2.1),
  },

  // ── Page heading ─────────────────────────────────────────
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
  },

  // ── Section blocks ───────────────────────────────────────
  sectionLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.75),
    fontWeight: '700',
    marginBottom: responsiveHeight(0.4),
  },
  sectionDesc: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2.1),
    marginBottom: responsiveHeight(1.5),
  },
  multilineInput: {
    height: responsiveHeight(8),
    textAlignVertical: 'top',
    fontSize:responsiveFontSize(1.6),
  },

  // ── Pinned bottom buttons ────────────────────────────────
  bottomContainer: {
    paddingVertical: responsiveHeight(2),
    backgroundColor: AppColors.darkBg,
    gap: responsiveHeight(1.2),
  },
  suggestBtn: {
    width: '100%',
  },
  actionRow: {
    flexDirection: 'row',
    gap: responsiveWidth(3),
  },
  halfBtn: {
    flex: 1,
  },
});
