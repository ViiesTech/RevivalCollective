import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import FeedHeader from '../../../../components/FeedHeader';
import TextHeader from '../../../../components/TextHeader';
import CustomInput from '../../../../components/CustomInput';
import Button from '../../../../components/Button';
import styles from './styles';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';

const CreatePrayerHub = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <TextHeader
        noPadding
        title="Create Prayer Hub"
        subTitle="Join together in prayer and support"
      />
      <View style={styles.formContent}>
        <CustomInput
          label="Name (Optional)"
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
          labelOutside
        />
        <CustomInput
          label="Description *"
          placeholder="Write text here...."
          value={description}
          onChangeText={setDescription}
          multiline
          inputStyle={styles.textArea}
          labelOutside
        />
      </View>
      <View style={styles.ctaContainer}>
        <Button title="Create" variant="primary" onPress={() => {}} />
      </View>
    </ScreenWrapper>
  );
};

export default CreatePrayerHub;
