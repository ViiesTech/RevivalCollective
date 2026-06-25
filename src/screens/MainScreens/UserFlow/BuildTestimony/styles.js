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
  container: {
    flex: 1,
  },
  header: {
    paddingTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  headerText: {
    marginTop: responsiveHeight(2.5),
  },
  title: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
  },
  subtitle: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(0.5),
  },
  scrollContent: {
    paddingBottom: responsiveHeight(5),
  },
  fieldLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    fontWeight: '600',
    marginBottom: responsiveHeight(0.8),
    marginTop: responsiveHeight(1.8),
  },
  textArea: {
    backgroundColor: AppColors.transparent,
    borderRadius: responsiveHeight(1),
    borderWidth: 0.5,
    borderColor: AppColors.white,
    padding: responsiveHeight(1.5),
    marginHorizontal: responsiveHeight(0.2),
    paddingHorizontal: responsiveWidth(4),
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    minHeight: responsiveHeight(14),
  },
  suggestBtn: {
    flexDirection: 'row',
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.9),
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(2),
    marginTop: responsiveHeight(3),
  },
  suggestBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  actionRow: {
    flexDirection: 'row',
    gap: responsiveWidth(3),
    marginTop: responsiveHeight(1.8),
  },
  outlineBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(2),
    borderWidth: 1,
    borderColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.8),
  },
  outlineBtnText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.55),
    fontWeight: '600',
  },
  primaryBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(2),
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.8),
  },
  primaryBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.55),
    fontWeight: '700',
  },
});
