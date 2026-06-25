import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  screen: {
    paddingHorizontal: responsiveWidth(4.5),
    paddingBottom: responsiveHeight(2),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    paddingBottom: responsiveHeight(1.8),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.dividerLine,
  },
  headerAction: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.inputBg,
  },
  headerAvatar: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(5.5),
    backgroundColor: AppColors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    position: 'relative',
  },
  headerAvatarText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
  },
  headerOnlineDot: {
    position: 'absolute',
    right: responsiveWidth(0.1),
    bottom: responsiveWidth(0.3),
    width: responsiveWidth(2.8),
    height: responsiveWidth(2.8),
    borderRadius: responsiveWidth(1.4),
    backgroundColor: AppColors.checkGreen,
    borderWidth: 2,
    borderColor: AppColors.darkBg,
  },
  headerMeta: {
    flex: 1,
  },
  headerName: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  headerStatus: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.35),
    marginTop: responsiveHeight(0.35),
  },
  messagesScroll: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: responsiveHeight(2),
    gap: responsiveHeight(1.2),
  },
  dayMarker: {
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.7),
    borderRadius: responsiveHeight(2),
    backgroundColor: AppColors.inputBg,
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    marginBottom: responsiveHeight(0.8),
  },
  dayMarkerText: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.3),
    fontWeight: '600',
  },
  messageRow: {
    alignItems: 'flex-start',
  },
  messageRowSent: {
    alignItems: 'flex-end',
  },
  messageBubble: {
    maxWidth: '82%',
    backgroundColor: AppColors.chatBubbleAi,
    borderWidth: 1,
    borderColor: AppColors.cardBorder,
    borderRadius: responsiveHeight(1.6),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.4),
  },
  messageBubbleSent: {
    backgroundColor: AppColors.textWhite,
    borderColor: AppColors.textWhite,
  },
  messageText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.55),
    lineHeight: responsiveFontSize(2.25),
  },
  messageTextSent: {
    color: AppColors.darkBg,
  },
  messageTime: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.15),
    marginTop: responsiveHeight(0.8),
  },
  messageTimeSent: {
    color: AppColors.gray,
  },
  composerWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: responsiveWidth(2.5),
    paddingTop: responsiveHeight(1.3),
    borderTopWidth: 1,
    borderTopColor: AppColors.dividerLine,
  },
  composerIcon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    backgroundColor: AppColors.inputBg,
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerInputWrap: {
    flex: 1,
    minHeight: responsiveHeight(6),
    maxHeight: responsiveHeight(14),
    borderRadius: responsiveHeight(1.3),
    backgroundColor: AppColors.inputBg,
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.2),
  },
  composerInput: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
  },
  sendButton: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    backgroundColor: AppColors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});