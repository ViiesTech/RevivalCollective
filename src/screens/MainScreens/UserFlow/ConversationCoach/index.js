import React from 'react';
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
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';
import TextHeader from '../../../../components/TextHeader';

const SCENARIOS = [
  {
    id: '1',
    text: '"I\'ve always wondered why Christians believe Jesus is the only way — can you explain that?"',
  },
  {
    id: '2',
    text: '"I used to go to church but stopped. What makes you still believe?"',
  },
  {
    id: '3',
    text: '"How can you believe in a God you can\'t see?"',
  },
  {
    id: '4',
    text: '"Why does God allow suffering if He\'s so loving?"',
  },
  {
    id: '5',
    text: '"I\'m spiritual but not religious. Why do I need church or Jesus?"',
  },
  {
    id: '6',
    text: '"The Bible was written by people — how can you trust it?"',
  },
];

const ConversationCoach = ({ navigation }) => {
  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader
        noPadding
        title="Conversation Coach"
        subTitle="Practice sharing your faith in a safe, supportive environment"
      />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Back arrow + title row */}

        {/* Page title */}
        <Text style={styles.pageTitle}>Choose a Practice Scenario</Text>

        {/* How This Works */}
        <Text style={styles.sectionLabel}>How This Works</Text>
        <Text style={styles.sectionDesc}>
          Select a question below and practice responding. We will role-play as
          someone curious about faith, and I'll provide coaching tips to help
          you grow in confidence and clarity. Take your time and share from your
          heart!
        </Text>

        {/* Scenario cards */}
        {SCENARIOS.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.scenarioCard}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('PracticeConversation', {
                scenario: item.text,
              })
            }
          >
            <View style={styles.scenarioIconCircle}>
              <Icon
                name="message-circle"
                size={16}
                color={AppColors.textWhite}
              />
            </View>
            <Text style={styles.scenarioText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ConversationCoach;
