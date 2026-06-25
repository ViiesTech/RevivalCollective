import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from './BackButton';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * AuthLayout — single source of truth for all auth screen structure.
 *
 * Guarantees pixel-perfect consistency across every auth screen:
 *  • Same paddingTop for header on every screen
 *  • White-container BackButton always at the same position
 *  • Title and subtitle always at the same vertical offset
 *  • "Continue" / action button always pinned to the bottom via the footer slot
 *
 * Props:
 *  showBack    – show the white-container back arrow (default: false)
 *  onBack      – override goBack (optional)
 *  title       – screen heading
 *  titleAlign  – 'left' | 'center' (default: 'left')
 *  titleSize   – responsiveFontSize multiplier (default: 3.2)
 *  subtitle    – muted paragraph below the title
 *  children    – main content (inputs, OTP cells, etc.)
 *  footer      – pinned bottom slot, usually <Button> (optional)
 *  scrollable  – wraps children in ScrollView (default: false)
 */
const AuthLayout = ({
  showBack = false,
  onBack,
  title,
  titleAlign = 'center',
  titleSize = 3.2,
  subtitle,
  children,
  footer,
  scrollable = false,
}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.darkBg} />
      <View style={styles.container}>

        {/* ── Header — consistent position on every screen ── */}
        <View style={styles.header}>
          {showBack
            ? <BackButton onPress={onBack} style={styles.backBtn} />
            : <View style={styles.backPlaceholder} />}
          <Text
            style={[
              styles.title,
              {
                textAlign: titleAlign,
                fontSize: responsiveFontSize(titleSize),
              },
            ]}>
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitle}>{subtitle}</Text>
          ) : null}
        </View>

        {/* ── Body ── */}
        {scrollable ? (
          <ScrollView
            style={styles.body}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        ) : (
          <View style={styles.body}>{children}</View>
        )}

        {/* ── Footer — pinned to bottom ── */}
        {footer ? <View style={styles.footer}>{footer}</View> : null}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: AppColors.darkBg,
  },
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(6),
  },
  header: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2.5),
  },
  backBtn: {
    marginBottom: responsiveHeight(5),
  },
  backPlaceholder: {
    height: responsiveWidth(10),
    marginBottom: responsiveHeight(5),
  },
  title: {
    color: AppColors.textWhite,
    fontWeight: '700',
    marginBottom: responsiveHeight(0.6),
  },
  subtitle: {
    color: AppColors.white,
    textAlign:'center',
    fontSize: responsiveFontSize(1.75),
    lineHeight: responsiveFontSize(2.7),
    marginTop: responsiveHeight(0.5),
  },
  body: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: responsiveHeight(2),
  },
  footer: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(4),
  },
});

export default AuthLayout;
