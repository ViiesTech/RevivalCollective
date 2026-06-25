import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AppImages } from '../../../config/Images';
import { AppColors } from '../../../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../../globalFunctions/Resposive_Dimensions';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    image: AppImages.onBoarding1,
    title: 'Find Your Church',
    description:
      'Discover and connect with churches near you and around the world.',
  },
  {
    key: '2',
    image: AppImages.onBoarding2,
    title: 'Stay Connected',
    description:
      'Stay updated with events, sermons and news from your community.',
  },
  {
    key: '3',
    image: AppImages.onBoarding3,
    title: 'Grow Together',
    description:
      'Join groups, attend events and grow your faith journey together.',
  },
];

const OnBoarding = ({ navigation }) => {
  const goToLogin = () => navigation.replace('Login');

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image}/>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.actionBtn}>
      <Text style={styles.actionBtnText}>Next</Text>
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.actionBtn}>
      <Text style={styles.actionBtnText}>Get Started</Text>
    </View>
  );

  const renderSkipButton = () => (
    <TouchableOpacity onPress={goToLogin} activeOpacity={0.7}>
      <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        onDone={goToLogin}
        onSkip={goToLogin}
        showSkipButton
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        bottomButton={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
  },
  slide: {
    flex: 1,
    width,
  },
  image: {
    width,
    // height: height * 0.62,
  },
  textBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(8),
    paddingTop: responsiveHeight(2),
  },
  title: {
    color: AppColors.textWhite,
    fontSize: responsiveFontSize(3.2),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: responsiveHeight(1.2),
  },
  description: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.85),
    textAlign: 'center',
    lineHeight: responsiveFontSize(2.8),
  },
  actionBtn: {
    backgroundColor: AppColors.textWhite,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.1),
    borderRadius: responsiveHeight(0.7),
    minWidth: responsiveWidth(18),
    alignItems: 'center',
  },
  actionBtnText: {
    color: AppColors.black,
    fontWeight: '700',
    fontSize: responsiveFontSize(1.85),
  },
  skipText: {
    color: AppColors.textMuted,
    fontSize: responsiveFontSize(1.9),
    paddingHorizontal: responsiveWidth(1),
    paddingVertical: responsiveHeight(1.1),
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: responsiveWidth(1.8),
    height: responsiveWidth(1.8),
    borderRadius: responsiveWidth(0.9),
  },
  activeDot: {
    backgroundColor: AppColors.textWhite,
    width: responsiveWidth(5),
    height: responsiveWidth(1.8),
    borderRadius: responsiveWidth(0.9),
  },
});

export default OnBoarding;
