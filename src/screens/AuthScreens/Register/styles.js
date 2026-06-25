import { StyleSheet } from 'react-native';
import { AppColors } from '../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  signUpBtn: {
    marginTop: responsiveHeight(1),
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: responsiveHeight(2),
    gap: responsiveWidth(3),
  },
  checkbox: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    borderRadius: responsiveWidth(1),
    borderWidth: 1.5,
    borderColor: AppColors.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveFontSize(0.3),
    flexShrink: 0,
  },
  checkboxChecked: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.white,
  },
  terms: {
    flex: 1,
    color: AppColors.white,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.3),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMuted: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.7),
  },
  bottomLink: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.7),
  },
});
