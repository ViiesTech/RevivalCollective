import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FeedHeader from '../../../../components/FeedHeader';
import Button from '../../../../components/Button';
import CustomInput from '../../../../components/CustomInput';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';
import TextHeader from '../../../../components/TextHeader';

const BuildStory = ({ navigation }) => {
  const [beforeJesus, setBeforeJesus] = useState('');
  const [encountering, setEncountering] = useState('');
  const [afterJesus, setAfterJesus] = useState('');

  return (
    <ScreenWrapper scrollable style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader
        noPadding
        title="Build Your Testimony"
        subTitle="Share your powerful 3-part story: Before → Jesus → After"
      />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back arrow + title */}

        {/* Page title */}
        <Text style={styles.pageTitle}>Your Story</Text>

        {/* 1. Before Jesus */}
        <Text style={styles.sectionLabel}>1. Before Jesus</Text>
        <Text style={styles.sectionDesc}>
          What was your life like? What struggles or questions did you have?
        </Text>
        <CustomInput
          placeholder="Type Here..."
          multiline
          value={beforeJesus}
          onChangeText={setBeforeJesus}
          inputStyle={styles.multilineInput}
        />

        {/* 2. Encountering Jesus */}
        <Text style={styles.sectionLabel}>2. Encountering Jesus</Text>
        <Text style={styles.sectionDesc}>
          How did you meet Jesus? What happened that changed everything?
        </Text>
        <CustomInput
          placeholder="Type Here..."
          multiline
          value={encountering}
          onChangeText={setEncountering}
          inputStyle={styles.multilineInput}
        />

        {/* 3. After Jesus */}
        <Text style={styles.sectionLabel}>3. After Jesus</Text>
        <Text style={styles.sectionDesc}>
          How has your life changed? What difference has Jesus made?
        </Text>
        <CustomInput
          placeholder="Type Here..."
          multiline
          value={afterJesus}
          onChangeText={setAfterJesus}
          inputStyle={styles.multilineInput}
        />
      </ScrollView>

      {/* Pinned bottom buttons */}
      <View style={styles.bottomContainer}>
        <Button
          title="Get Suggestions"
          onPress={() => navigation.navigate('ChooseApproach')}
          variant="primary"
          style={styles.suggestBtn}
        />
        <View style={styles.actionRow}>
          <Button
            title="Add More"
            onPress={() => {}}
            variant="primary"
            textColor={AppColors.darkBg}
            style={styles.halfBtn}
          />
          <Button
            title="Save Testimony"
            onPress={() => {}}
            variant="primary"
            style={styles.halfBtn}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default BuildStory;
