/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import FeedHeader from '../../../../components/FeedHeader';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { AppColors } from '../../../../config/Colors';
import TextHeader from '../../../../components/TextHeader';
import NormalText from '../../../../components/NormalText';
import { AppImages } from '../../../../config/Images';
import LineBreak from '../../../../components/LineBreak';
import CustomInput from '../../../../components/CustomInput';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CreateMinistryProfile = () => {
  const [date, setDate] = useState(new Date(2025, 9, 23));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [time, setTime] = useState(new Date(2025, 9, 23, 10, 0));
  const [showTimePicker, setShowTimePicker] = useState(false); // start as false

  const pad = n => String(n).padStart(2, '0');
  const formatTime = d => {
    let h = d.getHours();
    const m = pad(d.getMinutes());
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
  };
  // 📸 Pick from gallery
  const pickFromGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.7,
    });

    if (!result.didCancel && result.assets?.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  // 📷 Pick from camera
  const pickFromCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.7,
    });

    if (!result.didCancel && result.assets?.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  // 🔘 Handle image selection
  const handleImagePick = () => {
    Alert.alert('Select Image', 'Choose an option', [
      { text: 'Camera', onPress: pickFromCamera },
      { text: 'Gallery', onPress: pickFromGallery },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <ScreenWrapper scrollable edges={['top']}>
      <TextHeader
        noPadding
        title="Create Ministry Profile"
        subTitle="Lorem Ipsum Slmpy Dolor Text "
      />

      <LineBreak val={3} />

      {/* 📝 Inputs */}
      <View>
        <CustomInput
          placeholderTextColor={AppColors.textMuted}
          placeholder="John Doe"
          label="Full Name"
          labelOutside
        />

        {/* 📅 Date Picker */}
        <Text style={styles.fieldLabel}>Time</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowTimePicker(true)} // open picker
          activeOpacity={0.8}
        >
          <Icon name="clock" size={16} color={AppColors.textWhite} />
          <Text style={styles.fieldValue}>{formatTime(time)}</Text>
        </TouchableOpacity>

        <CustomInput
          placeholder="Hermosa Beach, CA . 1Pier Avenue, Hermosa Beach"
          label="Location"
          labelOutside
          placeholderTextColor={AppColors.textMuted}
        />

        <CustomInput
          placeholder="Write text here...."
          multiline
          label="About"
          labelOutside
          placeholderTextColor={AppColors.textMuted}
          inputStyle={styles.multilineInput}
        />
      </View>

      {/* 📅 Date Picker Component */}
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={false}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selected) => {
            setShowTimePicker(false); // hide after selection
            if (selected) setTime(selected);
          }}
        />
      )}
    </ScreenWrapper>
  );
};

export default CreateMinistryProfile;
