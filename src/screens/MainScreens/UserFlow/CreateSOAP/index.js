import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import FeedHeader from '../../../../components/FeedHeader';
import TextHeader from '../../../../components/TextHeader';
import CustomInput from '../../../../components/CustomInput';
import Button from '../../../../components/Button';
import styles from './styles';
import { responsiveFontSize, responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';
import { AppColors } from '../../../../config/Colors';

const CreateSOAP = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [scripture, setScripture] = useState('');
  const [observation, setObservation] = useState('');
  const [application, setApplication] = useState('');
  const [prayer, setPrayer] = useState('');

  return (
    <ScreenWrapper scrollable style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <TextHeader noPadding title="Create SOAP Devotional" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
      >
        <CustomInput
          label="Search NIV Bible"
          placeholder="Search by verse (John 3:16) or topic (love, peace)..."
          value={search}
          inputStyle={{ fontSize: responsiveFontSize(1.75) }}
          onChangeText={setSearch}
          labelOutside
        />

        <CustomInput
          label="Title (Optional)"
          placeholder="Give your devotional a title..."
          value={title}
          onChangeText={setTitle}
          labelOutside
        />

        <CustomInput
          label="Scripture"
          placeholder="Search and select a verse above"
          value={scripture}
          onChangeText={setScripture}
          labelOutside
        />

        <CustomInput
          label="Observation"
          placeholder="What does this passage say? What is the context?"
          value={observation}
          onChangeText={setObservation}
          multiline
          inputStyle={styles.textArea}
          labelOutside
        />

        <CustomInput
          label="Application"
          placeholder="How can I apply this to my life today?"
          value={application}
          onChangeText={setApplication}
          multiline
          inputStyle={styles.textArea}
          labelOutside
        />

        <CustomInput
          label="Prayer"
          placeholder="Write a prayer response..."
          value={prayer}
          onChangeText={setPrayer}
          multiline
          inputStyle={styles.textArea}
          labelOutside
        />

        <View style={styles.formBtnsRow}>
          <Button
            title="Cancel"
            variant="outline"
            textColor={AppColors.white}
            onPress={() => navigation.goBack()}
            style={styles.cancelBtn}
          />
          <Button
            title="Post SOAP"
            variant="primary"
            onPress={() => { }}
            style={styles.postBtn}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateSOAP;
