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

  // ── Title row ────────────────────────────────────────────
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(2.5),
    paddingHorizontal: responsiveWidth(4.5),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(0.8),
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
    lineHeight: responsiveFontSize(2),
  },

  // ── Create button ────────────────────────────────────────
  createBtnWrap: {
    marginBottom: responsiveHeight(1.2),
  },

  // ── Zip search ───────────────────────────────────────────
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(6),
  },
  searchInput: {
    flex: 1,
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
  },

  // ── Map ──────────────────────────────────────────────────
  mapContainer: {
    height: responsiveHeight(30),
    borderRadius: responsiveHeight(1.2),
    overflow: 'hidden',
    marginBottom: responsiveHeight(1.5),
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  pin: {
    position: 'absolute',
  },
  rippleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  ripple1: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
  },
  ripple2: {
    width: responsiveWidth(34),
    height: responsiveWidth(34),
  },
  ripple3: {
    width: responsiveWidth(46),
    height: responsiveWidth(46),
  },
  centerProfileRing: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(7),
    borderWidth: 2.5,
    borderColor: AppColors.textWhite,
    overflow: 'hidden',
  },
  centerProfileImg: {
    width: '100%',
    height: '100%',
  },

  // ── Attend modal ─────────────────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1.5),
    width: responsiveWidth(72),
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1.8),
    paddingBottom: responsiveHeight(2.2),
  },
  modalClose: {
    alignSelf: 'flex-end',
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
    borderRadius: responsiveWidth(3.25),
    borderWidth: 1,
    borderColor: AppColors.darkBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(0.5),
  },
  modalTitle: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: responsiveHeight(2),
  },
  modalBtnRow: {
    flexDirection: 'row',
    gap: responsiveWidth(3),
  },
  modalBtn: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
    borderRadius: responsiveHeight(0.8),
    paddingVertical: responsiveHeight(1.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtnText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
});
