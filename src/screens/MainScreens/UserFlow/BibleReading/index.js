/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import FeedHeader from '../../../../components/FeedHeader';
import TextHeader from '../../../../components/TextHeader';
import styles from './styles';
import { AppColors } from '../../../../config/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BorderedCard from '../../../../components/BorderedCard';
import CustomInput from '../../../../components/CustomInput';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../globalFunctions/Resposive_Dimensions';
import LineBreak from '../../../../components/LineBreak';
import Button from '../../../../components/Button';
import { AppIcons } from '../../../../config/Icons';
import { AppImages } from '../../../../config/Images';
import NormalText from '../../../../components/NormalText';

const TABS = ['Today', 'Bible', 'SOAP', 'Plans', 'Ask'];

const BibleReading = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ScreenWrapper scrollable style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <FeedHeader noPadding />
      <TextHeader
        noPadding
        title="Bible Reading & Study"
        subTitle="Explore God’s Word with daily devotions and guided study"
      />
      {activeTab === 3 && (
        <View style={styles.searchRow}>
          <CustomInput
            placeholder="Search by topic"
            placeholderTextColor="#9E9E9E"
            boxStyle={styles.searchBoxOverride}
            inputStyle={styles.searchInputText}
            rightElement={<Icon name="search" size={18} color="#9E9E9E" />}
          />
        </View>
      )}
      <View style={styles.tabsRow}>
        {TABS.map((tab, i) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabPill, activeTab === i && styles.tabPillActive]}
            onPress={() => setActiveTab(i)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabPillText,
                activeTab === i && styles.tabPillTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab === 0 && <TodayTab />}
      {activeTab === 1 && <BibleTab />}
      {activeTab === 2 && <SoapTab />}
      {activeTab === 3 && <PlansTab />}
      {activeTab === 4 && <AskTab />}
      {/* ...other tabs will be added later... */}
    </ScreenWrapper>
  );
};

const AskTab = () => {
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');

  const suggestions = ['"Hell"', 'Hello', 'Hellos'];

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.contentContainer,
            { paddingBottom: 0.1 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <LineBreak val={1.5} />
          <Text style={styles.sectionTitle}>Ask the Bible</Text>
          <Text
            style={[styles.sectionSubtitle, { marginTop: responsiveHeight(1) }]}
          >
            Have a question? Get biblical answers with relevant Scripture
          </Text>
        </ScrollView>
      </View>
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
          <Icon name="send" size={20} color={AppColors.darkBg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TodayTab = () => (
  <ScrollView
    style={styles.scroll}
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <View
      style={{
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text style={styles.sectionTitle}>Today’s Reflection</Text>
      <View style={styles.dateRow}>
        <Text style={styles.dateBtn}>8 Mar 2025</Text>
      </View>
    </View>
    <LineBreak val={1} />
    <Text style={styles.sectionSubtitle}>
      Start your day with Scripture and encouragement
    </Text>

    <SectionBlock
      letter="S"
      label="Scripture"
      scriptureRef="Isaiah 40:31"
      scriptureText={
        '"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."'
      }
      scriptureSource="Public Domain: ESV.org"
    />
    <SectionBlock
      letter="O"
      label="Observation"
      text={
        'In this passage, the prophet Isaiah speaks to a weary people in Israel, reassuring them that hope in the Lord brings renewed strength. This metaphor of soaring like eagles highlights the transformative power of faith, especially during difficult times. It reminds us that trusting in God’s provision replenishes our energy and vitality.'
      }
    />
    <SectionBlock
      letter="A"
      label="Application"
      text={
        '1. Spend a few moments in prayer today, specifically asking God to renew your strength in any area where you feel weary. 2. Identify one challenge you are facing and write down a way to place your hope in the Lord for resolution or peace. 3. Reach out to someone who might be feeling down or fatigued and encourage them with this scripture.'
      }
    />
    <SectionBlock
      letter="P"
      label="Prayer"
      text={
        'Dear Lord, thank You for the promise that when we place our hope in You, we are renewed and strengthened. Help us to trust You more deeply today, and to be vessels of Your hope for others. May we soar above our struggles and walk in Your grace and peace.'
      }
    />
    <View style={styles.ctaRow}>
      <Button
        title="Share"
        variant="primary"
        onPress={() => { }}
        style={{ flex: 1, marginRight: 8 }}
      />
      <Button
        title="New SOAP"
        variant="primary"
        onPress={() => { }}
        style={{ flex: 1, marginLeft: 8 }}
      />
    </View>
  </ScrollView>
);

const BibleTab = () => (
  <ScrollView
    style={styles.scroll}
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <LineBreak val={1.5} />
    <BorderedCard
      useImage
      imageSource={AppImages.bible}
      title="No devotionals published yet"
    />
  </ScrollView>
);

const SoapTab = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <LineBreak val={1.5} />
      <BorderedCard title="Create Your Own SOAP Devotional">
        <NormalText align='center' size={1.6} title="Search the NIV Bible, select a verse, and write your own Scripture,
          Observation, Application, and Prayer" style={styles.borderedCardSubtitle} />
        <LineBreak val={2.5} />

        <Button
          title="Start New SOAP"
          variant="primary"
          size={1.9}
          onPress={() => navigation.navigate('AppStack', { screen: 'CreateSOAP' })}
          style={styles.startSoapBtn}
        />
      </BorderedCard>
      <LineBreak val={1} />
      <BorderedCard
        useImage
        imageSource={AppImages.bible}
      >
        <NormalText size={1.6} title="You haven't created any SOAP devotionals yet" style={styles.borderedCardSubtitle} />
      </BorderedCard>
    </ScrollView>
  );
};

const PlansTab = () => (
  <ScrollView
    style={styles.scroll}
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <LineBreak val={1} />
    {/* Plan cards */}
    <View style={styles.planCard}>
      <View style={styles.planCardHeader}>
        <Text style={styles.planCardTitle}>30 Days with Jesus</Text>
        <Text style={styles.planCardTag}>Gospel</Text>
      </View>
      <Text style={styles.planCardDesc}>
        Journey through the Gospels to encounter Jesus in His teachings,
        miracles, and love
      </Text>

      <View style={styles.planMetaRow}>
        <Ionicons
          name="calendar-outline"
          size={14}
          color={AppColors.textWhite}
        />
        <Text style={styles.planMetaText}> 30 days • 10-15 minutes</Text>
      </View>

      <View style={{ marginTop: responsiveHeight(1.2) }} />
      <Text style={styles.progressLabel}>Progress</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: '3%' }]} />
      </View>
      <LineBreak val={1} />
      <Button title="Continue Reading" variant="white" style={styles.planCTA} />
    </View>

    <View style={styles.planCard}>
      <View style={styles.planCardHeader}>
        <Text style={styles.planCardTitle}>Psalms of Peace</Text>
        <Text style={styles.planCardTag}>Psalms</Text>
      </View>
      <Text style={styles.planCardDesc}>
        Find rest and comfort in the timeless prayers and worship of the Psalms
      </Text>
      <View style={styles.planMetaRow}>
        <Ionicons
          name="calendar-outline"
          size={14}
          color={AppColors.textWhite}
        />
        <Text style={styles.planMetaText}> 21 days • 5-10 minutes</Text>
      </View>
      <View style={{ marginTop: responsiveHeight(1.2) }} />
      <Text style={styles.progressLabel}>Progress</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: '21%' }]} />
      </View>

      <Button title="Continue Reading" variant="white" style={styles.planCTA} />
    </View>

    <View style={styles.planCard}>
      <View style={styles.planCardHeader}>
        <Text style={styles.planCardTitle}>Kingdom Living</Text>
        <Text style={styles.planCardTag}>Thematic</Text>
      </View>
      <Text style={styles.planCardDesc}>
        Discover what it means to live as a citizen of God’s Kingdom here and
        now
      </Text>
      <View style={styles.planMetaRow}>
        <Ionicons
          name="calendar-outline"
          size={14}
          color={AppColors.textWhite}
        />
        <Text style={styles.planMetaText}> 14 days • 15-20 minutes</Text>
      </View>

      <View style={{ height: responsiveHeight(1.2) }} />
      <Button title="Start Plan" variant="white" style={styles.planCTA} />
    </View>
  </ScrollView>
);

export default BibleReading;

const SectionLabel = ({ letter, label }) => (
  <View style={styles.sectionLabelRow}>
    <View style={styles.sectionLabelBox}>
      <Text style={styles.sectionLabelLetter}>{letter}</Text>
    </View>
    <Text style={styles.sectionBlockLabel}>{label}</Text>
  </View>
);

const SectionBlock = ({
  letter,
  label,
  scriptureRef,
  scriptureText,
  scriptureSource,
  text,
}) => (
  <View style={styles.sectionBlock}>
    <SectionLabel letter={letter} label={label} />
    {label === 'Scripture' ? (
      <View style={styles.scriptureBox}>
        <Text style={styles.scriptureRef}>{scriptureRef}</Text>
        <Text style={styles.scriptureText}>{scriptureText}</Text>
        <Text style={styles.scriptureSource}>{scriptureSource}</Text>
      </View>
    ) : (
      <Text style={styles.sectionBlockText}>{text}</Text>
    )}
  </View>
);
