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
    paddingBottom: responsiveHeight(4),
  },

  // ── Title row ───────────────────────────────────────────
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
  headerSubtitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  headerSubtitleDesc: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.3),
    lineHeight: responsiveFontSize(2),
  },
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(2),
  },

  // ── Approach cards ───────────────────────────────────
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.6),
    marginBottom: responsiveHeight(1.2),
  },
  optionTextWrap: {
    flex: 1,
  },
  optionLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.85),
    fontWeight: '600',
  },
  optionSubtitle: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.25),
  },
  arrowCircle: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Situation section ─────────────────────────────────
  sectionTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.4),
    fontWeight: '700',
    lineHeight: responsiveFontSize(3.2),
    marginTop: responsiveHeight(2.5),
    marginBottom: responsiveHeight(0.6),
  },
  sectionSubtitle: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2.1),
    marginBottom: responsiveHeight(1.5),
  },
  textAreaBox: {
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveHeight(1.2),
    height: responsiveHeight(14),
    marginBottom: responsiveHeight(2),
  },
  textArea: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    padding: 0,
    height: '100%',
  },

  // ── Create button ────────────────────────────────────
});
