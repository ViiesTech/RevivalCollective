import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TextHeader from '../../../../components/TextHeader';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import styles from '../Settings/styles';
import { useNavigation } from '@react-navigation/native';
import FeedHeader from '../../../../components/FeedHeader';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const Settings = () => {
  const navigation = useNavigation();
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotification = () =>
    setNotificationEnabled(!isNotificationEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!isDarkModeEnabled);

  const navigateToProfile = () => {
    navigation.navigate('AppStack', { screen: 'Profile' });
  };

  return (
    <ScreenWrapper style={{ padding: responsiveWidth(4.5) }} edges={['top']}>
      <FeedHeader noPadding />
      <TextHeader noPadding title="Settings" subTitle="Lorem Ipsum Simply Dummy Text" />
      <View style={styles.container}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notification</Text>
          <Switch
            value={isNotificationEnabled}
            onValueChange={toggleNotification}
            thumbColor={isNotificationEnabled ? '#fff' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={navigateToProfile}
        >
          <Text style={styles.settingText}>Profile</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AppStack', { screen: 'EditProfile' })
          }
          style={styles.settingItem}
        >
          <Text style={styles.settingText}>Edit Profile</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={toggleDarkMode}
            thumbColor={isDarkModeEnabled ? '#fff' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AppStack', {
              screen: 'Instructions',
              params: { type: 'terms' },
            })
          }
          style={styles.settingItem}
        >
          <Text style={styles.settingText}>Terms of use</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AppStack', {
              screen: 'Instructions',
              params: { type: 'privacy' },
            })
          }
          style={styles.settingItem}
        >
          <Text style={styles.settingText}>Privacy Policy</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Settings;
