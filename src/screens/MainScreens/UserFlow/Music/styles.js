import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../../globalFunctions/Resposive_Dimensions';

export default StyleSheet.create({
  scroll: {
    backgroundColor: AppColors.darkBg,
  },
  container: {
    paddingBottom: responsiveHeight(5),
  },
  sectionTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    marginBottom: responsiveHeight(1.2),
  },
  playlistDesc: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.6),
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: responsiveHeight(0.8),
  },
  appleBtn: {
    alignSelf: 'stretch',
    backgroundColor: AppColors.textWhite,
    paddingVertical: responsiveHeight(1.2),
    borderRadius: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(0.4),
  },
  appleBtnText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.5),
    fontWeight: '600',
  },
  genresWrap: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsiveWidth(2),
  },
  genreCard: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveHeight(1),
    marginRight: responsiveWidth(2),
    marginBottom: responsiveHeight(1.2),
  },
  genreText: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.3),
  },
  /* new detailed genre block styles */
  genreBlock: {
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(1.2),
    padding: responsiveWidth(4),
    marginBottom: responsiveHeight(1.2),
    backgroundColor: 'transparent',
    position: 'relative',
  },
  genreTitle: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    marginBottom: responsiveHeight(0.6),
  },
  genreIconBox: {
    position: 'absolute',
    right: responsiveWidth(3.5),
    top: responsiveHeight(2.2),
    width: responsiveHeight(5),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(0.8),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  genreIcon: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.8),
  },
  genreDesc: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.6),
    width: responsiveWidth(65),
    marginTop: responsiveHeight(0.4),
    marginBottom: responsiveHeight(0.8),
  },
  featuredLabel: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.3),
    marginBottom: responsiveHeight(0.6),
  },
  artistWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsiveWidth(2),
  },
  artistChip: {
    backgroundColor: AppColors.white,
    paddingVertical: responsiveHeight(0.7),
    paddingHorizontal: responsiveWidth(3.5),
    borderRadius: responsiveHeight(0.8),
    marginRight: responsiveWidth(2),
    marginBottom: responsiveHeight(0.8),
  },
  artistText: {
    color: AppColors.darkBg,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
  },
});
