import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import NormalText from './NormalText';
import BoldText from './BoldText';
import { AppColors } from '../config/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../globalFunctions/Resposive_Dimensions';

/**
 * CustomDropdown — underline-style dropdown, same visual language as CustomInput.
 *
 * Props:
 *  label       – small gray label above
 *  value       – currently selected option label string
 *  options     – [{ label: string, value: string }]
 *  onSelect    – (option) => void
 *  placeholder – shown when value is empty
 *  style       – wrapper ViewStyle override
 */
const CustomDropdown = ({
  label,
  value,
  options = [],
  onSelect,
  placeholder = 'Select...',
  style,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[styles.wrapper, style]}>
      {label ? (
        <NormalText title={label} color={AppColors.gray} size={1.55} />
      ) : null}
      <TouchableOpacity
        style={styles.row}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <NormalText
          title={value || placeholder}
          color={value ? AppColors.black : AppColors.gray}
          size={1.9}
        />
        <Icon name="chevron-down" size={responsiveFontSize(2.2)} color={AppColors.gray} />
      </TouchableOpacity>
      <View style={styles.line} />

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          {/* onStartShouldSetResponder prevents taps on sheet from closing modal */}
          <View onStartShouldSetResponder={() => true} style={styles.sheet}>
            {label ? (
              <BoldText title={label} color={AppColors.navy} size={2.2} />
            ) : null}
            <View style={styles.divider} />
            {options.map(item => (
              <TouchableOpacity
                key={item.value}
                style={styles.option}
                activeOpacity={0.7}
                onPress={() => {
                  onSelect(item);
                  setVisible(false);
                }}
              >
                <NormalText title={item.label} color={AppColors.black} size={2} />
                {value === item.label ? (
                  <Icon name="check" size={responsiveFontSize(2)} color={AppColors.navy} />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: responsiveHeight(2.5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(0.8),
  },
  line: {
    height: 1,
    backgroundColor: AppColors.inputLine,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheet: {
    backgroundColor: AppColors.white,
    borderRadius: responsiveHeight(2),
    padding: responsiveHeight(2.5),
    width: responsiveWidth(80),
  },
  divider: {
    height: 1,
    backgroundColor: AppColors.border,
    marginVertical: responsiveHeight(1.5),
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.5),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
  },
});

export default CustomDropdown;
