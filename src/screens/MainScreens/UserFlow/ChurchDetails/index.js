import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import FeedHeader from '../../../../components/FeedHeader';
import TextHeader from '../../../../components/TextHeader';
import Button from '../../../../components/Button';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const DEFAULT_CHURCH = {
  name: 'Coast Christian Fellowship',
  pastor: 'Joe Gil',
  denomination: 'Pentecostal / Charismatic',
  description:
    'We are a spirit-filled church that responds to God in extravagant love. Our desire is to love the South Bay to glorify Jesus and make His name famous.',
  address: '4000 Pacific Coast Highway, Torrance, California 90505',
  phone: '3103738573',
  website: 'www.coastchristian.com',
  hours: 'Sunday 10:00 am',
};

const ChurchDetails = ({ navigation, route }) => {
  const church = route?.params?.church ?? DEFAULT_CHURCH;
  const [message, setMessage] = useState('');

  return (
    <ScreenWrapper
      scrollable={false}
      style={{ padding: responsiveWidth(4.5) }}
      edges={['top']}
    >
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <TextHeader noPadding title="Coast Christian Fellowship" />
        {/* Church name + action icons */}
        <View style={styles.nameRow}>
          <Text style={styles.churchName}>{church.name}</Text>
          <View style={styles.nameActions}>
            <TouchableOpacity
              style={styles.iconCircle}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Icon name="user" size={16} color={AppColors.textWhite} />
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Icon name="bookmark" size={20} color={AppColors.textWhite} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Pastor */}
        <Text style={styles.pastor}>
          <Text style={styles.pastorLabel}>Pastor: </Text>
          {church.pastor}
        </Text>

        {/* Denomination */}
        <Text style={styles.denomination}>{church.denomination}</Text>

        {/* Description */}
        <Text style={styles.description}>{church.description}</Text>

        {/* Address */}
        <View style={styles.infoRow}>
          <Icon name="map-pin" size={13} color={AppColors.white} />
          <Text style={styles.infoText}>{church.address}</Text>
        </View>

        {/* Phone */}
        <View style={styles.infoRow}>
          <Icon name="phone" size={13} color={AppColors.white} />
          <Text style={styles.infoText}>{church.phone}</Text>
        </View>

        {/* Website */}
        <View style={styles.infoRow}>
          <Icon name="globe" size={13} color={AppColors.white} />
          <Text style={styles.infoText}>{church.website}</Text>
        </View>

        {/* Hours */}
        <View style={styles.hoursRow}>
          <View style={styles.hoursChip}>
            <Text style={styles.hoursChipText}>Hours</Text>
          </View>
          <Text style={styles.hoursText}>{church.hours}</Text>
        </View>

        {/* Send Message */}
        <Text style={styles.sendLabel}>Send Message</Text>
        <View style={styles.messageBox}>
          <TextInput
            style={styles.messageInput}
            placeholder="Write a msg of interest."
            placeholderTextColor={AppColors.textMuted}
            multiline
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={styles.submitRow}>
          <TouchableOpacity
            style={styles.submitBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('GospelToolkit')}
          >
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer for bottom button */}
        <View style={styles.scrollBottomPad} />
      </ScrollView>

      {/* CTA pinned to bottom */}
      <View style={styles.ctaContainer}>
        {/* <TouchableOpacity style={styles.ctaBtn} activeOpacity={0.85}>
          <Text style={styles.ctaBtnText}>Connect with This Church</Text>
        </TouchableOpacity> */}
        <Button
          title="Connect With This Church"
          onPress={() => navigation.navigate('GospelToolkit')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ChurchDetails;
