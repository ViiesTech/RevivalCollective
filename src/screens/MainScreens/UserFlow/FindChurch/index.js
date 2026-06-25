import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FeedHeader from '../../../../components/FeedHeader';
import ChurchInfoCard from '../../../../components/ChurchInfoCard';
import { AppColors } from '../../../../config/Colors';
import { AppImages } from '../../../../config/Images';
import TextHeader from '../../../../components/TextHeader';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';

// Pin positions on the map as percentages
const PINS = [
  { id: '1', top: '20%', left: '18%' },
  { id: '2', top: '30%', left: '36%' },
  { id: '3', top: '15%', left: '55%' },
  { id: '4', top: '42%', left: '28%' },
  { id: '5', top: '50%', left: '62%' },
  { id: '6', top: '25%', left: '74%' },
];

const CHURCH = {
  name: 'Hermosa Party Scene Outreach',
  date: '2025 - 10 - 23  -  10:00PM',
  address: 'Hermosa Beach, CA , 1Pier Avenue, Hermosa Beach',
  description:
    'Share the love of Jesus Create connection ,witness pray for people, prophecy ,heading.',
};

const FindChurch = ({ navigation }) => {
  const [zip, setZip] = useState('');
  const [pinSelected, setPinSelected] = useState(false);

  const handlePinPress = () => {
    setPinSelected(true);
  };

  const handleVisitChurch = () => {
    navigation.navigate('ChurchDetails');
  };

  return (
    <>
      <ScreenWrapper style={{ padding: responsiveWidth(4.5) }}>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor={AppColors.darkBg}
        /> */}

        {/* Feed header */}
        <TextHeader
          noPadding
          title="Find Your Church Community"
          subTitle="Connect with a community that feels like family"
        />

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Zip code search */}
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter Zip Code"
              placeholderTextColor={AppColors.darkBg}
              value={zip}
              onChangeText={setZip}
              keyboardType="numeric"
            />
            <TouchableOpacity
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Icon name="search" size={18} color={AppColors.darkBg} />
            </TouchableOpacity>
          </View>

          {/* ── Map section ── */}
          <View style={styles.mapContainer}>
            <Image
              source={AppImages.myMap}
              style={styles.mapImage}
              resizeMode="cover"
            />
            {/* State 1: ripple + profile center after pin tap */}
            {pinSelected && (
              <View style={styles.rippleContainer}>
                <View style={[styles.ripple, styles.ripple3]} />
                <View style={[styles.ripple, styles.ripple2]} />
                <View style={[styles.ripple, styles.ripple1]} />
                <View style={styles.centerProfileRing}>
                  <Image
                    source={AppImages.profile}
                    style={styles.centerProfileImg}
                  />
                </View>
              </View>
            )}
          </View>

          {/* ── Church info card ── */}
          <ChurchInfoCard
            name={CHURCH.name}
            date={CHURCH.date}
            address={CHURCH.address}
            description={CHURCH.description}
            onPrimaryPress={handleVisitChurch}
          />
        </ScrollView>
      </ScreenWrapper>
    </>
  );
};

export default FindChurch;
