import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FeedHeader from '../../../../components/FeedHeader';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import TextHeader from '../../../../components/TextHeader';

const PracticeConversation = ({ navigation, route }) => {
  const scenario =
    route?.params?.scenario ?? '"How can you believe in a God you can\'t see?"';
  const [inputText, setInputText] = useState('');

  return (
    <ScreenWrapper scrollable style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader
      noPadding
        title="Conversation Coach"
        subtitle="Practice sharing your faith in a safe, supportive environment"
      />

      {/* <KeyboardAvoidingView
        style={styles.kbContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      > */}
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back arrow + title row */}

          {/* Page title */}
          <Text style={styles.pageTitle}>Practice Conversation</Text>

          {/* Welcome message */}
          <View style={styles.welcomeRow}>
            <Icon
              name="zap"
              size={16}
              color={AppColors.textWhite}
              style={styles.zapIcon}
            />
            <Text style={styles.welcomeText}>
              Welcome! I'll play the role of someone curious about faith. Take
              your time, share from your heart, and I'll help you grow in
              confidence. You've got this 💙
            </Text>
          </View>

          {/* Seeker label + question box */}
          <Text style={styles.seekerLabel}>Seeker</Text>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>{scenario}</Text>
          </View>
        </ScrollView>

        {/* Pinned bottom: input row + buttons */}
        {/* Input row */}
        <View style={styles.inputRow}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: AppColors.white,
              padding: responsiveHeight(0.7),
              paddingHorizontal: responsiveHeight(1.5),
              borderRadius: responsiveHeight(1),
            }}
          >
            <TextInput
              style={styles.chatInput}
              placeholder="Hello Where"
              placeholderTextColor="#07092C"
              value={inputText}
              onChangeText={setInputText}
              returnKeyType="send"
            />
            <TouchableOpacity
              style={styles.inputIcon}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Icon name="paperclip" size={20} color={AppColors.darkBg} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.sendBtn}
            activeOpacity={0.8}
            onPress={() => setInputText('')}
          >
            <Icon name="send" size={18} color={AppColors.textWhite} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          {/* Action buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.aiSuggestBtn} activeOpacity={0.85}>
              <Text style={styles.aiSuggestText}>Get AI Suggestions ✦</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.newChatBtn}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('ConversationCoach')}
            >
              <Text style={styles.newChatText}>New Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      {/* </KeyboardAvoidingView> */}
    </ScreenWrapper>
  );
};

export default PracticeConversation;
