import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
  },
  mapImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
  },
  headerTitle: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: responsiveWidth(2),
  },
  headerSpacer: {
    width: responsiveWidth(10),
  },
  pinWrapper: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 10,
  },
  pinSelected: {
    transform: [{ scale: 1.2 }],
  },
  pinRing: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(5.5),
    borderWidth: 2.5,
    borderColor: AppColors.white,
    overflow: 'hidden',
  },
  pinImg: {
    width: '100%',
    height: '100%',
  },
  pinArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 9,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: AppColors.white,
    marginTop: -1,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: AppColors.drawerBg,
    borderTopLeftRadius: responsiveHeight(2.5),
    borderTopRightRadius: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2.5),
    paddingBottom: responsiveHeight(4),
  },
  inputLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    marginBottom: responsiveHeight(1.2),
  },
  input: {
    backgroundColor: AppColors.cardBg,
    borderRadius: responsiveHeight(1),
    borderWidth: 0.5,
    borderColor: AppColors.cardBorder,
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(6.5),
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    marginBottom: responsiveHeight(2),
  },
  createBtn: {
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(2),
    alignItems: 'center',
  },
  createBtnDisabled: {
    opacity: 0.4,
  },
  createBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
  },
});
