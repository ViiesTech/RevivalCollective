import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  formContent: {
    flex: 1,
    paddingTop: responsiveHeight(2),
  },
  textArea: {
    height: responsiveHeight(12),
    textAlignVertical: 'top',
  },
  ctaContainer: {
    paddingBottom: responsiveHeight(3),
    paddingTop: responsiveHeight(2),
    backgroundColor: AppColors.darkBg,
  },
});
