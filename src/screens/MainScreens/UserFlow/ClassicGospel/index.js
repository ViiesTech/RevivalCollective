import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Clipboard,
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

const GOSPEL_TEXT = `God created you for relationship with Him. But sin broke that connection. Jesus came, died, and rose again so you could be restored. When you turn to Him and believe, you receive forgiveness, new life, and purpose.

"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." – John 3:16

"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." – Romans 5:8`;

const ClassicGospel = ({ navigation }) => {
  const handleCopy = () => {
    Clipboard.setString(GOSPEL_TEXT);
  };

  return (
    <ScreenWrapper style={{padding: responsiveWidth(4.5),}} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <TextHeader noPadding title="Classic Gospel" subTitle="Clear, timeless presentation" />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Back arrow + title */}
       

        {/* Page title */}
        <Text style={styles.pageTitle}>Gospel Presentation</Text>

        {/* Para 1 */}
        <Text style={styles.bodyText}>
          God created you for relationship with Him. But sin broke that
          connection. Jesus came, died, and rose again so you could be restored.
          When you turn to Him and believe, you receive forgiveness, new life,
          and purpose.
        </Text>

        {/* Quote 1 */}
        <Text style={styles.bodyText}>
          {`"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." – John 3:16`}
        </Text>

        {/* Quote 2 */}
        <Text style={styles.bodyText}>
          {`"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." – Romans 5:8`}
        </Text>
      </ScrollView>

      {/* Pinned bottom CTA */}
      <View style={styles.ctaContainer}>
        <Button
          title="Copy to Clipboard"
          onPress={handleCopy}
          variant="primary"
        />
      </View>
    </ScreenWrapper>
  );
};

export default ClassicGospel;
