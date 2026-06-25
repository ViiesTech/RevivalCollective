import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../../globalFunctions/Resposive_Dimensions';

// Each story circle diameter
const CIRCLE = responsiveWidth(14);

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
  },
  scroll: {
    flex: 1,
  },

  // ── Stories ───────────────────────────────────────────────
  storiesRow: {
    paddingTop: responsiveHeight(1.8),
    paddingBottom: responsiveHeight(1.8),
    gap: responsiveHeight(2),
    alignItems: 'flex-start',
  },
  storyItem: {
    alignItems: 'center',
    gap: responsiveHeight(0.7),
  },
  // "Your Story" — dashed circle with + icon
  yourStoryCircle: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.45)',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Each story circle
  storyCircleRing: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    borderWidth: 2,
    borderColor: AppColors.accentGold,
    overflow: 'hidden',
    backgroundColor: AppColors.cardBg,
  },
  storyCircleImg: {
    width: '100%',
    height: '100%',
  },
  storyLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.3),
    textAlign: 'center',
    lineHeight: responsiveFontSize(1.85),
  },
  storyLabelCenter: {
    textAlign: 'center',
  },

  // ── Post Composer ─────────────────────────────────────────
  composerCard: {
    marginBottom: responsiveHeight(0.5),
    backgroundColor: AppColors.textWhite,
    borderRadius: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.2),
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  composerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  composerAvatar: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
  },
  composerText: {
    flex: 1,
  },
  composerName: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.75),
    fontWeight: '600',
    marginBottom: 2,
  },
  composerHint: {
    color: AppColors.gray,
    fontSize: responsiveFontSize(1.45),
  },
  composerArrowBtn: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
    backgroundColor: AppColors.darkBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerDivider: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.12)',
    marginVertical: responsiveHeight(1.2),
  },
  composerFooter: {
    flexDirection: 'row',
    gap: responsiveWidth(5),
  },
  composerFooterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1.5),
  },
  composerFooterText: {
    color: AppColors.gray,
    fontSize: responsiveFontSize(1.5),
  },

  // ── Post Card ─────────────────────────────────────────────
  postCard: {
    marginTop: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    paddingBottom: responsiveHeight(1),
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.2),
    gap: responsiveWidth(2.5),
  },
  postAvatarRing: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    borderWidth: 2,
    borderColor: AppColors.accentGold,
    overflow: 'hidden',
  },
  postAvatarImg: {
    width: '100%',
    height: '100%',
  },
  postMeta: {
    flex: 1,
  },
  postName: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.75),
    fontWeight: '700',
  },
  postTime: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: 1,
  },
  postImage: {
    width: '100%',
    height: responsiveHeight(28),
    borderRadius: responsiveHeight(1),
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.2),
  },
  postActionsLeft: {
    flexDirection: 'row',
    gap: responsiveWidth(4.5),
  },
  postActionsRight: {
    flexDirection: 'row',
    gap: responsiveWidth(4.5),
  },
  postCaption: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.2),
  },
});
