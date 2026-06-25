import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedHeader from '../../../../components/FeedHeader';
import Button from '../../../../components/Button';
import CustomInput from '../../../../components/CustomInput';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { AppColors } from '../../../../config/Colors';
import { AppImages } from '../../../../config/Images';
import styles from './styles';
import TextHeader from '../../../../components/TextHeader';
import LineBreak from '../../../../components/LineBreak';
import { useNavigation } from '@react-navigation/native';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const TABS = ['Prayer Request', 'Prayer Map', 'Public Prayers', 'My Prayers'];

const CATEGORIES = [
  'Other',
  'Health',
  'Family',
  'Work',
  'Relationships',
  'Faith',
  'Finance',
];

const PINS = [
  { id: '1', top: '20%', left: '18%' },
  { id: '2', top: '30%', left: '36%' },
  { id: '3', top: '15%', left: '55%' },
  { id: '4', top: '42%', left: '28%' },
  { id: '5', top: '50%', left: '62%' },
  { id: '6', top: '25%', left: '74%' },
];

// ─── Tab: Prayer Request ──────────────────────────────────────────────────────
const PrayerRequestTab = () => {
  const [name, setName] = useState('');
  const [prayer, setPrayer] = useState('');
  const [category, setCategory] = useState('Other');
  const [showCategoryDrop, setShowCategoryDrop] = useState(false);
  const [visibility, setVisibility] = useState('public');

  return (
    <>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.pageTitle}>Share Your Prayer Request</Text>
        <Text style={styles.pageSubtitle}>
          Share your prayer request with the community or keep it private
          between you and God.
        </Text>

        {/* Name */}
        <CustomInput
          label="Name (Optional)"
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
          labelOutside
        />

        {/* Prayer Request */}
        <CustomInput
          label="Prayer Request *"
          placeholder="Share what you need prayer for..."
          value={prayer}
          onChangeText={setPrayer}
          multiline
          inputStyle={styles.prayerInputStyle}
          labelOutside
        />

        {/* Category */}
        <Text style={styles.fieldLabel}>Category</Text>
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => setShowCategoryDrop(v => !v)}
          activeOpacity={0.8}
        >
          <Text style={styles.dropdownValue}>{category}</Text>
          <Icon name="chevron-down" size={20} color={AppColors.textWhite} />
        </TouchableOpacity>
        {showCategoryDrop && (
          <View style={styles.dropdownList}>
            {CATEGORIES.map(c => (
              <TouchableOpacity
                key={c}
                style={styles.dropdownItem}
                onPress={() => {
                  setCategory(c);
                  setShowCategoryDrop(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{c}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Visibility */}
        <Text style={styles.fieldLabel}>Visibility</Text>
        <TouchableOpacity
          style={styles.visibilityRow}
          onPress={() => setVisibility('public')}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.radioCircle,
              visibility === 'public' && styles.radioCircleActive,
            ]}
          >
            {visibility === 'public' && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.visibilityText}>
            Public - Share with the community
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.visibilityRow}
          onPress={() => setVisibility('private')}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.radioCircle,
              visibility === 'private' && styles.radioCircleActive,
            ]}
          >
            {visibility === 'private' && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.visibilityText}>
            Private - Just between you and God.
          </Text>
        </TouchableOpacity>
        <View style={styles.ctaContainer}>
          <Button
            title="Submit Prayer Request"
            variant="primary"
            onPress={() => { }}
          />
        </View>
      </ScrollView>

      {/* Pinned submit */}
    </>
  );
};

// ─── Tab: Prayer Map ──────────────────────────────────────────────────────────
const PrayerMapTab = () => {
  const [zip, setZip] = useState('');
  const [pinSelected, setPinSelected] = useState(false);

  return (
    <ScrollView
      style={styles.scroll}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.pageTitle}>Prayer Gatherings Near You</Text>
      <Text style={styles.pageSubtitle}>
        in believers to pray for awakening, healing, and unity in your region
      </Text>

      {/* Create Hub button */}
      <View style={styles.createBtnWrap}>
        <Button
          title="Create Prayer Hub"
          variant="primary"
          onPress={() => { }}
        />
      </View>

      {/* Zip search */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Zip Code"
          placeholderTextColor={AppColors.darkBg}
          value={zip}
          onChangeText={setZip}
          keyboardType="numeric"
        />
        <Icon name="search" size={18} color={AppColors.darkBg} />
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <Image
          source={AppImages.myMap}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

// ─── Tab: Public Prayers (pixel-perfect) ─────────────────────────────────────
const PublicPrayersTab = () => (
  <ScrollView
    style={styles.scroll}
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.infoRow}>
      <Ionicons
        name="sparkles-outline"
        size={18}
        color={AppColors.textWhite}
        style={styles.infoIcon}
      />
      <Text style={styles.infoText}>
        Tap the heart to let someone know you’re praying for them. Your prayers
        matter!
        <Text style={styles.emoji}>🙏</Text>
      </Text>
    </View>
    <View style={styles.emptyCard}>
      <FontAwesome
        name="heart"
        size={38}
        color={AppColors.textWhite}
        style={styles.emptyCardIcon}
      />
      <Text style={styles.emptyCardText}>
        No public prayer requests yet. Be the first to share!
      </Text>
    </View>
  </ScrollView>
);

// ─── Tab: My Prayers (pixel-perfect) ─────────────────────────────────────────
const MyPrayersTab = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.myPrayersHeaderRow}>
        <View style={styles.myPrayersTitleRow}>
          <Icon
            name="lock"
            size={18}
            color={AppColors.textWhite}
            style={styles.myPrayersLockIcon}
          />
          <Text style={styles.myPrayersTitle}>My Private Prayers</Text>
        </View>
        <TouchableOpacity
          style={styles.addPrayerBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('AppStack', { screen: 'CreatePrayerHub' })
          }
        >
          <Text style={styles.addPrayerBtnText}>Add Prayer</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.myPrayersSubtitle}>
        Keep track of your personal prayers, reflections, and answered requests
      </Text>
      <View style={styles.emptyCard}>
        <Icon
          name="lock"
          size={32}
          color={AppColors.textWhite}
          style={styles.emptyCardIcon}
        />
        <Text style={styles.emptyCardText}>Your prayer journal is empty</Text>
        <Text style={styles.emptyCardTextSub}>
          Start by adding your first prayer above
        </Text>
      </View>
    </ScrollView>
  );
};

// ─── Main Screen ─────────────────────────────────────────────────────────────
const PrayerWall = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTab = () => {
    switch (activeTab) {
      case 0:
        return <PrayerRequestTab />;
      case 1:
        return <PrayerMapTab />;
      case 2:
        return <PublicPrayersTab />;
      case 3:
        return <MyPrayersTab />;
      default:
        return <PrayerRequestTab />;
    }
  };

  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <FeedHeader noPadding />
      <TextHeader
        noPadding
        title="Prayer Wall"
        subTitle="Join together in prayer and support"
      />
      <LineBreak val={1.5} />
      {/* Tab pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsRow}
        style={styles.tabsScroll}
      >
        {TABS.map((tab, i) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabPill, activeTab === i && styles.tabPillActive]}
            onPress={() => setActiveTab(i)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabPillText,
                activeTab === i && styles.tabPillTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab content */}
      <View style={styles.tabContent}>{renderTab()}</View>
    </ScreenWrapper>
  );
};

export default PrayerWall;
