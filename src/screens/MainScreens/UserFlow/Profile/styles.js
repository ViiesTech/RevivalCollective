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
    paddingVertical: responsiveHeight(1),
  },

  // ── Profile Header ───────────────────────────────────────
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  avatarWrapper: {
    width: responsiveHeight(13),
    height: responsiveHeight(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  arcSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profilePicture: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: responsiveHeight(5),
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
  },
  userTitle: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.3),
  },

  // ── Stats ────────────────────────────────────────────────
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5),
    paddingRight: responsiveWidth(2),
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
  },
  statLabel: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: 2,
  },

  // ── Bio ──────────────────────────────────────────────────
  bioSection: {
    marginTop: responsiveHeight(1.5),
  },
  userHandle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
  },
  userBio: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.2),
  },
  userLink: {
    color: AppColors.linkText,
  },

  // ── Action Tabs ──────────────────────────────────────────
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
    gap: responsiveWidth(4),
  },
  actionButton: {
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(3),
  },
  actionText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '700',
    letterSpacing: 1,
  },
  actionSeparator: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '300',
  },

  // ── Post comment styles (used inline) ────────────────────
  commentText: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.2),
  },
  commentBold: {
    color: AppColors.textWhite,
    fontWeight: '700',
  },
  commentMore: {
    color: AppColors.textMuted,
  },
});
