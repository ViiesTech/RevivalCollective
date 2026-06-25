import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../../../components/BackButton';
import { AppColors } from '../../../../config/Colors';
import { AppImages } from '../../../../config/Images';
import styles from './styles';

const PINS = [
  { id: '1', top: '24%', left: '20%' },
  { id: '2', top: '40%', left: '50%' },
  { id: '3', top: '32%', left: '68%' },
  { id: '4', top: '52%', left: '30%' },
];

const CreateEvangelist = ({ navigation }) => {
  const [eventName, setEventName]           = useState('');
  const [selectedPin, setSelectedPin]       = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Map background */}
      <Image source={AppImages.map} style={styles.mapImage} resizeMode="cover" />

      {/* Location pins */}
      {PINS.map(pin => (
        <TouchableOpacity
          key={pin.id}
          style={[styles.pinWrapper, { top: pin.top, left: pin.left }, selectedPin === pin.id && styles.pinSelected]}
          onPress={() => setSelectedPin(pin.id)}
          activeOpacity={0.85}>
          <View style={styles.pinRing}>
            <Image source={AppImages.profile} style={styles.pinImg} />
          </View>
          <View style={styles.pinArrow} />
        </TouchableOpacity>
      ))}

      {/* Floating header */}
      <SafeAreaView style={styles.headerOverlay}>
        <View style={styles.headerRow}>
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={styles.headerTitle}>Create Evangelism Event</Text>
          <View style={styles.headerSpacer} />
        </View>
      </SafeAreaView>

      {/* Bottom sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.inputLabel}>Event Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event name..."
          placeholderTextColor={AppColors.textMuted}
          value={eventName}
          onChangeText={setEventName}
        />
        <TouchableOpacity
          style={[styles.createBtn, !eventName.trim() && styles.createBtnDisabled]}
          onPress={() => {}}
          disabled={!eventName.trim()}
          activeOpacity={0.85}>
          <Text style={styles.createBtnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateEvangelist;
