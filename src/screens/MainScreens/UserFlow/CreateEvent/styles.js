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
    paddingBottom: responsiveHeight(1),
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
  },

  // ── Field label ──────────────────────────────────────────
  fieldLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    marginBottom: responsiveHeight(0.7),
    marginTop: responsiveHeight(0.5),
  },
  asterisk: {
    color: AppColors.textWhite,
  },

  // ── Input boxes ──────────────────────────────────────────
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(6),
    gap: responsiveWidth(2.5),
    marginBottom: responsiveHeight(0.5),
  },
  textInput: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
    height: '100%',
  },
  textInputFlex: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
    height: '100%',
  },
  fieldValue: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
  },

  // ── Description textarea ─────────────────────────────────
  textAreaBox: {
    height: responsiveHeight(16),
    alignItems: 'flex-start',
    paddingVertical: responsiveHeight(1.5),
  },
  textArea: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
    width: '100%',
    height: '100%',
  },

  // ── Pinned CTA ───────────────────────────────────────────
  ctaContainer: {
    paddingVertical: responsiveHeight(2),
    backgroundColor: AppColors.darkBg,
  },
});
