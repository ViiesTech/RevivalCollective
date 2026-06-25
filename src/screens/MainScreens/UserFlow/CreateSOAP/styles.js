import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  scroll: { flex: 1 },
  contentContainer: {  paddingBottom: responsiveHeight(5) },
  textArea: { height: responsiveHeight(12), textAlignVertical: 'top' },
  formBtnsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: responsiveHeight(2) },
  cancelBtn: { flex: 1, marginRight: responsiveWidth(2) },
  postBtn: { flex: 1, marginLeft: responsiveWidth(2) },
});
