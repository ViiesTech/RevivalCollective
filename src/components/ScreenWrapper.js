import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveHeight, responsiveWidth } from '../globalFunctions/Resposive_Dimensions';
import { AppColors } from '../config/Colors';

/**
 * ScreenWrapper
 *
 * Props:
 *  scrollable            – wraps content in ScrollView when true
 *  noPadding             – removes default horizontal padding
 *  useSafeArea           – wraps with SafeAreaView (default: true)
 *  backgroundColor       – background colour override (default: white)
 *  style                 – extra styles on the container
 *  contentContainerStyle – only applies when scrollable=true
 *  children
 */
const ScreenWrapper = ({
  children,
  scrollable = false,
  noPadding = false,
  useSafeArea = true,
  backgroundColor = AppColors.darkBg,
  style,
  contentContainerStyle,
  edges,
}) => {
  const Outer = useSafeArea ? SafeAreaView : View;
  const safeAreaProps = useSafeArea && edges ? { edges } : {};

  const containerStyles = StyleSheet.flatten([
    styles.base,
    { backgroundColor, paddingHorizontal: noPadding ? 0 : responsiveWidth(4.5), paddingVertical:responsiveWidth(4.5) },
    style,
  ]);

  return (
    <Outer
      {...safeAreaProps}
      style={StyleSheet.flatten([styles.fill, { backgroundColor }])}
    >
      <KeyboardAvoidingView
        style={styles.fill}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {scrollable ? (
          <ScrollView
            style={containerStyles}
            contentContainerStyle={StyleSheet.flatten([
              styles.scrollContent,
              contentContainerStyle,
            ])}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        ) : (
          <View style={containerStyles}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </Outer>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  base: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default ScreenWrapper;
