import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * CustomInput — dark-theme outlined box input.
 *
 * Props:
 *  label           – small muted label above the box
 *  value / onChangeText / placeholder – standard TextInput props
 *  secureTextEntry – adds eye/eye-off toggle automatically
 *  keyboardType    – default: 'default'
 *  autoCapitalize  – default: 'sentences'
 *  multiline       – default: false
 *  editable        – default: true
 *  rightElement    – optional JSX on the right (ignored when secureTextEntry=true)
 *  style           – wrapper ViewStyle override
 *  inputStyle      – extra TextInput style
 */
const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = AppColors.white,
  secureTextEntry = false,
  keyboardType = 'default',
  rightElement,
  editable = true,
  style,
  boxStyle,
  inputStyle,
  autoCapitalize = 'sentences',
  multiline = false,
  labelOutside = false,
}) => {
  const [secure, setSecure] = useState(secureTextEntry);

  return (
    <View style={[styles.wrapper, style]}>
      {labelOutside && label ? (
        <Text style={styles.label}>{label}</Text>
      ) : null}
      <View style={[styles.box, boxStyle]}>
        <View style={styles.inputColumn}>
          {!labelOutside && label ? (
            <Text style={styles.label}>{label}</Text>
          ) : null}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secure}
            keyboardType={keyboardType}
            editable={editable}
            autoCapitalize={autoCapitalize}
            multiline={multiline}
            style={[styles.input, inputStyle]}
          />
        </View>
        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setSecure(s => !s)}
            activeOpacity={0.7}
            style={styles.iconBtn}
          >
            <Icon
              name={secure ? 'eye-off' : 'eye'}
              size={responsiveFontSize(2.2)}
              color={AppColors.textMuted}
            />
          </TouchableOpacity>
        ) : (
          rightElement || null
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: responsiveHeight(2),
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: responsiveHeight(0.75),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.2),
  },
  inputColumn: {
    flex: 1,
  },
  label: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.45),
    marginBottom: responsiveHeight(0.4),
  },
  input: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.9),
    padding: 0,
    margin: 0,
  },
  iconBtn: {
    paddingLeft: responsiveWidth(2.5),
  },
});

export default CustomInput;
