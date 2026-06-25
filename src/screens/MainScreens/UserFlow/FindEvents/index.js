import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FeedHeader from '../../../../components/FeedHeader';
import ChurchInfoCard from '../../../../components/ChurchInfoCard';
import Button from '../../../../components/Button';
import { AppColors } from '../../../../config/Colors';
import { AppImages } from '../../../../config/Images';
import styles from './styles';
import TextHeader from '../../../../components/TextHeader';
import LineBreak from '../../../../components/LineBreak';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';
import ScreenWrapper from '../../../../components/ScreenWrapper';

const EVENT = {
  name: 'Hermosa Party Scene Outreach',
  date: '2025 - 10 - 23  -  10:00PM',
  address: 'Hermosa Beach, CA , 1Pier Avenue, Hermosa Beach',
  description:
    'Share the love of Jesus Create connection ,witness pray for people, prophecy ,heading.',
};

const FindEvents = ({ navigation }) => {
  const [zip, setZip] = useState('');
  const [pinSelected, setPinSelected] = useState(false);
  const [attendModalVisible, setAttendModalVisible] = useState(false);

  return (
    <ScreenWrapper scrollable style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader
        noPadding
        title="Find Evangelism Events"
        subTitle="Discover outreach opportunities happening near you"
      />
      <LineBreak val={1.5} />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Create event button */}
        <View style={styles.createBtnWrap}>
          <Button
            title="Create an evangelism event"
            onPress={() => navigation.navigate('CreateEvent')}
            variant="primary"
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

        {/* Event info card */}
        <ChurchInfoCard
          name={EVENT.name}
          date={EVENT.date}
          address={EVENT.address}
          description={EVENT.description}
          primaryBtnLabel="Attend This Event"
          followBtnLabel="Follow this Ministry"
          onPrimaryPress={() => setAttendModalVisible(true)}
        />
      </ScrollView>

      {/* Attend modal */}
      <Modal
        visible={attendModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setAttendModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {/* Close button */}
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setAttendModalVisible(false)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Icon name="x" size={16} color={AppColors.darkBg} />
            </TouchableOpacity>

            {/* Attending count */}
            <Text style={styles.modalTitle}>47 attending</Text>

            {/* Action buttons */}
            <View style={styles.modalBtnRow}>
              <TouchableOpacity
                style={styles.modalBtn}
                activeOpacity={0.85}
                onPress={() => setAttendModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalBtn}
                activeOpacity={0.85}
                onPress={() => setAttendModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>Maybe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};

export default FindEvents;
