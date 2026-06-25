import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';
import { AppColors } from '../../../../config/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
    paddingVertical: responsiveHeight(2),
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.5),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.textMuted,
  },
  settingText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
});
