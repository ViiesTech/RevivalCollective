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
  kbContainer: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: responsiveHeight(2),
  },

  // ── Title row ────────────────────────────────────────────
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(2.5),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(0.5),
  },
  backBtn: {
    paddingTop: 3,
  },
  titleTextWrap: {
    flex: 1,
  },
  headerTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
  },
  headerSubtitle: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.3),
    lineHeight: responsiveFontSize(2.1),
  },

  // ── Page heading ─────────────────────────────────────────
  pageTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.8),
  },

  // ── Welcome message ──────────────────────────────────────
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: responsiveWidth(2.5),
    marginBottom: responsiveHeight(2),
  },
  zapIcon: {
    marginTop: 2,
    flexShrink: 0,
  },
  welcomeText: {
    flex: 1,
    color: AppColors.white,
    fontSize: responsiveFontSize(1.45),
    lineHeight: responsiveFontSize(2.2),
  },

  // ── Seeker + question box ────────────────────────────────
  seekerLabel: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.4),
    marginBottom: responsiveHeight(0.6),
  },
  questionBox: {
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(1),
    borderTopLeftRadius: 0,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.6),
  },
  questionText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveFontSize(2.5),
  },

  // ── Pinned bottom ────────────────────────────────────────
  bottomContainer: {
    paddingBottom: responsiveHeight(2),
    paddingTop: responsiveHeight(1),
    backgroundColor: AppColors.darkBg,
    gap: responsiveHeight(1.2),
  },

  // Input row
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3.5),
    height: responsiveHeight(7),
    gap: responsiveWidth(2),
    borderRadius:responsiveHeight(1),
    backgroundColor: '#EFEFEF',
  },
  chatInput: {
    flex: 1,
    color: AppColors.black,
    fontSize: responsiveFontSize(1.7),
    padding: 0,
    height: '100%',
  },
  inputIcon: {
    padding: responsiveWidth(1),
  },
  sendBtn: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
    backgroundColor: AppColors.darkBg,
    borderWidth: 1,
    borderColor: AppColors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Action buttons row
  actionRow: {
    flexDirection: 'row',
    gap: responsiveWidth(3),
  },
  aiSuggestBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#EFEFEF',
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.9),
  },
  aiSuggestText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.7),
    fontWeight: '600',
  },
  newChatBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.9),
  },
  newChatText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
  },
});
