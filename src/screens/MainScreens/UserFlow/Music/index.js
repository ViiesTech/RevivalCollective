import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeedHeader from '../../../../components/FeedHeader';
import TextHeader from '../../../../components/TextHeader';
import styles from './styles';
import BorderedCard from '../../../../components/BorderedCard';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import BoldText from '../../../../components/BoldText';
import { AppColors } from '../../../../config/Colors';
import LineBreak from '../../../../components/LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';

const playlists = [
  {
    title: 'Worship Revival',
    desc: 'Modern worship anthems celebrating hope, freedom, and church presence.',
  },
  {
    title: 'Faith Beats (Christian Rap)',
    desc: 'Bold faith-filled rhymes that move the heart and feet.',
  },
  {
    title: 'Soaking Atmosphere',
    desc: 'Instrumental ambience for worship and rest.',
  },
  {
    title: 'Country for the Kingdom',
    desc: 'Uplifting country sounds that celebrate the Lord.',
  },
  {
    title: 'Revival Nights Live',
    desc: 'Live worship moments from churches around the world.',
  },
];

const Music = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <FeedHeader noPadding />
      <TextHeader
        noPadding
        title="Christian Music Hub"
        subTitle="Worship, praise, and Kingdom sounds for every moment"
      />
      {/* <View style={{ paddingHorizontal: responsiveWidth(4.5) }}>
        <LineBreak val={1} />
        <LineBreak val={2} />
      </View> */}
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
        <LineBreak val={2} />

        {playlists.map(p => (
          <BorderedCard
            key={p.title}
            title={p.title}
            style={{ alignItems: 'left' }}
            onPress={() =>
              navigation.navigate('AppStack', { screen: 'RecommendedMusic' })
            }
          >
            <Text style={styles.playlistDesc}>{p.desc}</Text>
            <View style={{ height: responsiveHeight(1.2) }} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AppStack', { screen: 'RecommendedMusic' })
              }
              style={styles.appleBtn}
              activeOpacity={0.8}
            >
              <Text style={styles.appleBtnText}>Listen on Apple Music</Text>
            </TouchableOpacity>
          </BorderedCard>
        ))}

        <BoldText
          size={2.4}
          title="Discover by Genre"
          color={AppColors.white}
        />
        <LineBreak val={1} />

        {/* Genre blocks matching design */}
        <View style={{ marginTop: responsiveHeight(1) }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppStack', { screen: 'RecommendedMusic' })
            }
            style={styles.genreBlock}
          >
            <Text style={styles.genreTitle}>Worship</Text>
            <View style={styles.genreIconBox} activeOpacity={0.8}>
              <Ionicons
                name="musical-notes-sharp"
                size={responsiveFontSize(2)}
                color={AppColors.darkBg}
              />
            </View>
            <Text style={styles.genreDesc}>
              Songs of adoration that draw the heart closer to God.
            </Text>
            <LineBreak val={1} />
            <Text style={styles.featuredLabel}>Featured Artists</Text>
            <LineBreak val={1} />
            <View style={styles.artistWrap}>
              {[
                'Bethel Music',
                'Hillsong Worship',
                'Elevation Worship',
                'Maverick City Music',
                'Housefires',
                'Upperroom',
              ].map(a => (
                <View key={a} style={styles.artistChip}>
                  <Text style={styles.artistText}>{a}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppStack', { screen: 'RecommendedMusic' })
            }
            style={styles.genreBlock}
          >
            <Text style={styles.genreTitle}>Rap / Hip-Hop</Text>
            <TouchableOpacity style={styles.genreIconBox} activeOpacity={0.8}>
              <Text style={styles.genreIcon}>♫</Text>
            </TouchableOpacity>
            <Text style={styles.genreDesc}>
              Gospel truth with rhythm and power.
            </Text>
            <Text style={styles.featuredLabel}>Featured Artists</Text>
            <View style={styles.artistWrap}>
              {[
                'Lecrae',
                'KB',
                'Hulvey',
                'WHATUPRG',
                'Andy Mineo',
                '1K Phew',
              ].map(a => (
                <View key={a} style={styles.artistChip}>
                  <Text style={styles.artistText}>{a}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppStack', { screen: 'RecommendedMusic' })
            }
            style={styles.genreBlock}
          >
            <Text style={styles.genreTitle}>Country</Text>
            <TouchableOpacity style={styles.genreIconBox} activeOpacity={0.8}>
              <Text style={styles.genreIcon}>♫</Text>
            </TouchableOpacity>
            <Text style={styles.genreDesc}>
              Stories of grace and gratitude rooted in faith.
            </Text>
            <Text style={styles.featuredLabel}>Featured Artists</Text>
            <View style={styles.artistWrap}>
              {[
                'Josh Turner',
                'Carrie Underwood',
                'Zach Williams',
                'Chris Tomlin',
              ].map(a => (
                <View key={a} style={styles.artistChip}>
                  <Text style={styles.artistText}>{a}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Music;
