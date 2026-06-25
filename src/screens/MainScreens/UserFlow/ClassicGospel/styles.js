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
  },

  // ── Page heading ─────────────────────────────────────────
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(2),
  },

  // ── Body paragraphs ──────────────────────────────────────
  bodyText: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveFontSize(2.6),
    marginBottom: responsiveHeight(2),
  },

  // ── Pinned bottom CTA ────────────────────────────────────
  ctaContainer: {
    paddingVertical: responsiveHeight(2),
    backgroundColor: AppColors.darkBg,
  },
});
