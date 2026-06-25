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
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const EditProfile = () => {
  const [date, setDate] = useState(new Date(2025, 9, 23));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const pad = n => String(n).padStart(2, '0');
  const formatDate = d =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

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
    <ScreenWrapper style={{padding:responsiveWidth(4.5)}} scrollable edges={['top']}>
      <TextHeader
        noPadding
        title="Edit Profile"
        subTitle="Lorem Ipsum Slmpy Dolor Text "
      />

      <LineBreak val={4} />

      {/* 👤 Profile Image */}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={handleImagePick} activeOpacity={0.8}>
          <View>
            <Image
              source={imageUri ? { uri: imageUri } : AppImages.profilePicture}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            />

            {/* ✏️ Pencil Icon */}
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: AppColors.primary,
                borderRadius: 20,
                padding: 6,
              }}
            >
              <Icon name="edit-2" size={14} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>

        <NormalText title="Change Avatar" color={AppColors.white} />
      </View>

      <LineBreak val={2} />

      {/* 📝 Inputs */}
      <View>
        <CustomInput
          placeholderTextColor={AppColors.textMuted}
          placeholder="John Smith"
          label="Full Name"
          labelOutside
        />

        {/* 📅 Date Picker */}
        <Text style={styles.fieldLabel}>Date</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowDatePicker(true)}
          activeOpacity={0.8}
        >
          <Icon name="calendar" size={16} color={AppColors.textWhite} />
          <Text style={styles.fieldValue}>{formatDate(date)}</Text>
        </TouchableOpacity>

        <CustomInput
          placeholder="+1 (555) 123-4567"
          label="Phone Number"
          labelOutside
          placeholderTextColor={AppColors.textMuted}
        />

        <CustomInput
          placeholder="johnsmith@email.com"
          label="Your Email"
          labelOutside
          placeholderTextColor={AppColors.textMuted}
        />

        <CustomInput
          placeholder="Lorem ipsum dolor sit amet..."
          multiline
          label="About"
          labelOutside
          placeholderTextColor={AppColors.textMuted}
          inputStyle={styles.multilineInput}
        />
      </View>

      {/* 📅 Date Picker Component */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selected) => {
            if (Platform.OS === 'android') {
              setShowDatePicker(false);
            }

            if (event.type === 'set' && selected) {
              setDate(selected);
            }
          }}
        />
      )}
    </ScreenWrapper>
  );
};

export default EditProfile;
