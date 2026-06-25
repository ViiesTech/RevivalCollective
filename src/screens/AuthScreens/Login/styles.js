import { StyleSheet } from 'react-native';
import { AppColors } from '../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  rememberForgotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(0.5),
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: responsiveWidth(4.5),
    height: responsiveWidth(4.5),
    borderRadius: responsiveWidth(0.8),
    borderWidth: 1.5,
    borderColor: AppColors.textMuted,
    marginRight: responsiveWidth(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: AppColors.textWhite,
    borderColor: AppColors.textWhite,
  },
  rememberText: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.7),
  },
  forgotText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
  },
  loginBtn: {
    marginTop: responsiveHeight(2.5),
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(2.5),
    gap: responsiveWidth(3),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: AppColors.white,
  },
  dividerText: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.6),
  },
  socialBtn: {
    marginBottom: responsiveHeight(1.6),
    backgroundColor: AppColors.black,
    borderWidth: null,
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
