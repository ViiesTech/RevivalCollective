import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import PostCard from '../../../../components/PostCard';
import FeedHeader from '../../../../components/FeedHeader';
import { AppImages } from '../../../../config/Images';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';
import TextHeader from '../../../../components/TextHeader';

const POSTS = [
  {
    id: '1',
    name: 'John Smith',
    avatar: AppImages.profilePicture,
    image: AppImages.post2,
    likedBy: 'trustgodbro TRC',
  },
];

const Profile = ({ navigation }) => {
  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <TextHeader title="Profile" noPadding/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* ── Profile Header ──────────────────────────────── */}
          <View style={styles.profileRow}>
            <View style={styles.avatarWrapper}>
              {/* SVG arc rings */}
              <Svg
                width={responsiveHeight(13)}
                height={responsiveHeight(13)}
                style={styles.arcSvg}
              >
                {/* Large arc — top-left */}
                <Circle
                  cx={responsiveHeight(6.5)}
                  cy={responsiveHeight(6.5)}
                  r={responsiveHeight(5.8)}
                  stroke="#FFFFFF"
                  strokeWidth={2.5}
                  fill="none"
                  strokeDasharray={`${
                    responsiveHeight(5.2) * Math.PI * 2 * 0.65
                  } ${responsiveHeight(5.2) * Math.PI * 2 * 0.35}`}
                  strokeDashoffset={responsiveHeight(5.8) * Math.PI * 2 * 0.15}
                  strokeLinecap="round"
                />
                {/* Small arc — bottom-right */}
                <Circle
                  cx={responsiveHeight(6.5)}
                  cy={responsiveHeight(6.5)}
                  r={responsiveHeight(5.8)}
                  stroke="#FFFFFF"
                  strokeWidth={2.5}
                  fill="none"
                  strokeDasharray={`${
                    responsiveHeight(5.3) * Math.PI * 2 * 0.2
                  } ${responsiveHeight(5.3) * Math.PI * 2 * 0.8}`}
                  strokeDashoffset={responsiveHeight(5.8) * Math.PI * 2 * 0.62}
                  strokeLinecap="round"
                />
              </Svg>
              <Image
                source={AppImages.profilePicture}
                style={styles.profilePicture}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>John Smith</Text>
              <Text style={styles.userTitle}>Public Figure</Text>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>2</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>100K</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>200</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ── Bio ─────────────────────────────────────────── */}
          <View style={styles.bioSection}>
            <Text style={styles.userHandle}>@johnsmith_</Text>
            <Text style={styles.userBio}>{'\n'}Revival</Text>
            <Text style={styles.userBio}>Reformation</Text>
            <Text style={styles.userBio}>Transformation</Text>
            <Text style={styles.userBio}>
              Husband to <Text style={styles.userLink}>@jennifersmith</Text>
            </Text>
            <Text style={styles.userBio}>
              Let&apos;s connect:{' '}
              <Text style={styles.userLink}>www.revival.com</Text>
            </Text>
          </View>

          {/* ── Action Tabs ─────────────────────────────────── */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>ABOUT</Text>
            </TouchableOpacity>
            <Text style={styles.actionSeparator}>|</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>FOLLOW</Text>
            </TouchableOpacity>
            <Text style={styles.actionSeparator}>|</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>MESSAGE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Posts Feed ───────────────────────────────────── */}
        {POSTS.map(post => (
          <PostCard
            key={post.id}
            avatar={post.avatar}
            name={post.name}
            image={post.image}
            showAvatarRing={false}
            likedBy={post.likedBy}
            comment={
              <Text style={styles.commentText}>
                <Text style={styles.commentBold}>Tristan Powell</Text> a bunch
                of my friends decided to...
                <Text style={styles.commentMore}>more</Text>
              </Text>
            }
          />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Profile;
