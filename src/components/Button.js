import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * Button
 *
 * variant:
 *  'primary' – white fill, dark text (default — main CTAs)
 *  'outline' – transparent bg, white border + text
 *  'social'  – subtle dark fill, light border, white text + optional left icon
 *
 * Props:
 *  title, onPress, variant, disabled, style
 *  leftIcon  – optional JSX rendered left of title
 *  textColor – override text colour
 *  backgroundColor – override bg colour
 *  size – font size multiplier (default 2.1)
 */
const Button = ({
  title = 'Button',
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  leftIcon,
  textColor,
  backgroundColor,
  size,
}) => {
  const theme = variantTheme(variant);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: backgroundColor ?? theme.bg,
          borderColor: theme.border,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {leftIcon ? <View style={styles.iconWrap}>{leftIcon}</View> : null}
      <Text
        style={[
          styles.label,
          {
            color: textColor ?? AppColors.darkBg,
            fontSize: responsiveFontSize(size ?? 2.1),
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const variantTheme = variant => {
  switch (variant) {
    case 'outline':
      return {
        bg: AppColors.transparent,
        border: AppColors.textWhite,
        text: AppColors.textWhite,
      };
    case 'social':
      return {
        bg: AppColors.socialBtnBg,
        border: AppColors.socialBtnBorder,
        text: AppColors.textWhite,
      };
    default: // primary
      return {
        bg: AppColors.textWhite,
        border: AppColors.textWhite,
        text: AppColors.black,
      };
  }
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: responsiveHeight(0.8),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
  },
  iconWrap: {
    marginRight: responsiveWidth(2.5),
  },
  label: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Button;
