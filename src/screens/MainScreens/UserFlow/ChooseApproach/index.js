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
import FeedHeader from '../../../../components/FeedHeader';
import Button from '../../../../components/Button';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';
import TextHeader from '../../../../components/TextHeader';

const APPROACHES = [
  {
    id: '1',
    label: 'Classic Gospel',
    subtitle: 'Clear, timeless presentation',
  },
  {
    id: '2',
    label: 'Story-Based',
    subtitle: 'Narrative approach using stories',
  },
  { id: '3', label: 'Intellectual', subtitle: 'Reasoned, apologetic style' },
  {
    id: '4',
    label: 'Personal & Relational',
    subtitle: 'Heart-to-heart conversation',
  },
  {
    id: '5',
    label: 'Street Evangelism',
    subtitle: 'Direct, bold, compassionate',
  },
  {
    id: '6',
    label: 'Workplace-Friendly',
    subtitle: 'Professional, respectful tone',
  },
];

const ChooseApproach = ({ navigation }) => {
  const [situation, setSituation] = useState('');

  return (
    <ScreenWrapper
      scrollable
      style={{ padding: responsiveWidth(4.5) }}
      edges={['top']}
    >
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader noPadding title="Share the Good News" subtitle="Get a clear, compassionate gospel presentation you can share with anyone" />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back + header text */}
    

        <Text style={styles.pageTitle}>Choose Your Approach</Text>

        {/* Approach rows */}
        {APPROACHES.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.optionCard}
            activeOpacity={0.75}
            onPress={() => {}}
          >
            <View style={styles.optionTextWrap}>
              <Text style={styles.optionLabel}>{item.label}</Text>
              <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.arrowCircle}>
              <Icon name="arrow-right" size={20} color={AppColors.darkBg} />
            </View>
          </TouchableOpacity>
        ))}

        {/* Situation input */}
        <Text style={styles.sectionTitle}>
          Enter the situation you want{`\n`}guidance on
        </Text>
        <Text style={styles.sectionSubtitle}>
          Describe your specific situation and we'll create a tailored gospel
          presentation
        </Text>
        <View style={styles.textAreaBox}>
          <TextInput
            style={styles.textArea}
            multiline
            textAlignVertical="top"
            placeholder=""
            placeholderTextColor={AppColors.textMuted}
            value={situation}
            onChangeText={setSituation}
          />
        </View>

        {/* Create button */}
        <Button
          title="Create"
          onPress={() => navigation.navigate('BuildTestimony')}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ChooseApproach;
