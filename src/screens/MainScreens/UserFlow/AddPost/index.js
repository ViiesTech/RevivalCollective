import React, { useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import TextHeader from '../../../../components/TextHeader';
import CustomInput from '../../../../components/CustomInput';
import Button from '../../../../components/Button';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const AddPost = () => {
  const [caption, setCaption] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickFromGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (!result.didCancel && result.assets?.length) {
      setImageUri(result.assets[0].uri);
    }
  };

  const pickFromCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (!result.didCancel && result.assets?.length) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleImagePick = () => {
    Alert.alert('Upload image', 'Choose an option', [
      { text: 'Camera', onPress: pickFromCamera },
      { text: 'Gallery', onPress: pickFromGallery },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const handleCreatePost = () => {
    if (!imageUri) {
      Alert.alert('Missing image', 'Please upload an image first.');
      return;
    }

    Alert.alert('Post created', 'Your post is ready to submit.');
  };

  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <TextHeader
        noPadding
        title="Add post"
        subTitle="Share an update, event, or prayer request with the community."
      />

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={handleImagePick}
        style={styles.uploadArea}
      >
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
        ) : (
          <View style={styles.uploadPlaceholder}>
            <View style={styles.uploadIconWrap}>
              <Icon name="image" size={24} color={AppColors.textWhite} />
            </View>
            <Text style={styles.uploadTitle}>Upload Post Image</Text>
            <Text style={styles.uploadText}>Tap to choose from camera or gallery</Text>
          </View>
        )}
      </TouchableOpacity>

      <CustomInput
        label="Caption"
        labelOutside
        multiline
        value={caption}
        onChangeText={setCaption}
        placeholder="Write a caption"
        placeholderTextColor={AppColors.textMuted}
        boxStyle={[styles.inputBox, styles.captionBox]}
        inputStyle={styles.captionInput}
      />

      <Button title="Create Post" onPress={handleCreatePost} style={styles.button} />
    </ScreenWrapper>
  );
};

export default AddPost;