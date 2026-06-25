import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FeedHeader from '../../../../components/FeedHeader';
import Button from '../../../../components/Button';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';
import TextHeader from '../../../../components/TextHeader';

const pad = n => String(n).padStart(2, '0');

const formatDate = d =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const formatTime = d => {
  let h = d.getHours();
  const m = pad(d.getMinutes());
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
};

const CreateEvent = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState(new Date(2025, 9, 23));
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(2025, 9, 23, 10, 0));
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <ScreenWrapper scrollable style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader
        noPadding
        title="Create Evangelism Event"
        subTitle="Lorem ipsum Simply Dummy Text"
      />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back arrow + title row */}

        {/* Name */}
        <Text style={styles.fieldLabel}>Name</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Event Name"
            placeholderTextColor={AppColors.white}
            value={eventName}
            onChangeText={setEventName}
          />
        </View>

        {/* Date */}
        <Text style={styles.fieldLabel}>Date</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowDatePicker(true)}
          activeOpacity={0.8}
        >
          <Icon name="calendar" size={16} color={AppColors.textWhite} />
          <Text style={styles.fieldValue}>{formatDate(date)}</Text>
        </TouchableOpacity>

        {/* Time */}
        <Text style={styles.fieldLabel}>Time</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowTimePicker(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.fieldValue}>{formatTime(time)}</Text>
        </TouchableOpacity>

        {/* Location */}
        <Text style={styles.fieldLabel}>Location</Text>
        <View style={styles.inputBox}>
          <Icon name="map-pin" size={16} color={AppColors.textWhite} />
          <TextInput
            style={styles.textInputFlex}
            placeholder="Hermosa Beach, CA . 1Pier Avenue, Hermosa Beach"
            placeholderTextColor={AppColors.white}
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {/* Description */}
        <Text style={styles.fieldLabel}>
          Description <Text style={styles.asterisk}>*</Text>
        </Text>
        <View style={[styles.inputBox, styles.textAreaBox]}>
          <TextInput
            style={styles.textArea}
            placeholder="Write text here...."
            placeholderTextColor={AppColors.white}
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
          />
        </View>
      </ScrollView>

      {/* Pinned Create button */}
      <View style={styles.ctaContainer}>
        <Button title="Create" onPress={() => {}} variant="primary" />
      </View>

      {/* Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selected) => {
            setShowDatePicker(false);
            if (selected) setDate(selected);
          }}
        />
      )}

      {/* Time Picker */}
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={false}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selected) => {
            setShowTimePicker(false);
            if (selected) setTime(selected);
          }}
        />
      )}
    </ScreenWrapper>
  );
};

export default CreateEvent;
