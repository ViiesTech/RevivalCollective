import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import TextHeader from '../../../../components/TextHeader';
import { AppColors } from '../../../../config/Colors';
import { AppImages } from '../../../../config/Images';
import styles from './styles';

const CONVERSATIONS = [
  {
    id: '1',
    name: 'Sarah Matthews',
    role: 'Prayer Team',
    avatar: AppImages.story1,
    lastMessage: 'I can bring the care packages before the outreach starts.',
    time: '09:24 AM',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Pastor Daniel',
    role: 'Leadership',
    avatar: AppImages.profile,
    lastMessage: 'Please share the final volunteer list once it is ready.',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
  {
    id: '3',
    name: 'Revival Worship',
    role: 'Group Chat',
    avatar: AppImages.story2,
    lastMessage: 'Set list looks strong. Let us confirm rehearsal timing.',
    time: 'Yesterday',
    unread: 4,
    online: true,
  },
  {
    id: '4',
    name: 'Naomi Reed',
    role: 'Discipleship',
    avatar: AppImages.profilePicture,
    lastMessage: 'Thank you for checking in. The study notes were helpful.',
    time: 'Mon',
    unread: 0,
    online: false,
  },
];

const QUICK_FILTERS = ['All', 'Unread', 'Groups', 'Archived'];

const ChatList = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredConversations = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return CONVERSATIONS.filter(item => {
      const matchesSearch =
        !normalizedSearch ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.lastMessage.toLowerCase().includes(normalizedSearch);

      if (!matchesSearch) {
        return false;
      }

      if (activeFilter === 'Unread') {
        return item.unread > 0;
      }

      if (activeFilter === 'Groups') {
        return item.role === 'Group Chat';
      }

      if (activeFilter === 'Archived') {
        return false;
      }

      return true;
    });
  }, [activeFilter, search]);

  return (
    <ScreenWrapper style={styles.screen} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />

      <TextHeader
        noPadding
        title="Messages"
        subTitle="Stay in step with your church and outreach community"
      />

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryEyebrow}>Inbox overview</Text>
          <Text style={styles.summaryTitle}>12 active conversations</Text>
        </View>
        <TouchableOpacity style={styles.composeButton} activeOpacity={0.8}>
          <Icon name="edit-3" size={18} color={AppColors.darkBg} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color={AppColors.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search conversations"
            placeholderTextColor={AppColors.textMuted}
            style={styles.searchInput}
          />
        </View>
      </View>
<View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {QUICK_FILTERS.map(filter => {
          const isActive = filter === activeFilter;

          return (
            <TouchableOpacity
              key={filter}
              activeOpacity={0.8}
              style={[styles.filterChip, isActive && styles.filterChipActive]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[styles.filterText, isActive && styles.filterTextActive]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
</View>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredConversations.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.82}
            style={styles.chatCard}
            onPress={() => navigation.navigate('ChatDetail', { conversation: item })}
          >
            <View style={styles.avatarWrap}>
              <View style={styles.avatarRing}>
                <View style={styles.avatarInner}>
                  <Text style={styles.avatarFallback}>{item.name.charAt(0)}</Text>
                </View>
              </View>
              {item.online ? <View style={styles.onlineDot} /> : null}
            </View>

            <View style={styles.chatMeta}>
              <View style={styles.chatMetaTop}>
                <View style={styles.nameWrap}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatRole}>{item.role}</Text>
                </View>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>

              <View style={styles.chatMetaBottom}>
                <Text style={styles.chatMessage} numberOfLines={2}>
                  {item.lastMessage}
                </Text>
                {item.unread ? (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unread}</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {!filteredConversations.length ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No conversations found</Text>
            <Text style={styles.emptyText}>
              Adjust the search or filter to find an existing thread.
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ChatList;