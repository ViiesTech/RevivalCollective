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
    marginBottom: responsiveHeight(1.8),
  },

  // ── How This Works ───────────────────────────────────────
  sectionLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.75),
    fontWeight: '700',
    marginBottom: responsiveHeight(0.6),
  },
  sectionDesc: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(2),
  },

  // ── Scenario cards ───────────────────────────────────────
  scenarioCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.4),
    marginBottom: responsiveHeight(1.2),
    gap: responsiveWidth(3),
  },
  scenarioIconCircle: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  scenarioText: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveFontSize(2.4),
  },
});
