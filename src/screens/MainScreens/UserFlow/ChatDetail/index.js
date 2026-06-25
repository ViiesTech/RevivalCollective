import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';

const DEFAULT_CONVERSATION = {
  name: 'Sarah Matthews',
  role: 'Prayer Team',
  online: true,
};

const MESSAGES = [
  {
    id: '1',
    type: 'received',
    text: 'Morning. Are we still meeting the outreach team at 6:30?',
    time: '09:12 AM',
  },
  {
    id: '2',
    type: 'sent',
    text: 'Yes. I also posted the final schedule for everyone to review.',
    time: '09:14 AM',
  },
  {
    id: '3',
    type: 'received',
    text: 'Perfect. I can bring the care packages before the outreach starts.',
    time: '09:18 AM',
  },
  {
    id: '4',
    type: 'sent',
    text: 'That helps a lot. Please meet us at the west entrance near the welcome table.',
    time: '09:19 AM',
  },
  {
    id: '5',
    type: 'received',
    text: 'Done. I will message the rest of the team once I arrive.',
    time: '09:24 AM',
  },
];

const formatMessageTime = date => {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const meridiem = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  return `${String(hours).padStart(2, '0')}:${minutes} ${meridiem}`;
};

const ChatDetail = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(MESSAGES);
  const scrollViewRef = useRef(null);

  const conversation = useMemo(
    () => route.params?.conversation || DEFAULT_CONVERSATION,
    [route.params?.conversation],
  );

  const handleSendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages(currentMessages => [
      ...currentMessages,
      {
        id: `${Date.now()}`,
        type: 'sent',
        text: trimmedMessage,
        time: formatMessageTime(new Date()),
      },
    ]);
    setMessage('');
  };

  return (
    <ScreenWrapper style={styles.screen} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.headerAction}
          >
            <Icon name="arrow-left" size={20} color={AppColors.textWhite} />
          </TouchableOpacity>

          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>
              {conversation.name.charAt(0)}
            </Text>
            {conversation.online ? <View style={styles.headerOnlineDot} /> : null}
          </View>

          <View style={styles.headerMeta}>
            <Text style={styles.headerName}>{conversation.name}</Text>
            <Text style={styles.headerStatus}>
              {conversation.online ? 'Online now' : conversation.role}
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.headerAction}>
            <Icon name="phone-call" size={18} color={AppColors.textWhite} />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesScroll}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          <View style={styles.dayMarker}>
            <Text style={styles.dayMarkerText}>Today</Text>
          </View>

          {messages.map(item => {
            const isSent = item.type === 'sent';

            return (
              <View
                key={item.id}
                style={[styles.messageRow, isSent && styles.messageRowSent]}
              >
                <View style={[styles.messageBubble, isSent && styles.messageBubbleSent]}>
                  <Text style={[styles.messageText, isSent && styles.messageTextSent]}>
                    {item.text}
                  </Text>
                  <Text style={[styles.messageTime, isSent && styles.messageTimeSent]}>
                    {item.time}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.composerWrap}>
          <TouchableOpacity activeOpacity={0.8} style={styles.composerIcon}>
            <Icon name="paperclip" size={18} color={AppColors.textMuted} />
          </TouchableOpacity>

          <View style={styles.composerInputWrap}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Write a message"
              placeholderTextColor={AppColors.textMuted}
              multiline
              onSubmitEditing={handleSendMessage}
              style={styles.composerInput}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Icon name="send" size={18} color={AppColors.darkBg} />
          </TouchableOpacity>
        </View>
    </ScreenWrapper>
  );
};

export default ChatDetail;