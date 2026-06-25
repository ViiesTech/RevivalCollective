import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';
import { AppColors } from '../../../../config/Colors';
const styles = StyleSheet.create({
  multilineInput: {
    height: responsiveHeight(8),
    textAlignVertical: 'top',
    fontSize: responsiveFontSize(1.6),
  },
  fieldLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    marginBottom: responsiveHeight(0.5),
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(6),
    gap: responsiveWidth(2.5),
    marginBottom: responsiveHeight(2),
  },
  fieldValue: {
    flex: 1,
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
  },
});
export default styles;
