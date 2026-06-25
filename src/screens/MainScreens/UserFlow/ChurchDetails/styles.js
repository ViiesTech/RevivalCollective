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

  // ── Header ────────────────────────────────────────────

  backBtn: {},

  contentContainer: {
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(3),
  },

  // ── Name row ──────────────────────────────────────────
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(0.8),
  },
  churchName: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.4),
    fontWeight: '700',
    flex: 1,
    marginRight: responsiveWidth(3),
    lineHeight: responsiveFontSize(3.2),
  },
  nameActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2.5),
    marginTop: responsiveHeight(0.4),
  },
  iconCircle: {
    width: responsiveWidth(7.5),
    height: responsiveWidth(7.5),
    borderRadius: responsiveWidth(3.75),
    borderWidth: 1.5,
    borderColor: AppColors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Pastor ────────────────────────────────────────────
  pastor: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.55),
    marginBottom: responsiveHeight(0.6),
  },
  pastorLabel: {
    color: AppColors.white,
    fontWeight: '700',
    fontSize: responsiveFontSize(1.55),
  },

  // ── Denomination ──────────────────────────────────────
  denomination: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
    marginBottom: responsiveHeight(1),
  },

  // ── Description ───────────────────────────────────────
  description: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveFontSize(2.6),
    marginBottom: responsiveHeight(1.5),
  },

  // ── Info rows ─────────────────────────────────────────
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(2),
    marginBottom: responsiveHeight(0.7),
  },
  infoText: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.55),
    flex: 1,
    lineHeight: responsiveFontSize(2.2),
  },

  // ── Hours ─────────────────────────────────────────────
  hoursRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    marginTop: responsiveHeight(0.8),
    marginBottom: responsiveHeight(2),
  },
  hoursChip: {
    backgroundColor: AppColors.white,
    borderRadius: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveHeight(0.5),
  },
  hoursChipText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.5),
    fontWeight: '600',
  },
  hoursText: {
    color: AppColors.white,
    fontWeight: '700',
    fontSize: responsiveFontSize(1.55),
  },

  // ── Send Message ──────────────────────────────────────
  sendLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    marginBottom: responsiveHeight(1),
  },
  messageBox: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveHeight(1.2),
    height: responsiveHeight(8),
  },
  messageInput: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    padding: 0,
    height: '100%',
  },
  submitRow: {
    alignItems: 'flex-end',
    marginTop: responsiveHeight(1.2),
  },
  submitBtn: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(0.7),
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(1.3),
  },
  submitBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
  },

  // ── Bottom ────────────────────────────────────────────
  scrollBottomPad: {
    height: responsiveHeight(2),
  },
  ctaContainer: {
    paddingVertical: responsiveHeight(1.8),
    backgroundColor: AppColors.darkBg,
  },
  ctaBtn: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(2),
    alignItems: 'center',
  },
  ctaBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
});
