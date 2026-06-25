import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AuthLayout from '../../../components/AuthLayout';
import Button from '../../../components/Button';
import styles from './styles';

const CELL_COUNT = 6;

const EnterOTP = ({ navigation }) => {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <AuthLayout
      showBack
      title="Enter OTP"
      subtitle="We have sent you an email containing 6 digits verification code. Please enter the code to verify your identity."
      footer={
        <Button
          title="Continue"
          onPress={() => navigation.navigate('NewPassword')}
          disabled={value.length < CELL_COUNT}
        />
      }>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.cellFocused]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </AuthLayout>
  );
};

export default EnterOTP;
