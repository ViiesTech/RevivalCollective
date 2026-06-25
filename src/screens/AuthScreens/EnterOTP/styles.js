import { StyleSheet } from 'react-native';
import { AppColors } from '../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  codeRoot: {
    marginTop: responsiveHeight(3),
    justifyContent: 'space-between',
  },
  cell: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    borderRadius: responsiveHeight(0.75),
    backgroundColor: AppColors.inputBg,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.4),
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: responsiveWidth(12),
  },
  cellFocused: {
    borderColor: AppColors.textWhite,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});
