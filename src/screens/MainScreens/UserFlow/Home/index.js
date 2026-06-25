import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FeedHeader from '../../../../components/FeedHeader';
import PostCard from '../../../../components/PostCard';
import { AppColors } from '../../../../config/Colors';
import { AppImages } from '../../../../config/Images';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const POSTS = [
  {
    id: '1',
    name: 'Christian Church',
    time: '7h',
    image: AppImages.post,
    avatar: AppImages.story1,
    caption:
      'Lorem ipsum simply dummy amet, consectetur lorem ipsum olum piel sodipacing elit, sed',
  },
  {
    id: '2',
    name: 'Christian Church',
    time: '7h',
    image: AppImages.post,
    avatar: AppImages.story1,
    caption:
      'Lorem ipsum simply dummy amet, consectetur lorem ipsum olum piel sodipacing elit, sed',
  },
];

const Home = ({ navigation }) => {
  return (
    <>
      <ScreenWrapper style={{padding: responsiveWidth(4.5),}} edges={['top']}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={AppColors.darkBg}
        />

        {/* ── Header ────────────────────────────────────────── */}
        <FeedHeader
        noPadding
        // onPlusPress={() => navigation.navigate('CreateEvangelist')}
        />

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* ── Stories ──────────────────────────────────────── */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesRow}
          >
            {/* Your Story */}
            <View style={styles.storyItem}>
              <TouchableOpacity
                style={styles.yourStoryCircle}
                activeOpacity={0.8}
              >
                <Icon name="plus" size={26} color={AppColors.textWhite} />
              </TouchableOpacity>
              <Text style={styles.storyLabel}>Your Story</Text>
            </View>

            {/* Friends' Stories */}
            <View style={styles.storyItem}>
              <TouchableOpacity
                style={styles.storyCircleRing}
                activeOpacity={0.7}
              >
                <Image
                  source={AppImages.story1}
                  style={styles.storyCircleImg}
                />
              </TouchableOpacity>
              <Text style={[styles.storyLabel, styles.storyLabelCenter]}>
                {"Friends'\nStories"}
              </Text>
            </View>

            {/* Stories */}
            <View style={styles.storyItem}>
              <TouchableOpacity
                style={styles.storyCircleRing}
                activeOpacity={0.7}
              >
                <Image
                  source={AppImages.story2}
                  style={styles.storyCircleImg}
                />
              </TouchableOpacity>
              <Text style={styles.storyLabel}>Stories</Text>
            </View>
          </ScrollView>

          {/* ── Post Composer ─────────────────────────────────── */}
          <View style={styles.composerCard}>
            <View style={styles.composerRow}>
              <Image source={AppImages.profile} style={styles.composerAvatar} />
              <View style={styles.composerText}>
                <Text style={styles.composerName}>Alicia Roth</Text>
                <Text style={styles.composerHint}>
                  What do you want to talk about?
                </Text>
              </View>
              <TouchableOpacity
                style={styles.composerArrowBtn}
                onPress={() => navigation.navigate('AppStack', { screen: 'AddPost' })}
                activeOpacity={0.8}
              >
                <Icon
                  name="arrow-right"
                  size={17}
                  color={AppColors.textWhite}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.composerDivider} />
            <View style={styles.composerFooter}>
              <TouchableOpacity
                style={styles.composerFooterBtn}
                activeOpacity={0.7}
              >
                <Icon name="image" size={15} color={AppColors.textMuted} />
                <Text style={styles.composerFooterText}>Photos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.composerFooterBtn}
                activeOpacity={0.7}
              >
                <Icon name="map-pin" size={15} color={AppColors.textMuted} />
                <Text style={styles.composerFooterText}>location</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ── Feed Posts ───────────────────────────────────── */}
          {POSTS.map(post => (
            <PostCard
              key={post.id}
              avatar={post.avatar}
              name={post.name}
              time={post.time}
              image={post.image}
              caption={post.caption}
            />
          ))}
        </ScrollView>
      </ScreenWrapper>
    </>
  );
};

export default Home;
