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
  },

  // ── Tab pills row ────────────────────────────────────────
  tabsScroll: {
    flexGrow: 0,
  },
  tabsRow: {
    paddingBottom: responsiveHeight(1),
    gap: responsiveWidth(2.5),
  },
  tabPill: {
    backgroundColor: '#D8D8D8',
    borderRadius: responsiveHeight(0.7),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
  },
  tabPillActive: {
    backgroundColor: AppColors.textWhite,
    borderColor: AppColors.textWhite,
  },
  tabPillText: {
    color: '#726E6D',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
  },
  tabPillTextActive: {
    color: AppColors.darkBg,
    fontWeight: '700',
  },

  // ── Tab content wrapper ──────────────────────────────────
  tabContent: {
    flex: 1,
  },

  // ── Scroll + content ─────────────────────────────────────
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: responsiveHeight(2),
  },

  // ── Page heading ─────────────────────────────────────────
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(0.6),
  },
  pageSubtitle: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1.8),
  },

  // ── Field labels ─────────────────────────────────────────
  fieldLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    marginBottom: responsiveHeight(0.7),
    marginTop: responsiveHeight(0.4),
  },
  asterisk: {
    color: AppColors.textWhite,
  },

  // ── Input boxes ──────────────────────────────────────────
  inputBox: {
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(7),
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
  },
  textInput: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
  },

  // ── Textarea ─────────────────────────────────────────────
  textAreaBox: {
    height: responsiveHeight(16),
    justifyContent: 'flex-start',
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
  prayerInputStyle: {
    height: responsiveHeight(12),
    textAlignVertical: 'top',
  },

  // ── Category dropdown ────────────────────────────────────
  dropdownBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(7),
    marginBottom: responsiveHeight(0.5),
  },
  dropdownValue: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    borderRadius: responsiveHeight(0.8),
    marginBottom: responsiveHeight(1),
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: responsiveHeight(1.3),
    paddingHorizontal: responsiveWidth(4),
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.dividerLine,
  },
  dropdownItemText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
  },

  // ── Visibility ───────────────────────────────────────────
  visibilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2.5),
    marginTop: responsiveHeight(0.8),
  },
  radioCircle: {
    width: responsiveWidth(4.5),
    height: responsiveWidth(4.5),
    borderRadius: responsiveWidth(2.25),
    borderWidth: 1.5,
    borderColor: AppColors.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleActive: {
    borderColor: AppColors.textWhite,
  },
  radioDot: {
    width: responsiveWidth(2.4),
    height: responsiveWidth(2.4),
    borderRadius: responsiveWidth(1.2),
    backgroundColor: AppColors.textWhite,
  },
  visibilityText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.55),
    flex: 1,
  },

  // ── Pinned CTA ───────────────────────────────────────────
  ctaContainer: {
    // paddingHorizontal: responsiveWidth(4.5),
    paddingVertical: responsiveHeight(2),
    backgroundColor: AppColors.darkBg,
  },

  // ── Prayer Map tab ───────────────────────────────────────
  createBtnWrap: {
    marginBottom: responsiveHeight(1.2),
  },
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
  mapContainer: {
    height: responsiveHeight(34),
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

  bottomPad: {
    height: responsiveHeight(2.5),
  },

  // ── Info row (Public Prayers) ───────────────
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2.2),
    marginTop: responsiveHeight(1.5),
  },
  infoIcon: {
    marginRight: responsiveWidth(2.5),
  },
  infoText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.55),
    flex: 1,
  },
  emoji: {
    fontSize: responsiveFontSize(1.7),
    marginLeft: 2,
  },

  // ── Empty card (Public/My Prayers) ──────────
  emptyCard: {
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1.5),
  },
  emptyCardIcon: {
    marginBottom: responsiveHeight(1.5),
  },
  emptyCardText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.65),
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: responsiveHeight(0.5),
  },
  emptyCardTextSub: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.45),
    fontWeight: '300',
    textAlign: 'center',
  },

  // ── My Prayers header row ───────────────────
  myPrayersHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(0.7),
  },
  myPrayersTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myPrayersLockIcon: {
    marginRight: responsiveWidth(2),
  },
  myPrayersTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.1),
    fontWeight: '700',
  },
  addPrayerBtn: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(0.7),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
  },
  addPrayerBtnText: {
    color: AppColors.darkBg,
    fontWeight: '700',
    fontSize: responsiveFontSize(1.5),
  },
  myPrayersSubtitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.45),
    marginBottom: responsiveHeight(2.2),
    marginLeft: 2,
  },
});
