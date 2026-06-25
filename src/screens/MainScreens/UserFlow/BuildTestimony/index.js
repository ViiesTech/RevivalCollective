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
import BackButton from '../../../../components/BackButton';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';

const BuildTestimony = ({ navigation }) => {
  const [beforeStory, setBeforeStory] = useState('');
  const [howChanged, setHowChanged] = useState('');
  const [afterStory, setAfterStory] = useState('');

  return (
    <ScreenWrapper scrollable edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <View style={styles.container}>

        <View style={styles.header}>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.headerText}>
            <Text style={styles.title}>Build Your Testimony</Text>
            <Text style={styles.subtitle}>Your Story</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.fieldLabel}>Before Story</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe your life before..."
            placeholderTextColor={AppColors.textMuted}
            multiline
            value={beforeStory}
            onChangeText={setBeforeStory}
            textAlignVertical="top"
          />

          <Text style={styles.fieldLabel}>How Did Things Change?</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe how things changed..."
            placeholderTextColor={AppColors.textMuted}
            multiline
            value={howChanged}
            onChangeText={setHowChanged}
            textAlignVertical="top"
          />

          <Text style={styles.fieldLabel}>After Story</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe your life now..."
            placeholderTextColor={AppColors.textMuted}
            multiline
            value={afterStory}
            onChangeText={setAfterStory}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.suggestBtn} activeOpacity={0.85}>
            <Icon name="zap" size={18} color={AppColors.darkBg} />
            <Text style={styles.suggestBtnText}>Get Suggestions</Text>
          </TouchableOpacity>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.outlineBtn} activeOpacity={0.8}>
              <Icon name="copy" size={16} color={AppColors.textWhite} />
              <Text style={styles.outlineBtnText}>Copy to Clipboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.8}>
              <Icon name="save" size={16} color={AppColors.darkBg} />
              <Text style={styles.primaryBtnText}>Save Testimony</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default BuildTestimony;
