import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';
import SVGXml from './SvgIcon';
import { AppIcons } from '../config/Icons';
import { AppImages } from '../config/Images';

/**
 * PostCard — reusable social-feed post component.
 *
 * Props:
 *  avatar        – image source for the user avatar
 *  name          – display name shown in the header
 *  time          – (optional) time string, e.g. "7h"
 *  image         – image source for the post image
 *  caption       – (optional) caption text below the actions
 *  likedBy       – (optional) "Liked by …" rich text node or string
 *  comment       – (optional) comment text below likedBy
 *  showAvatarRing – whether to show the gold ring around the avatar (default: true)
 */
const PostCard = ({
  avatar,
  name,
  time,
  image,
  caption,
  likedBy,
  comment,
  showAvatarRing = true,
}) => {
  return (
    <View style={styles.card}>
      {/* ── Header ──────────────────────────────────────────── */}
      <View style={styles.header}>
        <View
          style={[
            styles.avatarWrap,
            showAvatarRing && styles.avatarRing,
          ]}>
          <Image source={avatar} style={styles.avatarImg} />
        </View>
        <View style={styles.meta}>
          <Text style={styles.name}>{name}</Text>
          {!!time && <Text style={styles.time}>{time}</Text>}
        </View>
      </View>

      {/* ── Post Image ──────────────────────────────────────── */}
      <Image source={image} style={styles.postImage} />

      {/* ── Action Row ──────────────────────────────────────── */}
      <View style={styles.actions}>
        <View style={styles.actionsLeft}>
          <TouchableOpacity >
            <Image source={AppImages.likeIcon} />
            {/* <IonIcon name="flame" size={20} color={AppColors.textMuted} /> */}
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={AppImages.comment} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={AppImages.share} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionsRight}>
          <TouchableOpacity >
            <Image source={AppImages.repost} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={AppImages.bookmark} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Liked By ────────────────────────────────────────── */}
      {!!likedBy && (
        <Text style={styles.likedBy}>
          {typeof likedBy === 'string' ? (
            <>
              Liked by <Text style={styles.boldWhite}>{likedBy}</Text> and
              others
            </>
          ) : (
            likedBy
          )}
        </Text>
      )}

      {/* ── Comment ─────────────────────────────────────────── */}
      {!!comment && (
        <Text style={styles.comment} numberOfLines={2}>
          {comment}
        </Text>
      )}

      {/* ── Caption ─────────────────────────────────────────── */}
      {!!caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
  // ── Header ──────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.2),
    gap: responsiveWidth(2.5),
  },
  avatarWrap: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    overflow: 'hidden',
  },
  avatarRing: {
    borderWidth: 2,
    borderColor: AppColors.accentGold,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  meta: {
    flex: 1,
  },
  name: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(1.75),
    fontWeight: '700',
  },
  time: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.4),
    marginTop: 1,
  },
  // ── Image ───────────────────────────────────────────────
  postImage: {
    width: '100%',
    height: responsiveHeight(28),
    borderRadius: responsiveHeight(1),
  },
  // ── Actions ─────────────────────────────────────────────
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.2),
  },
  actionsLeft: {
    flexDirection: 'row',
    gap: responsiveWidth(4.5),
  },
  actionsRight: {
    flexDirection: 'row',
    gap: responsiveWidth(4.5),
  },
  // ── Text ────────────────────────────────────────────────
  likedBy: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.2),
  },
  boldWhite: {
    color: AppColors.textWhite,
    fontWeight: '700',
  },
  comment: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.2),
    marginTop: responsiveHeight(0.3),
  },
  caption: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.5),
    lineHeight: responsiveFontSize(2.2),
  },
});

export default PostCard;
