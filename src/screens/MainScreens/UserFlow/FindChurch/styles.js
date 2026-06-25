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

  // ── Title row ─────────────────────────────────────────
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4.5),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1),
  },
  backBtn: {
    paddingTop: 2,
  },
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    lineHeight: responsiveFontSize(2.6),
  },
  // ── Zip search ────────────────────────────────────────
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1.5),
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(6),
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  searchInput: {
    flex: 1,
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.7),
  },

  // ── Map section ──────────────────────────────────────
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
  // Drop pins
  pin: {
    position: 'absolute',
  },
  // State 2 — ripple + profile center
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
  // State 2 — "47 attending" centered overlay on map
  attendingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendingCard: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1.5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
    width: '80%',
  },
  attendingClose: {
    position: 'absolute',
    top: responsiveHeight(0.8),
    right: responsiveWidth(2.5),
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    borderRadius: responsiveWidth(2.5),
    backgroundColor: 'rgba(0,0,0,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendingCount: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.85),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  attendingBtns: {
    flexDirection: 'row',
    gap: responsiveWidth(3),
  },
  attendingYes: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
    borderRadius: responsiveHeight(0.7),
    paddingVertical: responsiveHeight(1.3),
    alignItems: 'center',
  },
  attendingMaybe: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
    borderRadius: responsiveHeight(0.7),
    paddingVertical: responsiveHeight(1.3),
    alignItems: 'center',
  },
  attendingBtnText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.75),
    fontWeight: '700',
  },

});
