/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import TextHeader from '../../../../../components/TextHeader';
import styles from './styles';
import BorderedCard from '../../../../../components/BorderedCard';
import Icon from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../../../../components/ScreenWrapper';
import FeedHeader from '../../../../../components/FeedHeader';
import { AppImages } from '../../../../../config/Images';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../../globalFunctions/Resposive_Dimensions';
import { AppColors } from '../../../../../config/Colors';
import BoldText from '../../../../../components/BoldText';
import LineBreak from '../../../../../components/LineBreak';
import NormalText from '../../../../../components/NormalText';
import Button from '../../../../../components/Button';

const RecommendedMusic = () => {
  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <TextHeader
        noPadding
        title="Recommended Books & Music"
        subTitle="Resources to deepen your walk with God and expand the Kingdom"
      />
      <LineBreak val={1.5} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
        <BoldText
          size={2.4}
          title="Featured Playlists"
          color={AppColors.white}
        />
        <LineBreak val={1.5} />
        <View style={{}}>
          <Image source={AppImages.featuredBook} />
          <View
            style={{
              backgroundColor: AppColors.black,
              position: 'absolute',
              margin: responsiveHeight(2),
              padding: responsiveHeight(0.7),
              paddingHorizontal: responsiveHeight(3),
              borderRadius: responsiveHeight(1),
              right: 0,
            }}
          >
            <NormalText title="Featured" color={AppColors.white} />
          </View>
          <View>
            <LineBreak val={2} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <BoldText
                size={2}
                title="Hosting the Presence"
                color={AppColors.white}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsiveHeight(1),
                }}
              >
                <Button
                  title="Revival"
                  style={{ paddingVertical: responsiveHeight(0.5) }}
                  size={1.3}
                />
                <Button
                  title="Intermediate"
                  style={{ paddingVertical: responsiveHeight(0.5) }}
                  size={1.3}
                />
              </View>
            </View>
            <LineBreak val={2} />
            <NormalText
              size={1.8}
              title="Learn to carry God's presence and transform the world around you."
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <BoldText size={1.8} title="Author: " />
              <NormalText size={1.8} title="Bill Johnson" />
            </View>
            <LineBreak val={2} />
            <Button title="View on Amazon" />
          </View>
        </View>
        <LineBreak val={3} />
        <BoldText
          size={2.4}
          title="Recommended Books & Music"
          color={AppColors.white}
        />

        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Genre"
            placeholderTextColor={AppColors.textMuted}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Icon name="search" size={20} color={AppColors.darkBg} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <BoldText size={2.4} title="Books" color={AppColors.white} />
          <View
            style={{
              backgroundColor: AppColors.white,
              position: 'absolute',
              padding: responsiveHeight(0.4),
              paddingHorizontal: responsiveHeight(3),
              borderRadius: responsiveHeight(1),
              right: 0,
            }}
          >
            <NormalText title="All" color={AppColors.black} />
          </View>
        </View>
        <LineBreak val={2} />
        <View style={styles.mediaRow}>
          <View style={styles.smallCard}>
            <View style={{ backgroundColor: AppColors.white }}>
              <Image source={AppImages.book1} style={styles.smallImage} />
            </View>
            <LineBreak val={0.5} />
            <BoldText size={1.9} title="Destined to Reign" />
            <LineBreak val={0.5} />

            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>View on Amazon</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCard}>
            <Image source={AppImages.book2} style={styles.smallImage} />
            <LineBreak val={0.5} />

            <BoldText size={1.9} title="Christ the Healer" />

            <LineBreak val={0.5} />

            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>View on Amazon</Text>
            </TouchableOpacity>
          </View>
        </View>
        <LineBreak val={2} />

        <BoldText size={2.4} title="Music" color={AppColors.white} />
        <LineBreak val={1.5} />

        <View style={styles.mediaRow}>
          <View style={styles.smallCard}>
            <Image source={AppImages.dimImage} style={styles.smallImage} />
            <TouchableOpacity style={styles.playOverlay} activeOpacity={0.8}>
              <Icon name="play" size={20} color={AppColors.white} />
            </TouchableOpacity>
            <BoldText size={1.9} title="Destined to Reign" />
            <View style={styles.musicButtonsRow}>
              <TouchableOpacity style={styles.platformBtn}>
                <Text style={styles.platformBtnText}>Apple Music</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.platformBtn}>
                <Text style={styles.platformBtnText}>Spotify</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.smallCard}>
            <Image source={AppImages.dimImage} style={styles.smallImage} />
            <TouchableOpacity style={styles.playOverlay} activeOpacity={0.8}>
              <Icon name="play" size={20} color={AppColors.white} />
            </TouchableOpacity>
            <BoldText size={1.9} title="Destined to Reign" />
            <View style={styles.musicButtonsRow}>
              <TouchableOpacity style={styles.platformBtn}>
                <Text style={styles.platformBtnText}>Apple Music</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.platformBtn}>
                <Text style={styles.platformBtnText}>Spotify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <LineBreak val={2} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <BoldText
            size={2.4}
            title="More Recommendations"
            color={AppColors.white}
          />
          <View
            style={{
              backgroundColor: AppColors.white,
              position: 'absolute',
              padding: responsiveHeight(0.4),
              paddingHorizontal: responsiveHeight(3),
              borderRadius: responsiveHeight(1),
              right: 0,
            }}
          >
            <NormalText title="All" color={AppColors.black} />
          </View>
        </View>
        <LineBreak val={2} />
        <View style={styles.mediaRow}>
          <View style={styles.smallCard}>
            <View style={{ backgroundColor: AppColors.white }}>
              <Image source={AppImages.book1} style={styles.smallImage} />
            </View>
            <LineBreak val={0.5} />
            <BoldText size={1.9} title="Destined to Reign" />
            <LineBreak val={0.5} />

            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>View on Amazon</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCard}>
            <Image source={AppImages.book2} style={styles.smallImage} />
            <LineBreak val={0.5} />

            <BoldText size={1.9} title="Christ the Healer" />

            <LineBreak val={0.5} />

            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>View on Amazon</Text>
            </TouchableOpacity>
          </View>
        </View>
        <LineBreak val={2} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default RecommendedMusic;
