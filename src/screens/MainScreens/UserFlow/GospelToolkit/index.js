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
import ToolkitCard from '../../../../components/ToolkitCard';
import { AppColors } from '../../../../config/Colors';
import styles from './styles';
import TextHeader from '../../../../components/TextHeader';
import LineBreak from '../../../../components/LineBreak';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const TOOLKIT_ITEMS = [
  {
    id: '1',
    category: 'Map',
    icon: 'map-pin',
    title: 'Find Evangelism Events',
    description: 'Discover outreach opportunities happening near you.',
    btnLabel: 'View Events & Map',
    screen: 'FindEvents',
  },
  {
    id: '2',
    category: 'Gospel',
    icon: 'book-open',
    title: 'Share the Good News',
    description:
      'Get a clear, compassionate gospel presentation you can share with anyone.',
    btnLabel: 'Sample Gospel Presentation →',
    screen: 'ClassicGospel',
  },
  {
    id: '3',
    category: 'Testimony',
    icon: 'edit',
    title: 'Build Your Testimony',
    description: 'Share your powerful 3-part story: Before → Jesus → After',
    btnLabel: 'Build Your Story →',
    screen: 'BuildStory',
  },
  {
    id: '4',
    category: 'Coach',
    icon: 'users',
    title: 'Conversation Coach',
    description:
      'Practice sharing your faith in a safe, supportive environment.',
    btnLabel: 'Start Practice Conversation →',
    screen: 'ConversationCoach',
  },
];

const GospelToolkit = ({ navigation }) => (
  <ScreenWrapper
    scrollable
    style={{ padding: responsiveWidth(4.5) }}
    edges={['top']}
  >
    <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
    <TextHeader
      noPadding
      title="Evangelism Toolkit"
      subTitle="Equip yourself to share the good news with confidence and love."
    />
    <LineBreak val={1.5} />
    <ScrollView
      style={styles.scroll}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Title row */}

      {/* Cards */}
      {TOOLKIT_ITEMS.map(item => (
        <ToolkitCard
          key={item.id}
          category={item.category}
          icon={item.icon}
          title={item.title}
          description={item.description}
          btnLabel={item.btnLabel}
          onPress={() => item.screen && navigation.navigate(item.screen)}
        />
      ))}
    </ScrollView>
  </ScreenWrapper>
);

export default GospelToolkit;
