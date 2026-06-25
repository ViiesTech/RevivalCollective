import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  screen: {
    paddingHorizontal: responsiveWidth(4.5),
    paddingBottom: responsiveHeight(3),
  },
  uploadArea: {
    height: responsiveHeight(31),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2.2),
    borderRadius: responsiveHeight(1.8),
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    backgroundColor: AppColors.cardBg,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(7),
  },
  uploadIconWrap: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.inputBg,
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    marginBottom: responsiveHeight(1.4),
  },
  uploadTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  uploadText: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(0.8),
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  inputBox: {
    borderColor: AppColors.inputBorder,
    backgroundColor: AppColors.inputBg,
  },
  captionBox: {
    minHeight: responsiveHeight(16),
    alignItems: 'flex-start',
  },
  captionInput: {
    minHeight: responsiveHeight(10.5),
    textAlignVertical: 'top',
  },
  button: {
    marginTop: responsiveHeight(0.8),
    marginBottom: responsiveHeight(1),
  },
});